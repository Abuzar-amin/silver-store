import ShopHeader from "@/components/shop/ShopHeader";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductGrid from "@/components/shop/ProductGrid";
import ShopToolbar from "@/components/shop/ShopToolbar";

import {
  getAllProducts,
  getProductsByCategory,
  searchProducts,
  sortProducts,
} from "@/lib/products";

import { Product } from "@/data/products";

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

  let products = getAllProducts();

  if (
    category &&
    VALID_CATEGORIES.includes(category as Product["category"])
  ) {
    products = getProductsByCategory(category as Product["category"]);
  }

  if (search) {
    products = searchProducts(products, search);
  }

  if (sort) {
    products = sortProducts(products, sort);
  }

  return (
    <main>
      <ShopHeader />

      <CategoryFilter activeCategory={category} />

      <ShopToolbar />

      <ProductGrid products={products} />
    </main>
  );
}