import { faqGroups } from "@/content/faqs";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "Frequently Asked Questions",
  description: "Answers about quotes, pricing, process, warranty and emergency repairs from Suncon West PTY LTD, Perth.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        lead="Everything you need to know before you start your project."
        image="/images/living-interior.jpg"
        crumbs={[{ name: "FAQ", path: "/faq" }]}
      />
      <section className="py-16">
        <div className="container-x max-w-4xl space-y-12">
          {faqGroups.map((g) => (
            <div key={g.category}>
              <h2 className="mb-4 text-2xl font-bold text-heading">{g.category}</h2>
              <FAQAccordion items={g.items} />
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Still have a question?" text="WhatsApp us or send a message and we'll get back to you within one business day." />
    </>
  );
}
