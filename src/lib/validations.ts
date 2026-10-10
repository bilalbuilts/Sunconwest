import { z } from "zod";

// Accepts local or international formats (spaces, brackets, dashes, leading +) and requires 8-15 digits.
const phone = z
  .string()
  .trim()
  .min(1, "Please enter your phone number")
  .max(25, "Phone number is too long")
  .regex(/^\+?[\d\s().-]+$/, "Phone number can only contain digits, spaces and + ( ) -")
  .refine((s) => {
    const digits = s.replace(/\D/g, "").length;
    return digits >= 8 && digits <= 15;
  }, "Please enter a valid phone number (8 to 15 digits)");

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
  phone,
  message: z.string().trim().min(10, "Please enter a message (at least 10 characters)").max(3000),
  website: z.string().max(0).optional(), // honeypot
});
export type ContactInput = z.infer<typeof contactSchema>;

export const propertyTypes = ["House", "Apartment / Unit", "Office", "Retail / Shopping centre", "Industrial / Warehouse", "Other commercial"];
export const budgetRanges = ["Under $5,000", "$5,000 – $20,000", "$20,000 – $50,000", "$50,000 – $150,000", "$150,000+", "Not sure yet"];
export const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "3+ months", "Just planning"];
