"use client";

import { productsCards } from "@/lib/cards/cards";
import ProductCard from "../product/ProductCard";

const HomeAppliances = () => {
  return (
    <div className="container">
      <ProductCard heading="Home Appliances" products={productsCards} />
    </div>
  );
};

export default HomeAppliances;
