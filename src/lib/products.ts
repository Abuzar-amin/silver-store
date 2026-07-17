import { products, Product } from "@/data/products";

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter(
    (product) => product.featured
  );
}

export function getProductBySlug(
  slug: string
): Product | undefined {
  return products.find(
    (product) => product.slug === slug
  );
}

export function getProductsByCategory(
  category: Product["category"]
): Product[] {
  return products.filter(
    (product) => product.category === category
  );
}

export function searchProducts(
  products: Product[],
  query: string
): Product[] {
  const search = query.toLowerCase().trim();

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
  );
}

export function sortProducts(
  products: Product[],
  sort: string
): Product[] {
  const sorted = [...products];

  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);

    case "name":
      return sorted.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    default:
      return sorted;
  }
}