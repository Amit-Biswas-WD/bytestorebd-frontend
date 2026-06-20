import Link from "next/link";
import { SubCategory } from "@/lib/categories/menuData";

interface MenuL2DropdownProps {
  subCategories: SubCategory[];
}

export default function MenuL2Dropdown({ subCategories }: MenuL2DropdownProps) {
  return (
    <div className="absolute top-0 left-full w-56 bg-white shadow-xl border border-gray-100 rounded-md opacity-0 invisible translate-x-2 transition-all duration-200 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 ml-0.5 z-50">
      <ul className="flex flex-col">
        {subCategories.map((sub) => (
          <li key={sub.slug} className="">
            <Link
              href={`/category/${sub.slug}`}
              className="block px-4 py-2.5 rounded-sm text-gray-700 hover:bg-[#F59B42] hover:text-[#ffffff] transition-colors"
            >
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
