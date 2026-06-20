import ProductDetailsClient from "@/components/home/ProductDetailsClient";
import RelatedProduct from "@/components/home/RelatedProduct";
import { productsCards } from "@/lib/cards/cards";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const productData = productsCards.find((p) => p.slug === slug);

  if (!productData) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center">
        <h1 className="text-xl font-medium text-red-500">Product not found.</h1>
      </div>
    );
  }

  return (
    <main className="site-container space-y-14">
      {/* Main Product Layout */}
      <section aria-label="Product Information">
        <ProductDetailsClient product={productData} />
      </section>

      {/* Related / New Arrivals Section */}
      <section aria-label="New Arrivals">
        <RelatedProduct />
      </section>
    </main>
  );
}
