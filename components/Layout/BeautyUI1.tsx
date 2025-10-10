"use client";

import BeautyFilter from "@/components/Filters/Sidebar/BeautyFilter";
import BeautyHero from "@/components/Hero/BeautyHero";
import { BeautyNavbar } from "@/components/Navbar";
import ProductCard, { Product } from "@/components/ProductCard";
import { useEffect, useMemo, useState } from "react";

const beautyProducts: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `beauty-${i + 1}`,
  name: [
    "Face Skin Color",
    "Loose Face Powder",
    "Gentle Cleanser",
    "Hydra Serum",
  ][i % 4],
  description: "Dermatologist-approved formulas for radiant skin",
  image: "/items/beautyproduct1.png",
  url: `/products/beauty-${i + 1}`,
  price: [1299, 1799, 1499, 1999][i % 4],
  currency: "BDT",
  availability: "InStock",
  brand: "GLAMOUR",
}));

export default function BeautyUI1Layout() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isFilterOpen]);

  const beautyFilterGroups = useMemo(
    () => [
      {
        title: "Skin Type",
        name: "skinType",
        options: [
          { label: "All", value: "all" },
          { label: "Dry", value: "dry" },
          { label: "Oily", value: "oily" },
          { label: "Combination", value: "combination" },
          { label: "Normal", value: "normal" },
          { label: "Sensitive", value: "sensitive" },
        ],
        type: "checkbox" as const,
      },
      {
        title: "Shade",
        name: "shade",
        options: [
          { label: "Fair", value: "fair", color: "#F5D6C6" },
          { label: "Light", value: "light", color: "#E8B895" },
          { label: "Medium", value: "medium", color: "#D4956C" },
          { label: "Tan", value: "tan", color: "#B4764E" },
          { label: "Deep", value: "deep", color: "#8B5A3C" },
        ],
        type: "radio" as const,
      },
      {
        title: "Brands",
        name: "brand",
        options: [
          { label: "All", value: "all" },
          { label: "GLAMOUR", value: "glamour" },
          { label: "NIKA", value: "nika" },
          { label: "SkinLab", value: "skinlab" },
          { label: "Glow Co.", value: "glowco" },
          { label: "Ever Dew", value: "everdew" },
        ],
        type: "checkbox" as const,
      },
    ],
    []
  );

  return (
    <div data-theme="beauty" className="bg-white min-h-screen">
      <BeautyNavbar />

      <BeautyHero
        title="Live in Glamour"
        description="From luxury skincare to iconic makeup looks, we bring you the best brands, and timeless essentials. Because it has measures in the extraordinary."
        heroImage="/hero/beautyhero1.png"
        cta={{ label: "SHOP NOW", href: "#products" }}
        brand="GLAMOUR"
      />

      <section id="products" className="w-full px-4 py-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="btn bg-black text-white w-full"
            >
              Filter & Sort
            </button>
          </div>

          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            >
              <div
                className="fixed inset-y-0 right-0 w-3/4 bg-white p-4 z-50 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="btn btn-ghost btn-circle absolute top-2 right-2"
                >
                  ✕
                </button>
                <BeautyFilter
                  price={{
                    min: 500,
                    max: 5000,
                    value: 1800,
                    name: "price",
                    label: "Price",
                  }}
                  groups={beautyFilterGroups as any}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 min-w-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Beauty Collection
                </h2>
                <p className="text-sm text-gray-600">
                  Showing {beautyProducts.length} of 156 products
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {beautyProducts.map((p) => (
                  <ProductCard key={p.id} variant={2} product={p} />
                ))}
              </div>
            </div>

            <div className="hidden lg:block w-full lg:w-80 flex-shrink-0">
              <div className="sticky top-20">
                <BeautyFilter
                  price={{
                    min: 500,
                    max: 5000,
                    value: 1800,
                    name: "price",
                    label: "Price",
                  }}
                  groups={beautyFilterGroups as any}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
