"use client";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import NewTrends from "@/components/home/NewTrends";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      Home
      <div className="">
        <FeaturedCategories />
        <NewTrends />
      </div>
    </div>
  );
}
