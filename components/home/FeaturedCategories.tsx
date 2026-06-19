"use client";
import { featuredCategories } from "@/lib/categories/categories";
import Image from "next/image";

const FeaturedCategories = () => {
  return (
    <section className="container">
      <h2 className="mb-8 lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">
        Featured Categories
      </h2>

      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-8">
        {featuredCategories.map((category) => (
          <div
            key={category.id}
            className="group flex cursor-pointer flex-col items-center rounded-lg p-2 transition-all hover:shadow-md"
          >
            <div className="relative mb-3 h-14 w-14">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <h3 className="text-center text-xs font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
