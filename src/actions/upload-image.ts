"use server";

import { uploadProductImage } from "@/lib/storage";

export async function uploadImageAction(formData: FormData) {
  const file = formData.get("image");

  if (!(file instanceof File)) {
    throw new Error("No image selected.");
  }

  if (file.size === 0) {
    throw new Error("Image is empty.");
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("Only image files are allowed.");
  }

  return await uploadProductImage(file);
}