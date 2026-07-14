import ProductCard from "../product/ProductCard";

const RelatedProduct = ({relatedProduct}) => {
  return (
    <div className="site-container">
      <ProductCard heading="Related Product" products={relatedProduct} />
    </div>
  );
};

export default RelatedProduct;
