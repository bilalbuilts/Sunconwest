import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-navy-deep lg:hidden">
      <a href={site.phoneHref} className="flex items-center justify-center gap-2 py-3.5 font-medium text-white">
        <Phone size={18} aria-hidden /> Call Now
      </a>
      <Link href="/get-quote" className="flex items-center justify-center gap-2 bg-accent py-3.5 font-medium text-white">
        <FileText size={18} aria-hidden /> Get a Quote
      </Link>
    </div>
  );
}
