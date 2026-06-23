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

const TABS = [
  { label: "Mixer Grinder & Blender", value: "mixer-grinder-blender" },
  { label: "Microwave Oven", value: "microwave-oven" },
  { label: "Air Fryer", value: "air-fryer" },
  { label: "Induction Cooker", value: "induction-cooker" },
  { label: "Gas Stove", value: "gas-stove" },
  { label: "Kitchen Hood", value: "kitchen-hood" },
  { label: "Air Conditioner", value: "air-conditioner" },
  { label: "Power Station", value: "power-station" },
  { label: "Rice Cooker", value: "rice-cooker" },
];

const HomeAppliances = () => {
  const [activeTab, setActiveTab] = useState("mixer-grinder-blender");

  const { data, isLoading } = useQuery({
    queryKey: ["products", "home-appliances", activeTab],
    queryFn: async () => {
      const { data } = await api.get(
        `/products?subCategory=${activeTab}&limit=10`,
      );
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
        heading="Home Appliances"
        products={products}
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default HomeAppliances;
