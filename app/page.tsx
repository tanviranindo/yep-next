import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCarousel } from "@/components/product-carousel";
import Link from "next/link";

// Sample products data
const sampleProducts = [
  {
    id: "1",
    name: "Elegant Black Dress",
    price: 2999.99,
    originalPrice: 3999.99,
    image: "/woman-in-black-dress-elegant.png",
    rating: 4.5,
    reviewCount: 128,
  },
  {
    id: "2",
    name: "Casual Blazer",
    price: 2499.99,
    image: "/woman-in-black-blazer.png",
    rating: 4.3,
    reviewCount: 89,
  },
  {
    id: "3",
    name: "Colorful Summer Dress",
    price: 1899.99,
    image: "/woman-in-colorful-dress.png",
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "4",
    name: "Back View Dress",
    price: 3299.99,
    image: "/woman-in-black-dress-back-view.png",
    rating: 4.4,
    reviewCount: 67,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">
              Welcome to Fashion Store
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover the latest trends in fashion
            </p>
            <Link
              href="/product/drawstring-detail-dress"
              className="inline-block"
            >
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Shop Now
              </button>
            </Link>
          </div>
        </section>
        <ProductCarousel
          title="Featured Products"
          subtitle="Our latest collection"
          products={sampleProducts}
        />
        <ProductCarousel
          title="Trending Now"
          subtitle="Popular items this season"
          products={sampleProducts}
        />
      </main>
      <Footer />
    </div>
  );
}
