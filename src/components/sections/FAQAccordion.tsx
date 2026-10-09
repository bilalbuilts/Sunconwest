import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/seo";

// Native <details> keeps this a server component and fully accessible.
// The same `items` feed both the UI and FAQPage schema, so they cannot drift apart.
export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      <div className="divide-y divide-line rounded-2xl border border-line bg-white">
        {items.map((item) => (
          <details key={item.q} className="group p-5 open:bg-sand/60">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy">
              {item.q}
              <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={20} aria-hidden />
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(items)} />
    </>
  );
}
