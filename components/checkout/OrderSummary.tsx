"use client";

import Image from "next/image";
import { AlertCircle } from "lucide-react";

export default function OrderSummary() {
  return (
    <aside className="sticky top-24 h-fit rounded-3xl border border-gray-200 bg-white p-6 text-[#171717]">
      <h2 className="mb-8 text-xl font-bold">Order Summary</h2>

      {/* Product */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl border">
          <Image
            src="/products/iphone.png"
            alt="iPhone"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="font-medium font-base text-'[#171717]">
            iPhone 17 Pro Max
          </h4>

          <p className="text-sm font-normal text-[#A3A3A3]">1 quantity</p>
        </div>
      </div>

      {/* Coupon */}
      <div className="mt-8">
        <h4 className="mb-3 font-semibold text-base text-[#292929]">
          Apply Coupon
        </h4>

        <div className="flex overflow-hidden rounded-full border">
          <input
            type="text"
            placeholder="Apply Coupon"
            className="flex-1 px-5 outline-none"
          />

          <button className="m-1 rounded-full bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
            Apply Coupon
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="mt-8 space-y-4 text-lg">
        <div className="flex items-center justify-between">
          <span className="text-base font-normal text-[#525252]">
            Sub Total (1 items)
          </span>

          <span className="font-semibold text-base text-[#171717]">
            ৳ 150,999
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base font-normal text-[#525252]">Delivery</span>

          <span className="flex items-center gap-2 text-[#171717] text-sm font-normal">
            <AlertCircle size={16} className="text-orange-500" />
            will be added
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base font-normal text-[#525252]">Discount</span>

          <span className="font-semibold text-base text-[#171717]">৳ 0</span>
        </div>

        <hr />

        <div className="flex items-center justify-between text-lg font-semibold text-[#171717]">
          <span>Total Amount</span>

          <span className="text-base font-semibold text-[#171717]">
            ৳ 150,999
          </span>
        </div>
      </div>

      {/* Terms */}
      <label className="mt-8 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          defaultChecked
          className="mt-1 h-5 w-5 accent-orange-500"
        />

        <span className="text-sm text-[#737373] font-normal">
          I have read & agree to the website{" "}
          <span className="text-orange-500">Terms and Conditions</span>
        </span>
      </label>

      {/* Button */}
      <button className="mt-8 h-14 w-full rounded-full bg-[#F27F20] text-white font-medium text-base shadow-sm focus:outline-none">
        Confirm & Place Order{" "}
      </button>
    </aside>
  );
}
