import Container from "@/components/layout/Container";
import FeatureCard from "@/components/home/FeatureCard";

import { features } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-stone-50">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Why Choose Silver Spot
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Crafted With Care
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Every piece is thoughtfully selected to combine timeless design,
            exceptional craftsmanship and lasting quality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}