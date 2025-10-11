"use client";

import { Product } from "@/components/ProductCard";
import {
  beautyProducts,
  categories as categories1,
  subcategories as subcategories1,
  sortOptions as sortOptions1,
  sortProducts as sortProducts1,
} from "@/data/beauty1/products";
import {
  beauty2Products,
  categories as categories2,
  subcategories as subcategories2,
  sortOptions as sortOptions2,
  sortProducts as sortProducts2,
} from "@/data/beauty2/products";
import { useEffect, useState } from "react";
import BeautyFilter from "./BeautyFilter";
import BeautyHero from "./BeautyHero";
import BeautyNavbar from "./BeautyNavbar";
import BeautyProductCard from "./BeautyProductCard";

export type BeautyLayoutVariant = 1 | 2;

interface BeautyLayoutProps {
  variant: BeautyLayoutVariant;
  routes?: Record<string, string>;
  heroProps?: any;
  products?: Product[];
}

export default function BeautyLayout({
  variant,
  routes,
  heroProps,
  products,
}: BeautyLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  // Use default products if none provided
  const defaultProducts = variant === 1 ? beautyProducts : beauty2Products;
  const currentProducts = products || defaultProducts;

  // Use correct data based on variant
  const currentCategories = variant === 1 ? categories1 : categories2;
  const currentSubcategories = variant === 1 ? subcategories1 : subcategories2;
  const currentSortProducts = variant === 1 ? sortProducts1 : sortProducts2;
  const currentSortOptions = variant === 1 ? sortOptions1 : sortOptions2;

  // Filter products based on selected filters
  const filteredProducts = currentProducts.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === "All" || product.subcategory === selectedSubcategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

    return categoryMatch && subcategoryMatch && priceMatch;
  });
  const displayProducts = currentSortProducts(filteredProducts, sortBy);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isFilterOpen]);

  const handleFilterChange = (
    filters: Record<string, string[]>,
    newPriceRange: [number, number]
  ) => {
    // Update category filter
    if (filters.category && filters.category.length > 0) {
      setSelectedCategory(filters.category[0]);
    } else {
      setSelectedCategory("All");
    }

    // Update subcategory filter (collection)
    if (filters.collection && filters.collection.length > 0) {
      setSelectedSubcategory(filters.collection[0]);
    } else {
      setSelectedSubcategory("All");
    }

    // Update price range
    setPriceRange(newPriceRange);
  };

  const filterProps = {
    groups: [
      {
        title: "Categories",
        name: "category",
        options: [...currentCategories],
      },
      {
        title: "Collections",
        name: "collection",
        options: [...currentSubcategories],
      },
    ],
    onFilterChange: handleFilterChange,
    price: {
      min: 0,
      max: 5000,
      value: priceRange[1],
      name: "price",
      label: "Filter by Price",
    },
  };

  const brandColor = variant === 1 ? "#842898" : "#D4A574";

  return (
    <div
      className={
        variant === 1 ? "bg-white min-h-screen" : "bg-white min-h-screen"
      }
    >
      {/* Navbar */}
      <BeautyNavbar variant={variant} routes={routes} />

      {/* Hero Section */}
      {heroProps && <BeautyHero variant={variant} {...heroProps} />}

      {/* Main content with filter sidebar */}
      <section
        className={
          variant === 1 ? "w-full px-4 py-10 bg-gray-50" : "w-full bg-gray-50"
        }
      >
        <div
          className={
            variant === 2 ? "w-full px-4 md:px-6 lg:px-8 py-8 md:py-12" : ""
          }
        >
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={
                variant === 1
                  ? `bg-[${brandColor}] text-white w-full py-3 px-4 font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity`
                  : "w-full bg-gray-900 text-white py-3 px-4 font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              }
              style={variant === 1 ? { backgroundColor: brandColor } : {}}
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
                <BeautyFilter variant={variant} filterProps={filterProps} />
              </div>
            </div>
          )}

          <div
            className={
              variant === 2
                ? "flex flex-col lg:flex-row gap-6 lg:gap-8"
                : "flex flex-col lg:flex-row gap-4"
            }
          >
            {/* Left Sidebar - Filter */}
            <div
              className={
                variant === 2
                  ? "hidden lg:block w-full lg:w-72 flex-shrink-0"
                  : "hidden lg:block w-full lg:w-80 flex-shrink-0"
              }
            >
              <BeautyFilter variant={variant} filterProps={filterProps} />
            </div>

            {/* Center - Products Grid */}
            <div className="flex-1 min-w-0">
              {/* Products Header with Sort */}
              <div
                className={
                  variant === 2
                    ? "mb-6 md:mb-8 flex justify-between items-center"
                    : "mb-6 flex justify-between items-center"
                }
              >
                <div>
                  <h2
                    className={
                      variant === 2
                        ? "text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                        : "text-xl font-bold text-gray-800"
                    }
                  >
                    {variant === 1
                      ? "Beauty Collection"
                      : "Natural Beauty"}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Showing {displayProducts.length} of {currentProducts.length}{" "}
                    products
                  </p>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  {currentSortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
                  <BeautyProductCard
                    key={p.id}
                    variant={variant}
                    product={p}
                  />
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
