import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import ProductGallery from "@/components/product/ProductGallery";
import ProductFeatures from "@/components/product/ProductFeatures";
import Button from "@/components/ui/Button";

import { getProductBySlug } from "@/lib/products";
interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

const product = getProductBySlug(slug);
console.log("PRODUCT OBJECT");
console.log(product);
  if (!product) {
    notFound();
  }

  return (
    <main className="py-16">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Product Gallery */}
          <ProductGallery
            images={product.images}
            name={product.name}
          />

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              {product.material}
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>

              <span className="text-sm text-gray-500">
                4.9 (26 Reviews)
              </span>
            </div>

            <p className="mt-6 text-3xl font-semibold">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="mt-8 leading-8 text-gray-600">
              {product.description}
            </p>

            <hr className="my-8 border-gray-200" />

            <div className="mb-8">
              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  product.inStock
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
console.log(JSON.stringify(product, null, 2));            <ProductFeatures
              features={product.features}
              shipping={product.shipping}
              returns={product.returns}
            />

            <div className="mt-10">
              <Button href="#">
                Buy on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}