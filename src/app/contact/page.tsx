import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = pageMeta({
  title: "Contact Us",
  description: "Contact Suncon West PTY LTD in Perth, Western Australia by phone, email or online form for construction, renovation and repair enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Location", value: "Perth, Western Australia" },
    { icon: Clock, label: "Hours", value: site.hours },
  ];
  return (
    <>
      <PageHero
        title="Contact Us"
        lead="Questions, a quote, or an urgent repair? Get in touch and we'll respond promptly."
        image="/images/site-works.jpg"
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-semibold text-heading">Talk to our team</h2>
            <ul className="mt-6 space-y-5">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={22} aria-hidden /></span>
                  <div>
                    <p className="text-sm font-medium text-muted">{label}</p>
                    {href ? <a href={href} className="font-semibold text-heading hover:text-accent">{value}</a> : <p className="font-semibold text-heading">{value}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-sand p-6">
              <p className="font-semibold text-heading">Emergency repairs</p>
              <p className="mt-1 text-sm text-muted">For storm, leak or water damage, call us directly for the fastest response.</p>
            </div>
            <div className="mt-6 grid h-56 place-items-center rounded-2xl border border-dashed border-line bg-sand text-center text-sm text-muted">
              Map embed goes here once the office address is confirmed.
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
