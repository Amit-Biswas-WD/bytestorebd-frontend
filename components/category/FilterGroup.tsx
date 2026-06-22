// components/category/FilterGroup.tsx
"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ChevronUp, ChevronDown } from "lucide-react";
import { FilterConfig } from "@/types";

export default function FilterGroup({
  field,
  selected,
  onChange,
}: {
  field: FilterConfig;
  selected: string[];
  onChange: (field: string, value: string, checked: boolean) => void;
}) {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const options = field.options ?? [];
  const filtered = field.searchable
    ? options.filter((o) =>
        o.label.toLowerCase().includes(search.toLowerCase()),
      )
    : options;

  const visible = showAll ? filtered : filtered.slice(0, 5);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full font-medium mb-2"
      >
        {field.label}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {open && (
        <div className="space-y-2">
          {field.searchable && (
            <Input
              placeholder={`Search ${field.label}`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-2 h-8 text-sm"
            />
          )}

          {visible.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <Checkbox
                checked={selected.includes(opt.value)}
                onCheckedChange={(checked) =>
                  onChange(field.field, opt.value, checked as boolean)
                }
              />
              {opt.label}
            </label>
          ))}

          {filtered.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-orange-500 text-xs font-medium"
            >
              {showAll ? "- Show Less" : "+ More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
