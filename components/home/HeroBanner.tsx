"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  id: number;
  image: string;
  alt: string;
  href?: string;
}

interface BannerItem {
  id: number;
  image: string;
  alt: string;
  href?: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    image: "/images/heroBanner/Samsung-S26-Ultra-V2-4846.png",
    alt: "Galaxy S26 Ultra",
    href: "/category/phones",
  },
  {
    id: 2,
    image: "/images/heroBanner/Slider-banner-1610.png",
    alt: "MacBook Pro M4",
    href: "/category/apple-products/macbook",
  },
  {
    id: 3,
    image: "/images/heroBanner/Version-3-5735.jpeg",
    alt: "Special Offer",
    href: "/offers",
  },
  {
    id: 4,
    image: "/images/heroBanner/Web-Slider-7073.jpeg",
    alt: "New Arrivals",
    href: "/category/gadgets-accessories",
  },
];

const staticBanners: BannerItem[] = [
  {
    id: 1,
    image: "/images/heroBanner/Screenshot_71.png",
    alt: "Up to 9500tk off on Apple Watch",
    href: "/category/apple-products/apple-watch",
  },
  {
    id: 2,
    image: "/images/heroBanner/Screenshot_72.png",
    alt: "AGX HF40 Special Price",
    href: "/category/gadgets-accessories",
  },
];

const arrowBtnBase =
  "absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-[#F27F20] hover:border-[#F27F20] hover:text-white text-gray-700";

function Carousel({ slides }: { slides: CarouselSlide[] }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 400);
    },
    [isTransitioning, slides.length],
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg group bg-gray-100 select-none">
      {/* Slides */}
      {slides.map((slide, index) => (
        <Link
          key={slide.id}
          href={slide.href ?? "#"}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          tabIndex={index === current ? 0 : -1}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </Link>
      ))}

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          prev();
        }}
        aria-label="Previous slide"
        className={`${arrowBtnBase} left-3`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        aria-label="Next slide"
        className={`${arrowBtnBase} right-3`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "w-6 h-2 bg-[#F27F20]"
                : "w-2 h-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section className="site-container py-3 md:mt-32 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Left — Carousel */}
        <div className="lg:col-span-2 h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px]">
          <Carousel slides={carouselSlides} />
        </div>

        {/* Right — Static Banners */}
        <div className="hidden lg:flex flex-col gap-3">
          {staticBanners.map((banner) => (
            <Link
              key={banner.id}
              href={banner.href ?? "#"}
              className="relative flex-1 overflow-hidden rounded-lg bg-gray-100 block group"
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="33vw"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
