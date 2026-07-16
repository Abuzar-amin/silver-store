import Container from "@/components/layout/Container";
import CategoryCard from "@/components/home/CategoryCard";

import { categories } from "@/data/categories";

export default function CategoryShowcase() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Shop By Category
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Find Your Style
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Discover handcrafted sterling silver jewellery curated for every
            occasion.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}