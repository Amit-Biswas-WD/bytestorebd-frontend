"use client";

import { useRef, useState, useEffect } from "react";

export const useProductSlider = (dependency?: unknown[]) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScrollStatus = () => {
    const el = sliderRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setIsAtStart(scrollLeft <= 5);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    handleScrollStatus();
    el.addEventListener("scroll", handleScrollStatus);
    return () => el.removeEventListener("scroll", handleScrollStatus);
  }, [dependency]);

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return { sliderRef, isAtStart, isAtEnd, scroll };
};
