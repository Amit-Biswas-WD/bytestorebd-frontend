// components/category/ProductGrid.tsx
"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export default function ProductGrid({
  products,
  isLoading,
}: {
  products: Product[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-72 bg-gray-100 animate-pulse rounded-2xl" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">No products found.</p>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const firstVariant = product.variants?.[0];
          const currentPrice = firstVariant?.price;
          const originalPrice = firstVariant?.originalPrice;
          const image = product.images?.[0];

          return (
            <Link
              href={`/product/${product.slug}`}
              key={product._id}
              className="block"
            >
              <div className="group flex flex-col h-full bg-white border border-[#F2F3F5] rounded-2xl overflow-hidden shadow-sm">
                {/* IMAGE */}
                <div className="relative flex h-[180px] sm:h-[220px] md:h-[260px] w-full items-center justify-center overflow-hidden p-2">
                  {image ? (
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-4"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-xl" />
                  )}
                </div>

                {/* CONTENT */}
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="mt-auto py-2">
                    {currentPrice && (
                      <div className="text-sm sm:text-base md:text-lg font-bold">
                        ৳ {currentPrice.toLocaleString()}
                      </div>
                    )}

                    {originalPrice &&
                      currentPrice &&
                      originalPrice > currentPrice && (
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-xs line-through text-gray-400">
                            ৳ {originalPrice.toLocaleString()}
                          </span>
                          <span className="text-xs text-green-600 font-medium">
                            ৳ {(originalPrice - currentPrice).toLocaleString()}{" "}
                            OFF
                          </span>
                        </div>
                      )}
                  </div>

                  {/* ACTION */}
                  <div className="flex items-center gap-4">
                    <button className="px-16 py-1 rounded-full w-full border border-gray-200 bg-white text-[#292929] text-base font-normal tracking-wide shadow-sm transition-all duration-300 ease-in-out group-hover:bg-[#F27F20] group-hover:text-white group-hover:border-[#F27F20] focus:outline-none">
                      Shop Now
                    </button>

                    <button
                      className="p-2.5 rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-50 focus:outline-none flex items-center justify-center"
                      aria-label="Shopping Cart"
                    >
                      <ShoppingCart size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
