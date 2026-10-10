export const site = {
  name: "Suncon West",
  legalName: "Suncon West PTY LTD",
  tagline: "Building Western Australia, one trade at a time.",
  description:
    "Suncon West PTY LTD is a Perth construction company delivering roofing, tiling, plumbing, painting, carpentry, remodelling, renovation, redesign and restoration across Western Australia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sunconwest.com",
  phone: "+61 313 42 16 458",
  phoneHref: "tel:+613134216458",
  email: "hr@sunconwest.com",
  // TODO: replace with the real office address, ABN and builder/trade licence numbers.
  address: { locality: "Perth", region: "WA", country: "AU" },
  abn: "",
  licence: "",
  hours: "Mon–Fri 7:00am – 5:00pm",
  serviceAreas: [
    "Perth CBD",
    "Joondalup",
    "Fremantle",
    "Rockingham",
    "Mandurah",
    "Armadale",
    "Midland",
    "Cottesloe",
    "Subiaco",
    "Baldivis",
    "Bunbury",
    "Busselton",
  ],
  social: { facebook: "", instagram: "", linkedin: "" },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
] as const;
