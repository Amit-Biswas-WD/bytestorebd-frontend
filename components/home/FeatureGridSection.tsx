"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

//  Types 

interface CarouselSlide {
  id: number;
  image: string;
  alt: string;
  href?: string;
}

interface CategoryCard {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

//  Data 

const bannerSlides: CarouselSlide[] = [
  {
    id: 1,
    image: "/images/home/bottomSection/Induction-Cooker-Combo-5748.jpeg",
    alt: "Induction Cooker Combo",
    href: "#",
  },
  {
    id: 2,
    image: "/images/home/bottomSection/Power-Station-EcoFlow-E2000-7040.jpeg",
    alt: "Power Station EcoFlow E2000",
    href: "#",
  },
  {
    id: 3,
    image:
      "/images/home/bottomSection/Westinghouse-WKTT8012B-2-Slice-Toaster-1945.jpeg",
    alt: "Westinghouse WKTT8012B 2 Slice Toaster",
    href: "#",
  },
];

const categoryCards: CategoryCard[] = [
  {
    id: 1,
    title:
      "Bangladesh's Trusted Tech E-Commerce Store for Phones, Gadgets & Accessories",
    description:
      "In Bangladesh, Apple Gadgets has emerged as the premier source for genuine gadgets and accessories. We provide you with reliable brands all in one place, from the newest iPhones and iPads to robust MacBooks and wearables. Essentials like docks, hubs, safety gear, and stylus pens are also available. We always strive to provide you with excellent service, prompt delivery, and authentic products, whether you shop online or in-store. Our collection fits every lifestyle, whether you're a student, tech enthusiast, or regular user. Additionally, our customer care representatives are available at all times to help you with warranty inquiries, product selections, and post-purchase assistance.",
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    title: "Smartphones & Tablets from Apple, Samsung, Xiaomi, OnePlus & More",
    description:
      "Looking for a reliable smartphone or tablet? We bring you a rich lineup of the most trusted brands including Apple, Samsung, Xiaomi, OnePlus, and more. From flagship powerhouses to value-packed models, you can pick based on your needs and budget. You'll also find the latest Galaxy Tabs and iPads for work, study, or entertainment. All our phones and tablets come with guaranteed authenticity and after-sales support. If you are planning to upgrade your main device or add a secondary one, we make sure your shopping experience is smooth, safe, and satisfying. Enjoy the latest models at competitive prices, both online and in-store.",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "Mobile Accessories You Can Rely On — Cables, Cases, Power Banks",
    description:
      "The right accessories make your tech life easier. At Apple Gadgets, we offer a complete range of reliable accessories like fast-charging cables, durable power banks, magnetic wireless chargers, docks, and more. We also have high-quality phone covers and screen protectors to keep your device safe. Need a stylus or an adapter for your MacBook? You'll find that too. Our accessories are selected for both quality and compatibility, so they work exactly how you need them to. Whether you're replacing an old charger or buying your first wireless power bank, we've got the right tool for the job.",
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    title: "Smartwatches & Fitness Bands from Reliable Brands",
    description:
      "Smartwatches are more than just timekeepers now; they're your health tracker, workout buddy, and personal assistant. At Apple Gadgets, we offer a wide range of options like Apple Watch, Huawei Watch, Xiaomi bands, and other popular picks that blend design with daily usefulness. Check messages, track your steps, monitor heart rate, or just match your outfit. We bring you original wearables that work smoothly and last long, backed with proper support and quick delivery.",
    bgColor: "bg-pink-50",
  },
  {
    id: 5,
    title: "AirPods, Wireless Earbuds & Premium Audio Devices",
    description:
      "Music should sound rich, clear, and uninterrupted. That's what we aim for with our collection of audio gear. From original Apple AirPods to noise-cancelling earbuds, studio-quality over-ear headphones, and pocket-size Bluetooth speakers, we've got something for every listener. When you're tuning in during a commute or zoning out at home, our devices bring sound to life. All products are tested, original, and tuned to give you that crisp, satisfying audio experience every time.",
    bgColor: "bg-green-50",
  },
];

//  Carousel (dots only, no arrows) 

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

  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gray-100 select-none">
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
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
      ))}

      {/* Dots only */}
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

//  Main Component 

export default function FeatureGridSection() {
  return (
    <section className="site-container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Row 1 — Left card */}
        <div className={`rounded-2xl p-6 ${categoryCards[0].bgColor}`}>
          <h2 className="text-base font-bold text-gray-800 mb-3 leading-snug">
            {categoryCards[0].title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {categoryCards[0].description}
          </p>
        </div>

        {/* Row 1 — Center carousel */}
        <div className="rounded-2xl overflow-hidden relative min-h-[320px]">
          <Carousel slides={bannerSlides} />
        </div>

        {/* Row 1 — Right card */}
        <div className={`rounded-2xl p-6 ${categoryCards[1].bgColor}`}>
          <h2 className="text-base font-bold text-gray-800 mb-3 leading-snug">
            {categoryCards[1].title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {categoryCards[1].description}
          </p>
        </div>

        {/* Row 2 — Left card */}
        <div className={`rounded-2xl p-6 ${categoryCards[2].bgColor}`}>
          <h2 className="text-base font-bold text-gray-800 mb-3 leading-snug">
            {categoryCards[2].title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {categoryCards[2].description}
          </p>
        </div>

        {/* Row 2 — Center card */}
        <div className={`rounded-2xl p-6 ${categoryCards[3].bgColor}`}>
          <h2 className="text-base font-bold text-gray-800 mb-3 leading-snug">
            {categoryCards[3].title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {categoryCards[3].description}
          </p>
        </div>

        {/* Row 2 — Right card */}
        <div className={`rounded-2xl p-6 ${categoryCards[4].bgColor}`}>
          <h2 className="text-base font-bold text-gray-800 mb-3 leading-snug">
            {categoryCards[4].title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {categoryCards[4].description}
          </p>
        </div>
      </div>
    </section>
  );
}
