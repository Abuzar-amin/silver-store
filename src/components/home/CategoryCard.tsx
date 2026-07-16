import Image from "next/image";
import Link from "next/link";

import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group block"
    >
      <article className="overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            width={700}
            height={700}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="border-t border-gray-100 p-6 text-center">
          <h3 className="text-lg font-semibold tracking-wide">
            {category.name}
          </h3>
        </div>

      </article>
    </Link>
  );
}