import { useEffect } from "react";

const SITE_URL = "https://dinoinitiative.com";
const DEFAULT_IMAGE = `${SITE_URL}/__l5e/assets-v1/9ca5686b-fae7-4805-b408-1640dfd2f938/social-card.jpg`;

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const setMeta = (selector: string, attr: string, name: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      (el as HTMLLinkElement).setAttribute("rel", name);
    } else {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
    }
    document.head.appendChild(el);
  }
  if (el.tagName === "LINK") {
    (el as HTMLLinkElement).href = content;
  } else {
    (el as HTMLMetaElement).content = content;
  }
};

const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE, type = "website", jsonLd }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Dino Initiative") ? title : `${title} — Dino Initiative`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('link[rel="canonical"]', "rel", "canonical", url);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    const added: HTMLScriptElement[] = [];
    schemas.forEach((schema) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(schema);
      s.dataset.seo = "1";
      document.head.appendChild(s);
      added.push(s);
    });
    return () => {
      added.forEach((s) => s.remove());
    };
  }, [fullTitle, description, url, image, type, jsonLd]);

  return null;
};

export default SEO;
export { SITE_URL };
