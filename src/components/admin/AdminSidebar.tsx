import Link from "next/link";

export default function AdminSidebar() {
  const linkClasses =
    "block rounded-lg px-4 py-3 transition hover:bg-gray-100";

  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="mb-8 text-2xl font-bold">
        Silver Spot
      </h2>

      <nav className="space-y-2">
        <Link href="/admin" className={linkClasses}>
          Dashboard
        </Link>

        <Link
          href="/admin/products"
          className={linkClasses}
        >
          Products
        </Link>

        <Link
          href="/admin/products/new"
          className={linkClasses}
        >
          Add Product
        </Link>
      </nav>
    </aside>
  );
}