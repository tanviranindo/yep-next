# e-Gagdgets Design Specification

## Pixel-Perfect Implementation Guide

Based on the Figma designs in `private_assets/gadget/`, here are the exact design specifications to implement:

---

## 🎨 Global Design Tokens

### Colors

```css
--primary-black: #000000
--primary-red: #FF0000 (for sale badges, active cart)
--background-white: #FFFFFF
--background-gray: #F5F5F5
--text-black: #000000
--text-gray: #6B7280
--border-gray: #E5E7EB
--hover-gray: #F9FAFB
```

### Typography

- **Font Family**: System sans-serif (Inter/SF Pro)
- **Logo**: 20px, Bold, "e-Gagdgets"
- **Nav Links**: 14px, Regular
- **Product Name**: 14px, Regular
- **Product Price**: 16px, Bold
- **Buttons**: 14px, Medium
- **Headings**: 24-32px, Bold

### Spacing

- **Container Max Width**: 1400px
- **Section Padding**: 40px vertical, 24px horizontal
- **Card Padding**: 16px
- **Button Padding**: 12px 24px
- **Gap Between Products**: 16px

### Border Radius

- **Buttons**: 4px
- **Cards**: 8px
- **Inputs**: 6px
- **Images**: 8px

---

## 📐 Component Specifications

### 1. Navbar (GadgetNavbar.tsx)

**Desktop Layout:**

```
[Logo: e-Gagdgets] [Search Bar] [Home] [Categories] [Shop] [♡] [🛒] [👤]
```

**Specifications:**

- Height: 80px
- Background: White
- Border Bottom: 1px solid #E5E7EB
- Logo: Left aligned, "e-Gagdgets", 20px bold
- Search Bar: 400px wide, gray background (#F5F5F5), rounded 6px, search icon left
- Nav Links: Center-right, 14px, regular weight, black text
- Icons: Right aligned, 20px size, black color
- Cart/Wishlist: Red fill when items present
- Max Width: 1400px container

**Mobile Layout:**

- Logo center
- Search bar full width below header
- Icons right (wishlist, cart, user)

---

### 2. Hero Section (GadgetHero.tsx)

**Layout:**

```
[Dark Background with Large Product Image]
[Text Overlay: "iPhone 14 Pro" + Description]
[Shop Now Button]
```

**Specifications:**

- Background: Black (#000000)
- Height: 500px desktop, 400px mobile
- Product Image: Right side, large scale
- Text: Left side, white color
- Heading: 48px bold, white
- Subtext: 16px regular, gray-300
- Button: White background, black text, 48px height, rounded 4px
- Button Hover: Gray background

---

### 3. Product Cards (GadgetProductCard.tsx)

**Card Structure:**

```
┌─────────────────┐
│  [Sale Badge]  ♡│
│                 │
│  Product Image  │
│                 │
├─────────────────┤
│ Product Name    │
│ ★★★★☆ (123)    │
│ 1,14,000 BDT    │
│ [Add to Cart]   │
└─────────────────┘
```

**Specifications:**

- Card Background: White
- Border: 1px solid #E5E7EB
- Border Radius: 8px
- Padding: 0 (image full width), 16px bottom
- Image Aspect Ratio: 1:1 (square)
- Sale Badge: Top-left, red background, white text, "-35%"
- Wishlist Icon: Top-right, heart outline, fills red when active
- Product Name: 14px, regular, black, 2-line clamp
- Rating: Yellow stars, gray count
- Price: 16px, bold, black
- Original Price: 14px, line-through, gray
- Button: Full width, black background, white text, 40px height
- Button Hover: Gray-800 background

---

### 4. Products Page Filter Sidebar

**Layout:**

```
Categories
├─ All Product
├─ Smartphone
├─ Digital Camera
└─ Gaming Accessories

Price
[Slider: 4,000 BDT - 140,000 BDT]

Brand
☐ Apple (110)
☐ Samsung (125)
☐ Xiaomi (68)
...

Storage
☐ 16GB
☐ 32GB
☐ 64GB
...
```

**Specifications:**

- Width: 280px
- Background: White
- Border: 1px solid #E5E7EB
- Section Spacing: 24px
- Checkbox: Custom styled, black when checked
- Price Slider: Black track, black thumb
- Collapse Icons: Chevron down/up

---

### 5. Shopping Cart Page

**Layout:**

```
Shopping Cart                    Order Summary
┌──────────────────────┐        ┌──────────────┐
│ [Image] Product Info │        │ Discount code│
│ [-] 1 [+]  Price  [×]│        │ [Input] Apply│
└──────────────────────┘        │              │
                                │ Subtotal: XX │
                                │ Total: XX    │
                                │ [Checkout]   │
                                └──────────────┘
```

**Specifications:**

- Left Column: 66% width, product list
- Right Column: 33% width, order summary
- Product Image: 80px square
- Quantity Controls: +/- buttons, border
- Remove Button: × icon, hover red
- Checkout Button: Full width, black, white text

---

### 6. Product Details Page

**Layout:**

```
[Image Gallery]          Product Name
[Thumbnails]            ★★★★☆ (4.8 - 145 reviews)
                        1,14,000 BDT  1,40,000 BDT

                        [Color Selector]
                        [Storage Selector]
                        [-] 1 [+]
                        [Add to Cart] [♡]

                        SKU: #251395269139984
```

**Specifications:**

- Image Gallery: Left 50%, main image + 4 thumbnails
- Product Info: Right 50%
- Color Selector: Circular swatches
- Storage Selector: Rectangular buttons
- Add to Cart: Black button, 48px height
- Wishlist: Border button, heart icon
- Tabs: Description, Additional Info, Reviews

---

### 7. Checkout Page

**Form Layout:**

```
Personal details
├─ First Name *
├─ Last Name *
├─ Email address *
└─ Phone *

Billing details
├─ Address line
├─ City
└─ Postal code

Payment methods
[Icon] [Icon] [Icon] [Icon] [Cash on Delivery]

[Place Order Button]
```

**Specifications:**

- Single column form
- Input Height: 48px
- Input Border: 1px solid #E5E7EB
- Input Focus: Border color #000
- Payment Icons: Grayscale, 40px height
- Place Order: Full width, gray background, 56px height

---

### 8. FAQ Page

**Accordion Design:**

```
1. How do I place an order?                    [v]

2. How long does delivery take?                [v]
   Standard delivery takes 2-5 business days...

3. How can I track my order?                   [v]
```

**Specifications:**

- Item Background: Light gray (#F5F5F5)
- Item Padding: 20px
- Item Spacing: 12px
- Border Radius: 8px
- Expanded Background: Black
- Expanded Text: White
- Chevron Icon: Right aligned

---

### 9. Tracking Page

**Layout:**

```
Track Your Order

[Enter Your Order ID]  [Enter Your Reference No]
                (Or)
[TRACK NOW Button]

How To Track Order?
```

**Specifications:**

- Center aligned
- Input Width: 400px each
- Input Height: 48px
- Track Button: Black, white text, 48px height, 200px wide
- Background: Light gray section

---

### 10. Wishlist Page

**Grid Layout:**

```
Wishlist (4)

[Sale Badge]  [×]     [×]           [×]           [×]
[Product Image]    [Product Image] [Product Image] [Product Image]
[Add To Cart]      [Add To Cart]   [Add To Cart]   [Add To Cart]
Product Name       Product Name    Product Name    Product Name
78,000 BDT        12,000 BDT      850 BDT         9,500 BDT
```

**Specifications:**

- Grid: 4 columns desktop, 2 mobile
- Card Style: Same as product cards
- Remove Icon: Top-right, trash icon
- Add to Cart: Black button, full width

---

### 11. Footer

**Layout:**

```
[e-Gagdgets Logo]          Company        Support         My Account      Pages
Description text           About Us       FAQs            Order List      Privacy Policy
[Social Icons]             Campaign       Track Order     Terms & Condition
                                         Wishlist        Refund Policy
```

**Specifications:**

- Background: Black (#000000)
- Text Color: White
- Padding: 60px vertical
- Columns: 5 (Logo + 4 link columns)
- Logo: 20px bold
- Description: 14px, gray-400
- Links: 14px, white, hover gray-300
- Social Icons: Twitter, Facebook, Instagram (white)

---

## 🔄 Interactive States

### Buttons

- **Default**: Black background, white text
- **Hover**: Gray-800 background
- **Active**: Gray-900 background
- **Disabled**: Gray-300 background, gray-500 text

### Links

- **Default**: Black text
- **Hover**: Gray-600 text
- **Active**: Underline

### Form Inputs

- **Default**: Gray border
- **Focus**: Black border, no shadow
- **Error**: Red border
- **Disabled**: Gray background

### Product Cards

- **Hover**: Slight shadow elevation
- **Wishlist Active**: Red heart fill
- **Sale Badge**: Always visible, no hover state

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  - Single column layout
  - Full width cards
  - Stacked navigation
  - Bottom fixed cart button
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  - 2-3 column grid
  - Sidebar collapsible
}

/* Desktop */
@media (min-width: 1025px) {
  - 4-5 column grid
  - Fixed sidebar
  - Full navigation
}
```

---

## ✅ Implementation Checklist

- [ ] Update Logo component with "e-Gagdgets" text
- [ ] Rebuild Navbar with exact layout and spacing
- [ ] Redesign Hero section with dark background
- [ ] Update Product Cards with new styling
- [ ] Implement Filter Sidebar design
- [ ] Redesign Shopping Cart layout
- [ ] Update Product Details page
- [ ] Implement Checkout form design
- [ ] Redesign FAQ accordion
- [ ] Update Tracking page layout
- [ ] Redesign Wishlist grid
- [ ] Update Footer with black background
- [ ] Change all blue accents to black/red
- [ ] Update all button styles
- [ ] Implement hover states
- [ ] Test responsive layouts
- [ ] Verify all spacing and typography

---

This specification provides pixel-perfect measurements and styling for all components based on the Figma designs.
