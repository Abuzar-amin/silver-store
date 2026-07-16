import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex justify-center">
        <Icon className="h-10 w-10 text-gray-900" />
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        {description}
      </p>
    </article>
  );
}