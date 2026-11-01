import { site } from "../data/site.js";
import { getPublishedPosts } from "../data/blog.js";

/** Built from the published articles, so a new article lands here on its own. */
export async function GET() {
  const posts = await getPublishedPosts();
  const entry = (loc, changefreq, priority, lastmod) =>
    `  <url>\n    <loc>${loc}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""}    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  const urls = [
    entry(`${site.url}/`, "monthly", "1.0"),
    entry(`${site.url}/blog`, "weekly", "0.8", posts[0]?.data.date.toISOString().slice(0, 10)),
    ...posts.map((p) => entry(`${site.url}/blog/${p.id}`, "yearly", "0.6", p.data.date.toISOString().slice(0, 10))),
    entry(`${site.url}/privacidade`, "yearly", "0.3"),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
