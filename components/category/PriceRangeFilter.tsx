// components/category/PriceRangeFilter.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PriceRangeFilterProps {
  label: string;
  currentMin: string;
  currentMax: string;
  onApply: (min: string, max: string) => void;
}

export default function PriceRangeFilter({
  label,
  currentMin,
  currentMax,
  onApply,
}: PriceRangeFilterProps) {
  const [min, setMin] = useState(currentMin);
  const [max, setMax] = useState(currentMax);

  return (
    <div className="border-b py-4">
      <p className="font-medium mb-2">{label}</p>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="0"
          className="h-8 text-sm"
        />
        <span>-</span>
        <Input
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Max"
          className="h-8 text-sm"
        />
        <Button size="icon" className="h-8 w-8" onClick={() => onApply(min, max)}>
          ▶
        </Button>
      </div>
    </div>
  );
}