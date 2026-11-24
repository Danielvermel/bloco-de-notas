// Builds src/data/street-map.json, the geometry behind src/components/StreetMap.astro,
// from OpenStreetMap (© OpenStreetMap contributors, ODbL).
//
//   node scripts/build-street-map.mjs [path/to/overpass.json]
//
// With no argument it queries the Overpass API. Coordinates are projected to
// metres around the centre's door, so (0, 0) is the pin and 1 unit = 1 m.
import { readFile, writeFile } from "node:fs/promises";

const CENTER = { lat: 41.1065368, lng: -8.6017534 }; // site.lat / site.lng
const HALF_W = 520; // metres kept either side of the door
const HALF_H = 360;
const BBOX = "41.1030,-8.6085,41.1100,-8.5950";

const QUERY = `[out:json][timeout:60];(
way["highway"](${BBOX});way["building"](${BBOX});way["leisure"](${BBOX});
way["landuse"](${BBOX});way["amenity"="school"](${BBOX});
node["addr:housenumber"](${BBOX});node["highway"="bus_stop"](${BBOX});
);out body;>;out skel qt;`;

async function load() {
  const file = process.argv[2];
  if (file) return JSON.parse(await readFile(file, "utf8"));
  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: { "User-Agent": "street-map-builder/1.0" },
    body: new URLSearchParams({ data: QUERY }),
  });
  if (!res.ok) throw new Error(`Overpass answered ${res.status}`);
  return res.json();
}

const kx = Math.cos((CENTER.lat * Math.PI) / 180) * 111320;
const ky = 110574;
const project = (n) => [(n.lon - CENTER.lng) * kx, -(n.lat - CENTER.lat) * ky];
const r = (v) => Math.round(v * 10) / 10;
const inView = ([x, y], pad = 0) => Math.abs(x) <= HALF_W + pad && Math.abs(y) <= HALF_H + pad;
const toPath = (pts, closed) =>
  "M" + pts.map(([x, y]) => `${r(x)} ${r(y)}`).join("L") + (closed ? "Z" : "");
const length = (pts) => pts.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0);

const ROAD_CLASS = {
  motorway: "motorway", motorway_link: "motorway", trunk: "primary", trunk_link: "primary",
  primary: "primary", primary_link: "primary", secondary: "secondary", secondary_link: "secondary",
  tertiary: "tertiary", tertiary_link: "tertiary", residential: "minor", unclassified: "minor",
  living_street: "minor", service: "service", pedestrian: "path", footway: "path", steps: "path",
  path: "path", track: "service",
};
const GREEN = new Set(["park", "garden", "playground", "pitch", "grass", "recreation_ground", "village_green"]);

const data = await load();
const nodes = new Map();
for (const e of data.elements) if (e.type === "node") nodes.set(e.id, e);

const out = { buildings: [], green: [], school: [], roads: {}, labels: [], numbers: [], stops: [] };
const byName = new Map();

for (const e of data.elements) {
  if (e.type !== "way" || !e.tags) continue;
  const pts = e.nodes.map((id) => nodes.get(id)).filter(Boolean).map(project);
  if (pts.length < 2 || !pts.some((p) => inView(p, 120))) continue;
  const t = e.tags;
  if (t.building) {
    out.buildings.push(toPath(pts, true));
    if (t["addr:housenumber"]) {
      const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length;
      const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
      if (inView([cx, cy])) out.numbers.push([r(cx), r(cy), t["addr:housenumber"]]);
    }
  } else if (t.amenity === "school") out.school.push(toPath(pts, true));
  else if (GREEN.has(t.leisure) || GREEN.has(t.landuse)) out.green.push(toPath(pts, true));
  else if (t.highway && ROAD_CLASS[t.highway]) {
    const cls = ROAD_CLASS[t.highway];
    (out.roads[cls] ??= []).push(toPath(pts, false));
    if (t.name && cls !== "path" && cls !== "service") {
      const list = byName.get(t.name) ?? [];
      list.push(pts.filter((p) => inView(p)));
      byName.set(t.name, list);
    }
  }
}

for (const e of data.elements) {
  if (e.type !== "node" || !e.tags) continue;
  const p = project(e);
  if (!inView(p)) continue;
  if (e.tags.highway === "bus_stop") out.stops.push([r(p[0]), r(p[1]), e.tags.name ?? ""]);
  else if (e.tags["addr:housenumber"]) out.numbers.push([r(p[0]), r(p[1]), e.tags["addr:housenumber"]]);
}

// One label per street, on its longest piece inside the view, written left to right.
for (const [name, pieces] of byName) {
  const best = pieces.filter((p) => p.length > 1).sort((a, b) => length(b) - length(a))[0];
  if (!best || length(best) < name.length * 6.5) continue;
  const pts = best[0][0] <= best.at(-1)[0] ? best : [...best].reverse();
  out.labels.push({ name, d: toPath(pts, false) });
}

await writeFile(new URL("../src/data/street-map.json", import.meta.url), JSON.stringify(out));
console.log(
  `buildings ${out.buildings.length}, roads ${Object.values(out.roads).flat().length}, ` +
    `labels ${out.labels.length}, numbers ${out.numbers.length}, stops ${out.stops.length}`,
);
