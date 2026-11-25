// Scroll reveal: blocks below the fold rise in once when they come into view.
// Blocks already on screen when this runs are left alone, so nothing that has
// been painted disappears. Groups of siblings (cards, list items) stagger.

const GROUPS = [
  ".section-head",
  ".svc-card",
  ".why-sticky",
  ".why-list > li",
  ".gallery > button",
  ".testi-card",
  ".home-posts > li",
  ".faq-item",
  ".contact-row",
  ".contact-form",
  ".map-embed",
  ".post-feature",
  ".post-grid > li",
  ".related li",
  ".svc-points > li",
  ".svc-others > li",
];
const STAGGER = 0.06; // seconds between siblings
const MAX_STEPS = 5; // later siblings share the last delay

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.dataset.reveal = "shown";
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px" },
  );

  const fold = window.innerHeight;
  for (const el of document.querySelectorAll(GROUPS.join(","))) {
    if (el.getBoundingClientRect().top < fold) continue;
    const siblings = [...el.parentElement.children];
    const step = Math.min(siblings.indexOf(el), MAX_STEPS);
    el.style.setProperty("--reveal-delay", `${step * STAGGER}s`);
    el.dataset.reveal = "hidden";
    observer.observe(el);
  }
}
