// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blocodenotas.com.pt",
  build: {
    // Emit dist/privacidade.html, not dist/privacidade/index.html. Cloudflare's
    // `html_handling = "auto-trailing-slash"` serves that file at the
    // extensionless /privacidade, which is the canonical URL (see wrangler.toml).
    format: "file",
    // The old pages shipped their CSS inline in <head>; keep that so the
    // first paint stays free of a render-blocking stylesheet request.
    inlineStylesheets: "always",
  },
  vite: {
    // Lightning CSS rewrites `backdrop-filter` down to the -webkit- alias
    // alone, which loses the sticky header's blur on Firefox. esbuild keeps
    // both declarations, for a few hundred bytes more before gzip.
    css: { transformer: "postcss" },
    build: { cssMinify: "esbuild" },
  },
});
