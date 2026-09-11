// Lightweight per-page SEO helper. Replaces the SSR meta head that the
// previous framework injected at request time. Page components call
// setPageMeta(...) on every render so titles/descriptions stay in sync.
export function setPageMeta({ title, description }: { title: string; description?: string }) {
  document.title = title;
  if (description) {
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:description", description);
  }
  setMetaTag("property", "og:title", title);
}

function setMetaTag(attrName: "name" | "property", attrValue: string, content: string) {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let tag = document.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
