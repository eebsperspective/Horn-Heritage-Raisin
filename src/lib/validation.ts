import { z } from "zod";

// Every schema includes `company` as a honeypot trap (real company name is
// collected under `businessName` on wholesale forms instead) and `startedAt`
// as a time-trap — submissions filled in under 1.5s are treated as bots.
const honeypot = {
  company: z.string().optional(),
  startedAt: z.number().optional(),
};

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Enter a valid email"),
  phone: z.string().max(50).optional(),
  message: z.string().min(5, "Please add a short message").max(4000),
  ...honeypot,
});
export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
  ...honeypot,
});
export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const wholesaleInquirySchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  businessName: z.string().min(1, "Company is required").max(200),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(1, "Phone or WhatsApp is required").max(50),
  country: z.string().min(1, "Country is required").max(100),
  businessType: z.string().min(1, "Select a business type"),
  productsOfInterest: z.array(z.string()).min(1, "Select at least one product"),
  orderVolume: z.string().min(1, "Select an estimated order volume"),
  message: z.string().max(4000).optional(),
  sendCatalogue: z.boolean().optional(),
  ...honeypot,
});
export type WholesaleInquiryInput = z.infer<typeof wholesaleInquirySchema>;

export const sampleRequestSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  businessName: z.string().max(200).optional(),
  email: z.string().email("Enter a valid email"),
  phone: z.string().max(50).optional(),
  country: z.string().min(1, "Country is required").max(100),
  productsOfInterest: z.array(z.string()).optional(),
  message: z.string().max(4000).optional(),
  ...honeypot,
});
export type SampleRequestInput = z.infer<typeof sampleRequestSchema>;

export const catalogueDownloadSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  businessName: z.string().min(1, "Company is required").max(200),
  email: z.string().email("Enter a valid email"),
  ...honeypot,
});
export type CatalogueDownloadInput = z.infer<typeof catalogueDownloadSchema>;

/** Rejects likely-bot submissions: honeypot filled, or submitted too fast. */
export function isLikelyBot(data: { company?: string; startedAt?: number }) {
  if (data.company && data.company.length > 0) return true;
  if (typeof data.startedAt === "number" && Date.now() - data.startedAt < 1500) {
    return true;
  }
  return false;
}
