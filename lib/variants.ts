import { CategoryType } from './theme'

// Map categories to default component variants.
// Extend this as you add more components.
export const productCardVariantByCategory: Record<CategoryType, 1 | 2 | 3 | 4> = {
  fashion: 4,
  beauty: 2,
  gadgets: 3,
  furniture: 1,
  kidsmom: 2,
}
