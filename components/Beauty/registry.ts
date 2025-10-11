/**
 * Beauty Component Variant Registry
 *
 * Type-safe metadata for all Beauty component variants.
 * This registry provides:
 * - Variant availability checking
 * - Type-safe variant metadata
 * - Documentation for each variant
 * - Future: UI variant previewer
 */

export type VariantNumber = 1 | 2;

export interface VariantMetadata {
  id: VariantNumber;
  name: string;
  description: string;
  features: string[];
  usedIn: string[];
}

export interface ComponentVariants {
  hero: VariantMetadata[];
  navbar: VariantMetadata[];
  filter: VariantMetadata[];
  productCard: VariantMetadata[];
  faq: VariantMetadata[];
  footer: VariantMetadata[];
}

/**
 * Registry of all Beauty component variants
 */
export const BEAUTY_VARIANTS: ComponentVariants = {
  hero: [
    {
      id: 1,
      name: "Glamour Hero",
      description: "Elegant hero with overlapping typography and side-by-side layout",
      features: [
        "Split-screen layout with image and content",
        "Overlapping brand typography (black + purple)",
        "Feature icons row (certified, secure, shipping, transparent)",
        "Single CTA button with purple border",
        "Server-side rendered (static)"
      ],
      usedIn: ["beauty1"]
    },
    {
      id: 2,
      name: "Nika Hero",
      description: "Natural skincare hero with dual carousel sliders",
      features: [
        "Dual carousel layout (products + hero slides)",
        "Beige/tan color scheme",
        "Slide navigation dots",
        "Minimal, clean design",
        "Client-side for carousel state"
      ],
      usedIn: ["beauty2"]
    }
  ],
  navbar: [
    {
      id: 1,
      name: "Glamour Navbar",
      description: "Purple-themed navbar with phone number and currency selector",
      features: [
        "Top bar with phone, currency, language, support",
        "Center-aligned logo and navigation",
        "Purple accent color (#842898)",
        "User, cart, search, wishlist icons",
        "Client-side for context access"
      ],
      usedIn: ["beauty1"]
    },
    {
      id: 2,
      name: "Nika Navbar",
      description: "Minimalist navbar with centered brand",
      features: [
        "Simple top bar with currency/language",
        "Center-aligned brand name",
        "Icon-only actions (user, cart, search, wishlist)",
        "Clean typography",
        "Client-side for context access"
      ],
      usedIn: ["beauty2"]
    }
  ],
  filter: [
    {
      id: 1,
      name: "Glamour Filter Sidebar",
      description: "Comprehensive filtering with categories, price, skin type, and brands",
      features: [
        "Categories with radio selection and left border indicator",
        "Dual-range price slider with purple accent",
        "Skin type checkboxes with counts",
        "Brand checkboxes with product counts",
        "Results counter",
        "Client-side for filter state"
      ],
      usedIn: ["beauty1"]
    },
    {
      id: 2,
      name: "Nika Filter Panel",
      description: "Streamlined filtering with dropdown categories",
      features: [
        "Category dropdown selector",
        "Single-range price slider",
        "Skin type buttons",
        "Brand checkboxes",
        "Beige/tan accent colors",
        "Client-side for filter state"
      ],
      usedIn: ["beauty2"]
    }
  ],
  productCard: [
    {
      id: 1,
      name: "Glamour Product Card",
      description: "Clean card with wishlist heart and simple layout",
      features: [
        "Square product image with light background",
        "Wishlist heart icon (top right)",
        "Product name and price below image",
        "Star rating display",
        "Minimal, elegant design",
        "Client-side for wishlist integration"
      ],
      usedIn: ["beauty1"]
    },
    {
      id: 2,
      name: "Nika Product Card",
      description: "Natural card with rounded corners and shadow",
      features: [
        "Rounded corner product image",
        "Subtle shadow effect",
        "Wishlist and quick view icons",
        "Price with optional strikethrough",
        "Add to cart button",
        "Client-side for cart integration"
      ],
      usedIn: ["beauty2"]
    }
  ],
  faq: [
    {
      id: 1,
      name: "Glamour FAQ",
      description: "Simple accordion-style FAQ with chevron indicators",
      features: [
        "Single-column layout",
        "Accordion with chevron icons",
        "Purple accent color",
        "Clean borders",
        "Client-side for accordion state"
      ],
      usedIn: ["beauty1"]
    },
    {
      id: 2,
      name: "Nika FAQ",
      description: "Two-column FAQ with contact cards",
      features: [
        "Three contact info cards (phone, email, chat)",
        "Two-column question grid",
        "Accordion with arrow indicators",
        "Beige accent colors",
        "Client-side for accordion state"
      ],
      usedIn: ["beauty2"]
    }
  ],
  footer: [
    {
      id: 1,
      name: "Glamour Footer",
      description: "Purple-accented footer with newsletter subscription",
      features: [
        "Gray background (#F9FAFB)",
        "Get In Touch section with purple button",
        "Social media icons (purple)",
        "Six-column grid layout",
        "Location, phone, email contact info",
        "Server-side rendered"
      ],
      usedIn: ["beauty1"]
    },
    {
      id: 2,
      name: "Nika Footer",
      description: "Beige-themed footer with newsletter",
      features: [
        "Beige background",
        "Newsletter subscription form",
        "Four-column layout",
        "Social media text links",
        "Bottom copyright bar",
        "Server-side rendered"
      ],
      usedIn: ["beauty2"]
    }
  ]
};

/**
 * Check if a variant exists for a component
 */
export function hasVariant(
  component: keyof ComponentVariants,
  variantId: VariantNumber
): boolean {
  return BEAUTY_VARIANTS[component].some((v) => v.id === variantId);
}

/**
 * Get metadata for a specific variant
 */
export function getVariantMetadata(
  component: keyof ComponentVariants,
  variantId: VariantNumber
): VariantMetadata | undefined {
  return BEAUTY_VARIANTS[component].find((v) => v.id === variantId);
}

/**
 * Get all variants for a component
 */
export function getComponentVariants(
  component: keyof ComponentVariants
): VariantMetadata[] {
  return BEAUTY_VARIANTS[component];
}
