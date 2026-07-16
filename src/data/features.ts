import {
  Gift,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: typeof ShieldCheck;
}

export const features: Feature[] = [
  {
    title: "925 Sterling Silver",
    description:
      "Crafted from genuine sterling silver with exceptional quality and lasting shine.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Shipping",
    description:
      "Reliable delivery across India with careful packaging for every order.",
    icon: Truck,
  },
  {
    title: "Dedicated Support",
    description:
      "We're here to help before and after your purchase whenever you need us.",
    icon: Headphones,
  },
  {
    title: "Perfect For Gifting",
    description:
      "Beautiful jewellery thoughtfully presented for birthdays, anniversaries and special occasions.",
    icon: Gift,
  },
];