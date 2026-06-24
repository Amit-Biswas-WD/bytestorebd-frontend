"use client";

import Link from "next/link";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white text-black fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="site-container">
          {/* Top Navbar Row */}
          <div className="h-12 flex items-center justify-between gap-4">
            {/* Logo + Hamburger */}
            <div className="text-xl font-bold text-[#F27F20] flex items-center gap-2 flex-shrink-0">
              <button
                className="block lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu />
              </button>
              <Link href="/" className="md:text-2xl sm:text-base text-xs">
                byteStore
              </Link>
            </div>

            {/* SearchBar */}
            <div className="flex-1 max-w-xl">
              <SearchBar />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
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
