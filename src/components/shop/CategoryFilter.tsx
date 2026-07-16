import Link from "next/link";

import Container from "@/components/layout/Container";
import { categories } from "@/data/categories";

export default function CategoryFilter() {
  const filterClasses =
    "rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition-colors duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white";

  return (
    <section className="border-b border-gray-200 bg-white py-6">
      <Container>
        <div className="flex flex-wrap gap-3">
          <Link href="/shop" className={filterClasses}>
            All
          </Link>

          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={filterClasses}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}