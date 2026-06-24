import { JSX } from "react";

// ===== Custom SVG Icons =====

const EmiIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect
      x="6"
      y="4"
      width="28"
      height="36"
      rx="3"
      stroke="#7B61FF"
      strokeWidth="2.2"
      fill="none"
    />
    <rect
      x="10"
      y="9"
      width="8"
      height="6"
      rx="1"
      stroke="#7B61FF"
      strokeWidth="1.8"
      fill="none"
    />
    <rect
      x="21"
      y="9"
      width="8"
      height="6"
      rx="1"
      stroke="#7B61FF"
      strokeWidth="1.8"
      fill="none"
    />
    <rect
      x="10"
      y="19"
      width="8"
      height="6"
      rx="1"
      stroke="#7B61FF"
      strokeWidth="1.8"
      fill="none"
    />
    <rect
      x="21"
      y="19"
      width="8"
      height="6"
      rx="1"
      stroke="#7B61FF"
      strokeWidth="1.8"
      fill="none"
    />
    <rect
      x="10"
      y="29"
      width="8"
      height="6"
      rx="1"
      stroke="#7B61FF"
      strokeWidth="1.8"
      fill="none"
    />
    <rect
      x="21"
      y="29"
      width="8"
      height="6"
      rx="1"
      stroke="#7B61FF"
      strokeWidth="1.8"
      fill="none"
    />
    <circle cx="37" cy="37" r="9" fill="#F27F20" />
    <text
      x="37"
      y="41"
      textAnchor="middle"
      fontSize="9"
      fill="white"
      fontWeight="bold"
    >
      %
    </text>
  </svg>
);

const DeliveryIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect
      x="2"
      y="16"
      width="28"
      height="18"
      rx="2"
      stroke="#F5A623"
      strokeWidth="2.2"
      fill="none"
    />
    <path
      d="M30 22h8l6 8v6h-14V22z"
      stroke="#F5A623"
      strokeWidth="2.2"
      fill="none"
      strokeLinejoin="round"
    />
    <circle
      cx="11"
      cy="37"
      r="4"
      stroke="#F5A623"
      strokeWidth="2.2"
      fill="none"
    />
    <circle
      cx="37"
      cy="37"
      r="4"
      stroke="#F5A623"
      strokeWidth="2.2"
      fill="none"
    />
    <circle cx="11" cy="37" r="1.5" fill="#F5A623" />
    <circle cx="37" cy="37" r="1.5" fill="#F5A623" />
    <line
      x1="2"
      y1="21"
      x2="8"
      y2="21"
      stroke="#F5A623"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="26"
      x2="6"
      y2="26"
      stroke="#F5A623"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="31"
      x2="5"
      y2="31"
      stroke="#F5A623"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ExchangeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <path
      d="M8 18l16-10 16 10v14l-16 10L8 32V18z"
      stroke="#27AE60"
      strokeWidth="2.2"
      fill="none"
      strokeLinejoin="round"
    />
    <path
      d="M8 18l16 10 16-10"
      stroke="#27AE60"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <line x1="24" y1="28" x2="24" y2="42" stroke="#27AE60" strokeWidth="2.2" />
    <path
      d="M16 13l8-5 8 5"
      stroke="#27AE60"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const BestPriceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <path
      d="M14 22c0 0 4-6 8-12 2 0 4 2 4 6v4h8c2 0 3 2 2 4l-3 10c-0.5 1.5-2 2-3 2H14V22z"
      stroke="#E74C3C"
      strokeWidth="2.2"
      fill="none"
      strokeLinejoin="round"
    />
    <rect
      x="6"
      y="22"
      width="8"
      height="16"
      rx="1.5"
      stroke="#E74C3C"
      strokeWidth="2.2"
      fill="none"
    />
    <circle cx="38" cy="12" r="8" fill="#E74C3C" />
    <text
      x="38"
      y="16"
      textAnchor="middle"
      fontSize="9"
      fill="white"
      fontWeight="bold"
    >
      ৳
    </text>
  </svg>
);

const AfterSalesIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <path
      d="M24 6C15 6 8 13 8 22v4"
      stroke="#F27F20"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    <rect
      x="4"
      y="24"
      width="6"
      height="10"
      rx="2"
      stroke="#F27F20"
      strokeWidth="2.2"
      fill="none"
    />
    <rect
      x="38"
      y="24"
      width="6"
      height="10"
      rx="2"
      stroke="#F27F20"
      strokeWidth="2.2"
      fill="none"
    />
    <path
      d="M40 26v-4C40 13 33 6 24 6"
      stroke="#F27F20"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 38c0 0 3 4 8 4s8-4 8-4"
      stroke="#F27F20"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    <circle
      cx="24"
      cy="32"
      r="3"
      stroke="#F27F20"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// ===== Service Data =====
const services: { id: number; icon: JSX.Element; label: string }[] = [
  { id: 1, icon: <EmiIcon />, label: "36 Months EMI" },
  { id: 2, icon: <DeliveryIcon />, label: "Fastest Home Delivery" },
  { id: 3, icon: <ExchangeIcon />, label: "Exchange Facility" },
  { id: 4, icon: <BestPriceIcon />, label: "Best Price Deals" },
  { id: 5, icon: <AfterSalesIcon />, label: "After-Sales Service" },
];

// ===== Component =====
const ServiceHighlights = () => {
  return (
    <section className="site-container">
      <div className="border border-gray-200 rounded-xl px-6 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex items-center gap-3 ${
                index !== services.length - 1
                  ? "lg:border-r lg:border-gray-200"
                  : ""
              } lg:px-4 first:lg:pl-0 last:lg:pr-0`}
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <span className="text-sm font-medium text-gray-700 leading-tight">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
