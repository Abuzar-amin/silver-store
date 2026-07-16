import { Check, RotateCcw, Truck } from "lucide-react";

interface ProductFeaturesProps {
  features: string[];
  shipping: string;
  returns: string;
}

export default function ProductFeatures({
  features,
  shipping,
  returns,
}: ProductFeaturesProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <Check
              size={18}
              className="text-green-600"
            />

            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="space-y-5 border-t pt-6">
        <div className="flex items-center gap-4">
          <Truck className="text-gray-700" />

          <div>
            <p className="font-medium">Shipping</p>

            <p className="text-gray-500">
              {shipping}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <RotateCcw className="text-gray-700" />

          <div>
            <p className="font-medium">Returns</p>

            <p className="text-gray-500">
              {returns}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}