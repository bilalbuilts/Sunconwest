import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and protects your personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" image="/images/plans.jpg" crumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <section className="py-14">
        <div className="container-x prose-sw max-w-3xl">
          <p className="rounded-xl bg-sand p-4 text-sm"><strong>Draft:</strong> This policy is a starting template and must be reviewed by a qualified Australian solicitor before launch.</p>
          <h2>1. Who we are</h2>
          <p>{site.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a construction company based in Perth, Western Australia. We handle personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
          <h2>2. Information we collect</h2>
          <ul>
            <li>Contact details you provide: name, phone, email and suburb or property address</li>
            <li>Project information you submit through quote and contact forms</li>
            <li>Technical data such as IP address, browser type and pages visited (via cookies and analytics)</li>
          </ul>
          <h2>3. How we use it</h2>
          <ul>
            <li>To respond to enquiries and prepare quotes</li>
            <li>To deliver and manage construction services</li>
            <li>To improve our website and services</li>
            <li>To meet legal and insurance obligations</li>
          </ul>
          <h2>4. Cookies, analytics and advertising</h2>
          <p>We may use cookies and similar technologies for analytics and, in future, to show advertising through Google AdSense. Google and its partners may use cookies to serve ads based on your visits to this and other websites. You can manage ad personalisation at Google Ads Settings and control cookies in your browser.</p>
          <h2>5. Disclosure</h2>
          <p>We do not sell personal information. We may share it with service providers (such as email and hosting providers), subcontractors and insurers where needed to deliver our services, or where required by law.</p>
          <h2>6. Security and retention</h2>
          <p>We take reasonable steps to protect information from misuse, loss and unauthorised access, and keep it only as long as needed for the purposes above or as the law requires.</p>
          <h2>7. Access and correction</h2>
          <p>You may request access to, or correction of, your personal information by contacting us at <a href={`mailto:${site.email}`} className="font-medium text-accent">{site.email}</a>.</p>
          <h2>8. Complaints</h2>
          <p>If you have a privacy concern, contact us first. You may also contact the Office of the Australian Information Commissioner (oaic.gov.au).</p>
          <h2>9. Contact</h2>
          <p>{site.legalName}, Perth WA &middot; {site.email} &middot; {site.phone}</p>
        </div>
      </section>
    </>
  );
}
