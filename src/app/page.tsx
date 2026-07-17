import ShopHeader from "@/components/shop/ShopHeader";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductGrid from "@/components/shop/ProductGrid";

import { getFeaturedProducts } from "@/lib/products";

export default function ShopPage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      <ShopHeader />
      <CategoryFilter />
      <ProductGrid products={featuredProducts} />
    </main>
  );
}