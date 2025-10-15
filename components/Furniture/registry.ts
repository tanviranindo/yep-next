/**
 * Furniture Component Variant Registry
 *
 * Tracks all variants of Furniture components and their metadata
 */

export type VariantNumber = 1 | 2;

export interface VariantMetadata {
  name: string;
  description: string;
  theme: string;
  color: string;
}

export interface ComponentVariants {
  [key: string]: VariantMetadata[];
}

export const FURNITURE_VARIANTS: ComponentVariants = {
  FurnitureNavbar: [
    {
      name: "Furniture House",
      description: "Classic furniture house navigation with black borders",
      theme: "classic",
      color: "#000000",
    },
    {
      name: "Furnish",
      description: "Modern centered logo navigation with brown accents",
      theme: "modern",
      color: "#8B4513",
    },
  ],
  FurnitureHero: [
    {
      name: "Product Showcase",
      description: "Split-screen hero with product carousel and thumbnails",
      theme: "classic",
      color: "#000000",
    },
    {
      name: "Slider Hero",
      description: "Full-width image slider with vertical navigation",
      theme: "modern",
      color: "#8B4513",
    },
  ],
  FurnitureFilter: [
    {
      name: "Compact Sidebar",
      description: "Minimal filter sidebar with square checkboxes",
      theme: "classic",
      color: "#000000",
    },
    {
      name: "Card-based Filter",
      description: "Spacious card-based filter with rounded checkboxes",
      theme: "modern",
      color: "#8B4513",
    },
  ],
  FurnitureProductCard: [
    {
      name: "ProductCardVariant4",
      description: "Uses the shared ProductCardVariant4 component",
      theme: "classic",
      color: "#000000",
    },
    {
      name: "Hover Actions Card",
      description: "Product card with hover overlay and quick actions",
      theme: "modern",
      color: "#8B4513",
    },
  ],
  FurnitureFAQ: [
    {
      name: "Details/Summary",
      description: "Server-rendered FAQ using HTML details element",
      theme: "classic",
      color: "#000000",
    },
    {
      name: "With Contact Form",
      description: "Client-side FAQ with contact form on the side",
      theme: "modern",
      color: "#8B4513",
    },
  ],
  FurnitureFooter: [
    {
      name: "Furniture House Footer",
      description: "Black footer with white accents and social icons",
      theme: "classic",
      color: "#000000",
    },
    {
      name: "Furnish Footer",
      description: "Light footer with brown accents and newsletter signup",
      theme: "modern",
      color: "#8B4513",
    },
  ],
  FurnitureLayout: [
    {
      name: "Classic Layout",
      description: "Traditional furniture house layout with sidebar filters",
      theme: "classic",
      color: "#000000",
    },
    {
      name: "Modern Layout",
      description: "Contemporary layout with spacious design",
      theme: "modern",
      color: "#8B4513",
    },
  ],
};

/**
 * Check if a component has a specific variant
 */
export function hasVariant(
  componentName: string,
  variant: VariantNumber
): boolean {
  const variants = FURNITURE_VARIANTS[componentName];
  return variants && variants[variant - 1] !== undefined;
}

/**
 * Get metadata for a specific component variant
 */
export function getVariantMetadata(
  componentName: string,
  variant: VariantNumber
): VariantMetadata | undefined {
  const variants = FURNITURE_VARIANTS[componentName];
  return variants?.[variant - 1];
}

/**
 * Get all variants for a component
 */
export function getComponentVariants(
  componentName: string
): VariantMetadata[] {
  return FURNITURE_VARIANTS[componentName] || [];
}
