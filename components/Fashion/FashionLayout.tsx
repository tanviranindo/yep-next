"use client";

import { useEffect, useState } from "react";
import FashionNavbar from "./FashionNavbar";
import FashionHero from "./FashionHero";
import FashionFilter from "./FashionFilter";
import FashionProductCard from "./FashionProductCard";
import { Product } from "@/components/ProductCard";
import { fashionProducts, sortProducts, filterProducts, sortOptions } from "@/data/fashion1/products";

export type FashionLayoutVariant = 1 | 2;

interface FashionLayoutProps {
  variant: FashionLayoutVariant;
  routes?: {
    HOME: string;
    SHOP: string;
    CART: string;
    WISHLIST: string;
  };
  heroProps?: any;
  products?: Product[];
}

export default function FashionLayout({
  variant,
  routes,
  heroProps,
  products = fashionProducts,
}: FashionLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory] = useState<string>("All");
  const [selectedSubcategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [priceRange] = useState<[number, number]>([0, 10000]);

  // Filter and sort products
  const filteredProducts = filterProducts(
    products,
    selectedCategory,
    selectedSubcategory,
    priceRange[0],
    priceRange[1]
  );
  const displayProducts = sortProducts(filteredProducts, sortBy);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isFilterOpen]);

  return (
    <div className={variant === 1 ? "bg-white min-h-screen" : "bg-white min-h-screen"}>
      {/* Navbar */}
      <FashionNavbar variant={variant} routes={routes} />

      {/* Hero Section */}
      {heroProps && <FashionHero variant={variant} {...heroProps} />}

      {/* Main content with filter sidebar */}
      <section className={variant === 1 ? "w-full px-4 py-10 bg-gray-50" : "w-full bg-gray-50"}>
        <div className={variant === 2 ? "w-full px-4 md:px-6 lg:px-8 py-8 md:py-12" : ""}>
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={
                variant === 1
                  ? "btn bg-black text-white w-full"
                  : "w-full bg-gray-900 text-white py-3 px-4 font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              }
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
                  className={
                    variant === 1
                      ? "btn btn-ghost btn-circle absolute top-2 right-2"
                      : "absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                  }
                >
                  {variant === 1 ? (
                    "✕"
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
                <FashionFilter variant={variant} />
              </div>
            </div>
          )}

          <div className={variant === 2 ? "flex flex-col lg:flex-row gap-6 lg:gap-8" : "flex flex-col lg:flex-row gap-4"}>
            {/* Left Sidebar - Filter */}
            <div className={variant === 2 ? "hidden lg:block w-full lg:w-72 flex-shrink-0" : "hidden lg:block w-full lg:w-80 flex-shrink-0"}>
              <FashionFilter variant={variant} />
            </div>

            {/* Center - Products Grid */}
            <div className="flex-1 min-w-0">
              {/* Products Header with Sort */}
              <div className={variant === 2 ? "mb-6 md:mb-8" : "mb-6 flex justify-between items-center"}>
                <div>
                  <h2 className={variant === 2 ? "text-2xl md:text-3xl font-bold text-gray-900 mb-2" : "text-xl font-bold text-gray-800"}>
                    {variant === 1 ? "Fashion Collection" : "Jewelry Collection"}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Showing {displayProducts.length} of {products.length} products
                  </p>
                </div>
                {variant === 1 && (
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="select select-bordered w-full max-w-xs"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Products Grid */}
              <div
                className={
                  variant === 1
                    ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
                    : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                }
              >
                {displayProducts.map((p) => (
                  <FashionProductCard key={p.id} variant={variant} product={p} />
                ))}
              </div>

              {displayProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">
                    No products found matching your filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
