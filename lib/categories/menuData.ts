export interface SubCategory {
  name: string;
  slug: string;
}

export interface CategoryItem {
  name: string;
  slug: string;
  subCategories?: SubCategory[];
}

export interface MainCategory {
  name: string;
  slug: string;
  items?: CategoryItem[];
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
  {
    name: "Phones",
    slug: "phones",
    items: [
      { name: "iPhone", slug: "iphone" },
      { name: "Samsung", slug: "samsung" },
      { name: "Google", slug: "google" },
      { name: "Motorola", slug: "motorola" },
      { name: "Xiaomi", slug: "xiaomi" },
      { name: "Phone Cover", slug: "phone-cover" },
      { name: "Screen Protector", slug: "screen-protector" },
      { name: "Camera Protector", slug: "camera-protector" },
      { name: "Honor", slug: "honor" },
      { name: "OnePlus", slug: "oneplus" },
      { name: "iqoo", slug: "iqoo" },
      { name: "realme", slug: "realme" },
      { name: "Nothing", slug: "nothing" },
      { name: "Huawei", slug: "huawei" },
      { name: "Oppo", slug: "oppo" },
      { name: "vivo", slug: "vivo" },
      { name: "Nokia", slug: "nokia" },
    ],
  },
  {
    name: "Tablets & Accessories",
    slug: "tablets-accessories",
    items: [
      { name: "iPad", slug: "ipad" },
      { name: "Xiaomi Pad", slug: "xiaomi-pad" },
      { name: "Samsung Tab", slug: "samsung-tab" },
      { name: "Amazon Tab", slug: "amazon-tab" },
      { name: "HONOR Tab", slug: "honor-tab" },
      { name: "Smart Pen", slug: "smart-pen" },
      { name: "Hubs & Docks", slug: "hubs-docks" },
      { name: "Cover & Cases", slug: "cover-cases" },
      { name: "Screen Protectors", slug: "screen-protectors" },
    ],
  },
  {
    name: "Computer & Laptops",
    slug: "computer-laptops",
    items: [
      {
        name: "Laptops",
        slug: "laptops",
        subCategories: [
          { name: "Gaming", slug: "gaming-laptop" },
          { name: "Ultrabook", slug: "ultrabook" },
          { name: "Business Class", slug: "business-class" },
        ],
      },
      { name: "Hubs & Docks", slug: "hubs-docks" },
      { name: "Monitor", slug: "monitor" },
      { name: "Keyboard", slug: "keyboard" },
      { name: "Mouse", slug: "mouse" },
      { name: "Mouse Pad", slug: "mouse-pad" },
      { name: "Printer & Scanner", slug: "printer-scanner" },
      { name: "Storage", slug: "storage" },
      { name: "Microphone", slug: "microphone" },
    ],
  },
  {
    name: "Gadgets & Accessories",
    slug: "gadgets-accessories",
    items: [
      {
        name: "Audio",
        slug: "audio",
        subCategories: [
          { name: "Earbuds", slug: "earbuds" },
          { name: "Overhead Headphones", slug: "overhead-headphones" },
          { name: "Wired Headphone", slug: "wired-headphone" },
          { name: "Wireless Headphone", slug: "wireless-headphone" },
          { name: "Speakers", slug: "speakers" },
        ],
      },
      {
        name: "Cover & Protectors",
        slug: "cover-protectors",
        subCategories: [
          { name: "Phone Cover", slug: "phone-cover" },
          { name: "Airpods Case", slug: "airpods-case" },
          { name: "Phone Screen Protector", slug: "phone-screen-protector" },
          { name: "Phone Camera Protector", slug: "phone-camera-protector" },
          { name: "MacBook Cover", slug: "macbook-cover" },
          {
            name: "MacBook Screen Protector",
            slug: "macbook-screen-protector",
          },
        ],
      },
      {
        name: "Cables",
        slug: "cables",
        subCategories: [
          { name: "Lightning Cable", slug: "lightning-cable" },
          { name: "Type-C Cable", slug: "type-c-cable" },
          { name: "Converter", slug: "converter" },
          { name: "Multiple Cable", slug: "multiple-cable" },
          { name: "Micro USB Cable", slug: "micro-usb-cable" },
        ],
      },
      { name: "Chargers", slug: "chargers" },
      { name: "Power Bank", slug: "power-bank" },
      { name: "Smart Tag", slug: "smart-tag" },
      { name: "Wireless Charger", slug: "wireless-charger" },
      { name: "Multiplugs", slug: "multiplugs" },
      { name: "Car Accessories", slug: "car-accessories" },
      { name: "Gaming", slug: "gaming" },
      { name: "Smart Gadgets", slug: "smart-gadgets" },
    ],
  },
  {
    name: "Home Appliances",
    slug: "home-appliances",
    items: [
      {
        name: "Kitchen Appliances",
        slug: "kitchen-appliances",
        subCategories: [
          { name: "Mixer Grinder & Blender", slug: "mixer-grinder-blender" },
          { name: "Air Fryer", slug: "air-fryer" },
          { name: "Microwave Oven", slug: "microwave-oven" },
          { name: "Rice Cooker", slug: "rice-cooker" },
          { name: "Induction Cooker", slug: "induction-cooker" },
          { name: "Toaster", slug: "toaster" },
          { name: "Coffee Maker", slug: "coffee-maker" },
          { name: "Gas Stove", slug: "gas-stove" },
          { name: "Electric Kettle", slug: "electric-kettle" },
          { name: "Kitchen Hood", slug: "kitchen-hood" },
          { name: "Dish Washers", slug: "dish-washers" },
        ],
      },
      {
        name: "Air Conditioner",
        slug: "air-conditioner",
        subCategories: [
          { name: "Gree", slug: "gree" },
          { name: "Haier", slug: "haier" },
          { name: "Hisense", slug: "hisense" },
          { name: "Midea", slug: "midea" },
          { name: "Walton", slug: "walton" },
        ],
      },
      {
        name: "TV",
        slug: "tv",
        subCategories: [
          { name: "Samsung", slug: "samsung-tv" },
          { name: "LG", slug: "lg-tv" },
          { name: "Sony Plus", slug: "sony-plus-tv" },
          { name: "Haier", slug: "haier-tv" },
          { name: "Xiaomi", slug: "xiaomi-tv" },
          { name: "Hisense", slug: "hisense-tv" },
          { name: "Vision", slug: "vision-tv" },
          { name: "Minister", slug: "minister-tv" },
          { name: "Toshiba", slug: "toshiba-tv" },
          { name: "TCL", slug: "tcl-tv" },
        ],
      },
      {
        name: "Clock",
        slug: "clock",
        subCategories: [
          { name: "Alarm Clock", slug: "alarm-clock" },
          { name: "Wall Clock", slug: "wall-clock" },
          { name: "Stopwatch", slug: "stopwatch" },
        ],
      },
      { name: "Refrigerator & Freezer", slug: "refrigerator-freezer" },
      { name: "Washing Machine", slug: "washing-machine" },
      { name: "Power Station", slug: "power-station" },
      { name: "Solar Panel", slug: "solar-panel" },
      { name: "Charger Fan", slug: "charger-fan" },
      { name: "Geyser", slug: "geyser" },
      { name: "Room Heater", slug: "room-heater" },
      { name: "Iron", slug: "iron" },
      { name: "Vacuum Cleaner", slug: "vacuum-cleaner" },
      { name: "Lighting", slug: "lighting" },
      { name: "Smart Scale", slug: "smart-scale" },
    ],
  },
  {
    name: "Lifestyle & Travel",
    slug: "lifestyle-travel",
    items: [
      {
        name: "Smart Watch",
        slug: "smart-watch",
        subCategories: [
          { name: "Apple", slug: "apple-watch" },
          { name: "Samsung", slug: "samsung-watch" },
          { name: "Amazfit", slug: "amazfit-watch" },
          { name: "Haylou", slug: "haylou-watch" },
          { name: "Kieslect", slug: "kieslect-watch" },
          { name: "Xiaomi", slug: "xiaomi-watch" },
          { name: "Google", slug: "google-watch" },
          { name: "Huawei", slug: "huawei-watch" },
          { name: "Zeblaze", slug: "zeblaze-watch" },
          { name: "Oraimo", slug: "oraimo-watch" },
          { name: "VALDUS", slug: "valdus-watch" },
          { name: "YES", slug: "yes-watch" },
          { name: "QCY", slug: "qcy-watch" },
          { name: "Realme", slug: "realme-watch" },
          { name: "Awei", slug: "awei-watch" },
          { name: "WiWU", slug: "wiwu-watch" },
          { name: "IMIKI", slug: "imiki-watch" },
          { name: "Kospet", slug: "kospet-watch" },
        ],
      },
      {
        name: "Watch",
        slug: "watch",
        subCategories: [
          { name: "Men's Watch", slug: "mens-watch" },
          { name: "Women's Watch", slug: "womens-watch" },
        ],
      },
      { name: "Smart Band", slug: "smart-band" },
      {
        name: "Watch Accessories",
        slug: "watch-accessories",
        subCategories: [
          { name: "Watch Strap", slug: "watch-strap" },
          { name: "Watch Protector", slug: "watch-protector" },
        ],
      },
      { name: "Trimmer", slug: "trimmer" },
      { name: "Hair Dryer", slug: "hair-dryer" },
      { name: "Straightener", slug: "straightener" },
      {
        name: "Bag",
        slug: "bag",
        subCategories: [
          { name: "Backpack", slug: "backpack" },
          { name: "Crossbody Bag", slug: "crossbody-bag" },
        ],
      },
    ],
  },
];
