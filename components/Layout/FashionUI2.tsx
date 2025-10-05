"use client";

import FilterSidebarVariant2 from "@/components/Filters/Sidebar/variant-2";
import FashionHeroVariant1 from "@/components/Hero/variant-1";
import { FashionNavbar } from "@/components/Navbar";
import ProductCard, { Product } from "@/components/ProductCard";
import { useEffect, useState } from "react";

const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `fashion2-${i + 1}`,
  name: ["Outfit", "Denim Jacket", "City Sneaker", "Chino Pants"][i % 4],
  description: "Premium materials with timeless style",
  image: "/items/product1.jpg",
  url: `/products/fashion2-${i + 1}`,
  price: [3500, 4500, 2500, 3200][i % 4],
  currency: "BDT",
  availability: "InStock",
  brand: "FASHION 2",
}));

export default function FashionUI2Layout() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isFilterOpen]);

  return (
    <div data-theme="fashion" className="bg-white min-h-screen">
      {/* Fashion Navbar */}
      <FashionNavbar />
      
      {/* Hero Section - with right image extending upward */}
      <FashionHeroVariant1
        title="DISCOVER YOUR UNIQUE Fashion Style"
        sublabel="Fall 2025"
        eyebrow="LATEST COLLECTIONS OF"
        heroImage="/hero/main.png"
        thumbnails={["/hero/1.png", "/hero/2.png", "/hero/3.png"]}
        cta={{ label: "Explore →", href: "#" }}
        ticker={[
          "Style with Purpose",
          "Express Your Individuality",
          "Fashion Forward",
          "Bold, Unique & Confident",
        ]}
        socialIcons={[
          { icon: "f", href: "#" },
          { icon: "✈", href: "#" },
          { icon: "📷", href: "#" },
          { icon: "●", href: "#" },
        ]}
        productCarousel={{
          title: "PREMIUM STREETWEAR COLLECTION",
          description:
            "Discover fashion that defines your personality. From casual streetwear to elegant formal wear.",
          cta: { label: "VIEW COLLECTION", href: "#" },
          images: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
        }}
      />

      {/* Main content with filter sidebar */}
      <section className="w-full px-4 py-10 bg-gray-50">
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="btn bg-gray-600 text-white w-full"
            >
              Filter & Sort
            </button>
          </div>

          {/* Mobile Filter Modal */}
          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            >
              <div
                className="fixed inset-y-0 left-0 w-3/4 bg-white p-4 z-50 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="btn btn-ghost btn-circle absolute top-2 right-2"
                >
                  ✕
                </button>
                <FilterSidebarVariant2 />
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Sidebar - Filter */}
            <div className="hidden lg:block w-full lg:w-80 flex-shrink-0">
              <FilterSidebarVariant2 />
            </div>

            {/* Center - Products Grid */}
            <div className="flex-1 min-w-0">
              {/* Simple Products Header */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">Fashion 2 Collection</h2>
                <p className="text-sm text-gray-600">
                  Showing {products.length} of 156 products
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {products.map((p) => (
                  <ProductCard key={p.id} variant={4} product={p} />
                ))}
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}