import Hero from "@/components/home/Hero";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryShowcase />
      <FeaturedCollection />
    </main>
  );
}