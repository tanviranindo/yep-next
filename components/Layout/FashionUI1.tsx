"use client";

import FilterSidebarVariant1 from "@/components/Filters/Sidebar/variant-1";
import FashionHeroVariant1 from "@/components/Hero/variant-1";
import { FashionNavbar } from "@/components/Navbar";
import ProductCard, { Product } from "@/components/ProductCard";
import { useEffect, useState } from "react";

const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `fashion-${i + 1}`,
  name: ["Outfit", "Denim Jacket", "City Sneaker", "Chino Pants"][i % 4],
  description: "Premium materials with timeless style",
  image: "/items/product1.jpg",
  url: `/products/fashion-${i + 1}`,
  price: [3500, 4500, 2500, 3200][i % 4],
  currency: "BDT",
  availability: "InStock",
  brand: "FASHION.",
}));

export default function FashionUI1Layout() {
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
      {/* Navbar */}
      <FashionNavbar />

      {/* Hero Section */}
      <div className="relative">
        {/* Hero Content */}
        <div className="relative z-10">
          <FashionHeroVariant1
            title="LET'S CREATE YOUR OWN Fashion Statement"
            sublabel="Summer 2025"
            eyebrow="LATEST COLLECTIONS OF"
            heroImage="/hero/main.png"
            thumbnails={["/hero/1.png", "/hero/2.png", "/hero/3.png"]}
            cta={{ label: "Explore →", href: "#" }}
            ticker={[
              "Fashion with a Flair",
              "Strut with Confidence",
              "Own Your Runway",
              "Chic, Classy & Confident",
            ]}
            socialIcons={[
              { icon: "f", href: "#" },
              { icon: "✈", href: "#" },
              { icon: "📷", href: "#" },
              { icon: "●", href: "#" },
            ]}
            productCarousel={{
              title: "OFANCE HALF SLEEVE SHIRT",
              description:
                "Discover fashion that fits your lifestyle. From casual looks to statement pieces.",
              cta: { label: "VIEW COLLECTION", href: "#" },
              images: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
            }}
          />
        </div>
      </div>

      {/* Main content with filter + grid */}
      <section className="w-full px-4 py-10 bg-gray-50">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="btn bg-black text-white w-full"
          >
            Filter
          </button>
        </div>

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
              <FilterSidebarVariant1 />
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4">
          {/* Filter Sidebar */}
          <div className="hidden md:block w-full md:w-1/4 lg:w-1/5 xl:w-1/6 flex-shrink-0">
            <FilterSidebarVariant1 />
          </div>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((p) => (
                <ProductCard key={p.id} variant={4} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* Rendered at the page level to match design; FAQ variant imported there if needed */}
    </div>
  );
}
