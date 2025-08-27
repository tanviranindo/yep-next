import { Header } from "@/components/header"
import { ProductCarousel } from "@/components/product-carousel"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Welcome to Fashion Store</h1>
            <p className="text-gray-600 text-lg mb-8">Discover the latest trends in fashion</p>
            <Link href="/product/drawstring-detail-dress" className="inline-block">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Shop Now
              </button>
            </Link>
          </div>
        </section>
        <ProductCarousel title="Featured Products" subtitle="Our latest collection" />
        <ProductCarousel title="Trending Now" subtitle="Popular items this season" />
      </main>
      <Footer />
    </div>
  )
}
