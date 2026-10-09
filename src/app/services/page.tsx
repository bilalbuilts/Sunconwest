import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "Construction Services Perth WA",
  description:
    "Roofing, tiling, plumbing, painting, carpentry, remodelling, home & office renovation, redesign and restoration across Perth and Western Australia.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        lead="Nine trades and services delivered by one reliable Perth team, for homes, offices, apartments and commercial buildings."
        image="/images/site-works.jpg"
        crumbs={[{ name: "Services", path: "/services" }]}
      />
      <section className="py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
