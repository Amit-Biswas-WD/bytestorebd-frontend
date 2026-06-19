# 🍎 ByteStoreBd — Frontend

A full-featured **ByteStoreBd e-commerce** web app — built as an upgraded clone of ByteStoreBd with a Review & Rating system, Wishlist, Stock Alerts, and more, on top of a modern Next.js stack.

> 🔗 **Live Demo:** [your-vercel-link.vercel.app](#)
> 🔗 **Backend Repo:** [bytestorebd-backend](#)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📸 Screenshots

| Homepage | Product Detail | Category + Filters |
|---|---|---|
| ![homepage](./public/screenshots/home.png) | ![product](./public/screenshots/product.png) | ![category](./public/screenshots/category.png) |

| Cart & Checkout | Admin Dashboard | Wishlist |
|---|---|---|
| ![checkout](./public/screenshots/checkout.png) | ![admin](./public/screenshots/admin.png) | ![wishlist](./public/screenshots/wishlist.png) |

> *(Replace the placeholders above with actual screenshots before submitting/sharing this project.)*

---

## ✨ Features

- 🛍️ **Dynamic category pages** with category-specific filter sidebar (price, series, size, storage, brand)
- 🔍 **Search with live suggestions** (typeahead)
- 🧩 **Mega Menu** — 2-level nested dropdown built from a MongoDB category tree
- 🎨 **Variant selector** — color / region / storage combinations update price, image & stock in real time
- ⭐ **Review & Rating system** — verified-buyer badge, star breakdown, paginated reviews
- ❤️ **Wishlist** — save products, move to cart
- 🔔 **Stock Alert / Notify Me** — get emailed when an out-of-stock item is back
- 🛒 **Cart** — Redux Toolkit state, persisted to `localStorage`
- 💳 **Checkout** — SSLCommerz payment integration (Bangladesh) + Cash on Delivery
- 🔐 **JWT Auth** — access + refresh token flow, protected routes via middleware
- 🛠️ **Admin Dashboard** — manage products, categories, orders, users, banners, and reviews
- ⚡ **TanStack Query** caching — instant Mega Menu loads, background refetching
- 📈 **SEO-ready** — per-page `generateMetadata`, OG tags
- 💀 **Loading & error states** — custom `loading.tsx` and `not-found.tsx` across routes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + [Shadcn/UI](https://ui.shadcn.com/) |
| Global State | Redux Toolkit (cart) |
| Server State | TanStack Query |
| Forms & Validation | React Hook Form + Zod |
| HTTP Client | Axios |
| Image Hosting | Cloudinary |
| Payments | SSLCommerz |
| Deployment | Vercel |

---

## 📁 Folder Structure

```
bytestorebd-frontend/
│
├── app/                               # Next.js App Router (file-based routing)
│   ├── (auth)/                        # Route Group — no URL segment, isolated layout
│   │   ├── login/
│   │   │   └── page.tsx               # /login
│   │   ├── register/
│   │   │   └── page.tsx               # /register
│   │   └── layout.tsx                 # Centered card layout, no navbar/footer
│   │
│   ├── (shop)/                        # Route Group — main storefront pages
│   │   ├── page.tsx                   # / (Homepage)
│   │   ├── category/[slug]/page.tsx   # /category/[slug]
│   │   ├── product/[slug]/page.tsx    # /product/[slug]
│   │   ├── cart/page.tsx              # /cart
│   │   ├── checkout/page.tsx          # /checkout
│   │   ├── compare/page.tsx           # /compare
│   │   ├── search/page.tsx            # /search
│   │   ├── offers/page.tsx            # /offers
│   │   ├── wishlist/page.tsx          # /wishlist
│   │   ├── pre-order/page.tsx         # /pre-order
│   │   ├── profile/page.tsx           # /profile
│   │   ├── orders/page.tsx            # /orders
│   │   ├── loading.tsx                # Loading skeleton for this group
│   │   └── not-found.tsx              # 404 within shop routes
│   │
│   ├── admin/                         # Admin Dashboard (role-protected)
│   │   ├── page.tsx                   # /admin — stats overview
│   │   ├── layout.tsx                 # Sidebar layout
│   │   ├── products/
│   │   │   ├── page.tsx               # /admin/products
│   │   │   ├── new/page.tsx           # /admin/products/new
│   │   │   └── edit/[id]/page.tsx     # /admin/products/edit/:id
│   │   ├── categories/page.tsx
│   │   ├── orders/page.tsx
│   │   ├── users/page.tsx
│   │   ├── banners/page.tsx
│   │   └── reviews/page.tsx
│   │
│   ├── layout.tsx                     # Root layout — Navbar + Footer + Providers
│   ├── globals.css                    # Tailwind v4 entry point
│   ├── error.tsx                      # Global error boundary
│   └── not-found.tsx                  # Root-level 404
│
├── components/
│   ├── navbar/
│   │   ├── Navbar.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MenuL1Dropdown.tsx
│   │   ├── MenuL2Dropdown.tsx
│   │   ├── SearchBar.tsx              # with typeahead suggestions
│   │   ├── CartIcon.tsx
│   │   └── WishlistIcon.tsx
│   │
│   ├── home/
│   │   ├── HeroBanner.tsx
│   │   ├── FeaturedCategories.tsx
│   │   ├── TabSliderSection.tsx       # reused: New Trends / Featured / New Arrival
│   │   ├── HomeAppliances.tsx
│   │   ├── TopBrandSection.tsx
│   │   └── PromoBanner.tsx
│   │
│   ├── product/
│   │   ├── ProductCard.tsx            # reused EVERYWHERE — single source of truth
│   │   ├── ProductSlider.tsx
│   │   ├── VariantSelector.tsx
│   │   ├── ImageGallery.tsx
│   │   ├── QuantityInput.tsx
│   │   ├── ReviewList.tsx
│   │   ├── ReviewForm.tsx
│   │   ├── RatingStars.tsx
│   │   └── NotifyMeButton.tsx
│   │
│   ├── category/
│   │   ├── FilterSidebar.tsx
│   │   ├── FilterGroup.tsx            # reusable checkbox group
│   │   ├── PriceRangeFilter.tsx
│   │   └── ProductGrid.tsx
│   │
│   ├── cart/
│   │   ├── CartItem.tsx
│   │   └── PriceSummary.tsx
│   │
│   ├── checkout/
│   │   ├── ShippingForm.tsx
│   │   └── PaymentMethodSelector.tsx
│   │
│   ├── admin/
│   │   ├── StatCard.tsx
│   │   ├── ProductForm.tsx
│   │   ├── CategoryTree.tsx
│   │   ├── OrderTable.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── shared/
│   │   ├── Footer.tsx
│   │   ├── Breadcrumb.tsxproviders
│   │   ├── Pagination.tsx
│   │   └── EmptyState.tsx
│   │
│   └── ui/                            # Shadcn/UI base components (Button, Input, Dialog...)
│
├── store/                             # Redux Toolkit
│   ├── store.ts
│   ├── cartSlice.ts
│   └── hooks.ts                       # typed useAppDispatch / useAppSelector
│
├── lib/
│   ├── api.ts                         # Axios instance + refresh-token interceptor
│   ├── utils.ts                       # cn(), price formatter, etc.
│   ├── seo.ts                         # generateMetadata helpers
│   ├── constants.ts
│   └── validators/                    # Zod schemas (shared shape with backend)
│       ├── auth.schema.ts
│       ├── checkout.schema.ts
│       └── review.schema.ts
│
├── hooks/                             # TanStack Query custom hooks
│   ├── useCart.ts
│   ├── useProducts.ts
│   ├── useCategories.ts
│   ├── useWishlist.ts
│   └── useReviews.ts
│
├── providers/
│   ├── QueryProvider.tsx              # TanStack Query client provider
│   └── ReduxProvider.tsx
│
├── types/
│   └── index.ts                       # Product, User, Order, Variant, Review interfaces
│
├── public/
│   ├── images/
│   └── icons/
│
├── middleware.ts                      # Protects /admin, /profile, /orders, /checkout
├── next.config.ts
├── tailwind.config.ts                 # Minimal — Tailwind v4 is mostly CSS-first
├── tsconfig.json
├── .env.local
└── package.json
```

### 🧭 Where to Write What — Quick Reference

| Task | Where to write it |
|---|---|
| Create a new page/route | `app/(shop)/your-route/page.tsx` |
| Add a new admin page | `app/admin/your-page/page.tsx` |
| Reusable UI component | `components/<feature>/YourComponent.tsx` |
| Shadcn base component (Button, Modal, etc.) | `components/ui/` |
| Fetch data from the backend (products, categories...) | `hooks/useYourData.ts` (TanStack Query) |
| Cart-related state | `store/cartSlice.ts` |
| Form validation schema | `lib/validators/your.schema.ts` |
| Axios call / API base config | `lib/api.ts` |
| TypeScript type/interface | `types/index.ts` |
| Protect a route (requires login) | `middleware.ts` |
| Add SEO metadata to a page | Use a helper from `lib/seo.ts` and export `generateMetadata` in the page |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Amit-Biswas-WD/bytestorebd-frontend.git
cd bytestorebd-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_WHATSAPP_NUMBER=8801XXXXXXXXX
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run the dev server

```bash
npm run dev
```

App will be running at **http://localhost:3000**

> ⚠️ Make sure the [backend server](#) is also running — see its README for setup.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🧩 Key Architectural Decisions

- **Route Groups** `(auth)` and `(shop)` keep layouts isolated without affecting the URL structure.
- **Redux vs TanStack Query** — Redux is used *only* for client-only state (cart). Everything that comes from the server (products, categories, reviews) goes through TanStack Query, so caching, loading and error states are handled automatically instead of being re-implemented manually.
- **Shared Zod schemas** — the same validation schema shape used in React Hook Form on the frontend mirrors what the backend expects, reducing mismatched validation bugs.
- **`ProductCard` as a single source of truth** — reused across the homepage sliders, category grid, search results and wishlist, so product UI stays consistent everywhere.

---

## 🐛 Challenges & Solutions

> *(Fill this in as you build — interviewers care about this more than perfect code.)*

- **Variant system** — Selecting color/region/storage needed to update price, image and stock together. Solved with a `useMemo` lookup against the product's `variants[]` array based on the selected combination.
- **Mega Menu performance** — Category tree fetched once and cached with TanStack Query instead of refetching on every hover.
- *(Add more as you go — Stock Alert email flow, review moderation, etc.)*

---

## 🗺️ Roadmap

- [ ] Product comparison page (`/compare`)
- [ ] Advanced combined filters (brand + price + series)
- [ ] Dark mode
- [ ] PWA support

---

## 👤 Author

**Amit Biswas**
[Portfolio](https://amitbiswas.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/amit-biswas-web) · [GitHub](https://github.com/Amit-Biswas-WD)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

> Built as a portfolio project to demonstrate full-stack e-commerce development — not affiliated with the original ByteStorebd site.