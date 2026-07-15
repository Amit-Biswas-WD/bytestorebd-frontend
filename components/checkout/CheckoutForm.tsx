"use client";
import { useState, type ReactNode } from "react";
import { Banknote, CreditCard } from "lucide-react";
import { InputField } from "@/components/ui/input-field";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    area: "",
    address: "",
    note: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    area: false,
    address: false,
  });

  const errors = {
    fullName:
      touched.fullName && formData.fullName.trim().length < 3
        ? "Name must be at least 3 characters."
        : "",
    email: touched.email
      ? formData.email.trim().length === 0
        ? "Email is required."
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? ""
          : "Enter a valid email address."
      : "",
    phoneNumber:
      touched.phoneNumber && formData.phoneNumber.trim()
        ? /^\+?[0-9\s()-]{7,}$/.test(formData.phoneNumber)
          ? ""
          : "Enter a valid phone number."
        : "",
    area:
      touched.area && !formData.area ? "Please select a delivery area." : "",
    address:
      touched.address && formData.address.trim().length < 10
        ? "Address must be at least 10 characters."
        : "",
  };

  function handleChange(field: keyof typeof formData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setTouched((current) => ({
      ...current,
      [field]: true,
    }));
  }

  function handleBlur(field: keyof typeof touched) {
    setTouched((current) => ({
      ...current,
      [field]: true,
    }));
  }

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 lg:p-8">
      <h2 className="mb-8 text-xl font-bold text-[#171717]">
        Delivery Information
      </h2>

      {/* Inputs */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <InputField
            id="fullName"
            label="Full Name"
            required
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={(event) => handleChange("fullName", event.target.value)}
            onBlur={() => handleBlur("fullName")}
          />

          {errors.fullName && (
            <p className="mt-2 text-xs font-normal text-[#DC2626]">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <InputField
            id="email"
            label="Email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            onBlur={() => handleBlur("email")}
          />

          {errors.email && (
            <p className="mt-2 text-xs font-normal text-[#DC2626]">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <InputField
            id="phoneNumber"
            label="Phone Number"
            required
            placeholder="+88 Enter phone number"
            value={formData.phoneNumber}
            onChange={(event) =>
              handleChange("phoneNumber", event.target.value)
            }
            onBlur={() => handleBlur("phoneNumber")}
          />

          {errors.phoneNumber && (
            <p className="mt-2 text-xs font-normal text-[#DC2626]">
              {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* Select Area */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Select Area
            <span className="text-red-500"> *</span>
          </label>

          <select
            value={formData.area}
            onChange={(event) => handleChange("area", event.target.value)}
            onBlur={() => handleBlur("area")}
            className="h-12 w-full rounded-lg border border-input bg-background px-4 font-normal text-black outline-none"
          >
            <option value="">Select delivery area</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Khulna">Khulna</option>
          </select>

          {errors.area && (
            <p className="mt-2 text-xs font-normal text-[#DC2626]">
              {errors.area}
            </p>
          )}
        </div>
      </div>

      {/* Address */}
      <div className="mt-6">
        <InputField
          id="address"
          label="Address"
          placeholder="For example: House# 123, Road: 24, ABC Road"
          value={formData.address}
          onChange={(event) => handleChange("address", event.target.value)}
          onBlur={() => handleBlur("address")}
        />

        {errors.address && (
          <p className="mt-2 text-xs font-normal text-[#DC2626]">
            {errors.address}
          </p>
        )}
      </div>

      {/* Note */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">Note</label>

        <textarea
          rows={4}
          placeholder="For example: Leave the parcel with the neighbor if not available"
          value={formData.note}
          onChange={(event) => handleChange("note", event.target.value)}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none text-black font-normal"
        />
      </div>

      {/* Payment + Delivery */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Payment */}
        <div>
          <h3 className="mb-5 text-xl text-[#171717] font-bold">
            Payment Method
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <MethodCard
              active={paymentMethod === "cash"}
              title="Cash on Delivery"
              icon={<Banknote size={26} />}
              onSelect={() => setPaymentMethod("cash")}
            />

            <MethodCard
              active={paymentMethod === "online"}
              title="Online Payment"
              icon={<CreditCard size={26} />}
              onSelect={() => setPaymentMethod("online")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type MethodCardProps = {
  title: string;
  icon: ReactNode;
  active?: boolean;
  onSelect: () => void;
};

function MethodCard({
  title,
  icon,
  active = false,
  onSelect,
}: MethodCardProps) {
  return (
    <label
      onClick={onSelect}
      className={`relative cursor-pointer rounded-2xl border p-5 transition
      ${
        active
          ? "border-2 border-[#E36313] bg-[#FFF4EC]"
          : "border-gray-200 hover:border-orange-300"
      }`}
    >
      <input
        type="radio"
        checked={active}
        readOnly
        className="absolute right-4 top-4 h-4 w-4 accent-[#E36313]"
      />

      <div className={`mb-3 ${active ? "text-[#E36313]" : "text-gray-500"}`}>
        {icon}
      </div>

      <p
        className={`text-sm font-normal ${active ? "text-[#E36313]" : "text-[#525252]"}`}
      >
        {title}
      </p>
    </label>
  );
}
