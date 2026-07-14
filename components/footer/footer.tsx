"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "All Products", href: "/products" },
    { label: "Offers & Deals", href: "/offers" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Top Brands", href: "/brands" },
    { label: "Blog", href: "/blog" },
  ],
  categories: [
    { label: "Apple Products", href: "/category/apple-products" },
    { label: "Phones", href: "/category/phones" },
    { label: "Tablets & Accessories", href: "/category/tablets-accessories" },
    { label: "Computer & Laptops", href: "/category/computer-laptops" },
    { label: "Gadgets & Accessories", href: "/category/gadgets-accessories" },
    { label: "Home Appliances", href: "/category/home-appliances" },
  ],
  support: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Track Your Order", href: "/track-order" },
    { label: "Return & Refund Policy", href: "/return-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]",
    icon: FaFacebookF,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    hoverColor: "hover:text-[#FF0000] hover:border-[#FF0000]",
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    hoverColor: "hover:text-[#E1306C] hover:border-[#E1306C]",
    icon: FaInstagram,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    hoverColor: "hover:text-[#000000] hover:border-[#000000]",
    icon: FaXTwitter,
  },
];

const paymentMethods = [
  { name: "bKash", bg: "#E2136E" },
  { name: "Nagad", bg: "#FF6B00" },
  { name: "Rocket", bg: "#8B008B" },
  { name: "Upay", bg: "#00AEEF" },
  { name: "Visa", bg: "#1A1F71" },
  { name: "Mastercard", bg: "#EB001B" },
  { name: "Amex", bg: "#007BC1" },
  { name: "Dutch-Bangla", bg: "#006400" },
  { name: "City Bank", bg: "#CC0000" },
  { name: "BRAC Bank", bg: "#E2001A" },
  { name: "MTB", bg: "#004B87" },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#f5f5f5", color: "#292929" }}
      className="mt-auto border-t border-gray-200"
    >
      {/* ── Main Grid ── */}
      <div className="site-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span style={{ color: "#F27F20" }}>Byte</span>
              <span style={{ color: "#111111" }}>StoreBD</span>
            </Link>
            <p style={{ color: "#666" }} className="text-sm leading-relaxed">
              Bangladesh&apos;s trusted gadget and electronics shop. Original
              products at the best prices, fast delivery.
            </p>

            {/* Contact Info */}
            <ul
              className="flex flex-col gap-3 text-sm"
              style={{ color: "#555" }}
            >
              <li className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "#F27F20" }}
                />
                <span>House 12, Road 5, Dhanmondi, Dhaka-1205</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#F27F20" }}
                />
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="hover:text-[#F27F20] transition-colors"
                >
                  +880 1XXX-XXXXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#F27F20" }}
                />
                <a
                  href="mailto:support@bytestorebd.com"
                  className="hover:text-[#F27F20] transition-colors"
                >
                  support@bytestorebd.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#F27F20" }}
                />
                <span>Saturday–Thursday, 10 AM – 9 PM</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map(({ label, href, hoverColor, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${hoverColor}`}
                  style={{ border: "1px solid #d1d5db", color: "#666" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#F27F20" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-1.5 group hover:text-[#F27F20]"
                    style={{ color: "#555" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#F27F20" }}
            >
              Categories
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-1.5 group hover:text-[#F27F20]"
                    style={{ color: "#555" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Newsletter */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#F27F20" }}
            >
              Support
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-1.5 group hover:text-[#F27F20]"
                    style={{ color: "#555" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-7">
              <p
                className="text-xs uppercase tracking-wider mb-3"
                style={{ color: "#999" }}
              >
                Subscribe to receive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 text-sm rounded-l-md px-3 py-2 outline-none transition-colors"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #d1d5db",
                    borderRight: "none",
                    color: "#292929",
                  }}
                />
                <button
                  className="px-3 py-2 text-white text-sm rounded-r-md font-medium transition-colors"
                  style={{ backgroundColor: "#F27F20" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#d96e10")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#F27F20")
                  }
                >
                  GO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

   

      {/* ── Copyright ── */}
      <div
        style={{ borderTop: "1px solid #e5e7eb", backgroundColor: "#eeeeee" }}
      >
        <div
          className="site-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "#999" }}
        >
          <p>© {new Date().getFullYear()} ByteStoreBD. All rights reserved.</p>
          <p>Made with ❤️ in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
