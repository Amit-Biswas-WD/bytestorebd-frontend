"use client";

import { productsCards } from "@/lib/cards/cards";
import ProductCard from "../product/ProductCard";

const NewTrends = () => {
  return (
    <div className="container">
      <ProductCard products={productsCards} />

      {/* <ProductCard heading="Our New Trends" products={productsCards} /> */}
    </div>
  );
};

export default NewTrends;
