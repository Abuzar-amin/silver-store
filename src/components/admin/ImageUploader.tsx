"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

interface ImageUploaderProps {
  value: string[];
  onChange: (images: string[]) => void;
}

export default function ImageUploader({
  value,
  onChange,
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File) {
    try {
      setUploading(true);

      const supabase = createClient();

      const extension = file.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${extension}`;

      const { error } = await supabase.storage
        .from("products")
        .upload(fileName, file);

      if (error) throw error;

      const {
        data: { publicUrl },
      } = supabase.storage.from("products").getPublicUrl(fileName);

      onChange([...value, publicUrl]);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          await uploadFile(file);

          e.target.value = "";
        }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      {value.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {value.map((url, index) => (
            <div key={url} className="relative">
              <Image
                src={url}
                alt={`Product ${index + 1}`}
                width={300}
                height={300}
                className="aspect-square rounded-lg border object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  onChange(value.filter((_, i) => i !== index))
                }
                className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-xs text-white"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}