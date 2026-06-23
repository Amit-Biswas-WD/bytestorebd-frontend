"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Truck } from "lucide-react";

interface ColorVariant {
  name: string;
  hex: string;
}

interface ProductVariant {
  color?: string;
  storage?: string;
  currentPrice: number;
  originalPrice?: number | null;
  imageSrc: string;
  inStock: boolean;
  code?: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  imageSrc: string;
  currentPrice: number;
  originalPrice?: number | null;
  regularPrice?: number | null;
  colors?: ColorVariant[];
  storage?: string[];
  variants?: ProductVariant[];
  inStock?: boolean;
}

export default function ProductDetailsClient({
  product,
}: {
  product: Product;
}) {
  const hasVariants = product?.variants && product.variants.length > 0;
  const defaultVariant = hasVariants ? product.variants?.[0] : null;

  const [selectedColor, setSelectedColor] = useState<string>(() => {
    return defaultVariant?.color || product?.colors?.[0]?.name || "";
  });

  const [selectedStorage, setSelectedStorage] = useState<string>(() => {
    return defaultVariant?.storage || product?.storage?.[0] || "";
  });

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-5 text-red-500">Product not found.</div>;
  }

  let activeData = {
    price: product.currentPrice ?? 0, // ★ ?? 0
    regularPrice: product.regularPrice ?? product.originalPrice ?? null,
    image: product.imageSrc ?? "",
    inStock: product.inStock ?? true,
    code: "AGL32679",
  };

  if (hasVariants && product.variants) {
    const match = product.variants.find((v) => {
      const matchColor =
        !product.colors ||
        product.colors.length === 0 ||
        v.color === selectedColor;
      const matchStorage =
        !product.storage ||
        product.storage.length === 0 ||
        v.storage === selectedStorage;
      return matchColor && matchStorage;
    });

    if (match) {
      activeData = {
        price: match.currentPrice ?? 0, // ★ ?? 0
        regularPrice: match.originalPrice ?? null,
        image: match.imageSrc ?? product.imageSrc ?? "",
        inStock: match.inStock ?? true,
        code: match.code || "AGL32679",
      };
    } else {
      activeData = {
        ...activeData,
        inStock: false,
      };
    }
  }

  const variantButtonClass =
    "w-8 h-8 flex items-center justify-center bg-white rounded-full text-xl font-semibold shadow-sm text-gray-700 hover:bg-gray-50 select-none";

  const variantSelectorClass =
    "border border-gray-200 rounded-2xl p-5 bg-white";

  const selectedVariantButtonClass =
    "border-[#ff7a00] bg-white ring-1 ring-[#ff7a00] text-black font-semibold";

  const defaultVariantButtonClass =
    "border-gray-200 hover:border-gray-300 bg-white text-[#4b5563]";

  const variantStaticClass =
    "flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all";

  return (
    <div className="w-full flex flex-col md:flex-row gap-14 p-4 max-w-7xl mx-auto font-bold text-[#292929]">
      {/* Left Column: Image Section */}
      <div className="relative w-full max-w-[525px] aspect-square border rounded-2xl overflow-hidden bg-white flex-shrink-0">
        {activeData.image && (
          <Image
            src={activeData.image}
            alt={product.title}
            fill
            className="object-contain p-4"
            priority
          />
        )}
      </div>

      {/* Right Column: Info & Selectors */}
      <div className="flex-1 w-full space-y-6">
        <div>
          <h1 className="text-[32px] font-semibold mb-4">{product.title}</h1>

          {/* Live Pricing Bar */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base">
            <div className="flex items-center gap-1">
              <span className="text-2xl">
                ৳ {(activeData.price ?? 0).toLocaleString()} {/* ★ */}
              </span>
              <span className="text-xs sm:text-sm text-[#737373] font-normal">
                (Cash Price)
              </span>
            </div>

            <span className="text-gray-300">|</span>

            {activeData.regularPrice && (
              <>
                <span className="text-[#737373]/60 line-through font-normal">
                  ৳ {(activeData.regularPrice ?? 0).toLocaleString()} {/* ★ */}
                </span>
                <span className="text-gray-300">|</span>
              </>
            )}

            <div className="font-normal">
              <span>Availability:</span>{" "}
              <span
                className={
                  activeData.inStock
                    ? "text-emerald-600 font-medium"
                    : "text-red-500 font-medium"
                }
              >
                {activeData.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <span className="text-gray-300">|</span>

            <div className="font-normal">
              <span>Code:</span>{" "}
              <span className="text-[#555]">{activeData.code}</span>
            </div>
          </div>
        </div>

        {/* Product Variant Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Color Option Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className={variantSelectorClass}>
              <h3 className="text-base text-[#111111] mb-4">Color:</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => {
                        setSelectedColor(color.name);
                        setQuantity(1);
                      }}
                      className={`${variantStaticClass} ${
                        isSelected
                          ? selectedVariantButtonClass
                          : defaultVariantButtonClass
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 inline-block"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Storage Option Selector */}
          {product.storage && product.storage.length > 0 && (
            <div className={variantSelectorClass}>
              <h3 className="text-base text-[#111111] mb-4">Storage:</h3>
              <div className="flex flex-wrap gap-3">
                {product.storage.map((size) => {
                  const isSelected = selectedStorage === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setSelectedStorage(size);
                        setQuantity(1);
                      }}
                      className={`${variantStaticClass} ${
                        isSelected
                          ? selectedVariantButtonClass
                          : defaultVariantButtonClass
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Quantity Counter Selector */}
        <div className="space-y-3 pt-2">
          <h3 className="text-base text-[#111111]">Select Quantity:</h3>
          <div className="inline-flex items-center bg-[#f3f4f6] rounded-full p-1.5 min-w-[140px] justify-between">
            <button
              type="button"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className={variantButtonClass}
            >
              &minus;
            </button>
            <span className="text-base px-4 text-[#111111]">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => prev + 1)}
              className={variantButtonClass}
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex-1 py-3 px-6 rounded-full bg-[#F27F20] text-white font-medium text-base shadow-sm focus:outline-none">
            Shop Now
          </button>
          <button className="flex-1 py-3 px-6 rounded-full border border-gray-200 bg-white text-black font-medium text-base shadow-sm focus:outline-none flex items-center justify-center gap-2">
            <ShoppingCart size={18} strokeWidth={2} />
            <span>Add To Cart</span>
          </button>
        </div>

        {/* Delivery Information Bar */}
        <div className="w-full p-4 bg-white border border-gray-100 rounded-xl flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <Truck className="w-6 h-6 text-black" strokeWidth={1.5} />
          <p className="text-gray-900 font-normal text-base">
            Delivery Timescale: <span className="font-semibold">3-5 Days</span>
          </p>
        </div>
      </div>
    </div>
  );
}
