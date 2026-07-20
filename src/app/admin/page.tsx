import DashboardCard from "@/components/admin/DashboardCard";
import { getAllProducts } from "@/lib/productRepository";
export default async function AdminPage() {
  const products = await getAllProducts();
  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">
        Dashboard
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <DashboardCard
          title="Products"
          value={products.length}
          description="Products currently listed"
        />

        <DashboardCard
          title="Categories"
          value={4}
          description="Jewellery categories"
        />

        <DashboardCard
          title="Featured"
          value={
            products.filter((p) => p.featured).length
          }
          description="Featured products"
        />
      </div>
    </>
  );
}