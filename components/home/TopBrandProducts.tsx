"use client";

import { productsCards } from "@/lib/cards/cards";
import ProductCard from "../product/ProductCard";

const TopBrandProducts = () => {
  return (
    <div className="container">
      <ProductCard heading="Top Brand Products" products={productsCards} />
    </div>
  );
};
export default TopBrandProducts;
