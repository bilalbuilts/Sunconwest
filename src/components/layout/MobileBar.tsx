import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-navy-deep shadow-[0_-6px_20px_rgb(0_0_0/0.15)] lg:hidden">
      <a href={site.phoneHref} className="flex items-center justify-center gap-2 py-3.5 font-bold text-white">
        <Phone size={18} aria-hidden /> Call Now
      </a>
      <Link href="/get-quote" className="flex items-center justify-center gap-2 bg-accent py-3.5 font-bold text-white">
        <FileText size={18} aria-hidden /> Get a Quote
      </Link>
    </div>
  );
}
