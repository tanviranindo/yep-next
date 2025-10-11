# Beauty UI Architecture Implementation Guide

## Overview
This document outlines the complete Beauty UI architecture implementation following the Fashion pattern. The Beauty UI has two variants:
- **Beauty 1 (GLAMOUR)**: Purple theme (#842898)
- **Beauty 2 (NIKA)**: Beige/Tan theme (#D4A574)

## Completed Files

### 1. Data Layer (/data/)
- ✅ `/data/beauty1/constants.ts` - Routes, FAQ items, payment methods, delivery charges for GLAMOUR
- ✅ `/data/beauty2/constants.ts` - Routes, FAQ items, payment methods, delivery charges for NIKA
- ✅ `/data/beauty1/products.ts` - 20 beauty products (Skincare, Makeup, Haircare, Grooming) for GLAMOUR
- ✅ `/data/beauty2/products.ts` - 20 beauty products for NIKA

### 2. Context Layer (/contexts/)
- ✅ `/contexts/BeautyStoreContext.tsx` - State management for cart, wishlist, orders

### 3. Component Layer (/components/Beauty/)
#### Completed:
- ✅ `/components/Beauty/variants/navbar/variant-1/index.tsx` - GLAMOUR navbar (purple theme)
- ✅ `/components/Beauty/variants/navbar/variant-2/index.tsx` - NIKA navbar (beige theme)
- ✅ `/components/Beauty/BeautyNavbar.tsx` - Navbar wrapper component
- ✅ `/components/Beauty/BeautyLayout.tsx` - Main layout with filtering and product grid

#### Directories Created (Need Implementation):
- `/components/Beauty/variants/hero/variant-1/`
- `/components/Beauty/variants/hero/variant-2/`
- `/components/Beauty/variants/filter/variant-1/`
- `/components/Beauty/variants/filter/variant-2/`
- `/components/Beauty/variants/footer/variant-1/`
- `/components/Beauty/variants/footer/variant-2/`
- `/components/Beauty/variants/faq/variant-1/`
- `/components/Beauty/variants/faq/variant-2/`
- `/components/Beauty/variants/productcard/variant-1/`
- `/components/Beauty/variants/productcard/variant-2/`

---

## Implementation Templates

### Hero Component Template

Create `/components/Beauty/variants/hero/variant-1/index.tsx`:
```typescript
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";

export interface HeroV1Props {
  eyebrow?: string;
  sublabel?: string;
  title: string;
  cta?: { label: string; href: string };
  thumbnails?: string[];
  heroImage: string;
  ticker?: string[];
  socialIcons?: { icon: string; href: string }[];
  productCarousel?: {
    title: string;
    description: string;
    cta: { label: string; href: string };
    images: string[];
  };
}

export default function HeroVariant1({ ...props }: HeroV1Props) {
  // Copy implementation from Fashion variant-1 hero
  // Replace colors: black -> #842898 (purple)
  // Replace brand text: FASHION STUDIO -> GLAMOUR BEAUTY
  return (
    // Implementation here
  );
}
```

Create wrapper `/components/Beauty/BeautyHero.tsx`:
```typescript
import HeroVariant1, { HeroV1Props } from "./variants/hero/variant-1";
import HeroVariant2, { HeroV2Props } from "./variants/hero/variant-2";

export type BeautyHeroVariant = 1 | 2;

interface BeautyHeroProps {
  variant: BeautyHeroVariant;
}

export default function BeautyHero({ variant, ...props }: BeautyHeroProps & (HeroV1Props | HeroV2Props)) {
  if (variant === 2) {
    return <HeroVariant2 {...props as HeroV2Props} />;
  }
  return <HeroVariant1 {...props as HeroV1Props} />;
}
```

### Filter Component Template

Create `/components/Beauty/variants/filter/variant-1/index.tsx`:
```typescript
"use client";

// Copy from Fashion filter variant-1
// Replace colors: black -> #842898 (purple)
// Update filtergroups to use beauty categories
export default function FilterSidebarVariant1({ ...props }) {
  // Implementation
}
```

Create wrapper `/components/Beauty/BeautyFilter.tsx`:
```typescript
import FilterVariant1, { FilterSidebarV1Props } from "./variants/filter/variant-1";
import FilterVariant2, { FilterSidebarV2Props } from "./variants/filter/variant-2";

export type BeautyFilterVariant = 1 | 2;

interface BeautyFilterProps {
  variant: BeautyFilterVariant;
  filterProps?: FilterSidebarV1Props | FilterSidebarV2Props;
}

export default function BeautyFilter({ variant, filterProps }: BeautyFilterProps) {
  if (variant === 2) {
    return <FilterVariant2 {...(filterProps || {})} />;
  }
  return <FilterVariant1 {...(filterProps || {})} />;
}
```

### Footer Component Template

Create `/components/Beauty/variants/footer/variant-1/index.tsx`:
```typescript
// Copy from Fashion footer variant-1
// Replace: FASHION STUDIO -> GLAMOUR BEAUTY
// Update description text for beauty products
// Keep same structure and social icons
export default function FooterVariant1() {
  return (
    <footer className="bg-black text-white">
      {/* Implementation */}
    </footer>
  );
}
```

Create wrapper `/components/Beauty/BeautyFooter.tsx`:
```typescript
import FooterVariant1 from "./variants/footer/variant-1";
import FooterVariant2 from "./variants/footer/variant-2";

export type BeautyFooterVariant = 1 | 2;

interface BeautyFooterProps {
  variant: BeautyFooterVariant;
}

export default function BeautyFooter({ variant }: BeautyFooterProps) {
  if (variant === 2) {
    return <FooterVariant2 />;
  }
  return <FooterVariant1 />;
}
```

### FAQ Component Template

Create `/components/Beauty/variants/faq/variant-1/index.tsx`:
```typescript
export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQVariant1({
  items,
  columns = 2,
}: {
  items: FAQItem[];
  columns?: 1 | 2;
}) {
  // Copy from Fashion FAQ variant-1
  // No color changes needed
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-10 md:py-12">
      {/* Implementation */}
    </section>
  );
}
```

Create wrapper `/components/Beauty/BeautyFAQ.tsx`:
```typescript
import FAQVariant1, { FAQItem } from "./variants/faq/variant-1";
import FAQVariant2 from "./variants/faq/variant-2";

export type BeautyFAQVariant = 1 | 2;

interface BeautyFAQProps {
  variant: BeautyFAQVariant;
  items: FAQItem[];
  columns?: 1 | 2;
}

export default function BeautyFAQ({ variant, items, columns = 2 }: BeautyFAQProps) {
  if (variant === 2) {
    return <FAQVariant2 items={items} columns={columns} />;
  }
  return <FAQVariant1 items={items} columns={columns} />;
}
```

### Product Card Component Template

Create `/components/Beauty/variants/productcard/variant-1/index.tsx`:
```typescript
"use client";

import React from "react";
import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import ProductCardVariant4 from "@/components/ProductCard/variant-4";
import { Product } from "@/components/ProductCard";

export interface ProductCardV1Props {
  product: Product;
  className?: string;
}

export default function ProductCardVariant1({ product, className }: ProductCardV1Props) {
  const { addToCart, addToWishlist, isInWishlist } = useBeautyStore();

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/product1.jpg",
    });
  };

  const handleAddToWishlist = (e?: React.MouseEvent) => {
    e?.preventDefault();
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/product1.jpg",
      stockStatus: product.availability === "InStock" ? "In Stock" : "Out of Stock",
    });
  };

  // Copy actions array from Fashion productcard variant-1

  return (
    <ProductCardVariant4
      product={product}
      actions={actions as any}
      cta={{
        label: "Add To Cart",
        onClick: handleAddToCart,
      }}
      className={className}
    />
  );
}
```

Create wrapper `/components/Beauty/BeautyProductCard.tsx`:
```typescript
"use client";

import { Product } from "@/components/ProductCard";
import ProductCardVariant1 from "./variants/productcard/variant-1";
import ProductCardVariant2 from "./variants/productcard/variant-2";

export type BeautyProductCardVariant = 1 | 2;

interface BeautyProductCardProps {
  variant: BeautyProductCardVariant;
  product: Product;
  className?: string;
}

export default function BeautyProductCard({ variant, product, className }: BeautyProductCardProps) {
  if (variant === 2) {
    return <ProductCardVariant2 product={product} className={className} />;
  }
  return <ProductCardVariant1 product={product} className={className} />;
}
```

### Index Export File

Create `/components/Beauty/index.ts`:
```typescript
export { default as BeautyNavbar } from "./BeautyNavbar";
export { default as BeautyHero } from "./BeautyHero";
export { default as BeautyFilter } from "./BeautyFilter";
export { default as BeautyFooter } from "./BeautyFooter";
export { default as BeautyFAQ } from "./BeautyFAQ";
export { default as BeautyProductCard } from "./BeautyProductCard";
export { default as BeautyLayout } from "./BeautyLayout";

export type { BeautyNavbarVariant } from "./BeautyNavbar";
export type { BeautyHeroVariant } from "./BeautyHero";
export type { BeautyFilterVariant } from "./BeautyFilter";
export type { BeautyFooterVariant } from "./BeautyFooter";
export type { BeautyFAQVariant } from "./BeautyFAQ";
export type { BeautyProductCardVariant } from "./BeautyProductCard";
export type { BeautyLayoutVariant } from "./BeautyLayout";
```

---

## Route Pages Implementation

### Beauty1 Landing Page

Create `/app/(categories)/beauty1/page.tsx`:
```typescript
import BeautyFAQ from "@/components/Beauty/BeautyFAQ";
import BeautyFooter from "@/components/Beauty/BeautyFooter";
import BeautyLayout from "@/components/Beauty/BeautyLayout";
import { FAQ_ITEMS, BEAUTY1_ROUTES } from "@/data/beauty1/constants";

export const dynamic = "force-dynamic";

export default function Beauty1Page() {
  const heroProps = {
    variant: 1 as const,
    eyebrow: "LATEST COLLECTIONS OF",
    sublabel: "Spring 2025",
    title: "LET'S CREATE YOUR OWN Beauty Statement",
    heroImage: "/hero/beauty1.png",
    thumbnails: ["/hero/beauty1-1.png", "/hero/beauty1-2.png", "/hero/beauty1-3.png"],
    cta: { label: "Explore →", href: "#" },
    ticker: [
      "Glow with Glamour",
      "Radiance Redefined",
      "Beauty Unleashed",
      "Confidence in Every Product",
    ],
    socialIcons: [
      { icon: "f", href: "#" },
      { icon: "✈", href: "#" },
      { icon: "📷", href: "#" },
      { icon: "●", href: "#" },
    ],
    productCarousel: {
      title: "RADIANT GLOW SERUM",
      description:
        "Discover beauty products that enhance your natural glow. From skincare essentials to makeup must-haves.",
      cta: { label: "VIEW COLLECTION", href: "#" },
      images: ["/hero/beauty1-1.png", "/hero/beauty1-2.png", "/hero/beauty1-3.png"],
    },
  };

  return (
    <div className="bg-white flex flex-col min-h-screen" id="faq">
      <main className="flex-grow">
        <BeautyLayout
          variant={1}
          routes={BEAUTY1_ROUTES}
          heroProps={heroProps}
        />
        <BeautyFAQ variant={1} items={FAQ_ITEMS} columns={2} />
      </main>
      <BeautyFooter variant={1} />
    </div>
  );
}
```

### Beauty1 Shop Page

Create `/app/(categories)/beauty1/shop/page.tsx`:
```typescript
import { BeautyLayout, BeautyFooter } from "@/components/Beauty";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <BeautyLayout variant={1} routes={BEAUTY1_ROUTES} />
      <BeautyFooter variant={1} />
    </div>
  );
}
```

### Beauty1 Layout

Create `/app/(categories)/beauty1/layout.tsx`:
```typescript
import { BeautyStoreProvider } from "@/contexts/BeautyStoreContext";
import { ReactNode } from "react";

export default function Beauty1Layout({ children }: { children: ReactNode }) {
  return <BeautyStoreProvider>{children}</BeautyStoreProvider>;
}
```

### Additional Pages to Create

Following the same pattern, create these pages for both beauty1 and beauty2:

1. **Product Detail Page**: `/app/(categories)/beauty1/product/[id]/page.tsx`
   - Copy from `/app/(categories)/fashion1/product/[id]/page.tsx`
   - Replace FashionStore with BeautyStore
   - Replace routes with BEAUTY1_ROUTES

2. **Cart Page**: `/app/(categories)/beauty1/cart/page.tsx`
   - Copy from fashion1/cart
   - Update store context and routes

3. **Checkout Page**: `/app/(categories)/beauty1/checkout/page.tsx`
   - Copy from fashion1/checkout
   - Update store context and routes

4. **Wishlist Page**: `/app/(categories)/beauty1/wishlist/page.tsx`
   - Copy from fashion1/wishlist
   - Update store context and routes

5. **Track Order Page**: `/app/(categories)/beauty1/track-order/page.tsx`
   - Copy from fashion1/track-order
   - Update routes

6. **Review Order Page**: `/app/(categories)/beauty1/review-order/page.tsx`
   - Copy from fashion1/review-order
   - Update store context and routes

7. **Order Confirmed Page**: `/app/(categories)/beauty1/order-confirmed/page.tsx`
   - Copy from fashion1/order-confirmed
   - Update routes

8. **Promotions Page**: `/app/(categories)/beauty1/promotions/page.tsx`
   - Copy from fashion1/promotions
   - Update for beauty products

9. **404 Page**: `/app/(categories)/beauty1/404/page.tsx`
   - Copy from fashion1/404
   - Update branding

---

## Color Theme Reference

### Beauty 1 (GLAMOUR) - Purple Theme
- Primary: `#842898`
- Hover states: Use opacity or lighter purple
- Accent colors: Keep complementary purples

### Beauty 2 (NIKA) - Beige/Tan Theme
- Primary: `#D4A574`
- Hover states: Use opacity or darker beige
- Accent colors: Keep earth tones

---

## Key Implementation Notes

1. **All variant-2 components** should follow the Fashion variant-2 patterns but with NIKA branding and beige colors
2. **Use beautyCategories** from `/lib/navbarCategories.ts` (already exists)
3. **Product images** use Unsplash beauty/skincare/makeup themed images
4. **Brand names**: GLAMOUR for beauty1, NIKA for beauty2
5. **Store context**: All components must use `useBeautyStore()` instead of `useFashionStore()`

---

## Testing Checklist

- [ ] Beauty1 landing page loads
- [ ] Beauty1 shop page shows products
- [ ] Filtering works correctly
- [ ] Product cards display properly
- [ ] Add to cart functionality works
- [ ] Add to wishlist functionality works
- [ ] Navigation between pages works
- [ ] Mobile responsive design works
- [ ] Beauty2 pages mirror Beauty1 functionality with correct branding

---

## Quick Start Commands

```bash
# Navigate to project directory
cd /Users/tanviranindo/Documents/GitHub/yep-next

# Test the beauty1 route (after completing remaining components)
npm run dev
# Visit: http://localhost:3000/beauty1

# Test the beauty2 route
# Visit: http://localhost:3000/beauty2
```

---

## Summary

### Completed (Ready to Use):
- Data layer (constants and products for both variants)
- Context layer (BeautyStoreContext)
- Navbar variants and wrapper
- Layout component with filtering logic

### Remaining (Use Templates Above):
- Hero variants (2 files + wrapper)
- Filter variants (2 files + wrapper)
- Footer variants (2 files + wrapper)
- FAQ variants (2 files + wrapper)
- ProductCard variants (2 files + wrapper)
- Index exports file
- All route pages for beauty1 (10 pages)
- All route pages for beauty2 (10 pages)
- Layout files for both beauty1 and beauty2

**Total Remaining**: ~30 files using the templates provided above

Each file follows the exact same pattern as Fashion components, just with:
- Different color schemes (purple for GLAMOUR, beige for NIKA)
- Different branding text
- `useBeautyStore` instead of `useFashionStore`
- Beauty routes instead of Fashion routes
