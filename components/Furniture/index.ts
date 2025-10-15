// Unified Furniture components with variant support
// Each component accepts a variant prop (1 or 2) to render the appropriate UI

export { default as FurnitureNavbar } from "./FurnitureNavbar";
export type { FurnitureNavbarVariant } from "./FurnitureNavbar";

export { default as FurnitureHero } from "./FurnitureHero";
export type { FurnitureHeroVariant } from "./FurnitureHero";

export { default as FurnitureFilter } from "./FurnitureFilter";
export type { FurnitureFilterVariant } from "./FurnitureFilter";

export { default as FurnitureProductCard } from "./FurnitureProductCard";
export type { FurnitureProductCardVariant } from "./FurnitureProductCard";

export { default as FurnitureFAQ } from "./FurnitureFAQ";
export type { FurnitureFAQVariant } from "./FurnitureFAQ";

export { default as FurnitureFooter } from "./FurnitureFooter";
export type { FurnitureFooterVariant } from "./FurnitureFooter";

export { default as FurnitureLayout } from "./FurnitureLayout";
export type { FurnitureLayoutVariant } from "./FurnitureLayout";

// Variant registry and utilities
export {
  FURNITURE_VARIANTS,
  hasVariant,
  getVariantMetadata,
  getComponentVariants,
} from "./registry";
export type {
  VariantNumber,
  VariantMetadata,
  ComponentVariants,
} from "./registry";
