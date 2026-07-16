"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-3xl border border-gray-100">
        <Image
          src={selectedImage}
          alt={name}
          width={900}
          height={900}
          priority
          className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              selectedImage === image
                ? "border-gray-900"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <Image
              src={image}
              alt={`${name} ${index + 1}`}
              width={200}
              height={200}
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}