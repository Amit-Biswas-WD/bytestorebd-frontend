"use client";
import { productsCards } from "@/lib/cards/cards";
import ProductCard from "../product/ProductCard";

const GreatDealsOnAirConditioner = () => {
  return (
    <div className="site-container">
      <ProductCard
        heading="Great Deals on Air Conditioners"
        products={productsCards}
      />
    </div>
  );
};
export default GreatDealsOnAirConditioner;
