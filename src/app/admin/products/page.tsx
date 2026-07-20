import Link from "next/link";

import { getAllProducts } from "@/lib/productRepository";
export default async function ProductsPage() {
    const products = await getAllProducts();

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Products
        </h2>

        <Link
          href="/admin/products/new"
          className="rounded-lg bg-black px-5 py-3 text-white"
        >
          + Add Product
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">
                Product
              </th>
              <th className="px-6 py-4 text-left">
                Category
              </th>
              <th className="px-6 py-4 text-left">
                Price
              </th>
              <th className="px-6 py-4 text-left">
                Featured
              </th>
              <th className="px-6 py-4 text-left">
                Stock
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t"
              >
                <td className="px-6 py-4">
                  {product.name}
                </td>

                <td className="px-6 py-4 capitalize">
                  {product.category}
                </td>

                <td className="px-6 py-4">
                  ₹{product.price}
                </td>

                <td className="px-6 py-4">
                  {product.featured ? "✅" : "—"}
                </td>

                <td className="px-6 py-4">
                  {product.inStock
                    ? "In Stock"
                    : "Out of Stock"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}