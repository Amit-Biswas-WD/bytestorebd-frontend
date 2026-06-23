"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import ProductCard from "../product/ProductCard";

interface RawProduct {
  _id: string;
  name: string;
  images: string[];
  slug: string;
  variants: { price: number; originalPrice?: number }[];
}

const BRANDS = [
  { label: "All", value: "" },
  { label: "Apple", value: "Apple" },
  { label: "Samsung", value: "Samsung" },
  { label: "Xiaomi", value: "Xiaomi" },
  { label: "JBL", value: "JBL" },
  { label: "Anker", value: "Anker" },
  { label: "Nothing", value: "Nothing" },
  { label: "Sony", value: "Sony" },
  { label: "Motorola", value: "Motorola" },
  { label: "OnePlus", value: "OnePlus" },
  { label: "Panasonic", value: "Panasonic" },
  { label: "Philips", value: "Philips" },
];

const TopBrandProducts = () => {
  const [activeBrand, setActiveBrand] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["products", "top-brand", activeBrand],
    queryFn: async () => {
      const url = activeBrand
        ? `/products?brand=${activeBrand}&limit=10`
        : `/products?limit=10`;
      const { data } = await api.get(url);
      return data.data as RawProduct[];
    },
  });

  const products = (data || []).map((p) => ({
    id: p._id,
    title: p.name,
    imageSrc: p.images?.[0] || "",
    currentPrice: p.variants?.[0]?.price || 0,
    originalPrice: p.variants?.[0]?.originalPrice || null,
    slug: p.slug,
  }));

  if (isLoading) {
    return (
      <div className="site-container">
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 h-72 bg-gray-100 animate-pulse rounded-2xl"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="site-container">
      <ProductCard
        heading="Top Brand Products"
        products={products}
        tabs={BRANDS}
        activeTab={activeBrand}
        onTabChange={setActiveBrand}
      />
    </div>
  );
};

export default TopBrandProducts;
