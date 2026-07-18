export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: "rings" | "necklaces" | "bracelets" | "earrings";
  material: string;
  price: number;
  images: string[];
  featured: boolean;
  inStock: boolean;
  features: string[];
  shipping: string;
  returns: string;
}