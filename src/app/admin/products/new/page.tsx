import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">
        Add Product
      </h2>

      <ProductForm />
    </>
  );
}