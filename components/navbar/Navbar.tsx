import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  return (
    <header className="site-container w-full bg-white text-black sticky top-0 z-50">
      {/* Top Navbar Row */}
      <div className="h-16 flex items-center justify-between gap-4">
        <div className="text-xl font-bold text-[#F27F20]">
          {" "}
          <Link href={`/`}>byteStore</Link>{" "}
        </div>

        <div className="flex-1 max-w-xl">SearchBar</div>

        <div className="flex items-center gap-4">WishlistIcon CartIcon</div>
      </div>

      {/* Categories Mega Menu Row */}
      <MegaMenu />
    </header>
  );
}
