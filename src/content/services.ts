export type Service = {
  slug: string;
  name: string;
  short: string;
  image: string;
  imageAlt: string;
  intro: string[];
  covers: string[];
  benefits: { title: string; text: string }[];
  keywords: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

// NOTE: copy below is a professional first draft. Replace with your own written content later.
export const services: Service[] = [
  {
    slug: "roofing",
    name: "Roofing",
    short: "Repairs, re-roofing, restoration and new roofs for homes, offices and large commercial buildings.",
    image: "/images/roofing.jpg",
    imageAlt: "Roofing contractor repairing a residential roof in Western Australia",
    intro: [
      "Western Australia's sun, salt air and summer storms are hard on roofs. Suncon West supplies and installs roofing that is built to cope with Perth's climate, from a single leaking tile to a full commercial re-roof.",
      "We work on houses, townhouses, apartment complexes, offices, warehouses and shopping centres, and we manage the job from first inspection to final clean-up.",
    ],
    covers: ["Roof repairs & leak detection", "Re-roofing & new roofs", "Colorbond & metal roofing", "Tile roofing & re-bedding", "Gutters, fascia & downpipes", "Roof restoration & coatings", "Commercial & industrial roofing", "Emergency storm repairs"],
    benefits: [
      { title: "Built for WA conditions", text: "Materials and fixings chosen for UV, coastal salt and heavy winter rain." },
      { title: "Residential to commercial", text: "One team that handles a family home or a multi-level commercial roof." },
      { title: "Clear, written quotes", text: "You know the scope, materials and price before work starts." },
    ],
    keywords: ["roof repairs Perth", "roof restoration Perth", "commercial roofing Western Australia"],
    faqs: [
      { q: "How do I know if my roof needs repair or replacement?", a: "Common signs include leaks after rain, cracked or slipped tiles, rusted sheets, sagging sections and rising energy bills. A site inspection lets us advise whether a repair or full replacement is the better value." },
      { q: "Do you handle emergency storm damage?", a: "Yes. We can make the roof watertight quickly, then quote the permanent repair and help with documentation for your insurer." },
    ],
    related: ["restoration", "carpentry", "renovation"],
  },
  {
    slug: "tiling",
    name: "Tiling",
    short: "Precision floor, wall, bathroom, kitchen and outdoor tiling with proper waterproofing.",
    image: "/images/tiling.jpg",
    imageAlt: "Modern tiled bathroom with freestanding bath",
    intro: [
      "Good tiling is 80% preparation. We level, waterproof and set every substrate correctly so your tiles stay flat, sealed and good-looking for years.",
      "From bathroom and kitchen splashbacks to large-format commercial floors and outdoor entertaining areas, our tilers deliver straight lines, even grout and clean finishes.",
    ],
    covers: ["Bathroom & ensuite tiling", "Kitchen splashbacks", "Floor tiling (indoor & outdoor)", "Large-format & porcelain tiles", "Waterproofing & screeding", "Tile & grout repair", "Commercial tiling", "Pool surrounds & patios"],
    benefits: [
      { title: "Waterproofed properly", text: "Wet areas are membrane-sealed to Australian Standards before any tile goes down." },
      { title: "Clean, precise finish", text: "Consistent grout lines, tight cuts and levelled surfaces." },
      { title: "Any scale", text: "Single rooms through to retail and office floors." },
    ],
    keywords: ["tiler Perth", "bathroom tiling Perth", "floor tiling Western Australia"],
    faqs: [
      { q: "Can you tile over existing tiles?", a: "Sometimes, if the existing surface is sound, level and well bonded. We assess each job; in wet areas, removal and re-waterproofing is usually the safer option." },
      { q: "How long does a bathroom retile take?", a: "A standard bathroom typically takes 5–10 working days including demolition, waterproofing cure times and grouting." },
    ],
    related: ["plumbing", "remodeling", "renovation"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    short: "Maintenance, fit-outs, hot water, drainage and full plumbing for renovations and new builds.",
    image: "/images/plumbing.jpg",
    imageAlt: "Commercial plumbing pipework on a brick wall",
    intro: [
      "Our plumbing team covers everything from fixing a leaking tap to roughing-in a complete new bathroom or commercial fit-out.",
      "We work alongside our tilers, carpenters and builders, so plumbing is coordinated with the rest of your project rather than becoming a bottleneck.",
    ],
    covers: ["Leak detection & repairs", "Hot water systems", "Blocked drains & drainage", "Bathroom & kitchen plumbing", "Gas fitting coordination", "Commercial plumbing fit-outs", "Pipe replacement", "Water-efficient fixtures"],
    benefits: [
      { title: "Licensed, compliant work", text: "Work carried out to Australian plumbing standards and WA regulations." },
      { title: "Coordinated with other trades", text: "Rough-in and fit-off timed with tiling, joinery and painting." },
      { title: "Fast response", text: "Prompt callouts for urgent leaks and failures." },
    ],
    keywords: ["plumber Perth", "emergency plumbing Perth", "bathroom plumbing"],
    faqs: [
      { q: "What counts as a plumbing emergency?", a: "Burst pipes, major leaks, sewage overflow, no hot or cold water to the property, and any gas smell. Turn off the water at the mains and call us." },
      { q: "Do you replace hot water systems?", a: "Yes. We supply and install gas, electric, solar and heat-pump systems and can advise on the best fit for your household." },
    ],
    related: ["tiling", "remodeling", "renovation"],
  },
  {
    slug: "painting",
    name: "Painting",
    short: "Interior and exterior painting for homes, offices, apartments and commercial sites.",
    image: "/images/painting.jpg",
    imageAlt: "Painter rolling blue paint onto a wall",
    intro: [
      "A great paint job is in the prep. We repair, sand, prime and cut in carefully so the finish looks sharp and lasts through Perth's UV and heat.",
      "Our painters work in occupied homes and operating businesses, scheduling around you to keep disruption low.",
    ],
    covers: ["Interior painting", "Exterior painting", "Roof & fence painting", "Commercial & office painting", "Strata & apartment painting", "Wall repair & preparation", "Waterproof & protective coatings", "Colour consultation"],
    benefits: [
      { title: "Prep-first approach", text: "Proper repairs and priming for a finish that doesn't peel or flake." },
      { title: "UV-tough coatings", text: "Exterior paints chosen for WA sun exposure." },
      { title: "Minimal disruption", text: "After-hours and staged work for commercial sites." },
    ],
    keywords: ["painters Perth", "exterior painting Perth", "commercial painting WA"],
    faqs: [
      { q: "How often should a house be repainted?", a: "Exteriors typically need repainting every 8–12 years in WA; interiors every 5–10 years depending on use and finish." },
      { q: "Do you supply the paint?", a: "Yes. We recommend and supply quality products suited to the surface and conditions, or use your chosen brand and colours." },
    ],
    related: ["renovation", "redesign", "restoration"],
  },
  {
    slug: "carpentry",
    name: "Carpentry",
    short: "Framing, decking, pergolas, joinery, doors, windows and bespoke timber work.",
    image: "/images/carpentry.jpg",
    imageAlt: "Carpenter in safety gear working on timber framing",
    intro: [
      "From structural framing to fine finishing carpentry, our carpenters build things that fit properly and last.",
      "We create custom cabinetry, timber decks and pergolas for outdoor living, and handle door, window and skirting installs as part of larger projects.",
    ],
    covers: ["Framing & extensions", "Decks & pergolas", "Custom joinery & cabinetry", "Doors, windows & hardware", "Skirting, architraves & cornices", "Timber flooring", "Commercial fit-out carpentry", "Repairs & restoration"],
    benefits: [
      { title: "Tailored to your space", text: "Measured, made and fitted for your exact layout." },
      { title: "Structural know-how", text: "Framing and load-bearing work done to code." },
      { title: "Quality finishing", text: "Tight joins and clean lines throughout." },
    ],
    keywords: ["carpenter Perth", "decking Perth", "custom joinery WA"],
    faqs: [
      { q: "Do I need a permit for a deck or pergola?", a: "It depends on size, height and your local council. We can advise and help with approvals as part of the quote." },
      { q: "What timber do you recommend for outdoors?", a: "Treated pine, merbau, spotted gum and composite decking are all common in WA. We'll match to your budget and maintenance preference." },
    ],
    related: ["remodeling", "renovation", "roofing"],
  },
  {
    slug: "remodeling",
    name: "Remodelling",
    short: "Kitchen, bathroom, living area and commercial remodels that change how a space works.",
    image: "/images/remodeling.jpg",
    imageAlt: "Remodelled white kitchen with island bench",
    intro: [
      "Remodelling changes the layout and function of a room: opening up a kitchen, moving a wall, or turning a dated bathroom into a calm, modern space.",
      "We plan and deliver remodels for homes, apartments, offices and retail premises, coordinating every trade under one project manager.",
    ],
    covers: ["Kitchen remodels", "Bathroom & laundry remodels", "Open-plan conversions", "Office & retail remodels", "Apartment remodels", "Wall removal & structural changes", "Cabinetry & benchtops", "Lighting & electrical coordination"],
    benefits: [
      { title: "One point of contact", text: "A single project lead coordinating all trades and timelines." },
      { title: "Planned around you", text: "Staging that keeps your home or business running where possible." },
      { title: "Value-focused design", text: "Practical advice on where spend adds the most return." },
    ],
    keywords: ["kitchen remodel Perth", "bathroom remodel Perth", "office remodelling"],
    faqs: [
      { q: "What's the difference between a remodel and a renovation?", a: "A remodel changes a space's layout or function; a renovation restores or updates what's already there. Many projects combine both." },
      { q: "How long does a kitchen remodel take?", a: "Most take 4–8 weeks depending on scope, approvals and product lead times." },
    ],
    related: ["renovation", "redesign", "carpentry"],
  },
  {
    slug: "renovation",
    name: "Home & Office Renovation",
    short: "Full renovations for houses, apartments, offices, shops and commercial properties.",
    image: "/images/renovation.jpg",
    imageAlt: "Tradesperson installing wall insulation during a renovation",
    intro: [
      "Whether you're updating a 1970s family home, refreshing an office, or bringing a retail space up to current standards, we manage the whole renovation from scope to handover.",
      "We handle demolition, structural work, trades, finishes and compliance so you deal with one reliable team.",
    ],
    covers: ["Whole-home renovations", "Apartment renovations", "Office & workplace renovations", "Shopping centre & retail renovations", "Extensions & additions", "Insulation & energy upgrades", "Compliance upgrades", "Staged renovations"],
    benefits: [
      { title: "End-to-end delivery", text: "Design coordination, trades and finishing under one contract." },
      { title: "Transparent progress", text: "Regular updates so you always know where the project stands." },
      { title: "Residential & commercial", text: "Experience across homes, offices and larger commercial buildings." },
    ],
    keywords: ["home renovation Perth", "office renovation Perth", "commercial renovation WA"],
    faqs: [
      { q: "Can I stay in my home during a renovation?", a: "Often yes with staged work, but major structural or wet-area projects may make short-term relocation more comfortable. We'll advise at quote stage." },
      { q: "Do you manage council approvals?", a: "We can coordinate drawings, approvals and inspections where your project requires them." },
    ],
    related: ["remodeling", "painting", "redesign"],
  },
  {
    slug: "redesign",
    name: "Redesign",
    short: "Interior and exterior redesign for houses, offices, apartments and shopping centres.",
    image: "/images/living-interior.jpg",
    imageAlt: "Redesigned open-plan living room with timber feature wall",
    intro: [
      "Redesign is about getting more from the space you already have: better flow, light, storage and style, often without a full rebuild.",
      "We help homeowners, landlords and businesses rethink layouts, finishes and facades, then deliver the work with our in-house trades.",
    ],
    covers: ["Interior redesign", "Exterior & facade updates", "Office & workplace redesign", "Retail & shopping centre redesign", "Apartment layout redesign", "Lighting & colour planning", "Accessibility upgrades", "Material & finish selection"],
    benefits: [
      { title: "Design and build together", text: "Ideas that are costed and buildable, not just pretty drawings." },
      { title: "Fresh without full rebuild", text: "Smart changes that deliver impact at a sensible budget." },
      { title: "Fit for purpose", text: "Spaces shaped around how you live or work." },
    ],
    keywords: ["interior redesign Perth", "office redesign Perth", "home redesign WA"],
    faqs: [
      { q: "Do you provide design drawings?", a: "We provide concept layouts and finish selections and can work with your architect or designer if you have one." },
      { q: "Can redesign be done on a fixed budget?", a: "Yes. We'll prioritise the changes with the biggest impact and stage the rest." },
    ],
    related: ["remodeling", "painting", "renovation"],
  },
  {
    slug: "restoration",
    name: "Restoration",
    short: "Storm, water, fire and ageing damage repaired and restored to a safe, finished standard.",
    image: "/images/restoration.jpg",
    imageAlt: "Restoration worker cleaning and preparing a damaged room",
    intro: [
      "After storm, water, fire or years of wear, a property can look overwhelming. We assess the damage, make it safe, and restore it to a sound, finished condition.",
      "We work with owners, strata managers and insurers, keeping clear records of the scope and works completed.",
    ],
    covers: ["Storm damage repair", "Water damage restoration", "Fire & smoke damage repair", "Structural repairs", "Heritage & period restoration", "Wall, ceiling & floor reinstatement", "Make-safe & emergency works", "Insurance repair documentation"],
    benefits: [
      { title: "Rapid make-safe", text: "Immediate steps to protect the property and prevent further damage." },
      { title: "Insurer-friendly records", text: "Clear scopes and photos to support your claim." },
      { title: "Full reinstatement", text: "Every trade needed to finish the job, handled in-house." },
    ],
    keywords: ["storm damage repair Perth", "water damage restoration Perth", "property restoration WA"],
    faqs: [
      { q: "What should I do first after storm or water damage?", a: "Make the area safe, switch off affected power, take photos, contact your insurer, and call us for an assessment and make-safe works." },
      { q: "Can you work with my insurance company?", a: "Yes. We provide itemised quotes and documentation insurers typically require." },
    ],
    related: ["roofing", "painting", "carpentry"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
