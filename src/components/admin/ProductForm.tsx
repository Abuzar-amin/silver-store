"use client";

import { useState } from "react";
import type { Product } from "@/types/products";
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
  const [form, setForm] = useState({
  name: product?.name ?? "",
  description: product?.description ?? "",
  material: product?.material ?? "925 Sterling Silver",
  price: product?.price.toString() ?? "",
  category: product?.category ?? "rings",
  featured: product?.featured ?? false,
  inStock: product?.inStock ?? true,
  images:
    product?.images.length
      ? product.images
      : [""],
  features:
    product?.features.length
      ? product.features
      : defaultFeatures,
  shipping:
    product?.shipping ?? "Free Delivery",
  returns:
    product?.returns ?? "30-Day Returns",
});

 const [imagesText, setImagesText] = useState(
  product?.images.join("\n") ?? ""
);

const [featuresText, setFeaturesText] = useState(
  product?.features.join("\n") ??
    defaultFeatures.join("\n")
);

  function updateField(
    field: keyof typeof form,
    value: string | boolean | string[]
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const images = imagesText
      .split("\n")
      .map((url) => url.trim())
      .filter(Boolean);

    const features = featuresText
      .split("\n")
      .map((feature) => feature.trim())
      .filter(Boolean);

    try {
      const productData = {
  name: form.name,
  description: form.description,
  material: form.material,
  price: Number(form.price),
  category: form.category,
  featured: form.featured,
  inStock: form.inStock,
  images,
  features,
  shipping: form.shipping,
  returns: form.returns,
};

if (product) {
  await updateProductAction(product.id, productData);

  alert("Product updated successfully!");
} else {
  await createProductAction(productData);

  alert("Product created successfully!");

  setForm({
    name: "",
    description: "",
    material: "925 Sterling Silver",
    price: "",
    category: "rings",
    featured: false,
    inStock: true,
    images: [""],
    features: defaultFeatures,
    shipping: "Free Delivery",
    returns: "30-Day Returns",
  });

  setImagesText("");
  setFeaturesText(defaultFeatures.join("\n"));
}
    } catch (error: any) {
      console.error(error);
      alert(JSON.stringify(error, null, 2));
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
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
            value={form.name}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            rows={5}
            value={form.description}
            onChange={(e) =>
              updateField("description", e.target.value)
            }
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Material
          </label>

          <input
            value={form.material}
            onChange={(e) =>
              updateField("material", e.target.value)
            }
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
              value={form.price}
              onChange={(e) =>
                updateField("price", e.target.value)
              }
              className="w-full rounded-lg border p-3"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select
              value={form.category}
              onChange={(e) =>
                updateField("category", e.target.value)
              }
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
              value={form.shipping}
              onChange={(e) =>
                updateField("shipping", e.target.value)
              }
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Returns
            </label>

            <input
              value={form.returns}
              onChange={(e) =>
                updateField("returns", e.target.value)
              }
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

        <textarea
          rows={6}
          value={featuresText}
          onChange={(e) =>
            setFeaturesText(e.target.value)
          }
          className="w-full rounded-lg border p-3"
          placeholder="One feature per line"
        />
      </section>

      {/* Images */}

      <section className="space-y-5">
        <h2 className="text-lg font-semibold">
          Product Images
        </h2>

        <textarea
          rows={6}
          value={imagesText}
          onChange={(e) =>
            setImagesText(e.target.value)
          }
          className="w-full rounded-lg border p-3"
          placeholder="One image URL per line"
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
              checked={form.featured}
              onChange={(e) =>
                updateField(
                  "featured",
                  e.target.checked
                )
              }
            />
            Featured
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.inStock}
              onChange={(e) =>
                updateField(
                  "inStock",
                  e.target.checked
                )
              }
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