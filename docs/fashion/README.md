# Fashion UI 1 Documentation

Complete e-commerce fashion store implementation with cart, wishlist, checkout flow, and product management.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Data Management](#data-management)
- [Routing](#routing)
- [State Management](#state-management)
- [Components](#components)
- [Pages](#pages)
- [Features](#features)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Development Guide](#development-guide)

---

## Overview

Fashion UI 1 is a complete e-commerce solution built with Next.js 13+ App Router, featuring:

- ✅ 12+ pages with complete user flows
- ✅ Centralized data management
- ✅ Shopping cart & wishlist with localStorage persistence
- ✅ Complete checkout flow with order tracking
- ✅ Product filtering and sorting
- ✅ Responsive design (mobile & desktop)
- ✅ Project-scoped routing for multi-project architecture
- ✅ Type-safe with TypeScript

**Live Routes:** All routes are prefixed with `/fashion1` to maintain project isolation.

---

## Architecture

### File Structure

```
/data/fashion1/
  ├── products.ts       # Product data, filtering, and sorting utilities
  └── constants.ts      # Routes, coupons, delivery charges, FAQ, payment methods

/app/(categories)/fashion1/
  ├── layout.tsx        # FashionStoreProvider wrapper
  ├── page.tsx          # Landing page with products & FAQ
  ├── product/[id]/     # Dynamic product detail pages
  ├── cart/             # Shopping cart page
  ├── wishlist/         # Wishlist page
  ├── checkout/         # Checkout form page
  ├── review-order/     # Order review page
  ├── order-confirmed/  # Order confirmation page
  ├── promotions/       # Promotions & sales page
  ├── track-order/      # Order tracking page
  └── 404/              # Custom 404 error page

/contexts/
  └── FashionStoreContext.tsx  # Global state for cart, wishlist, orders

/components/
  ├── Navbar/variant-1/         # Fashion navbar
  ├── Footer/FashionFooter/     # Fashion footer
  ├── Layout/FashionUI1.tsx     # Main layout with products grid
  ├── ProductCard/FashionProductCard.tsx  # Product card with cart/wishlist
  └── Hero/variant-1/           # Hero banner component
```

### Design Patterns

1. **Single Source of Truth**: All data centralized in `/data/fashion1/`
2. **Context-Based State**: React Context for global cart/wishlist state
3. **Route Constants**: All routes defined in constants for easy maintenance
4. **Reusable Components**: Modular component architecture
5. **Type Safety**: Full TypeScript support with extended Product interface

---

## Data Management

### Products (`/data/fashion1/products.ts`)

#### Product Interface

```typescript
interface Product {
  id: string;
  name: string;
  description?: string;
  image: string;
  url: string;
  price: number;
  originalPrice?: number;
  currency: CurrencyCode;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  brand?: string;
  rating?: number;        // 0-5
  reviews?: number;       // Review count
  category?: string;      // e.g., "Women", "Accessories"
  subcategory?: string;   // e.g., "Dresses", "Bags"
}
```

#### Available Data

```typescript
// Main product array (12 products)
export const fashionProducts: Product[]

// Derived data sets
export const saleProducts      // First 8 products for promotions
export const hotDeals          // Products 5-8 for hot deals
export const relatedProducts   // Products 9-12 for related items
```

#### Utility Functions

```typescript
// Get single product by ID
getProductById(id: string): Product | undefined

// Filter products
filterProducts(
  products: Product[],
  category?: string,
  subcategory?: string,
  minPrice?: number,
  maxPrice?: number
): Product[]

// Sort products
sortProducts(products: Product[], sortBy: string): Product[]
// Sort options: "popularity", "price-low-high", "price-high-low", "newest", "rating"
```

#### Categories & Subcategories

```typescript
export const categories = ["All", "Women", "Accessories"]
export const subcategories = [
  "All", "Activewear", "Tops", "Bags", "Sweaters",
  "Outerwear", "Sets", "Traditional", "Dresses"
]
```

---

## Routing

### Route Constants (`FASHION1_ROUTES`)

All routes are defined in `/data/fashion1/constants.ts`:

```typescript
export const FASHION1_ROUTES = {
  HOME: "/fashion1",
  PRODUCTS: "/fashion1/products",
  PRODUCT_DETAIL: (id: string) => `/fashion1/product/${id}`,
  CART: "/fashion1/cart",
  WISHLIST: "/fashion1/wishlist",
  CHECKOUT: "/fashion1/checkout",
  REVIEW_ORDER: "/fashion1/review-order",
  ORDER_CONFIRMED: "/fashion1/order-confirmed",
  TRACK_ORDER: "/fashion1/track-order",
  PROMOTIONS: "/fashion1/promotions",
  FAQ: "/fashion1#faq",
}
```

### Usage

```typescript
import { FASHION1_ROUTES } from "@/data/fashion1/constants";

// In components
<Link href={FASHION1_ROUTES.HOME}>Home</Link>
<Link href={FASHION1_ROUTES.CART}>Cart</Link>
<Link href={FASHION1_ROUTES.PRODUCT_DETAIL(productId)}>View Product</Link>

// In navigation
router.push(FASHION1_ROUTES.CHECKOUT);
```

### Why Project-Scoped Routes?

This is a **master project** containing multiple sub-projects. All Fashion UI 1 routes are prefixed with `/fashion1` to:
- Prevent routing conflicts with other projects
- Keep users within the Fashion UI 1 context
- Enable independent deployment and testing
- Support multiple similar projects in one codebase

---

## State Management

### Fashion Store Context

Located in `/contexts/FashionStoreContext.tsx`, provides global state for:
- Shopping cart
- Wishlist
- Current order
- Coupon validation

#### Context Interface

```typescript
interface FashionStoreContextType {
  // Cart
  cart: CartItem[];
  cartTotal: number;
  cartCount: number;
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;

  // Wishlist
  wishlist: WishlistItem[];
  wishlistCount: number;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;

  // Orders
  currentOrder: Order | null;
  setCurrentOrder: (order: Order | null) => void;

  // Coupons
  applyCoupon: (code: string) => { success: boolean; discount: number; message: string };
}
```

#### Usage

```typescript
import { useFashionStore } from "@/contexts/FashionStoreContext";

function MyComponent() {
  const { cart, addToCart, wishlist, addToWishlist } = useFashionStore();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }, quantity); // quantity is optional, defaults to 1
  };

  return <div>Cart has {cart.length} items</div>;
}
```

#### LocalStorage Persistence

The context automatically persists cart and wishlist to localStorage:
- **Key**: `fashion-cart`, `fashion-wishlist`
- **Behavior**: Auto-saves on every change, loads on mount

---

## Components

### FashionNavbar

**Location**: `/components/Navbar/variant-1/index.tsx`

**Features**:
- Responsive (mobile hamburger menu, desktop horizontal)
- Dynamic cart and wishlist badge counts
- Category dropdown with multi-level navigation
- Search functionality
- Project-scoped links (all routes use `FASHION1_ROUTES`)

**Usage**:
```typescript
import { FashionNavbar } from "@/components/Navbar";

<FashionNavbar />
```

### FashionProductCard

**Location**: `/components/ProductCard/FashionProductCard.tsx`

**Features**:
- Integrates with FashionStoreContext
- Add to cart button
- Add to wishlist (heart icon changes color when in wishlist)
- Share and expand view actions
- Displays original price with discount badge

**Usage**:
```typescript
import FashionProductCard from "@/components/ProductCard/FashionProductCard";
import { fashionProducts } from "@/data/fashion1/products";

<FashionProductCard product={fashionProducts[0]} />
```

### FashionUI1 Layout

**Location**: `/components/Layout/FashionUI1.tsx`

**Features**:
- Hero banner with carousel
- Product grid with filtering and sorting
- Mobile filter sidebar
- Responsive grid (2-6 columns based on screen size)

**State**:
- Product sorting (popularity, price, rating, newest)
- Product filtering (category, subcategory, price range)
- Empty state when no products match

### FashionFooter

**Location**: `/components/Footer/FashionFooter/index.tsx`

Footer with links, newsletter signup, and social media icons.

---

## Pages

### 1. Landing Page (`/fashion1`)

**File**: `/app/(categories)/fashion1/page.tsx`

**Features**:
- Hero section
- Product grid with filter/sort
- FAQ section
- Newsletter signup

**Data Sources**:
- Products: `fashionProducts`
- FAQ: `FAQ_ITEMS`

---

### 2. Product Detail (`/fashion1/product/[id]`)

**File**: `/app/(categories)/fashion1/product/[id]/page.tsx`

**Features**:
- Image gallery with thumbnails
- Size and color selection
- Quantity controls
- Add to cart / Add to wishlist
- Product tabs (Description, Additional Info, Reviews)
- Related products
- Breadcrumb navigation

**Data Flow**:
```typescript
const productData = getProductById(params.id);
if (!productData) {
  router.push(FASHION1_ROUTES.HOME);
  return null;
}
```

---

### 3. Shopping Cart (`/fashion1/cart`)

**File**: `/app/(categories)/fashion1/cart/page.tsx`

**Features**:
- Product list with images
- Quantity controls (increment/decrement)
- Remove item button
- Subtotal calculation
- Coupon code input
- Cart totals
- Proceed to checkout button

**Coupon Codes**:
- `FASHION10` - 10% discount
- `FASHION20` - 20% discount
- `EID2025` - 15% discount

---

### 4. Wishlist (`/fashion1/wishlist`)

**File**: `/app/(categories)/fashion1/wishlist/page.tsx`

**Features**:
- Saved items grid
- Stock status display
- Add to cart button
- Remove from wishlist button
- Empty state message

---

### 5. Checkout (`/fashion1/checkout`)

**File**: `/app/(categories)/fashion1/checkout/page.tsx`

**Features**:
- Personal details form
- Billing address (optional separate address)
- Delivery area selection (Inside/Outside Dhaka)
- Payment method selection
- Card details for card payments
- Form validation

**Delivery Charges**:
- Inside Dhaka: BDT 60
- Outside Dhaka: BDT 120

**Payment Methods**:
- bKash, Nagad, Rocket
- Mastercard, Maestro, Visa (requires card details)
- Cash on Delivery

**Form Flow**:
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const order = { /* order data */ };
  setCurrentOrder(order);
  router.push(FASHION1_ROUTES.REVIEW_ORDER);
};
```

---

### 6. Review Order (`/fashion1/review-order`)

**File**: `/app/(categories)/fashion1/review-order/page.tsx`

**Features**:
- Order summary (number, date, total, payment method)
- Product list with quantities
- Delivery charge
- Confirm order button

**Flow**:
```typescript
const handleConfirm = () => {
  clearCart();
  router.push(FASHION1_ROUTES.ORDER_CONFIRMED);
};
```

---

### 7. Order Confirmed (`/fashion1/order-confirmed`)

**File**: `/app/(categories)/fashion1/order-confirmed/page.tsx`

**Features**:
- Order confirmation message
- Order details display
- View order details button
- Track order button
- Auto-clears order on page leave

---

### 8. Promotions (`/fashion1/promotions`)

**File**: `/app/(categories)/fashion1/promotions/page.tsx`

**Features**:
- EID special discount section
- Sale badges on products
- Limited-time deals with countdown timer
- Today's hot deals section

**Data**:
- Uses `saleProducts` and `hotDeals` from centralized data

---

### 9. Track Order (`/fashion1/track-order`)

**File**: `/app/(categories)/fashion1/track-order/page.tsx`

**Features**:
- Order search functionality
- Filter tabs (All, To Pay, To Ship, To Receive, To Review)
- Order list with status
- New collections showcase

---

### 10. 404 Error (`/fashion1/404`)

**File**: `/app/(categories)/fashion1/404/page.tsx`

Custom 404 error page for Fashion UI 1.

---

## Features

### Shopping Cart

- **Add to Cart**: From product cards or detail pages
- **Quantity Management**: Increment/decrement with validation
- **Remove Items**: Single-click removal
- **Persistence**: Saved to localStorage
- **Badge Count**: Dynamic count in navbar

### Wishlist

- **Save Items**: Heart icon on product cards
- **Visual Feedback**: Filled heart when in wishlist
- **Quick Add to Cart**: Move from wishlist to cart
- **Persistence**: Saved to localStorage

### Checkout Flow

Complete multi-step checkout:

1. **Cart** → View items, apply coupons
2. **Checkout** → Enter shipping and payment details
3. **Review Order** → Confirm order details
4. **Order Confirmed** → Success message with order number

### Product Features

- **Filtering**: By category, subcategory, price range
- **Sorting**: Popularity, price, rating, newest
- **Search**: (Ready for implementation)
- **Related Products**: Shown on detail pages
- **Stock Status**: InStock, OutOfStock, PreOrder

### Coupon System

Valid coupons defined in `VALID_COUPONS`:
```typescript
export const VALID_COUPONS: Record<string, number> = {
  FASHION10: 10,   // 10% off
  FASHION20: 20,   // 20% off
  EID2025: 15,     // 15% off
};
```

Usage:
```typescript
const { applyCoupon } = useFashionStore();
const result = applyCoupon("FASHION10");
// { success: true, discount: 10, message: "Coupon applied! You saved 10%" }
```

---

## Configuration

### Constants (`/data/fashion1/constants.ts`)

#### Routes
```typescript
FASHION1_BASE_ROUTE = "/fashion1"
FASHION1_ROUTES = { HOME, CART, WISHLIST, ... }
```

#### Delivery
```typescript
DELIVERY_CHARGES = {
  INSIDE_DHAKA: 60,
  OUTSIDE_DHAKA: 120,
}
```

#### Coupons
```typescript
VALID_COUPONS = {
  FASHION10: 10,
  FASHION20: 20,
  EID2025: 15,
}
```

#### Payment Methods
```typescript
PAYMENT_METHODS = [
  { id: "bkash", name: "bKash", logo: "🅱️", requiresCardDetails: false },
  { id: "visa", name: "Visa", logo: "💳", requiresCardDetails: true },
  // ... more
]
```

#### Product Options
```typescript
PRODUCT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]
PRODUCT_COLORS = ["Black", "White", "Navy", "Gray", "Red", "Blue", "Green"]
```

#### FAQ Items
Array of frequently asked questions with answers.

---

## Usage Examples

### Example 1: Display Products with Filter & Sort

```typescript
import { fashionProducts, filterProducts, sortProducts } from "@/data/fashion1/products";

function ProductGrid() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");

  const filtered = filterProducts(fashionProducts, category);
  const sorted = sortProducts(filtered, sortBy);

  return (
    <div>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="popularity">Popularity</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>

      <div className="grid grid-cols-4 gap-4">
        {sorted.map(product => (
          <FashionProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
```

### Example 2: Add to Cart with Custom Quantity

```typescript
import { useFashionStore } from "@/contexts/FashionStoreContext";

function ProductDetail({ product }) {
  const { addToCart } = useFashionStore();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }, quantity);
  };

  return (
    <button onClick={handleAddToCart}>
      Add {quantity} to Cart
    </button>
  );
}
```

### Example 3: Navigate Using Route Constants

```typescript
import { useRouter } from "next/navigation";
import { FASHION1_ROUTES } from "@/data/fashion1/constants";

function Navigation() {
  const router = useRouter();

  return (
    <div>
      <Link href={FASHION1_ROUTES.HOME}>Home</Link>
      <Link href={FASHION1_ROUTES.PROMOTIONS}>Sales</Link>
      <Link href={FASHION1_ROUTES.CART}>Cart</Link>

      <button onClick={() => router.push(FASHION1_ROUTES.CHECKOUT)}>
        Checkout
      </button>
    </div>
  );
}
```

### Example 4: Apply Coupon

```typescript
import { useFashionStore } from "@/contexts/FashionStoreContext";

function CouponInput() {
  const { applyCoupon } = useFashionStore();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleApply = () => {
    const result = applyCoupon(code);
    setMessage(result.message);
  };

  return (
    <div>
      <input value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleApply}>Apply</button>
      <p>{message}</p>
    </div>
  );
}
```

---

## Development Guide

### Adding New Products

Edit `/data/fashion1/products.ts`:

```typescript
export const fashionProducts: Product[] = [
  // ... existing products
  {
    id: "product-13",
    name: "New Product",
    description: "Product description",
    image: "/items/new-product.jpg",
    url: "/fashion1/product/product-13",
    price: 3500,
    originalPrice: 5000,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Dresses",
    rating: 4.5,
    reviews: 120,
  },
];
```

### Adding New Routes

1. Update `/data/fashion1/constants.ts`:
```typescript
export const FASHION1_ROUTES = {
  // ... existing routes
  NEW_PAGE: "/fashion1/new-page",
}
```

2. Create page file:
```typescript
// /app/(categories)/fashion1/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

3. Update navigation:
```typescript
<Link href={FASHION1_ROUTES.NEW_PAGE}>New Page</Link>
```

### Adding New Coupons

Update `/data/fashion1/constants.ts`:

```typescript
export const VALID_COUPONS: Record<string, number> = {
  FASHION10: 10,
  FASHION20: 20,
  EID2025: 15,
  NEWYEAR2025: 25,  // New coupon
};
```

### Extending Product Type

Update `/components/ProductCard/types.ts`:

```typescript
export interface Product {
  // ... existing fields
  newField?: string;  // Add new optional field
}
```

### Custom Filtering

Create custom filter in `/data/fashion1/products.ts`:

```typescript
export function filterByPriceRange(
  products: Product[],
  min: number,
  max: number
): Product[] {
  return products.filter(p => p.price >= min && p.price <= max);
}
```

---

## Testing

### Build & Verify

```bash
npm run build
```

All Fashion UI 1 pages should compile successfully.

### Test Checklist

- [ ] Landing page displays products
- [ ] Product detail page loads for all product IDs
- [ ] Add to cart updates badge count
- [ ] Add to wishlist updates badge count and heart icon
- [ ] Cart page shows added items
- [ ] Quantity controls work (increment/decrement)
- [ ] Coupon codes apply correctly
- [ ] Checkout form validates required fields
- [ ] Order flow completes (cart → checkout → review → confirmed)
- [ ] Order confirmation displays correct order details
- [ ] All navigation links use `/fashion1` prefix
- [ ] Logo clicks navigate to `/fashion1`
- [ ] localStorage persists cart and wishlist
- [ ] Responsive design works on mobile and desktop

---

## Troubleshooting

### Issue: Products not displaying
**Solution**: Check that `fashionProducts` is imported correctly and has data.

### Issue: Routes not working
**Solution**: Ensure all routes use `FASHION1_ROUTES` constants, not hardcoded paths.

### Issue: Cart not persisting
**Solution**: Check localStorage is enabled. Context auto-saves on every change.

### Issue: Coupon not working
**Solution**: Verify coupon code is in `VALID_COUPONS` and entered correctly (case-sensitive).

### Issue: Build errors
**Solution**: Run `npm run build` and check TypeScript errors. Ensure all imports are correct.

---

## Best Practices

1. **Always use route constants**: Never hardcode routes like `"/fashion1/cart"`
2. **Use centralized data**: Import from `/data/fashion1/` instead of inline data
3. **Type safety**: Extend Product interface in types.ts for new fields
4. **Context usage**: Use `useFashionStore()` for cart/wishlist operations
5. **Responsive design**: Test on mobile and desktop viewports
6. **Error handling**: Check for product existence before displaying
7. **Project scoping**: Keep all routes prefixed with `/fashion1`

---

## Future Enhancements

### Planned Features
- [ ] Search functionality
- [ ] User authentication
- [ ] Order history
- [ ] Product reviews system
- [ ] Advanced filtering UI with sliders
- [ ] Multiple images per product
- [ ] Product variants (size/color inventory)
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Analytics tracking

### Technical Improvements
- [ ] Server-side rendering for product pages
- [ ] Image optimization with Next.js Image
- [ ] API routes for backend operations
- [ ] Database integration
- [ ] Unit tests with Jest
- [ ] E2E tests with Playwright
- [ ] Performance optimization
- [ ] Accessibility improvements (ARIA labels)

---

## Support

For questions or issues:
1. Check this documentation
2. Review the source code comments
3. Check the troubleshooting section
4. Contact the development team

---

## License

This project is part of the YEP Next.js master project.

---

**Last Updated**: 2025-10-11
**Version**: 1.0.0
**Author**: YEP Development Team
