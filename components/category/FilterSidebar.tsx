"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FilterConfig } from "@/types";
import FilterGroup from "./FilterGroup";
import PriceRangeFilter from "./PriceRangeFilter";

export default function FilterSidebar({
  filterConfig,
}: {
  filterConfig: FilterConfig[];
  slug: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateCheckboxFilter = (field: string, value: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    const existing = params.get(field)?.split(",").filter(Boolean) || [];

    const updated = checked
      ? [...existing, value]
      : existing.filter((v) => v !== value);

    if (updated.length > 0) params.set(field, updated.join(","));
    else params.delete(field);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const updatePriceFilter = (min: string, max: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (min) params.set("minPrice", min); else params.delete("minPrice");
    if (max) params.set("maxPrice", max); else params.delete("maxPrice");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <aside className="border rounded-lg p-4 h-fit sticky top-4">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      {filterConfig.map((field) =>
        field.type === "range" ? (
          <PriceRangeFilter
            key={field.field}
            label={field.label}
            currentMin={searchParams.get("minPrice") ?? ""}
            currentMax={searchParams.get("maxPrice") ?? ""}
            onApply={updatePriceFilter}
          />
        ) : (
          <FilterGroup
            key={field.field}
            field={field}
            selected={searchParams.get(field.field)?.split(",") ?? []}
            onChange={updateCheckboxFilter}
          />
        ),
      )}
    </aside>
  );
}