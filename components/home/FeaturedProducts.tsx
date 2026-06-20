"use client";

import { productsCards } from "@/lib/cards/cards";
import ProductCard from "../product/ProductCard";

const FeaturedProducts = () => {
  return (
    <div className="site-container">
      <ProductCard heading="Featured Products" products={productsCards} />
    </div>
  );
};

export default FeaturedProducts;
