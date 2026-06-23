"use client";

import Link from "next/link";
import MegaMenu from "./MegaMenu";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white text-black fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="site-container">
          {/* Top Navbar Row */}
          <div className="h-12 flex items-center justify-between gap-4">
            <div className="text-xl font-bold text-[#F27F20] flex items-center gap-2">
              <button
                className="block sm:block md:block lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu />
              </button>
              <Link href="/" className="md:text-2xl sm:text-base text-xs">
                byteStore
              </Link>
            </div>

            <div className="flex-1 max-w-xl md:text-2xl sm:text-base text-xs">
              SearchBar
            </div>

            <div className="flex items-center gap-4 md:text-2xl sm:text-base text-xs">
              WishlistIcon CartIcon
            </div>
          </div>

          {/* Desktop Categories */}
          <MegaMenu />
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
