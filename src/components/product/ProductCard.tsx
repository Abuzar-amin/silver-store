import Image from "next/image";
import Link from "next/link";

import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={700}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-medium tracking-tight">
            {product.name}
          </h3>

          <p className="mt-2 text-lg font-semibold">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </article>
    </Link>
  );
}