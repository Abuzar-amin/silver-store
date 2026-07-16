import Container from "@/components/layout/Container";

export default function ShopHeader() {
  return (
    <section className="border-b border-gray-200 bg-stone-50 py-16">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Silver Spot
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Shop
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Explore our collection of handcrafted sterling silver jewellery,
            thoughtfully designed for everyday elegance.
          </p>
        </div>
      </Container>
    </section>
  );
}