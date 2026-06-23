"use client";
import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { navbarCategories} from "@/lib/categories/menuData";
import MobileMenuItem from './MobileMenuItem';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}


export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (slug: string) => {
    setOpenCategory((prev) => (prev === slug ? null : slug));
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 bg-[#1a1a1a]">
          <span className="text-white font-semibold text-base">Main Menu</span>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto h-[calc(100%-56px)]">
          <ul className="divide-y divide-gray-100">
            {navbarCategories.map((category) => (
              <li key={category.slug}>
                {/* Main Category Row */}
                <button
                  onClick={() => toggleCategory(category.slug)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium text-gray-800 hover:text-[#F27F20]"
                >
                  <span>{category.name}</span>
                  {category.items && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openCategory === category.slug ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Level 1 Items */}
                {category.items && openCategory === category.slug && (
                  <ul className="bg-gray-50 border-t border-gray-100">
                    {category.items.map((item) => (
                      <MobileMenuItem key={item.slug} item={item} />
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Bottom Links */}
          <div className="border-t border-gray-200 mt-2 px-4 py-4 flex flex-col gap-3">
            <Link href="/offers" className="flex items-center gap-2 text-sm font-medium text-[#F27F20]">
              🎁 Offers
            </Link>
            <Link href="/compare" className="flex items-center gap-2 text-sm text-gray-700">
              Compare
            </Link>
            <Link href="/pre-order" className="flex items-center gap-2 text-sm text-gray-700">
              Pre-order
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}