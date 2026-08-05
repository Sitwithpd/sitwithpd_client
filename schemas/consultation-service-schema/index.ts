import * as z from "zod";

export const ConsultationServiceSchema = z.object({
  title: z.string().min(2, "Title is required"),
  // Single free-text phrase, e.g. "Career Coaching". Required by the API.
  category: z
    .string()
    .min(1, "Category is required")
    .max(80, "Category must be at most 80 characters"),
  calBookingUrl: z.string().min(1, "Booking link is required"),
  description: z.string().min(5, "Description is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((v) => !isNaN(Number(v)) && Number(v) > 0, {
      message: "Price must be a positive number",
    }),
  duration: z
    .string()
    .min(1, "Duration is required")
    .refine((v) => !isNaN(Number(v)) && Number(v) > 0, {
      message: "Duration must be a positive number",
    }),
  // Cover image accepts an upload (File) or an existing Cloudinary URL.
  coverImage: z.union([z.string(), z.any()]).optional(),
  // "Who's it for" / "What's included" — full-sentence bullets, not tags.
  audience: z.array(z.string()).optional(),
  whatsIncluded: z.array(z.string()).optional(),
  // One short label drawn from the shared FORMAT tag vocabulary.
  format: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type ConsultationServiceFormValues = z.infer<
  typeof ConsultationServiceSchema
>;
