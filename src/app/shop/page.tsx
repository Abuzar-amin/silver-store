import ShopHeader from "@/components/shop/ShopHeader";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductGrid from "@/components/shop/ProductGrid";
import ShopToolbar from "@/components/shop/ShopToolbar";

import { getProducts } from "@/lib/productRepository";
import type { Product } from "@/types/products";

interface ShopPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    sort?: string;
  }>;
}

const VALID_CATEGORIES: Product["category"][] = [
  "rings",
  "necklaces",
  "bracelets",
  "earrings",
];

export default async function ShopPage({
  searchParams,
}: ShopPageProps) {
  const { category, search, sort } = await searchParams;

  const products = await getProducts({
    category:
      category && VALID_CATEGORIES.includes(category as Product["category"])
        ? (category as Product["category"])
        : undefined,
    search,
    sort,
  });

  return (
    <main>
      <ShopHeader />
      <CategoryFilter activeCategory={category} />
      <ShopToolbar />
      <ProductGrid products={products} />
    </main>
  );
}