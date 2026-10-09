import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata = pageMeta({
  title: "Get a Free Quote",
  description: "Request a free, no-obligation written quote for roofing, tiling, plumbing, painting, carpentry, renovation or restoration in Perth and Western Australia.",
  path: "/get-quote",
});

export default function GetQuotePage() {
  return (
    <>
      <PageHero
        title="Get a Free Quote"
        lead="Tell us about your project in three quick steps. We'll reply within one business day."
        image="/images/hero-modern-home.jpg"
        crumbs={[{ name: "Get a Quote", path: "/get-quote" }]}
      />
      <section className="bg-sand py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-surface" />}>
            <QuoteForm />
          </Suspense>
          <aside className="space-y-6 lg:pt-4">
            <h2 className="text-2xl font-bold text-heading">What happens next?</h2>
            <ul className="space-y-4">
              {[
                "We review your request and contact you within one business day.",
                "We arrange a site visit if one is needed to price accurately.",
                "You receive a clear, written quote with scope and timeline.",
                "No obligation. You decide if and when to proceed.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-ink">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={20} aria-hidden /> {t}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="font-semibold">Prefer to talk?</p>
              <a href={site.phoneHref} className="mt-1 block text-xl font-semibold text-accent">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-white/80 hover:text-white">{site.email}</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
