import { CategoryType } from './theme'

export type NavbarVariant = 1 | 2 | 3 | 4 | 5
export type FooterVariant = 1 | 2 | 3
export type ProductCardVariant = 1 | 2 | 3

export const NAVBAR_VARIANTS: NavbarVariant[] = [1, 2, 3, 4, 5]
export const FOOTER_VARIANTS: FooterVariant[] = [1, 2, 3]
export const PRODUCT_CARD_VARIANTS: ProductCardVariant[] = [1, 2, 3]

export interface ComponentVariantSelection {
  navbar: NavbarVariant
  footer: FooterVariant
  productCard: ProductCardVariant
}

export const defaultSelectionByCategory: Record<CategoryType, ComponentVariantSelection> = {
  fashion: { navbar: 1, footer: 1, productCard: 1 },
  beauty: { navbar: 2, footer: 2, productCard: 2 },
  gadgets: { navbar: 3, footer: 1, productCard: 3 },
  furniture: { navbar: 4, footer: 2, productCard: 1 },
  kidsmom: { navbar: 5, footer: 3, productCard: 2 },
}

