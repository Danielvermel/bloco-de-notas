import { getCollection } from "astro:content";

/**
 * Published articles, newest first. An article dated in the future stays
 * hidden until a build runs on or after its date, so articles can be written
 * ahead and go live with the next deploy.
 */
export async function getPublishedPosts() {
  const now = new Date();
  const posts = await getCollection("blog", ({ data }) => data.date <= now);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const dateFormat = new Intl.DateTimeFormat("pt-PT", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Lisbon",
});

export const formatDate = (date) => dateFormat.format(date);

/** Minutes to read, at ~200 words a minute, from the raw Markdown. */
export function readingTime(markdown = "") {
  const words = markdown
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`\[\]()!-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
