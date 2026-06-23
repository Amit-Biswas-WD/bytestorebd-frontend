// app/(shop)/product/[slug]/page.tsx
import { api } from "@/lib/api";
import ProductDetailsClient from "@/components/home/ProductDetailsClient";
import RelatedProduct from "@/components/home/RelatedProduct";

interface RawVariant {
  color?: string;
  storage?: string;
  price: number;
  originalPrice?: number;
  images?: string[];
  stock?: number;
  productCode?: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  let productData = null;

  try {
    const { data } = await api.get(`/products/slug/${slug}`);
    const raw = data.data;

    if (raw) {
      productData = {
        id: raw._id as number,
        title: raw.name as string,
        slug: raw.slug as string,
        imageSrc: (raw.images?.[0] ?? "") as string,
        currentPrice: (raw.variants?.[0]?.price ?? 0) as number,
        originalPrice: (raw.variants?.[0]?.originalPrice ?? null) as
          | number
          | null,
        inStock: ((raw.variants?.[0]?.stock ?? 0) > 0) as boolean,

        colors:
          (raw.variants as RawVariant[])
            ?.filter((v) => v.color)
            .reduce<{ name: string; hex: string }[]>((acc, v) => {
              if (!acc.find((c) => c.name === v.color)) {
                acc.push({ name: v.color!, hex: "#888888" });
              }
              return acc;
            }, []) ?? [],

        storage: [
          ...new Set(
            (raw.variants as RawVariant[])
              ?.map((v) => v.storage)
              .filter((s): s is string => !!s) ?? [],
          ),
        ],

        variants:
          (raw.variants as RawVariant[])?.map((v) => ({
            color: v.color,
            storage: v.storage,
            currentPrice: v.price ?? 0,
            originalPrice: v.originalPrice ?? null,
            imageSrc: v.images?.[0] ?? raw.images?.[0] ?? "",
            inStock: (v.stock ?? 0) > 0,
            code: v.productCode,
          })) ?? [],
      };
    }
  } catch {
    productData = null;
  }

  if (!productData) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center">
        <h1 className="text-xl font-medium text-red-500">Product not found.</h1>
      </div>
    );
  }

  return (
    <main className="site-container space-y-14">
      <section aria-label="Product Information">
        <ProductDetailsClient product={productData} />
      </section>
      <section aria-label="New Arrivals">
        <RelatedProduct />
      </section>
    </main>
  );
}
