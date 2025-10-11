/**
 * Fashion Component Variant Registry
 *
 * Type-safe metadata for all Fashion component variants.
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
 * Registry of all Fashion component variants
 */
export const FASHION_VARIANTS: ComponentVariants = {
  hero: [
    {
      id: 1,
      name: "Fashion Studio Hero",
      description: "Complex hero with product carousel, thumbnails, and social icons",
      features: [
        "Split-screen layout with content and image",
        "Product carousel with navigation",
        "Social media icons sidebar",
        "Animated ticker tape",
        "Server-side rendered (static)"
      ],
      usedIn: ["fashion1"]
    },
    {
      id: 2,
      name: "Insole Hero",
      description: "Minimalist hero with image slider",
      features: [
        "Full-width background images",
        "Vertical slide navigation",
        "Gradient overlay",
        "Client-side for slide state",
        "Slide transitions"
      ],
      usedIn: ["fashion2"]
    }
  ],
  navbar: [
    {
      id: 1,
      name: "Fashion Studio Navbar",
      description: "Traditional navbar with logo, menu, and icons",
      features: [
        "Bordered logo box",
        "Category dropdown menu",
        "Cart and wishlist badges",
        "Mobile hamburger menu",
        "Client-side for context access"
      ],
      usedIn: ["fashion1"]
    },
    {
      id: 2,
      name: "Insole Navbar",
      description: "Centered logo with minimal design",
      features: [
        "Center-aligned brand name",
        "Minimalist icon-only actions",
        "Simplified mobile menu",
        "Clean typography",
        "Client-side for context access"
      ],
      usedIn: ["fashion2"]
    }
  ],
  filter: [
    {
      id: 1,
      name: "Advanced Filter Sidebar",
      description: "Comprehensive filtering with price range and categories",
      features: [
        "Dual-range price slider",
        "Multiple filter groups",
        "Checkbox and button types",
        "Results counter",
        "Client-side for filter state"
      ],
      usedIn: ["fashion1"]
    },
    {
      id: 2,
      name: "Simple Filter Panel",
      description: "Streamlined filtering with color and size pickers",
      features: [
        "Visual color swatches",
        "Size button grid",
        "Single-range price slider",
        "Category checkboxes",
        "Client-side for filter state"
      ],
      usedIn: ["fashion2"]
    }
  ],
  productCard: [
    {
      id: 1,
      name: "Fashion Studio Card",
      description: "Detailed card with action icons and wishlist integration",
      features: [
        "Tall product image",
        "Vertical action icon row",
        "Bottom add-to-cart overlay",
        "Wishlist heart icon",
        "Client-side for store integration"
      ],
      usedIn: ["fashion1"]
    },
    {
      id: 2,
      name: "Insole Card",
      description: "Clean card with rounded action buttons",
      features: [
        "Square product image",
        "Circular action buttons",
        "Bottom add-to-cart bar",
        "Minimalist styling",
        "Server-side (no state)"
      ],
      usedIn: ["fashion2"]
    }
  ],
  faq: [
    {
      id: 1,
      name: "Collapsible FAQ",
      description: "Simple accordion-style FAQ using HTML details",
      features: [
        "Native <details> element",
        "Two-column layout",
        "Numbered questions",
        "Server-side rendered",
        "No JavaScript required"
      ],
      usedIn: ["fashion1"]
    },
    {
      id: 2,
      name: "FAQ with Contact Form",
      description: "Interactive FAQ with integrated contact form",
      features: [
        "Two-column layout (FAQ + form)",
        "Controlled accordion state",
        "Contact form inputs",
        "Client-side for form handling",
        "Single-open accordion"
      ],
      usedIn: ["fashion2"]
    }
  ],
  footer: [
    {
      id: 1,
      name: "Fashion Studio Footer",
      description: "Dark footer with brand emphasis",
      features: [
        "Black background with white text",
        "Bordered logo box",
        "Social media icons",
        "Mobile/desktop responsive layouts",
        "Server-side rendered"
      ],
      usedIn: ["fashion1"]
    },
    {
      id: 2,
      name: "Insole Footer",
      description: "Light footer with clean design",
      features: [
        "Gray background",
        "Single-row grid layout",
        "Text-based social links",
        "Bottom copyright bar",
        "Server-side rendered"
      ],
      usedIn: ["fashion2"]
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
  return FASHION_VARIANTS[component].some((v) => v.id === variantId);
}

/**
 * Get metadata for a specific variant
 */
export function getVariantMetadata(
  component: keyof ComponentVariants,
  variantId: VariantNumber
): VariantMetadata | undefined {
  return FASHION_VARIANTS[component].find((v) => v.id === variantId);
}

/**
 * Get all variants for a component
 */
export function getComponentVariants(
  component: keyof ComponentVariants
): VariantMetadata[] {
  return FASHION_VARIANTS[component];
}
