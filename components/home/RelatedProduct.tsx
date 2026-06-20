import { productsCards } from "@/lib/cards/cards";
import ProductCard from "../product/ProductCard";

const RelatedProduct = () => {
  return (
    <div className="site-container">
      <ProductCard heading="Related Product" products={productsCards} />
    </div>
  );
};

export default RelatedProduct;
