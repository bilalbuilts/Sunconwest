import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function PageHero({
  title,
  lead,
  image,
  imageAlt = "",
  crumbs,
  children,
}: {
  title: string;
  lead?: string;
  image: string;
  imageAlt?: string;
  crumbs: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
      <div className="container-x py-16 sm:py-24">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-lg text-white/85">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
