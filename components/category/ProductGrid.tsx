"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string | number;
  title: string;
  imageSrc: string;
  currentPrice: number;
  originalPrice: number | null;
  discountAmount?: number | null;
  slug?: string;
}

interface ProductGridProps {
  heading?: string;
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const { id, title, imageSrc, currentPrice, originalPrice, slug } =
            product;

          const productSlug = slug || id;

          return (
            <Link href={`/product/${productSlug}`} key={id} className="block">
              {/* CARD */}
              <div className="group flex flex-col h-full bg-white border border-[#F2F3F5] rounded-2xl overflow-hidden shadow-sm">
                {/* IMAGE */}
                <div className="relative flex h-[180px] sm:h-[220px] md:h-[260px] w-full items-center justify-center overflow-hidden p-2">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-4"
                    priority
                  />
                </div>

                {/* CONTENT */}
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold line-clamp-2">
                    {title}
                  </h3>

                  <div className="mt-auto py-2">
                    <div className="text-sm sm:text-base md:text-lg font-bold">
                      ৳ {currentPrice}
                    </div>

                    {originalPrice && originalPrice > currentPrice && (
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs line-through text-gray-400">
                          ৳ {originalPrice}
                        </span>
                        <span className="text-xs text-green-600 font-medium">
                          ৳ {originalPrice - currentPrice} OFF
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ACTION SECTION */}
                  <div className="flex items-center gap-4">
                    {/* Shop Now Button (hover controlled by card) */}
                    <button className="px-16 py-1 rounded-full w-full border border-gray-200 bg-white text-[#292929] text-base font-normal tracking-wide shadow-sm transition-all duration-300 ease-in-out group-hover:bg-[#F27F20] group-hover:text-white group-hover:border-[#F27F20] focus:outline-none">
                      Shop Now
                    </button>

                    {/* Cart Button */}
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
};

export default ProductGrid;
