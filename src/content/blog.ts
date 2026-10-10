export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  serviceSlug: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string; // ISO
  readMins: number;
  body: Block[];
};

// Starter posts so the blog is live. Replace with your own articles.
export const posts: Post[] = [
  {
    slug: "signs-you-need-a-roof-replacement-in-perth",
    title: "7 Signs You Need a Roof Replacement in Perth",
    excerpt: "Leaks, rust and cracked tiles are obvious. Here are the quieter warning signs Perth homeowners often miss.",
    category: "Roofing",
    serviceSlug: "roofing",
    image: "/images/roofing.jpg",
    imageAlt: "Roofer inspecting a roof next to a ladder",
    author: "Suncon West Team",
    date: "2026-07-13",
    readMins: 4,
    body: [
      { type: "p", text: "Perth roofs live a tough life: intense UV, salty coastal air and sharp winter storms. Even a well-built roof wears out. Catching problems early can be the difference between a repair and a full replacement." },
      { type: "h2", text: "1. Water stains on ceilings" },
      { type: "p", text: "Brown rings or bubbling paint inside are often the first sign water is getting past the roof covering. Track them after heavy rain to find where moisture is entering." },
      { type: "h2", text: "2. Cracked, slipped or missing tiles" },
      { type: "p", text: "Individual tiles can be replaced, but widespread cracking means the tiles are ageing out and re-roofing may be more economical." },
      { type: "h2", text: "3. Rust and corrosion on metal sheets" },
      { type: "p", text: "Surface rust can sometimes be treated. Perforated sheets, rusted fixings and corroded flashings need replacing before they leak." },
      { type: "h2", text: "4. Sagging sections" },
      { type: "p", text: "A dipping roofline can point to structural issues or long-term moisture damage. Get it inspected promptly." },
      { type: "h2", text: "5. Blocked or damaged gutters" },
      { type: "p", text: "Overflowing gutters push water behind fascias and into eaves, speeding up timber decay." },
      { type: "h2", text: "6. Rising energy bills" },
      { type: "p", text: "Worn insulation and failing roof coverings let heat in during summer, forcing cooling to work harder." },
      { type: "h2", text: "7. Age" },
      { type: "p", text: "Most roofs have an expected service life, and materials differ widely. If yours is approaching the end of that window, a professional assessment gives you a clear plan." },
      { type: "p", text: "If you're unsure, request a free quote and we'll inspect, explain your options and put the price in writing." },
    ],
  },
  {
    slug: "bathroom-renovation-checklist-western-australia",
    title: "Bathroom Renovation Checklist for WA Homeowners",
    excerpt: "Plan your bathroom renovation properly: layout, waterproofing, trades, timelines and the mistakes to avoid.",
    category: "Remodelling",
    serviceSlug: "remodeling",
    image: "/images/tiling.jpg",
    imageAlt: "Modern renovated bathroom",
    author: "Suncon West Team",
    date: "2026-09-15",
    readMins: 5,
    body: [
      { type: "p", text: "A bathroom renovation involves plumbing, tiling, waterproofing, electrical, joinery and painting, all in a small footprint. Good sequencing matters more than almost anything else." },
      { type: "h2", text: "Before you start" },
      { type: "ul", items: ["Set a budget with a 10–15% contingency", "Decide whether the layout is changing", "Check whether approvals are required", "Choose fixtures and tiles before demolition"] },
      { type: "h2", text: "The usual order of work" },
      { type: "ul", items: ["Demolition and make-safe", "Plumbing and electrical rough-in", "Wall lining and waterproofing", "Tiling and grouting", "Fit-off: vanity, toilet, tapware, mirrors", "Painting and final clean"] },
      { type: "h2", text: "Common mistakes" },
      { type: "p", text: "Skipping or rushing waterproofing, ordering tiles late, and changing the layout mid-job are the most common causes of delays and blow-outs." },
      { type: "p", text: "Our team coordinates every trade, so your bathroom is delivered on one schedule with one point of contact." },
    ],
  },
  {
    slug: "how-to-choose-a-renovation-contractor",
    title: "How to Choose a Renovation Contractor in Western Australia",
    excerpt: "Licences, insurance, written quotes and references: what to check before you sign.",
    category: "Renovation",
    serviceSlug: "renovation",
    image: "/images/site-crew.jpg",
    imageAlt: "Construction crew in high-visibility vests on site",
    author: "Suncon West Team",
    date: "2026-10-01",
    readMins: 4,
    body: [
      { type: "p", text: "Choosing the right contractor is the single biggest decision in any renovation. A little due diligence up front protects your money and your home." },
      { type: "h2", text: "Check licences and insurance" },
      { type: "p", text: "Confirm the contractor holds the appropriate registration for the work and carries current public liability insurance. Ask to see the certificates." },
      { type: "h2", text: "Insist on a detailed written quote" },
      { type: "p", text: "A good quote lists scope, materials, exclusions, payment stages and timeframes. Vague quotes lead to disputes." },
      { type: "h2", text: "Ask for references and recent projects" },
      { type: "p", text: "Look for experience with projects like yours, and talk to previous clients where possible." },
      { type: "h2", text: "Communication matters" },
      { type: "p", text: "How promptly and clearly a contractor responds before the job is a strong indicator of how the project will run." },
    ],
  },
];

export const categories = Array.from(new Set(posts.map((p) => p.category)));
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const slugifyCategory = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");
