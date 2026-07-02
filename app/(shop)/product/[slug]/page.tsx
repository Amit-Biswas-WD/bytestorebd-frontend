// // app/(shop)/product/[slug]/page.tsx
// import { api } from "@/lib/api";
// import {ProductDetailsClient, ProductCard} from "@/components/home/ProductDetailsClient";

// interface RawVariant {
//   color?: string;
//   storage?: string;
//   price: number;
//   originalPrice?: number;
//   images?: string[];
//   stock?: number;
//   productCode?: string;
// }

// interface Props {
//   params: Promise<{ slug: string }>;
// }

// export default async function ProductPage({ params }: Props) {
//   const { slug } = await params;

//   let productData = null;

//   try {
//     const { data } = await api.get(`/products/slug/${slug}`);
//     const raw = data.data;

//     if (raw) {
//       productData = {
//         id: raw._id as number,
//         title: raw.name as string,
//         slug: raw.slug as string,
//         imageSrc: (raw.images?.[0] ?? "") as string,
//         currentPrice: (raw.variants?.[0]?.price ?? 0) as number,
//         originalPrice: (raw.variants?.[0]?.originalPrice ?? null) as
//           | number
//           | null,
//         inStock: ((raw.variants?.[0]?.stock ?? 0) > 0) as boolean,

//         colors:
//           (raw.variants as RawVariant[])
//             ?.filter((v) => v.color)
//             .reduce<{ name: string; hex: string }[]>((acc, v) => {
//               if (!acc.find((c) => c.name === v.color)) {
//                 acc.push({ name: v.color!, hex: "#888888" });
//               }
//               return acc;
//             }, []) ?? [],

//         storage: [
//           ...new Set(
//             (raw.variants as RawVariant[])
//               ?.map((v) => v.storage)
//               .filter((s): s is string => !!s) ?? [],
//           ),
//         ],

//         variants:
//           (raw.variants as RawVariant[])?.map((v) => ({
//             color: v.color,
//             storage: v.storage,
//             currentPrice: v.price ?? 0,
//             originalPrice: v.originalPrice ?? null,
//             imageSrc: v.images?.[0] ?? raw.images?.[0] ?? "",
//             inStock: (v.stock ?? 0) > 0,
//             code: v.productCode,
//           })) ?? [],
//       };
//     }
//   } catch {
//     productData = null;
//   }

//   if (!productData) {
//     return (
//       <div className="w-full min-h-[50vh] flex items-center justify-center">
//         <h1 className="text-xl font-medium text-red-500">Product not found.</h1>
//       </div>
//     );
//   }

//   return (
//     <main className="site-container space-y-14 md:mt-32 mt-16">
//       <section aria-label="Product Information">
//         <ProductDetailsClient product={productData} />
//       </section>
//       <section aria-label="Related Product">
//          <ProductCard heading="Related Product" products={productsCards} />
//       </section>
//     </main>
//   );
// }

// app/(shop)/product/[slug]/page.tsx
import { api } from "@/lib/api";
import ProductDetailsClient from "@/components/home/ProductDetailsClient";
import ProductCard from "@/components/product/ProductCard";

interface RawVariant {
  color?: string;
  storage?: string;
  price: number;
  originalPrice?: number;
  images?: string[];
  stock?: number;
  productCode?: string;
}

interface RawProduct {
  _id: string;
  name: string;
  slug: string;
  images?: string[];
  variants?: RawVariant[];
  category?: string | { _id: string; name?: string; slug?: string };
}

interface ProductCardItem {
  id: string;
  title: string;
  slug: string;
  imageSrc: string;
  currentPrice: number;
  originalPrice: number | null;
  inStock: boolean;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  let productData = null;
  let productsCards: ProductCardItem[] = [];

  try {
    const { data } = await api.get(`/products/slug/${slug}`);
    const raw = data.data as RawProduct;

    if (raw) {
      productData = {
        id: raw._id,
        title: raw.name,
        slug: raw.slug,
        imageSrc: raw.images?.[0] ?? "",
        currentPrice: raw.variants?.[0]?.price ?? 0,
        originalPrice: raw.variants?.[0]?.originalPrice ?? null,
        inStock: (raw.variants?.[0]?.stock ?? 0) > 0,

        colors:
          raw.variants
            ?.filter((v) => v.color)
            .reduce<{ name: string; hex: string }[]>((acc, v) => {
              if (!acc.find((c) => c.name === v.color)) {
                acc.push({ name: v.color!, hex: "#888888" });
              }
              return acc;
            }, []) ?? [],

        storage: [
          ...new Set(
            raw.variants
              ?.map((v) => v.storage)
              .filter((s): s is string => !!s) ?? [],
          ),
        ],

        variants:
          raw.variants?.map((v) => ({
            color: v.color,
            storage: v.storage,
            currentPrice: v.price ?? 0,
            originalPrice: v.originalPrice ?? null,
            imageSrc: v.images?.[0] ?? raw.images?.[0] ?? "",
            inStock: (v.stock ?? 0) > 0,
            code: v.productCode,
          })) ?? [],
      };

      // ---- Related products fetch ----
      try {
        const categoryId =
          typeof raw.category === "string" ? raw.category : raw.category?._id;

        if (categoryId) {
          const { data: relatedRes } = await api.get(`/products`, {
            params: {
              category: categoryId,
              limit: 8,
            },
          });

          const relatedRaw = (relatedRes?.data ?? []) as RawProduct[];

          productsCards = relatedRaw
            .filter((p) => p._id !== raw._id)
            .slice(0, 4)
            .map((p) => ({
              id: p._id,
              title: p.name,
              slug: p.slug,
              imageSrc: p.images?.[0] ?? "",
              currentPrice: p.variants?.[0]?.price ?? 0,
              originalPrice: p.variants?.[0]?.originalPrice ?? null,
              inStock: (p.variants?.[0]?.stock ?? 0) > 0,
            }));
        }
      } catch {
        productsCards = [];
      }
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
    <main className="site-container space-y-14 md:mt-32 mt-16">
      <section aria-label="Product Information">
        <ProductDetailsClient product={productData} />
      </section>

      {productsCards.length > 0 && (
        <section aria-label="Related Product">
          <ProductCard heading="Related Product" products={productsCards} />
        </section>
      )}
    </main>
  );
}
