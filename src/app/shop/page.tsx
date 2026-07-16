import ShopHeader from "@/components/shop/ShopHeader";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductGrid from "@/components/shop/ProductGrid";

import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main>
      <ShopHeader />

      <CategoryFilter />

      <ProductGrid products={products} />
    </main>
  );
}