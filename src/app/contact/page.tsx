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
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=11&output=embed`;

  return (
    <>
      <PageHero
        title="Contact Us"
        lead="Questions, a quote, or an urgent repair? Get in touch and we'll respond promptly."
        image="/images/site-works.jpg"
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <section className="py-16">
        {/* Both columns stretch to the same height: the map grows to fill the left column and the message box grows to fill the form */}
        <div className="container-x grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-heading">Talk to our team</h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={22} aria-hidden /></span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-muted">{label}</p>
                    {href ? (
                      <a href={href} className="break-words font-semibold text-heading hover:text-accent">{value}</a>
                    ) : (
                      <p className="font-semibold text-heading">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 min-h-72 flex-1 overflow-hidden rounded-3xl border border-line bg-sand">
              <iframe
                title="Suncon West service area map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-72 w-full border-0"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
