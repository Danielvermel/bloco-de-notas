import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Blog articles: one Markdown file per article in src/content/blog/.
 * The file name is the URL (/blog/<file-name>). Every article carries its
 * sources and the credit for its photo, and both are rendered on the page.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    date: z.coerce.date(),
    keyword: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageCredit: z.object({
      author: z.string(),
      license: z.string(),
      licenseUrl: z.string().url(),
      sourceUrl: z.string().url(),
    }),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .min(2),
  }),
});

export const collections = { blog };
