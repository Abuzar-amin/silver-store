import Container from "@/components/layout/Container";
import ProductCard from "@/components/product/ProductCard";

import { products } from "@/data/products";

export default function FeaturedCollection() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="py-20">
      <Container>
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Featured Collection
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Handpicked For You
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}