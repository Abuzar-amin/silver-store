export interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: "rings",
    name: "Rings",
    image: "/images/categories/ring-category.png",
    href: "/shop?category=rings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "/images/categories/necklace-category.png",
    href: "/shop?category=necklaces",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "/images/categories/bracelet-category.png",
    href: "/shop?category=bracelets",
  },
  {
    id: "earrings",
    name: "Earrings",
    image: "/images/categories/earrings-category.png",
    href: "/shop?category=earrings",
  },
];