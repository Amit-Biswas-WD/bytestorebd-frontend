"use client";
import { useSearchParams } from "next/navigation";
import { useCategory } from "@/hooks/useCategory";
import { useProducts } from "@/hooks/useProducts";
import FilterSidebar from "@/components/category/FilterSidebar";
import ProductGrid from "@/components/category/ProductGrid";
import CategorySkeleton from "./CategorySkeleton";

export default function CategoryPageClient({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const { data: category, isLoading: categoryLoading } = useCategory(slug);

  // category._id না পেলে product query skip করব
  const { data: productData, isLoading: productsLoading } = useProducts(
    category?._id,
    searchParams,
  );

  if (categoryLoading) return <CategorySkeleton />;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">{category?.name}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Showing: ({productData?.pagination?.total ?? 0} Items)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        <FilterSidebar
          filterConfig={category?.filterConfig ?? []}
          slug={slug}
        />
        <ProductGrid
          products={productData?.data ?? []}
          isLoading={productsLoading}
        />
      </div>
    </div>
  );
}
