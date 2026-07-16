import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              New Collection
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              Timeless Sterling Silver Jewellery
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Discover handcrafted sterling silver jewellery designed for
              everyday elegance. Made to complement every style with lasting
              quality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/shop">
  Shop Collection
</Button>

<Button
  href="/shop"
  variant="secondary"
>
  Explore Categories
</Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/hero/hero.png"
                alt="Sterling silver jewellery"
                width={900}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}