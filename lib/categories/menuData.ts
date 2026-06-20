export interface SubCategory {
  name: string;
  slug: string;
}

export interface CategoryItem {
  name: string;
  slug: string;
  subCategories?: SubCategory[]; // MacBook, iMac ইত্যাদির ভেতরের আইটেম
}

export interface MainCategory {
  name: string;
  slug: string;
  items?: CategoryItem[]; // iPhone, iPad ইত্যাদির মেইন লিস্ট
}

export const navbarCategories: MainCategory[] = [
  {
    name: "Apple Products",
    slug: "apple-products",
    items: [
      { name: "iPhone", slug: "iphone" },
      { name: "iPad", slug: "ipad" },
      {
        name: "MacBook",
        slug: "macbook",
        subCategories: [
          { name: "M5 Series Chip", slug: "m5-series-chip" },
          { name: "M4 Series Chip", slug: "m4-series-chip" },
          { name: "M3 Series Chip", slug: "m3-series-chip" },
          { name: "M2 Series Chip", slug: "m2-series-chip" },
          { name: "M1 Series Chip", slug: "m1-series-chip" },
          { name: "MacBook Cover", slug: "macbook-cover" },
          { name: "Screen Protector", slug: "screen-protector" },
        ],
      },
      { name: "Mac mini", slug: "mac-mini" },
      { name: "Power Adapter", slug: "power-adapter" },
      { name: "AirPods", slug: "airpods" },
      { name: "EarPods", slug: "earpods" },
      { name: "Apple Watch", slug: "apple-watch" },
      { name: "AirTag", slug: "airtag" },
      {
        name: "iMac",
        slug: "imac",
        subCategories: [
          { name: "M4 iMac", slug: "m4-imac" },
          { name: "M3 iMac", slug: "m3-imac" },
        ],
      },
      { name: "Mac Studio", slug: "mac-studio" },
      { name: "AirPods Max", slug: "airpods-max" },
    ],
  },
  { name: "Phones", slug: "phones" },
  { name: "Tablets & Accessories", slug: "tablets-accessories" },
  { name: "Computer & Laptops", slug: "computer-laptops" },
  { name: "Gadgets & Accessories", slug: "gadgets-accessories" },
  { name: "Home Appliances", slug: "home-appliances" },
  { name: "Lifestyle & Travel", slug: "lifestyle-travel" },
  { name: "Camera & Networking", slug: "camera-networking" },
];
