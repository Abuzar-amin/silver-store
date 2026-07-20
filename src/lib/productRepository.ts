import { createClient } from "@/lib/supabase/server";
import type { Product } from "@/types/products";

function mapProduct(row: any): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    category: row.category,
    material: row.material,
    price: row.price,
    images: row.image_urls,
    featured: row.featured,
    inStock: row.in_stock,
    features: row.features,
    shipping: row.shipping,
    returns: row.returns,
  };
}

interface GetProductsOptions {
  category?: Product["category"];
  search?: string;
  sort?: string;
}

export async function getProducts(
  options: GetProductsOptions = {}
): Promise<Product[]> {
  const supabase = await createClient();

  let query = supabase.from("products").select("*");

  if (options.category) {
    query = query.eq("category", options.category);
  }

  if (options.search) {
    query = query.ilike("name", `%${options.search}%`);
  }

  switch (options.sort) {
    case "price-asc":
      query = query.order("price");
      break;

    case "price-desc":
      query = query.order("price", { ascending: false });
      break;

    case "name":
      query = query.order("name");
      break;

    default:
      query = query.order("id");
  }

  const { data, error } = await query;

  if (error) throw error;

  return data.map(mapProduct);
}

export async function getAllProducts(): Promise<Product[]> {
  return getProducts();
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true);

  if (error) throw error;

  return data.map(mapProduct);
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;

  return mapProduct(data);
}