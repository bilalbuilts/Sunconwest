export type FaqGroup = { category: string; items: { q: string; a: string }[] };

// Starter FAQs. Replace/extend with your own written answers.
export const faqGroups: FaqGroup[] = [
  {
    category: "General",
    items: [
      { q: "What areas of Western Australia do you service?", a: "We are based in Perth and service the metropolitan area plus regional centres across WA, including Mandurah, Bunbury and Busselton. Contact us if you're further out and we'll confirm availability." },
      { q: "Do you work on both residential and commercial projects?", a: "Yes. We work on homes, apartments, offices, retail premises and larger commercial buildings such as shopping centres." },
      { q: "Are you licensed and insured?", a: "Suncon West PTY LTD operates with the licences and insurances required for the work we carry out. Ask us for current certificates when you request a quote." },
    ],
  },
  {
    category: "Quotes & Pricing",
    items: [
      { q: "How do I get a quote?", a: "Use our Get a Quote form or WhatsApp us. We'll talk through your project, arrange a site visit if needed, and send a written quote." },
      { q: "Is the quote free?", a: "Yes, our standard quotes are free and come with no obligation." },
      { q: "What affects the cost of my project?", a: "Size, access, materials, existing condition, approvals and timing. Your written quote itemises the scope so you can see where the cost sits." },
    ],
  },
  {
    category: "Process",
    items: [
      { q: "What happens after I submit a quote request?", a: "We review the details, contact you within one business day to clarify scope, book a site visit if required, and issue a written quote." },
      { q: "Can you manage multiple trades on one job?", a: "Yes. A single project lead coordinates roofing, tiling, plumbing, painting, carpentry and other trades so you deal with one team." },
      { q: "Do you help with council approvals?", a: "Where approvals are needed we can coordinate drawings and documentation. Requirements vary by local government area and project type." },
    ],
  },
  {
    category: "Warranty & Aftercare",
    items: [
      { q: "Do you offer a warranty on your work?", a: "We stand behind our workmanship. Warranty terms depend on the trade and materials, and are confirmed in your written quote." },
      { q: "What if something isn't right after handover?", a: "Contact us straight away. We inspect and resolve genuine defects promptly." },
    ],
  },
  {
    category: "Emergencies",
    items: [
      { q: "Do you handle emergency repairs?", a: "Yes. For storm, leak or water damage we prioritise make-safe works. Message us directly on WhatsApp for the fastest response." },
    ],
  },
];

export const homeFaqs = faqGroups.flatMap((g) => g.items).slice(0, 6);
