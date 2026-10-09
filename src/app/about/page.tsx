import Image from "next/image";
import { Award, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = pageMeta({
  title: "About Suncon West PTY LTD | Perth Construction Company",
  description:
    "Learn about Suncon West PTY LTD, a Perth-based construction company delivering roofing, tiling, plumbing, painting, carpentry, renovation and restoration across WA.",
  path: "/about",
});

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Honest advice, clear pricing and no surprises." },
  { icon: Award, title: "Craftsmanship", text: "We care about finish as much as function." },
  { icon: Handshake, title: "Partnership", text: "We work with you, your designer, your strata and your insurer." },
  { icon: Sparkles, title: "Reliability", text: "We turn up, communicate and finish what we start." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Suncon West"
        lead="A Perth construction company delivering quality trade work across Western Australia."
        image="/images/site-crew.jpg"
        crumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-2 text-3xl font-semibold text-heading sm:text-4xl">Every trade, one accountable team</h2>
            <div className="prose-sw">
              <p>
                {site.legalName} is a Perth-based construction company providing roofing, tiling, plumbing, painting, carpentry, remodelling, renovation, redesign and restoration services across Western Australia.
              </p>
              <p>
                We started with a simple idea: property owners shouldn&apos;t have to chase five different tradespeople to finish one job. By bringing the trades together under a single project lead, we deliver faster, cleaner and with clearer communication.
              </p>
              <p>
                We work with homeowners, landlords, strata managers, business owners and developers on everything from a single repair to a full commercial refurbishment.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/images/plans.jpg" alt="Builder reviewing architectural plans" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold">Our mission</h2>
            <p className="mt-3 text-white/80">To deliver safe, durable and beautifully finished construction work that gives Western Australian property owners complete confidence from quote to handover.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-semibold">Our vision</h2>
            <p className="mt-3 text-white/80">To be Western Australia&apos;s most trusted all-trades construction partner for homes and commercial properties.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <h2 className="text-center text-3xl font-semibold text-heading sm:text-4xl">What we stand for</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={24} aria-hidden /></span>
                  <h3 className="mt-4 text-lg font-semibold text-heading">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="container-x max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-heading">Licences &amp; certifications</h2>
          <p className="mt-3 text-muted">
            Licence numbers, insurance details and ABN will be displayed here. Please supply them so we can publish them for customers to verify.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
