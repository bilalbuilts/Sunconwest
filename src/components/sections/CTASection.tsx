import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CTASection({
  title = "Ready to start your project?",
  text = "Tell us what you need and we'll send a clear, written quote. Free and with no obligation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white">
      <Image src="/images/site-works.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/get-quote" className="btn btn-accent">Get a Free Quote</Link>
          <a href={site.phoneHref} className="btn btn-outline">
            <Phone size={18} aria-hidden /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
