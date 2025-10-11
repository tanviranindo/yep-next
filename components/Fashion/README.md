# Fashion Component Architecture

A unified, variant-based component system for fashion e-commerce interfaces.

## 🎯 Design Goals

1. **Consistent Naming**: All components use `Fashion[ComponentName]` pattern
2. **Zero-Code Variant Addition**: Drop new variant folder, auto-discovered
3. **Maximum SSR**: "use client" only where absolutely necessary
4. **No Duplication**: Single reusable component per type

## 📁 Architecture

```
/components/Fashion/
├── FashionHero.tsx          # Server component router
├── FashionNavbar.tsx        # Client component (needs context)
├── FashionFilter.tsx        # Server component router
├── FashionProductCard.tsx   # Client component (needs context)
├── FashionFAQ.tsx          # Server component router
├── FashionFooter.tsx       # Server component router
├── FashionLayout.tsx       # Client component (needs state)
├── variants/
│   ├── hero/
│   │   ├── variant-1/index.tsx  # Fashion Studio hero
│   │   └── variant-2/index.tsx  # Insole hero
│   ├── navbar/
│   ├── filter/
│   ├── productcard/
│   ├── faq/
│   └── footer/
├── registry.ts             # Type-safe variant metadata
├── index.ts                # Barrel exports
└── README.md               # This file
```

## 🚀 Quick Start

### Using Fashion Components

```tsx
import {
  FashionHero,
  FashionNavbar,
  FashionFilter,
  FashionProductCard,
  FashionFAQ,
  FashionFooter,
  FashionLayout,
} from "@/components/Fashion";
import { FashionStoreProvider } from "@/contexts/FashionStoreContext";

export default function FashionPage() {
  return (
    <FashionStoreProvider>
      <FashionNavbar variant={1} />
      <FashionHero variant={1} heroImage="/hero.png" {...otherProps} />
      <FashionLayout variant={1} />
      <FashionFAQ variant={1} items={faqItems} />
      <FashionFooter variant={1} />
    </FashionStoreProvider>
  );
}
```

### Component Variants

Each component has 2 variants:
- **Variant 1**: Fashion Studio (elegant, detailed)
- **Variant 2**: Insole (minimalist, clean)

Switch variants by changing the `variant` prop:

```tsx
// Fashion Studio style
<FashionHero variant={1} />

// Insole style
<FashionHero variant={2} />
```

## ✨ Adding a New Variant

Want to add `variant-3`? Just create a new folder:

```bash
# 1. Create the variant folder
mkdir components/Fashion/variants/hero/variant-3

# 2. Add your implementation
cat > components/Fashion/variants/hero/variant-3/index.tsx << 'EOF'
export interface HeroV3Props {
  // Your props
}

export default function HeroVariant3(props: HeroV3Props) {
  return <div>Your variant!</div>;
}
EOF

# 3. Update the router (components/Fashion/FashionHero.tsx)
# Add the variant import and routing logic

# That's it! Zero changes to consuming code needed.
```

### Step-by-step:

1. **Create folder**: `variants/[component]/variant-N/`
2. **Add index.tsx**: Export default component + props interface
3. **Update router**: Import variant and add routing logic
4. **Update types**: Add `N` to variant type union
5. **Update registry**: Add metadata to `registry.ts`

Example router update:

```tsx
// Before
import HeroVariant1 from "./variants/hero/variant-1";
import HeroVariant2 from "./variants/hero/variant-2";

export type FashionHeroVariant = 1 | 2;

// After
import HeroVariant1 from "./variants/hero/variant-1";
import HeroVariant2 from "./variants/hero/variant-2";
import HeroVariant3 from "./variants/hero/variant-3"; // ← Add this

export type FashionHeroVariant = 1 | 2 | 3; // ← Add 3

export default function FashionHero(props: FashionHeroProps) {
  if (props.variant === 3) return <HeroVariant3 {...props} />; // ← Add this
  if (props.variant === 2) return <HeroVariant2 {...props} />;
  return <HeroVariant1 {...props} />;
}
```

## 🏗️ Component Details

### FashionHero

**Purpose**: Page hero section with imagery and CTAs

**Server/Client**: Server component router; variants may be client

**Variants**:
- `variant-1`: Split-screen with product carousel
- `variant-2`: Full-width slider with vertical navigation

```tsx
<FashionHero
  variant={1}
  heroImage="/hero/main.png"
  eyebrow="LATEST COLLECTIONS"
  title="Fashion Statement"
  thumbnails={["/1.png", "/2.png"]}
  cta={{ label: "Shop", href: "/shop" }}
/>
```

### FashionNavbar

**Purpose**: Site navigation with cart/wishlist

**Server/Client**: Client component (accesses FashionStoreContext)

**Variants**:
- `variant-1`: Traditional nav with bordered logo
- `variant-2`: Centered brand name, minimal icons

```tsx
<FashionNavbar
  variant={1}
  routes={{
    HOME: "/",
    SHOP: "/shop",
    CART: "/cart",
    WISHLIST: "/wishlist",
  }}
/>
```

### FashionFilter

**Purpose**: Product filtering sidebar

**Server/Client**: Server router; variants are client (state)

**Variants**:
- `variant-1`: Advanced filters with dual-range price slider
- `variant-2`: Simple filters with color swatches

```tsx
<FashionFilter variant={1} />
```

### FashionProductCard

**Purpose**: Individual product display

**Server/Client**: Client component (accesses store for cart/wishlist)

**Variants**:
- `variant-1`: Tall card with vertical action icons
- `variant-2`: Clean card with circular buttons

```tsx
<FashionProductCard
  variant={1}
  product={{
    id: "1",
    name: "T-Shirt",
    price: 29.99,
    image: "/product.jpg",
    ...
  }}
/>
```

### FashionFAQ

**Purpose**: Frequently asked questions

**Server/Client**: Server router; variant-2 is client (form state)

**Variants**:
- `variant-1`: HTML `<details>` accordion (SSR, no JS)
- `variant-2`: Accordion with contact form

```tsx
<FashionFAQ
  variant={1}
  items={[
    { q: "Question?", a: "Answer." },
    ...
  ]}
  columns={2}
/>
```

### FashionFooter

**Purpose**: Site footer

**Server/Client**: Server component (both variants)

**Variants**:
- `variant-1`: Dark footer with social icons
- `variant-2`: Light footer with text links

```tsx
<FashionFooter variant={1} />
```

### FashionLayout

**Purpose**: Complete shop layout with products grid

**Server/Client**: Client component (filter modal state)

**Variants**:
- `variant-1`: Dense grid with advanced filters
- `variant-2`: Spacious grid with simple filters

```tsx
<FashionLayout
  variant={1}
  routes={ROUTES}
  heroProps={{ variant: 1, heroImage: "/hero.png" }}
  products={productArray}
/>
```

## 📊 Variant Registry

Use the registry for type-safe metadata:

```tsx
import {
  FASHION_VARIANTS,
  hasVariant,
  getVariantMetadata,
  getComponentVariants,
} from "@/components/Fashion/registry";

// Check if variant exists
if (hasVariant("hero", 3)) {
  // Safe to use variant 3
}

// Get variant metadata
const meta = getVariantMetadata("hero", 1);
console.log(meta?.description); // "Complex hero with product carousel..."

// Get all variants for a component
const allHeroVariants = getComponentVariants("hero");
```

## 🎨 Styling Conventions

- **Variant 1**: Fashion Studio aesthetic
  - Black borders and buttons
  - Bold typography
  - DaisyUI classes where applicable

- **Variant 2**: Insole aesthetic
  - Clean lines, minimal borders
  - Muted color palette (#D4B896 accents)
  - Modern sans-serif typography

## 🔧 Server vs Client Components

### When to use "use client"

**Use client** when the component:
- Accesses React context (e.g., FashionStoreContext)
- Uses React hooks (useState, useEffect, etc.)
- Has user interactions requiring state

**Use server** when the component:
- Only renders static content
- Uses HTML-only interactions (e.g., `<details>`)
- Doesn't need JavaScript

### Current breakdown

| Component | Type | Reason |
|-----------|------|--------|
| FashionHero | Server | Routes to variants; variant-2 needs client |
| FashionNavbar | Client | Accesses FashionStoreContext |
| FashionFilter | Server | Routes to variants; both need client |
| FashionProductCard | Client | Accesses FashionStoreContext |
| FashionFAQ | Server | Routes to variants; variant-1 is pure server |
| FashionFooter | Server | Pure static content |
| FashionLayout | Client | Modal state for mobile filters |

## 🧪 Testing

Verify both variants work:

```tsx
// Test variant 1
<FashionHero variant={1} {...variant1Props} />

// Test variant 2
<FashionHero variant={2} {...variant2Props} />

// Test invalid variant (TypeScript catches this)
<FashionHero variant={99} /> // ← Type error!
```

## 🚦 Migration Guide

### From old scattered components

**Before**:
```tsx
import FashionProductCard from "@/components/ProductCard/FashionProductCard";
import Fashion2Card from "@/components/ProductCard/Fashion2Card";

// Use different components
{isFashion1 ? (
  <FashionProductCard product={p} />
) : (
  <Fashion2Card product={p} />
)}
```

**After**:
```tsx
import FashionProductCard from "@/components/Fashion";

// Use single component with variant
<FashionProductCard variant={isFashion1 ? 1 : 2} product={p} />
```

## 📝 Best Practices

1. **Always specify variant**: Don't rely on defaults
2. **Keep variants focused**: Each variant should have a clear design purpose
3. **Share common logic**: Extract shared utilities, avoid duplication in variants
4. **Document new variants**: Update `registry.ts` with metadata
5. **Maintain type safety**: Export prop interfaces from variant files

## 🐛 Troubleshooting

### "Cannot find module './variants/...'"

Make sure you created the folder and `index.tsx` file:
```bash
ls components/Fashion/variants/hero/variant-N/index.tsx
```

### TypeScript errors about variant prop

Ensure your variant number is in the type union:
```tsx
export type FashionHeroVariant = 1 | 2; // Add your variant number here
```

### Component not rendering

Check the router logic in the main component file:
```tsx
if (props.variant === YOUR_VARIANT) {
  return <YourVariant {...props} />;
}
```

## 📚 Related Documentation

- [Fashion Data Utilities](/data/fashion1/README.md)
- [FashionStoreContext](/contexts/FashionStoreContext.tsx)
- [Architecture Planning](/plan/fashionarchitecture.md)

## 🎉 Success Criteria

- ✅ All fashion components use consistent `Fashion[Name]` naming
- ✅ Adding variant-3 only requires creating new folder + router update
- ✅ "use client" only appears where absolutely necessary
- ✅ fashion1 and fashion2 pages work identically to before
- ✅ No duplicate component code between variants
- ✅ Type safety maintained throughout
