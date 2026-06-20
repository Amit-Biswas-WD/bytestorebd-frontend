import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CategoryItem } from "@/lib/categories/menuData";
import MenuL2Dropdown from "./MenuL2Dropdown";

interface MenuL1DropdownProps {
  items: CategoryItem[];
}

const MenuL1Dropdown = ({ items }: MenuL1DropdownProps) => {
  return (
    <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 rounded-b-md opacity-0 invisible translate-y-2 transition-all duration-200 group-hover/main:opacity-100 group-hover/main:visible group-hover/main:translate-y-0 z-50 mt-2.5">
      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item.slug} className="relative group/sub">
            <Link
              href={`/category/${item.slug}`}
              className="flex items-center justify-between px-4 py-2.5 rounded-sm text-gray-700 hover:bg-[#F59B42] hover:text-[#ffffff] transition-colors"
            >
              <span>{item.name}</span>
              {item.subCategories && (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/sub:text-[#ffffff]" />
              )}
            </Link>

            {/* Render Level 2 Dropdown if subCategories exist */}
            {item.subCategories && (
              <MenuL2Dropdown subCategories={item.subCategories} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuL1Dropdown;
