import { createClient } from "@/lib/supabase/server";

const BUCKET_NAME = "products";

export async function uploadProductImage(file: File): Promise<string> {
  const supabase = await createClient();

  const extension = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, file);

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);

  return publicUrl;
}

export async function deleteProductImage(path: string) {
  const supabase = await createClient();

  const filePath = path.split("/products/")[1];

  if (!filePath) return;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .remove([filePath]);

  if (error) {
    throw new Error(error.message);
  }
}