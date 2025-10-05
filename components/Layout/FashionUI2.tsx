"use client";

import Fashion2ExactFilter from "@/components/Filters/Sidebar/Fashion2ExactFilter";
import InsoleHero from "@/components/Hero/InsoleHero";
import InsoleNavbar from "@/components/Navbar/InsoleNavbar";
import Fashion2ProductCard from "@/components/ProductCard/Fashion2Card";
import type { Product } from "@/components/ProductCard/types";
import { useEffect, useState } from "react";

const products: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `insole-${i + 1}`,
  name: ["Diamond Ring", "Gold Ring", "Silver Ring", "Platinum Ring"][i % 4],
  description: "Elegant and timeless jewelry piece",
  image: "/items/product2.jpg",
  url: `/products/insole-${i + 1}`,
  price: [5500, 6500, 4500, 7200][i % 4],
  currency: "BDT",
  availability: "InStock",
  brand: "Insole",
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
    <div className="bg-white min-h-screen">
      {/* Insole Navbar */}
      <InsoleNavbar />

      {/* Hero Section */}
      <InsoleHero />

      {/* Main content with filter sidebar */}
      <section className="w-full bg-gray-50">
        <div className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12">
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full bg-gray-900 text-white py-3 px-4 font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
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
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <Fashion2ExactFilter />
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Sidebar - Filter */}
            <div className="hidden lg:block w-full lg:w-72 flex-shrink-0">
              <Fashion2ExactFilter />
            </div>

            {/* Center - Products Grid */}
            <div className="flex-1 min-w-0">
              {/* Products Header */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Jewelry Collection
                </h2>
                <p className="text-sm text-gray-600">
                  Showing {products.length} of 156 products
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {products.map((p) => (
                  <Fashion2ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
