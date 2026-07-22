"use server";

import { revalidatePath } from "next/cache";
import { ProductSchema } from "@/lib/validation/product";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/lib/productRepository";

import type { ProductInput } from "@/lib/validation/product";
export async function createProductAction(
  product: ProductInput
) {
  const validatedProduct = ProductSchema.parse(product);

  await createProduct(validatedProduct);

  revalidatePath("/shop");
  revalidatePath("/admin");
  revalidatePath("/admin/products");
}

export async function updateProductAction(
  id: number,
  product: ProductInput
) {
  const validatedProduct = ProductSchema.parse(product);

await updateProduct(id, validatedProduct);

  revalidatePath("/shop");
  revalidatePath("/admin");
  revalidatePath("/admin/products");
}

export async function deleteProductAction(id: number) {
  await deleteProduct(id);

  revalidatePath("/shop");
  revalidatePath("/admin");
  revalidatePath("/admin/products");
}