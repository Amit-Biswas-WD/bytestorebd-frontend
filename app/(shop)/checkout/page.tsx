import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  return (
    <main className="site-container md:my-32 my-46">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 text-sm font-medium cursor-pointer">
          <ArrowLeft size={18} />
          Back
        </button>

        <h1 className="text-3xl font-bold md:text-4xl text-[#171717]">
          Checkout & Confirm Order
        </h1>
      </div>

      {/* Notice */}
      <div className="mt-8 rounded-2xl border border-orange-200 bg-[#FFF3E3] px-5 py-4 text-sm font-normal text-[#424242]">
        অর্ডার সংক্রান্ত যেকোনো প্রয়োজনে কথা বলুন আমাদের কাস্টমার সার্ভিস
        প্রতিনিধির সাথে - 09678148148
      </div>

      {/* Body */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_430px]">
        <CheckoutForm />

        <OrderSummary />
      </div>
    </main>
  );
}
