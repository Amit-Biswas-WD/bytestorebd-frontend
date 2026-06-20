"use client";

import { productsCards } from "@/lib/cards/cards";
import ProductCard from "../product/ProductCard";

const NewArrival = () => {
  return (
    <div className="site-container">
      <ProductCard heading="New Arrival" products={productsCards} />
    </div>
  );
};

export default NewArrival;
