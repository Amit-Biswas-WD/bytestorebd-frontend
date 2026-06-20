"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navbarCategories } from "@/lib/categories/menuData";
import MenuL1Dropdown from "./MenuL1Dropdown";

const MegaMenu = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 hidden lg:block text-[#424242] text-[14px] font-medium">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-between py-4">
          {navbarCategories.map((category) => (
            <li key={category.slug} className="relative group/main">
              <Link
                href={`/category/${category.slug}`}
                className="flex items-center gap-1 transition-colors duration-200 hover:text-[#F27F20] group-hover/main:text-[#F27F20]"
              >
                <span>{category.name}</span>
                {category.items && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/main:rotate-180" />
                )}
              </Link>

              {/* Render Level 1 Dropdown if items exist */}
              {category.items && <MenuL1Dropdown items={category.items} />}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
