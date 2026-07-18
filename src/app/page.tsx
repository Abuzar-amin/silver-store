import ShopHeader from "@/components/shop/ShopHeader";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductGrid from "@/components/shop/ProductGrid";

import { getFeaturedProducts } from "@/lib/productRepository";

export default async function ShopPage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main>
      <ShopHeader />
      <CategoryFilter />
      <ProductGrid products={featuredProducts} />
    </main>
  );
}