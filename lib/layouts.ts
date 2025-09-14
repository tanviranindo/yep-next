import { CategoryType } from './theme'
import { NavbarVariant, FooterVariant, ProductCardVariant } from './showcase'

export interface LayoutVariant {
  id: number
  name: string
  navbar: NavbarVariant
  footer: FooterVariant
  productCard: ProductCardVariant
  // placeholders for future: hero, filter, faq
}

export const layoutsByCategory: Record<CategoryType, LayoutVariant[]> = {
  // From private_assets/Fashion UI 1.png and Fashion UI 2.png
  fashion: [
    { id: 1, name: 'Fashion UI 1', navbar: 1, footer: 1, productCard: 1 },
    { id: 2, name: 'Fashion UI 2', navbar: 1, footer: 1, productCard: 2 },
  ],
  // From private_assets/Beauty UI 1.png and Beauty UI 2.png
  beauty: [
    { id: 1, name: 'Beauty UI 1', navbar: 2, footer: 2, productCard: 2 },
    { id: 2, name: 'Beauty UI 2', navbar: 2, footer: 2, productCard: 1 },
  ],
  // From private_assets/Gadgets UI 1.png and Gadgets UI 2.png
  gadgets: [
    { id: 1, name: 'Gadgets UI 1', navbar: 3, footer: 1, productCard: 3 },
    { id: 2, name: 'Gadgets UI 2', navbar: 3, footer: 1, productCard: 1 },
  ],
  // No explicit UI 1/2 assets provided; start with one
  furniture: [{ id: 1, name: 'Furniture UI', navbar: 4, footer: 2, productCard: 1 }],
  kidsmom: [{ id: 1, name: 'Kids & Mom UI', navbar: 5, footer: 3, productCard: 2 }],
}

