"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUploader from "@/components/admin/ImageUploader";
import {
  ProductSchema,
  type ProductInput,
} from "@/lib/validation/product";import type { Product } from "@/types/products";
import {
  createProductAction,
  updateProductAction,
} from "@/actions/product-actions";

const defaultFeatures = [
  "Hypoallergenic",
  "Tarnish Resistant",
  "Free Gift Box",
  "30-Day Exchange",
];

interface ProductFormProps {
  product?: Product;
}

export default function ProductForm({
  product,
}: ProductFormProps) {
  const {
  register,
  control,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
} = useForm<ProductInput>({
  resolver: zodResolver(ProductSchema),

  defaultValues: {
    name: product?.name ?? "",
    description: product?.description ?? "",
    material: product?.material ?? "925 Sterling Silver",
    price: product?.price ?? 0,
    category: product?.category ?? "rings",
    featured: product?.featured ?? false,
    inStock: product?.inStock ?? true,
    images:
      product?.images.length
        ? product.images
        : [],
    features:
      product?.features.length
        ? product.features
        : defaultFeatures,
    shipping:
      product?.shipping ?? "Free Delivery",
    returns:
      product?.returns ?? "30-Day Returns",
  },
});
 








 async function onSubmit(productData: ProductInput) {
  try {
    if (product) {
      await updateProductAction(product.id, productData);
      alert("Product updated successfully!");
    } else {
      await createProductAction(productData);
      alert("Product created successfully!");
      reset();
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-2xl border bg-white p-8 shadow-sm"
    >
      {/* General Information */}

      <section className="space-y-5">
        <h2 className="text-lg font-semibold">
          General Information
        </h2>

        <div>
          <label className="mb-2 block font-medium">
            Product Name
          </label>

          <input
  {...register("name")}
  className="w-full rounded-lg border p-3"
/>

{errors.name && (
  <p className="mt-1 text-sm text-red-500">
    {errors.name.message}
  </p>
)}
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
  rows={5}
  {...register("description")}
  className="w-full rounded-lg border p-3"
/>

{errors.description && (
  <p className="mt-1 text-sm text-red-500">
    {errors.description.message}
  </p>
)}
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Material
          </label>

          <input
  {...register("material")}
  className="w-full rounded-lg border p-3"
/>
        </div>
      </section>

      {/* Pricing */}

      <section className="space-y-5">
        <h2 className="text-lg font-semibold">
          Pricing
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Price
            </label>

            <input
              type="number"
              {...register("price", { valueAsNumber: true })}
              className="w-full rounded-lg border p-3"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select
              {...register("category")}
              className="w-full rounded-lg border p-3"
            >
              <option value="rings">Rings</option>
              <option value="necklaces">
                Necklaces
              </option>
              <option value="bracelets">
                Bracelets
              </option>
              <option value="earrings">
                Earrings
              </option>
            </select>
          </div>
        </div>
      </section>

      {/* Shipping */}

      <section className="space-y-5">
        <h2 className="text-lg font-semibold">
          Shipping & Returns
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Shipping
            </label>

            <input
              {...register("shipping")}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Returns
            </label>

            <input
              {...register("returns")}
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="space-y-5">
        <h2 className="text-lg font-semibold">
          Features
        </h2>

        <Controller
  control={control}
  name="features"
  render={({ field }) => (
    <textarea
      rows={6}
      value={field.value.join("\n")}
      onChange={(e) =>
        field.onChange(
          e.target.value
            .split("\n")
            .map((x) => x.trim())
            .filter(Boolean)
        )
      }
      className="w-full rounded-lg border p-3"
      placeholder="One feature per line"
    />
  )}
/>
      </section>

      {/* Images */}

      <section className="space-y-5">
  <h2 className="text-lg font-semibold">
    Product Images
  </h2>

  <Controller
    control={control}
    name="images"
    render={({ field }) => (
      <ImageUploader
        value={field.value}
        onChange={field.onChange}
      />
    )}
  />
</section>

      {/* Options */}

      <section className="space-y-5">
        <h2 className="text-lg font-semibold">
          Options
        </h2>

        <div className="flex flex-wrap gap-8">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("featured")}
            />
            Featured
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("inStock")}
            />
            In Stock
          </label>
        </div>
      </section>

      <button
        type="submit"
        className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
      >
        {product ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
}