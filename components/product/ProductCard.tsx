// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
// import { useProductSlider } from "@/hooks/useProductSlider";
// interface Product {
//   id: string | number;
//   title: string;
//   imageSrc: string;
//   currentPrice: number;
//   originalPrice: number | null;
//   discountAmount?: number | null;
//   slug?: string;
// }
// interface ProductCardProps {
//   heading?: string;
//   products: Product[];
// }
// const ProductCard = ({
//   heading = "Our Latest Products",
//   products,
// }: ProductCardProps) => {
//   const { sliderRef, isAtStart, isAtEnd, scroll } = useProductSlider(products);
//   const buttonClasses =
//     "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300";
//   const activeButtonClasses =
//     "bg-black text-white border-black hover:bg-gray-800";
//   const disabledButtonClasses =
//     "bg-white text-gray-300 border-gray-200 cursor-not-allowed";
//   return (
//     <div className="">
//       {/* Section Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl md:text-3xl font-bold">{heading}</h2>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => scroll("left")}
//             disabled={isAtStart}
//             className={`${buttonClasses} ${
//               isAtStart ? disabledButtonClasses : activeButtonClasses
//             }`}
//           >
//             <LuChevronLeft size={20} />
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             disabled={isAtEnd}
//             className={`${buttonClasses} ${
//               isAtEnd ? disabledButtonClasses : activeButtonClasses
//             }`}
//           >
//             <LuChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//       <div
//         ref={sliderRef}
//         className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
//         style={{
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         <style>{`
//           .flex::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//         {products.map((product) => {
//           const { id, title, imageSrc, currentPrice, originalPrice, slug } =
//             product;
//           const productSlug = slug || id;
//           return (
//             <Link
//               href={`/product/${productSlug}`}
//               key={id}
//               className="w-[calc(100%/1.53-1rem)] md:w-[calc(100%/3.53-1rem)] lg:w-[calc(100%/4.53-1rem)] flex-shrink-0 border border-gray-200/80 rounded-2xl bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(0,0,0,0.06)] flex flex-col justify-between snap-start cursor-pointer"
//             >
//               <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden">
//                 <div className="relative flex h-[180px] sm:h-[220px] md:h-[260px] w-full items-center justify-center overflow-hidden rounded-xl p-2">
//                   <Image
//                     src={imageSrc}
//                     alt={title}
//                     fill
//                     sizes="(max-width: 768px) 53vw, (max-width: 1024px) 33vw, 25vw"
//                     className="object-contain p-4 transition-transform duration-300 hover:scale-105"
//                     priority
//                   />
//                 </div>
//                 <div className="px-4 pb-4 flex flex-col justify-between flex-grow">
//                   <div>
//                     <h3 className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold line-clamp-2">
//                       {title}
//                     </h3>
//                   </div>
//                   <div className="mt-auto pt-2">
//                     <div className="text-sm sm:text-base md:text-lg text-gray-900 font-bold">
//                       ৳ {currentPrice}
//                     </div>
//                     {originalPrice !== null && originalPrice > currentPrice && (
//                       <div className="mt-1 flex flex-wrap items-center gap-1.5">
//                         <span className="text-[10px] sm:text-xs md:text-sm line-through text-gray-400">
//                           ৳ {originalPrice}
//                         </span>
//                         <span className="text-[9px] sm:text-[10px] md:text-xs bg-green-53 text-green-600 px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
//                           ৳ {originalPrice - currentPrice} OFF
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default ProductCard;
"use client";

import Image from "next/image";
import Link from "next/link";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useProductSlider } from "@/hooks/useProductSlider";

interface Product {
  id: string | number;
  title: string;
  imageSrc: string;
  currentPrice: number;
  originalPrice: number | null;
  discountAmount?: number | null;
  slug?: string;
}

interface Tab {
  label: string;
  value: string;
}

interface ProductCardProps {
  heading?: string;
  products: Product[];
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

const ProductCard = ({
  heading = "Our Latest Products",
  products,
  tabs,
  activeTab,
  onTabChange,
}: ProductCardProps) => {
  const { sliderRef, isAtStart, isAtEnd, scroll } = useProductSlider(products);

  const buttonClasses =
    "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300";
  const activeButtonClasses =
    "bg-black text-white border-black hover:bg-gray-800";
  const disabledButtonClasses =
    "bg-white text-gray-300 border-gray-200 cursor-not-allowed";

  return (
    <div className="">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-bold">{heading}</h2>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={isAtStart}
            className={`${buttonClasses} ${
              isAtStart ? disabledButtonClasses : activeButtonClasses
            }`}
          >
            <LuChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={isAtEnd}
            className={`${buttonClasses} ${
              isAtEnd ? disabledButtonClasses : activeButtonClasses
            }`}
          >
            <LuChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ★ Tab/Brand Buttons — শুধু tabs prop থাকলে দেখাবে */}
      {tabs && tabs.length > 0 && (
        <div
          className="flex items-center gap-2 overflow-x-auto pb-2 mb-6"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onTabChange?.(tab.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border flex-shrink-0 transition-all duration-200 ${
                activeTab === tab.value
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          .flex::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {products.map((product) => {
          const { id, title, imageSrc, currentPrice, originalPrice, slug } =
            product;
          const productSlug = slug || id;

          return (
            <Link
              href={`/product/${productSlug}`}
              key={id}
              className="w-[calc(100%/1.53-1rem)] md:w-[calc(100%/3.53-1rem)] lg:w-[calc(100%/4.53-1rem)] flex-shrink-0 border border-gray-200/80 rounded-2xl bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(0,0,0,0.06)] flex flex-col justify-between snap-start cursor-pointer"
            >
              <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden">
                <div className="relative flex h-[180px] sm:h-[220px] md:h-[260px] w-full items-center justify-center overflow-hidden rounded-xl p-2">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 53vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>

                <div className="px-4 pb-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold line-clamp-2">
                      {title}
                    </h3>
                  </div>

                  <div className="mt-auto pt-2">
                    <div className="text-sm sm:text-base md:text-lg text-gray-900 font-bold">
                      ৳ {currentPrice}
                    </div>

                    {originalPrice !== null && originalPrice > currentPrice && (
                      <div className="mt-1 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] sm:text-xs md:text-sm line-through text-gray-400">
                          ৳ {originalPrice}
                        </span>
                        <span className="text-[9px] sm:text-[10px] md:text-xs bg-green-53 text-green-600 px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
                          ৳ {originalPrice - currentPrice} OFF
                        </span>
                      </div>
                    )}
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

export default ProductCard;
