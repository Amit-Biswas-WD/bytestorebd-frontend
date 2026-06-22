// import PriceRangeFilter from "@/components/category/PriceRangeFilter";
// import ProductGrid from "@/components/category/ProductGrid";
// import { ChevronRight } from "lucide-react";
// import { productsCards } from "@/lib/cards/cards";

// interface Props {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export default async function CategoryPage({ params }: Props) {
//   const { slug } = await params;

//   return (
//     <div className="site-container py-10">
//       <h1 className="text-2xl font-bold capitalize">
//         Category: {slug.replace("-", " ")}
//       </h1>
//       <p className="text-gray-500 mt-2">Showing products for {slug}</p>
//       <div className="my-10">
//         <p className="text-sm text-muted flex items-center">
//           <span>Home</span> <ChevronRight size={16} />{" "}
//           <span> mobile phone</span> <ChevronRight size={16} />{" "}
//           <span>iphone</span>
//         </p>
//         <h1 className="text-5xl font-primary">{slug.replace("-", " ")}</h1>
//       </div>
//       <div className="w-full flex gap-4">
//         <div className="w-[24%]">
//           <PriceRangeFilter />
//         </div>
//         <div className="w-[76%]">
//           <ProductGrid products={productsCards} />
//         </div>
//       </div>
//     </div>
//   );
// }

import CategoryPageClient from "../CategoryPageClient";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CategoryPageClient slug={slug} />;
}
