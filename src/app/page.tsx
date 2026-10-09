import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, HardHat, Hammer, KeyRound, MapPin, ShieldCheck, Users } from "lucide-react";
import { services } from "@/content/services";
import { homeFaqs } from "@/content/faqs";
import { posts } from "@/content/blog";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "Suncon West PTY LTD | Construction, Roofing & Renovation Perth WA",
  description:
    "Perth construction company offering roofing, tiling, plumbing, painting, carpentry, remodelling, renovation, redesign and restoration across Western Australia. Free quotes.",
  path: "/",
});

const why = [
  { icon: Users, title: "One team, every trade", text: "Roofing to restoration under one roof means fewer handovers and no finger-pointing." },
  { icon: ShieldCheck, title: "Quality you can inspect", text: "Prepared surfaces, correct waterproofing and clean finishes on every job." },
  { icon: ClipboardList, title: "Clear written quotes", text: "Scope, materials and price in writing before work begins." },
  { icon: MapPin, title: "Local to Western Australia", text: "We know WA's climate, regulations and suppliers." },
];

const process = [
  { icon: ClipboardList, title: "Enquire", text: "Send a quote request or call us." },
  { icon: HardHat, title: "Site visit & quote", text: "We inspect, scope and price the work." },
  { icon: Hammer, title: "Build", text: "Our trades deliver, with regular updates." },
  { icon: KeyRound, title: "Handover", text: "Final walk-through and aftercare." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <Image
          src="/images/hero-modern-home.jpg"
          alt="Modern Australian home surrounded by gum trees at dusk"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
        <div className="container-x py-24 sm:py-32 lg:py-40">
          <p className="eyebrow">Suncon West PTY LTD &middot; Perth, WA</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Construction &amp; renovation, <span className="text-accent">done properly</span> across Western Australia.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Roofing, tiling, plumbing, painting, carpentry, remodelling and restoration for homes, offices, apartments and commercial buildings.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-quote" className="btn btn-accent">Get a Free Quote <ArrowRight size={18} aria-hidden /></Link>
            <Link href="/services" className="btn btn-outline">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-line bg-sand">
        <ul className="container-x grid grid-cols-2 gap-4 py-6 text-center text-sm font-bold text-navy md:grid-cols-4">
          {["9 trades & services", "Homes to commercial", "Free written quotes", "Perth & WA-wide"].map((t) => (
            <li key={t} className="flex items-center justify-center gap-2">
              <CheckCircle2 size={18} className="text-accent" aria-hidden /> {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Our construction services</h2>
            <p className="mt-3 text-muted">From a single repair to a complete commercial fit-out, we handle the whole job.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy py-20 text-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Why Suncon West</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">A builder that treats your project like its own</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {why.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                    <Icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-3 font-extrabold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/images/site-crew.jpg" alt="Construction crew in high-vis on a Perth building site" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-accent px-6 py-4 shadow-xl sm:-left-8">
              <p className="text-3xl font-extrabold">Free</p>
              <p className="text-sm font-semibold">written quotes</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project gallery */}
      <section className="py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Inspiration</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Spaces we build and transform</h2>
          </Reveal>
          <div className="mt-10 grid auto-rows-[14rem] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[15rem]">
            {[
              { src: "/images/modern-facade.jpg", alt: "Contemporary timber-clad Australian home", cls: "col-span-2 row-span-2" },
              { src: "/images/living-interior.jpg", alt: "Open-plan living room", cls: "" },
              { src: "/images/remodeling.jpg", alt: "Remodelled kitchen", cls: "" },
              { src: "/images/office-fitout.jpg", alt: "Commercial office fit-out", cls: "col-span-2" },
              { src: "/images/pool-residence.jpg", alt: "Modern residence with pool", cls: "" },
              { src: "/images/commercial-cranes.jpg", alt: "Commercial construction with cranes", cls: "" },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 0.05} className={`relative overflow-hidden rounded-2xl ${g.cls}`}>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition duration-500 hover:scale-105" />
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted">Images are illustrative. Real Suncon West project photos will be added.</p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">From enquiry to handover in four steps</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <li className="relative h-full rounded-2xl bg-white p-6 shadow-sm">
                  <span className="absolute right-5 top-4 text-5xl font-black text-navy/10">{i + 1}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-white"><Icon size={22} aria-hidden /></span>
                  <h3 className="mt-4 text-lg font-extrabold text-navy">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Questions homeowners ask us</h2>
            <p className="mt-3 text-muted">Quick answers about quotes, process and warranty.</p>
            <Link href="/faq" className="btn btn-navy mt-6">See all FAQs</Link>
          </Reveal>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-sand py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Advice</p>
              <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">From the blog</h2>
            </div>
            <Link href="/blog" className="hidden items-center gap-1 font-bold text-accent sm:flex">All articles <ArrowRight size={16} aria-hidden /></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">{p.category}</p>
                  <h3 className="mt-2 text-lg font-extrabold leading-snug text-navy">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16">
        <div className="container-x text-center">
          <h2 className="text-2xl font-extrabold text-navy">Serving Perth and Western Australia</h2>
          <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2">
            {site.serviceAreas.map((a) => (
              <li key={a} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-navy">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
