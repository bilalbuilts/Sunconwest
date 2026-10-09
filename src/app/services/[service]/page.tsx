import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { getService, services } from "@/content/services";
import { posts } from "@/content/blog";
import { absUrl, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/sections/ServiceCard";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[service]">): Promise<Metadata> {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return pageMeta({
    title: `${s.name} Services Perth WA`,
    description: `${s.short} ${site.legalName} - free quotes across Perth and Western Australia.`,
    path: `/services/${s.slug}`,
    image: s.image,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[service]">) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();

  const related = s.related.map((r) => getService(r)).filter((x) => x !== undefined);
  const articles = posts.filter((p) => p.serviceSlug === s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={`${s.name} in Perth & Western Australia`}
        lead={s.short}
        image={s.image}
        imageAlt={s.imageAlt}
        crumbs={[{ name: "Services", path: "/services" }, { name: s.name, path: `/services/${s.slug}` }]}
      >
        <Link href={`/get-quote?service=${s.slug}`} className="btn btn-accent mt-8">Get a {s.name} Quote</Link>
      </PageHero>

      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-heading">About our {s.name.toLowerCase()} services</h2>
            <div className="prose-sw">
              {s.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-semibold text-heading">What we cover</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.covers.map((c) => (
                <li key={c} className="flex items-start gap-2 font-semibold text-ink">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden /> {c}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-heading">Why choose Suncon West</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {s.benefits.map((b) => (
                <div key={b.title} className="rounded-2xl border border-line bg-sand p-5">
                  <h3 className="font-semibold text-heading">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" />
            </div>
            <div className="rounded-2xl bg-navy p-6 text-white">
              <h2 className="text-xl font-semibold">Request a {s.name.toLowerCase()} quote</h2>
              <p className="mt-2 text-sm text-white/75">Free, written and no obligation.</p>
              <Link href={`/get-quote?service=${s.slug}`} className="btn btn-accent mt-5 w-full">Get a Quote</Link>
              <a href={site.phoneHref} className="mt-3 block text-center text-sm font-semibold text-white/85 hover:text-accent">
                or call {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl font-semibold text-heading">{s.name} FAQs</h2>
          <div className="mt-6">
            <FAQAccordion items={s.faqs} />
          </div>
        </div>
      </section>

      {articles.length > 0 && (
        <section className="py-16">
          <div className="container-x">
            <h2 className="text-2xl font-semibold text-heading">Helpful guides</h2>
            <ul className="mt-5 grid gap-4 md:grid-cols-3">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} className="block rounded-2xl border border-line p-5 font-medium text-heading hover:border-accent">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="pb-16">
        <div className="container-x">
          <h2 className="text-2xl font-semibold text-heading">Related services</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${s.name} - ${site.legalName}`,
          serviceType: s.name,
          description: s.short,
          provider: { "@type": "GeneralContractor", name: site.legalName, url: absUrl("/") },
          areaServed: { "@type": "State", name: "Western Australia" },
        }}
      />
    </>
  );
}
