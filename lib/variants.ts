import { CategoryType } from './theme'

// Map categories to default component variants.
// Extend this as you add more components.
export const productCardVariantByCategory: Record<CategoryType, 1 | 2 | 3> = {
  fashion: 1,
  beauty: 2,
  gadgets: 3,
  furniture: 1,
  kidsmom: 2,
}

