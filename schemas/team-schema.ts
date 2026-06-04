import { z } from "zod";

export const teamSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  order: z.string().regex(/^\d+$/, "Order must be a number"),
  isPublished: z.boolean(),
  image: z.any().optional(),
});

export type TeamFormValues = z.infer<typeof teamSchema>;
