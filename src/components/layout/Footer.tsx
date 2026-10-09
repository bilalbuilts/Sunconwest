import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">{site.tagline} Roofing, tiling, plumbing, painting, carpentry and more, across Western Australia.</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-accent" aria-hidden />
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-accent" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-accent" aria-hidden /> Perth, Western Australia
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-base font-extrabold text-white">Services</h2>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-base font-extrabold text-white">Company</h2>
          <ul className="space-y-2 text-sm">
            {[
              ["About Us", "/about"],
              ["Get a Quote", "/get-quote"],
              ["Contact Us", "/contact"],
              ["Blog", "/blog"],
              ["FAQ", "/faq"],
              ["Privacy Policy", "/privacy-policy"],
              ["Terms & Conditions", "/terms"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-accent">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-base font-extrabold text-white">Service areas</h2>
          <ul className="flex flex-wrap gap-2 text-xs">
            {site.serviceAreas.map((a) => (
              <li key={a} className="rounded-full border border-white/20 px-3 py-1">{a}</li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-white/60">
            {site.abn ? `ABN ${site.abn}. ` : ""}
            {site.licence ? `Licence ${site.licence}.` : ""}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>&copy; {year} {site.legalName}. All rights reserved.</p>
          <p>Perth, Western Australia</p>
        </div>
      </div>
    </footer>
  );
}
