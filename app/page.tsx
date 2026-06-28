"use client";
import AppleGadgetsSection from "@/components/home/FeatureGridSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GreatDealsOnAirConditioner from "@/components/home/GreatDealsOnAirConditioner";
import HeroBanner from "@/components/home/HeroBanner";
import HomeAppliances from "@/components/home/HomeAppliances";
import NewArrival from "@/components/home/NewArrival";
import NewTrends from "@/components/home/NewTrends";
import RechargeableFan from "@/components/home/RechargeableFan";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import TopBrandProducts from "@/components/home/TopBrandProducts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="space-y-14 w-full">
        <HeroBanner />
        <ServiceHighlights />
        <FeaturedCategories />
        <NewTrends />
        <FeaturedProducts />
        <NewArrival />
        <GreatDealsOnAirConditioner />
        <RechargeableFan />
        <HomeAppliances />
        <TopBrandProducts />
        <AppleGadgetsSection />
      </div>
    </main>
  );
}
