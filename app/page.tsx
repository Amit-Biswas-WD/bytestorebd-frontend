"use client";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GreatDealsOnAirConditioner from "@/components/home/GreatDealsOnAirConditioner";
import HomeAppliances from "@/components/home/HomeAppliances";
import NewArrival from "@/components/home/NewArrival";
import NewTrends from "@/components/home/NewTrends";
import RechargeableFan from "@/components/home/RechargeableFan";
import TopBrandProducts from "@/components/home/TopBrandProducts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      Home
      <div className="space-y-14 w-full">
        <FeaturedCategories />
        <NewTrends />
        <FeaturedProducts />
        <NewArrival />
        <GreatDealsOnAirConditioner />
        <RechargeableFan />
        <HomeAppliances />
        <TopBrandProducts />
      </div>
    </div>
  );
}
