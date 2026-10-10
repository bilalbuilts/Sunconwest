import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/seo";
import { services } from "@/content/services";
import { categories, posts, slugifyCategory } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["/", "/about", "/team", "/services", "/blog", "/faq", "/contact", "/get-quote", "/privacy-policy", "/terms"];
  return [
    ...fixed.map((p) => ({ url: absUrl(p), priority: p === "/" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: absUrl(`/services/${s.slug}`), priority: 0.9 })),
    ...categories.map((c) => ({ url: absUrl(`/blog/category/${slugifyCategory(c)}`), priority: 0.5 })),
    ...posts.map((p) => ({ url: absUrl(`/blog/${p.slug}`), lastModified: p.date, priority: 0.6 })),
  ];
}
