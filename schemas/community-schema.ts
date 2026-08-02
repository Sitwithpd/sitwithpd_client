import { z } from "zod";

export const communitySchema = z.object({
  title: z.string().min(1, "Title is required").max(160, "Title is too long"),
  subtitle: z
    .string()
    .min(1, "Subtitle is required")
    .max(300, "Subtitle is too long"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(4000, "Description is too long"),
  // The group link is the whole value of a membership — it must be a real
  // https URL, and the backend enforces the same rule.
  whatsappLink: z
    .string()
    .min(1, "WhatsApp group link is required")
    .url("Enter a valid URL")
    .refine((v) => v.startsWith("https://"), "Link must start with https://"),
  iconKey: z.string().optional(),
  gains: z.array(z.string()).optional(),
  // Ordered YouTube links; the array index is the display order.
  videoLinks: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  order: z.string().regex(/^\d+$/, "Order must be a number"),
  isPublished: z.boolean(),
});

export type CommunityFormValues = z.infer<typeof communitySchema>;
