import Link from 'next/link'
import { CategoryType } from '@/lib/theme'
import { FooterVariant1, FooterVariant2, FooterVariant3 } from '@/components/Footer'
import { NavbarVariant1, NavbarVariant2, NavbarVariant3, NavbarVariant4, NavbarVariant5 } from '@/components/Navbar'
import ProductCard, { Product } from '@/components/ProductCard'
import { NAVBAR_VARIANTS, FOOTER_VARIANTS, PRODUCT_CARD_VARIANTS, NavbarVariant as NavbarV, FooterVariant as FooterV, ProductCardVariant as CardV } from '@/lib/showcase'
import { layoutsByCategory } from '@/lib/layouts'

interface ThemeShowcaseLayoutProps {
  category: CategoryType
  navbar: NavbarV
  footer: FooterV
  productCard: CardV
  basePath: string
  // Raw search params passed from the page to create SSR links without client state
  searchParams: Record<string, string | string[] | undefined>
}

const NavbarImpl: Record<NavbarV, () => JSX.Element> = {
  1: () => <NavbarVariant1 />,
  2: () => <NavbarVariant2 />,
  3: () => <NavbarVariant3 />,
  4: () => <NavbarVariant4 />,
  5: () => <NavbarVariant5 />,
}

const FooterImpl: Record<FooterV, () => JSX.Element> = {
  1: () => <FooterVariant1 />,
  2: () => <FooterVariant2 />,
  3: () => <FooterVariant3 />,
}

const sampleProducts: Product[] = [
  {
    id: 'sku-1',
    name: 'Elegant Tee',
    description: 'Soft cotton, perfect everyday wear.',
    image: '/placeholder.svg',
    url: '/products/sku-1',
    price: 29,
    currency: 'USD',
    availability: 'InStock',
    brand: 'YEP',
    rating: 4.6,
    reviewCount: 87,
  },
  {
    id: 'sku-2',
    name: 'Classic Denim',
    description: 'Timeless fit with a premium finish.',
    image: '/placeholder.svg',
    url: '/products/sku-2',
    price: 79,
    currency: 'USD',
    availability: 'InStock',
    brand: 'YEP',
    rating: 4.3,
    reviewCount: 142,
  },
  {
    id: 'sku-3',
    name: 'City Sneakers',
    description: 'Comfort meets style for daily moves.',
    image: '/placeholder.svg',
    url: '/products/sku-3',
    price: 119,
    currency: 'USD',
    availability: 'InStock',
    brand: 'YEP',
    rating: 4.8,
    reviewCount: 201,
  },
]

function withParams(basePath: string, params: Record<string, string | number>, searchParams: ThemeShowcaseLayoutProps['searchParams']) {
  const sp = new URLSearchParams()
  // keep existing params unless we overwrite
  Object.entries(searchParams).forEach(([k, v]) => {
    if (v === undefined) return
    const as = Array.isArray(v) ? v : [v]
    if (!(k in params)) as.forEach((val) => sp.append(k, String(val)))
  })
  Object.entries(params).forEach(([k, v]) => sp.set(k, String(v)))
  const qs = sp.toString()
  return qs ? `${basePath}?${qs}` : basePath
}

export default function ThemeShowcaseLayout({ category, navbar, footer, productCard, basePath, searchParams }: ThemeShowcaseLayoutProps) {
  const Navbar = NavbarImpl[navbar]
  const Footer = FooterImpl[footer]

  return (
    <div data-theme={category} className="min-h-screen bg-base-100">
      {/* Variant selectors (SSR via query params) */}
      <div className="bg-base-200 border-b border-base-300">
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          {/* Layout presets, derived from private_assets */}
          {layoutsByCategory[category]?.length > 1 && (
            <div>
              <span className="font-semibold mr-3">Layout:</span>
              {layoutsByCategory[category].map((l) => (
                <Link
                  key={`layout-${l.id}`}
                  href={withParams(
                    basePath,
                    { layout: l.id, navbar: l.navbar, footer: l.footer, card: l.productCard },
                    searchParams,
                  )}
                  className={`btn btn-xs mr-2 ${
                    l.navbar === navbar && l.footer === footer && l.productCard === productCard ? 'btn-primary' : 'btn-ghost'
                  }`}
                >
                  L{l.id}
                </Link>
              ))}
            </div>
          )}
          <div>
            <span className="font-semibold mr-3">Navbar:</span>
            {NAVBAR_VARIANTS.map((v) => (
              <Link key={`nav-${v}`} href={withParams(basePath, { navbar: v }, searchParams)} className={`btn btn-xs mr-2 ${v === navbar ? 'btn-primary' : 'btn-ghost'}`}>V{v}</Link>
            ))}
          </div>
          <div>
            <span className="font-semibold mr-3">Footer:</span>
            {FOOTER_VARIANTS.map((v) => (
              <Link key={`foot-${v}`} href={withParams(basePath, { footer: v }, searchParams)} className={`btn btn-xs mr-2 ${v === footer ? 'btn-primary' : 'btn-ghost'}`}>V{v}</Link>
            ))}
          </div>
          <div>
            <span className="font-semibold mr-3">Product Card:</span>
            {PRODUCT_CARD_VARIANTS.map((v) => (
              <Link key={`card-${v}`} href={withParams(basePath, { card: v }, searchParams)} className={`btn btn-xs mr-2 ${v === productCard ? 'btn-primary' : 'btn-ghost'}`}>V{v}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero placeholder (uses theme colors, replace with Hero variants later) */}
      <div className="hero min-h-72 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl font-bold">{category.toUpperCase()} Theme Showcase</h1>
            <p className="opacity-90">Select variants above to see layout changes.</p>
          </div>
        </div>
      </div>

      {/* Product grid using selected ProductCard variant */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProducts.map((p) => (
            <ProductCard key={p.id} variant={productCard} product={p} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
