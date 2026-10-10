import Image from "next/image";
import { Users } from "lucide-react";
import { initials, team } from "@/content/team";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = pageMeta({
  title: "Our Team",
  description:
    "Meet the Suncon West team: the managers, supervisors and tradespeople behind our roofing, tiling, plumbing, painting, carpentry and renovation work across Western Australia.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        lead="The people behind every Suncon West project: managers, supervisors and tradespeople working as one team."
        image="/images/site-crew.jpg"
        imageAlt="Construction team in high-visibility vests on site"
        crumbs={[{ name: "Team", path: "/team" }]}
      />

      <section className="bg-sand py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Meet the people</p>
            <h2 className="mt-2 text-3xl font-bold text-heading sm:text-4xl">Our team</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.id} delay={(i % 4) * 0.06}>
                <li className="h-full list-none rounded-2xl border border-line bg-surface p-6 text-center">
                  {m.photo ? (
                    <Image src={m.photo} alt={m.name} width={96} height={96} className="mx-auto h-24 w-24 rounded-full object-cover" />
                  ) : (
                    <span aria-hidden className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-accent/15 text-2xl font-bold text-accent">
                      {initials(m.name)}
                    </span>
                  )}
                  <h3 className="mt-4 text-lg font-bold text-heading">{m.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-accent">{m.role}</p>
                  {m.bio && <p className="mt-3 text-sm text-muted">{m.bio}</p>}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent"><Users size={26} aria-hidden /></span>
          <h2 className="text-2xl font-bold text-heading">Want to join Suncon West?</h2>
          <p className="text-muted">We&apos;re always interested in skilled tradespeople and supervisors. Send your details to our team.</p>
          <a href="mailto:hr@sunconwest.com" className="btn btn-navy">hr@sunconwest.com</a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
