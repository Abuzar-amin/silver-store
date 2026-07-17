import { supabase } from "./supabase";

interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  category: string;
  featured: boolean;
  inStock: boolean;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function createProduct(
  product: CreateProductInput
) {
  const { data, error } = await supabase
    .from("products")
    .insert({
      name: product.name,
      slug: slugify(product.name),
      description: product.description,
      category: product.category,
      material: "Sterling Silver",
      price: product.price,
      featured: product.featured,
      in_stock: product.inStock,
      image_urls: [],
      features: [],
      shipping: "",
      returns: "",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}