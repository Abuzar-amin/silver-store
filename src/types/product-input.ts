export interface ProductInput {
  name: string;
  description: string;
  material: string;
  price: number;
  category: "rings" | "necklaces" | "bracelets" | "earrings";
  featured: boolean;
  inStock: boolean;
  images: string[];
  features: string[];
  shipping: string;
  returns: string;
}