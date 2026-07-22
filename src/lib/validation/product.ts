import { z } from "zod";

export const ProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Product name is required")
    .max(100, "Name cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .min(1, "Description is required"),

  material: z
    .string()
    .trim()
    .min(1, "Material is required"),

  price: z
    .number()
    .positive("Price must be greater than 0"),

  category: z.enum([
    "rings",
    "necklaces",
    "bracelets",
    "earrings",
  ]),

  featured: z.boolean(),

  inStock: z.boolean(),

  images: z
    .array(z.string().url("Each image must be a valid URL"))
    .min(1, "At least one image is required"),

  features: z.array(z.string()),

  shipping: z.string(),

  returns: z.string(),
});

export type ProductInput = z.infer<typeof ProductSchema>;