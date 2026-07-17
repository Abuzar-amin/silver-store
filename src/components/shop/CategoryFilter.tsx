import Link from "next/link";

import Container from "@/components/layout/Container";
import { categories } from "@/data/categories";

interface CategoryFilterProps {
  activeCategory?: string;
}

export default function CategoryFilter({
  activeCategory,
}: CategoryFilterProps) {
  return (
    <section className="border-b border-gray-200 bg-white py-6">
      <Container>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/shop"
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
              !activeCategory
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
            }`}
          >
            All
          </Link>

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.id}`}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}