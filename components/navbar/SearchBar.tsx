"use client";
import { useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      inputRef.current?.blur();
    }
  };

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex items-center w-full h-9 rounded-full border transition-all duration-200 overflow-hidden ${
        isFocused
          ? "border-[#F27F20] shadow-[0_0_0_2px_rgba(242,127,32,0.15)]"
          : "border-gray-300"
      } bg-white`}
    >
      {/* Search Icon */}
      <button
        type="submit"
        aria-label="Search"
        className="flex-shrink-0 flex items-center justify-center w-10 h-full text-gray-400 hover:text-[#F27F20] transition-colors"
      >
        <Search className="w-4 h-4" />
      </button>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search products..."
        className="flex-1 h-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none pr-2"
      />

      {/* Clear Button */}
      {query && (
        <button
          type="button"
          onClick={clearSearch}
          aria-label="Clear search"
          className="flex-shrink-0 flex items-center justify-center w-8 h-full text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
