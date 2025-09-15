import { ProductCardProps } from './types'
import ProductCardVariant1 from './variant-1'
import ProductCardVariant2 from './variant-2'
import ProductCardVariant3 from './variant-3'
import ProductCardVariant4 from './variant-4'

export type ProductCardVariant = 1 | 2 | 3 | 4

export interface ProductCardFactoryProps extends ProductCardProps {
  variant?: ProductCardVariant
}

const VARIANTS: Record<ProductCardVariant, (p: ProductCardProps) => JSX.Element> = {
  1: (p) => <ProductCardVariant1 {...p} />,
  2: (p) => <ProductCardVariant2 {...p} />,
  3: (p) => <ProductCardVariant3 {...p} />,
  4: (p) => <ProductCardVariant4 {...p} />,
}

export default function ProductCard({ variant = 1, ...rest }: ProductCardFactoryProps) {
  const Impl = VARIANTS[variant]
  return <Impl {...rest} />
}

export { ProductCardVariant1, ProductCardVariant2, ProductCardVariant3, ProductCardVariant4 }
export * from './types'
