import FashionHeroVariant1 from '@/components/Hero/variant-1'
import FilterSidebarVariant1 from '@/components/Filters/Sidebar/variant-1'
import { FashionFooter } from '@/components/Footer'
import { NavbarVariant1 } from '@/components/Navbar'
import ProductCard, { Product } from '@/components/ProductCard'

const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `fashion-${i+1}`,
  name: ['Sleeve Shirt', 'Denim Jacket', 'City Sneaker', 'Chino Pants'][i % 4],
  description: 'Premium materials with timeless style',
  image: '/placeholder.svg',
  url: `/products/fashion-${i+1}`,
  price: [129, 199, 119, 89][i % 4],
  currency: 'USD',
  availability: 'InStock',
  brand: 'FASHION.',
}))

export default function FashionUI1Layout() {
  return (
    <div data-theme="fashion" className="bg-base-100 min-h-screen">
      {/* Navbar */}
      <NavbarVariant1 />

      {/* Hero */}
      <FashionHeroVariant1
        title="Fashion Statement"
        sublabel="Summer 2025"
        heroImage="/placeholder.svg"
        thumbnails={["/placeholder.svg","/placeholder.svg","/placeholder.svg"]}
        cta={{ label: 'Explore →', href: '#' }}
        navLinks={[{label:'Home',href:'#'},{label:'Shop',href:'#'},{label:'Categories',href:'#'}]}
        ticker={["Fashion with a Flair","Strut with Confidence","Own Your Runway","Chic, Classy & Confident"]}
      />

      {/* Main content with filter + grid */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[16rem,1fr] gap-6">
          <FilterSidebarVariant1 />
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">New Arrivals</h2>
              <div className="join">
                <button className="btn btn-xs join-item">Sort</button>
                <button className="btn btn-xs join-item">Filter</button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((p) => (
                <ProductCard key={p.id} variant={4} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* Rendered at the page level to match design; FAQ variant imported there if needed */}

      {/* Footer */}
      <FashionFooter />
    </div>
  )
}
