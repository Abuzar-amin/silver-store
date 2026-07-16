export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Crystal Silver Ring",
    price: 1799,
    image: "/images/products/ring-1.png",
    featured: true,
  },
  {
    id: 2,
    name: "Butterfly Pendant",
    price: 1999,
    image: "/images/products/necklace-1.png",
    featured: true,
  },
  {
    id: 3,
    name: "Silver Grace Bracelet",
    price: 2299,
    image: "/images/products/bracelet-1.png",
    featured: true,
  },
  {
    id: 4,
    name: "Star Hoop Earrings",
    price: 1499,
    image: "/images/products/earrings-1.png",
    featured: true,
  },
];