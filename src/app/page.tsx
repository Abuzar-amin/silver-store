import Container from "@/components/layout/Container";

export default function HomePage() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-5xl font-bold">
          Silver Store
        </h1>

        <p className="mt-4 text-gray-600">
          Premium handcrafted sterling silver jewellery.
        </p>
      </Container>
    </main>
  );
}