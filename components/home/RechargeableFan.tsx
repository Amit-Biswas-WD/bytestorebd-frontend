"use client";

import { productsCards } from "@/lib/cards/cards";
import ProductCard from "../product/ProductCard";

const RechargeableFan = () => {
  return (
    <div className="container">
      <ProductCard heading="Rechargeable Fan" products={productsCards} />
    </div>
  );
};
export default RechargeableFan;
