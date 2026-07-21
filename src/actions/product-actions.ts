"use server";

import { revalidatePath } from "next/cache";

import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/lib/productRepository";

import type { ProductInput } from "@/types/product-input";

export async function createProductAction(
  product: ProductInput
) {
  await createProduct(product);

  revalidatePath("/shop");
  revalidatePath("/admin");
  revalidatePath("/admin/products");
}

export async function updateProductAction(
  id: number,
  product: ProductInput
) {
  await updateProduct(id, product);

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