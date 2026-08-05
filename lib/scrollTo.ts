/**
 * Native replacement for gatsby-plugin-smoothscroll's `scrollTo(selector)`.
 * Smooth-scrolls to the element matching the given CSS selector.
 */
export default function scrollTo(selector: string) {
  if (typeof document === "undefined") return;
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
