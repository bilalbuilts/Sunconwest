export const site = {
  name: "Suncon West",
  legalName: "Suncon West PTY LTD",
  tagline: "Building Western Australia, one trade at a time.",
  description:
    "Suncon West PTY LTD is a Perth construction company delivering roofing, tiling, plumbing, painting, carpentry, remodelling, renovation, redesign and restoration across Western Australia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sunconwest.com",
  phone: "+61 403 651 889",
  /** Every phone number on the site opens a WhatsApp chat with this number (international format, digits only). */
  whatsappNumber: "61403651889",
  whatsappHref: `https://wa.me/61403651889?text=${encodeURIComponent("Hello Suncon West, I would like to make an enquiry.")}`,
  email: "hr@sunconwest.com",
  // TODO: replace with the real office address, ABN and builder/trade licence numbers.
  address: { locality: "Perth", region: "WA", country: "AU" },
  /** What the contact page map shows. Swap for the full street address once confirmed. */
  mapQuery: "Perth, Western Australia",
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
