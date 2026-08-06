import { z } from "zod";

export const teamSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  // Long-form and optional. The API normalises newlines and trims the ends,
  // so the count here only needs to catch obviously-too-long input.
  bio: z
    .string()
    .max(5000, "Bio must be at most 5000 characters")
    .optional(),
  order: z.string().regex(/^\d+$/, "Order must be a number"),
  isPublished: z.boolean(),
  image: z.any().optional(),
});

export type TeamFormValues = z.infer<typeof teamSchema>;
