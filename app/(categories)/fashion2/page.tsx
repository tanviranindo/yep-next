import FashionFAQ from "@/components/Fashion/FashionFAQ";
import FashionFooter from "@/components/Fashion/FashionFooter";
import FashionLayout from "@/components/Fashion/FashionLayout";
import { FAQ_ITEMS, FASHION2_ROUTES } from "@/data/fashion2/constants";

export const dynamic = "force-dynamic";

export default function FashionPage() {
  const heroProps = {
    variant: 2 as const,
    slides: [
      {
        image: "/hero/fashion2.jpg",
        eyebrow: "MID VALUE RANGE SALE 2025!",
        title: "Fabulous Collections",
        cta: { label: "VIEW ALL", href: "/fashion2/shop" },
      },
      {
        image: "/hero/1.png",
        eyebrow: "SUMMER COLLECTION 2025!",
        title: "Style Redefined",
        cta: { label: "SHOP NOW", href: "/fashion2/shop" },
      },
      {
        image: "/hero/2.png",
        eyebrow: "NEW ARRIVALS!",
        title: "Trending Now",
        cta: { label: "EXPLORE", href: "/fashion2/shop" },
      },
    ],
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <main className="flex-grow">
        <FashionLayout
          variant={2}
          routes={FASHION2_ROUTES}
          heroProps={heroProps}
        />

        {/* I Am Looking For Fashion Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                I Am Looking For Fashion
              </h2>
              <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src="/items/beautyproduct1.png"
                    alt="Women's Top"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button className="w-full bg-[#D4B896] text-white py-3 px-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#C4A886] transition-colors">
                  Women's Top
                </button>
              </div>

              <div className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src="/items/beautyproduct2.png"
                    alt="Shop Bags"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button className="w-full bg-[#D4B896] text-white py-3 px-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#C4A886] transition-colors">
                  Shop Bags
                </button>
              </div>

              <div className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src="/items/product1.jpg"
                    alt="Shoes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button className="w-full bg-[#D4B896] text-white py-3 px-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#C4A886] transition-colors">
                  Shoes
                </button>
              </div>

              <div className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src="/items/product2.jpg"
                    alt="Accessories"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button className="w-full bg-[#D4B896] text-white py-3 px-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#C4A886] transition-colors">
                  Accessories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Best Selling Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Best Selling
              </h2>
              <div className="flex items-center gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent">
                  <option>Sort by</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent">
                  <option>Featured Product</option>
                  <option>All Products</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src="/items/beautyproduct1.png"
                    alt="Diamond Rings"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Diamond Rings
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-500 ml-1">(4.8)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      BDT 2,500
                    </span>
                    <button className="bg-[#D4B896] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-[#C4A886] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src="/items/beautyproduct2.png"
                    alt="Birthday Charm Bracelet"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Birthday Charm Bracelet
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-500 ml-1">(4.5)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#D4B896]">
                        BDT 1,800
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        BDT 2,200
                      </span>
                    </div>
                    <button className="bg-[#D4B896] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-[#C4A886] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src="/items/product1.jpg"
                    alt="Femme T-shirt"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Femme T-shirt
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-300 text-sm">★</span>
                    <span className="text-sm text-gray-500 ml-1">(4.2)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#D4B896]">
                        BDT 1,200
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        BDT 1,500
                      </span>
                    </div>
                    <button className="bg-[#D4B896] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-[#C4A886] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <button className="w-10 h-10 flex items-center justify-center bg-[#D4B896] text-white rounded-md">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#D4B896] hover:text-[#D4B896] rounded-md transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#D4B896] hover:text-[#D4B896] rounded-md transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-400">
                ...
              </span>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#D4B896] hover:text-[#D4B896] rounded-md transition-colors">
                10
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-[#D4B896]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Subscribe to our newsletter for the latest jewelry collections and
              exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 bg-white text-[#D4B896] font-semibold rounded-md hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <FashionFAQ variant={2} items={FAQ_ITEMS} columns={2} />
      </main>
      <FashionFooter variant={2} />
    </div>
  );
}
