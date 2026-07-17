"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSort(sort: string) {
    const params = new URLSearchParams(searchParams);

    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }

    router.push(`/shop?${params.toString()}`);
  }

  return (
    <select
      defaultValue={searchParams.get("sort") ?? ""}
      onChange={(e) => handleSort(e.target.value)}
      className="rounded-full border border-gray-300 px-4 py-2 outline-none focus:border-gray-900"
    >
      <option value="">Featured</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="name">Name (A–Z)</option>
    </select>
  );
}