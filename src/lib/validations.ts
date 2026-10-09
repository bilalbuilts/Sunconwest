import { z } from "zod";

const phone = z
  .string()
  .trim()
  .min(8, "Please enter a valid phone number")
  .max(20)
  .regex(/^[+\d][\d\s()-]+$/, "Please enter a valid phone number");

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone,
  email: z.email("Please enter a valid email").max(200),
  suburb: z.string().trim().min(2, "Please enter your suburb").max(120),
  serviceSlug: z.string().min(1, "Please choose a service"),
  propertyType: z.string().min(1, "Please choose a property type"),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().trim().min(10, "Please describe the work (at least 10 characters)").max(3000),
  consent: z.literal(true, { error: "Please agree to be contacted" }),
  website: z.string().max(0).optional(), // honeypot
});
export type QuoteInput = z.infer<typeof quoteSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email").max(200),
  phone: phone.optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please enter a message (at least 10 characters)").max(3000),
  website: z.string().max(0).optional(), // honeypot
});
export type ContactInput = z.infer<typeof contactSchema>;

export const propertyTypes = ["House", "Apartment / Unit", "Office", "Retail / Shopping centre", "Industrial / Warehouse", "Other commercial"];
export const budgetRanges = ["Under $5,000", "$5,000 – $20,000", "$20,000 – $50,000", "$50,000 – $150,000", "$150,000+", "Not sure yet"];
export const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "3+ months", "Just planning"];
