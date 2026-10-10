import type { Metadata } from "next";
import { site } from "./site";

export const absUrl = (path = "/") => new URL(path, site.url).toString();

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const image = opts.image ?? "/images/hero-modern-home.jpg";
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      siteName: site.legalName,
      locale: "en_AU",
      type: opts.type ?? "website",
      images: [{ url: image }],
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: [image] },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  name: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description: site.description,
  image: absUrl("/images/hero-modern-home.jpg"),
  logo: absUrl("/images/Sunconwest-Logo.png"),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  openingHours: "Mo-Fr 07:00-17:00",
};

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});

export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absUrl(c.path),
  })),
});
