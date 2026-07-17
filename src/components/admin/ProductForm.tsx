"use client";

import { useState } from "react";
import { createProduct } from "@/lib/product-actions";
export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "rings",
    featured: false,
    inStock: true,
  });

  function updateField(
    field: keyof typeof form,
    value: string | boolean
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  try {
    await createProduct({
      name: form.name,
      description: form.description,
      price: Number(form.price),
      category: form.category,
      featured: form.featured,
      inStock: form.inStock,
    });

    alert("Product created successfully!");

    setForm({
      name: "",
      description: "",
      price: "",
      category: "rings",
      featured: false,
      inStock: true,
    });

  } catch (error: any) {
  console.error("Supabase Error:", error);

  alert(
    JSON.stringify(error, null, 2)
  );
}
}

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border bg-white p-8"
    >
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
          value={form.description}
          onChange={(e) =>
            updateField("description", e.target.value)
          }
          rows={5}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

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
            <option value="necklaces">Necklaces</option>
            <option value="bracelets">Bracelets</option>
            <option value="earrings">Earrings</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) =>
              updateField("featured", e.target.checked)
            }
          />
          Featured
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.inStock}
            onChange={(e) =>
              updateField("inStock", e.target.checked)
            }
          />
          In Stock
        </label>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-black px-6 py-3 text-white"
      >
        Save Product
      </button>
    </form>
  );
}