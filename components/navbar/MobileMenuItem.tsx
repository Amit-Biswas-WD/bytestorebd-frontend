"use client";
import { CategoryItem } from "@/lib/categories/menuData";
import { ChevronRight, Link } from "lucide-react";
import { useState } from "react";

const MobileMenuItem = ({ item }: { item: CategoryItem }) => {
  const [subOpen, setSubOpen] = useState(false);

  if (!item.subCategories) {
    return (
      <li>
        <Link
          href={`/category/${item.slug}`}
          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#F27F20]"
        >
          {item.name}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setSubOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:text-[#F27F20]"
      >
        <span>{item.name}</span>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${subOpen ? "rotate-90" : ""}`}
        />
      </button>

      {subOpen && (
        <ul className="bg-gray-50 border-l-2 border-[#F27F20] ml-4">
          {item.subCategories.map((sub) => (
            <li key={sub.slug}>
              <Link
                href={`/category/${sub.slug}`}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-[#F27F20]"
              >
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MobileMenuItem;
