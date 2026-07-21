import { notFound } from "next/navigation";

import ProductForm from "@/components/admin/ProductForm";
import { getProductById } from "@/lib/productRepository";

interface EditProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">
        Edit Product
      </h1>

      <ProductForm product={product} />
    </>
  );
}