"use client";

import FilterSidebarVariant1 from "@/components/Filters/Sidebar/variant-1";
import FashionProductCard from "@/components/ProductCard/FashionProductCard";
import { useEffect, useState } from "react";
import { fashionProducts, sortProducts, filterProducts, sortOptions } from "@/data/fashion1/products";

export default function FashionShopLayout() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory] = useState<string>("All"); // TODO: Wire up filter controls
  const [selectedSubcategory] = useState<string>("All"); // TODO: Wire up filter controls
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [priceRange] = useState<[number, number]>([0, 10000]); // TODO: Wire up filter controls

  // Filter and sort products
  const filteredProducts = filterProducts(
    fashionProducts,
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
    <div data-theme="fashion" className="bg-white min-h-screen">
      {/* Main content with filter sidebar */}
      <section className="w-full px-4 py-10 bg-gray-50">
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="btn bg-black text-white w-full"
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
                <FilterSidebarVariant1 />
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Sidebar - Filter */}
            <div className="hidden lg:block w-full lg:w-80 flex-shrink-0">
              <FilterSidebarVariant1 />
            </div>

            {/* Center - Products Grid */}
            <div className="flex-1 min-w-0">
              {/* Products Header with Sort */}
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Fashion Collection</h2>
                  <p className="text-sm text-gray-600">
                    Showing {displayProducts.length} of {fashionProducts.length} products
                  </p>
                </div>
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
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {displayProducts.map((p) => (
                  <FashionProductCard key={p.id} product={p} />
                ))}
              </div>

              {displayProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No products found matching your filters</p>
                </div>
              )}
            </div>
          </div>
      </section>
    </div>
  );
}
