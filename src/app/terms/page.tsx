import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description: `Website terms of use and general service terms for ${site.legalName}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" image="/images/plans.jpg" crumbs={[{ name: "Terms & Conditions", path: "/terms" }]} />
      <section className="py-14">
        <div className="container-x prose-sw max-w-3xl">
          <p className="rounded-xl bg-sand p-4 text-sm"><strong>Draft:</strong> These terms are a starting template and must be reviewed by a qualified Australian solicitor before launch.</p>
          <h2>1. Using this website</h2>
          <p>By using this website you agree to these terms. Content is provided for general information and does not constitute professional advice or a binding offer.</p>
          <h2>2. Quotes</h2>
          <p>Quotes are estimates based on information supplied and any site inspection. Written quotes state their validity period. Variations to scope may affect price and timeframe and will be agreed in writing.</p>
          <h2>3. Services and contracts</h2>
          <p>Construction work is carried out under a written agreement or accepted quote that sets out scope, price, payment terms and warranty. Where those documents conflict with this page, they prevail.</p>
          <h2>4. Payments</h2>
          <p>Payment terms and progress payment schedules are set out in your quote or contract.</p>
          <h2>5. Warranty</h2>
          <p>We stand behind our workmanship. Warranties are as stated in your contract and subject to Australian Consumer Law, which cannot be excluded.</p>
          <h2>6. Intellectual property</h2>
          <p>Website content, logos, text and images are owned by or licensed to {site.legalName}. Do not reproduce them without permission.</p>
          <h2>7. Limitation of liability</h2>
          <p>To the extent permitted by law, we are not liable for loss arising from use of, or reliance on, information on this website.</p>
          <h2>8. Governing law</h2>
          <p>These terms are governed by the laws of Western Australia, and the courts of Western Australia have jurisdiction.</p>
          <h2>9. Contact</h2>
          <p>{site.legalName} &middot; {site.email} &middot; {site.phone}</p>
        </div>
      </section>
    </>
  );
}
