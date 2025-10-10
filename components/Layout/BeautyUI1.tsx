"use client";

import Beauty1Filter from "@/components/Filters/Sidebar/Beauty1Filter";
import BeautyHero from "@/components/Hero/BeautyHero";
import { BeautyNavbar } from "@/components/Navbar";
import ProductCard, { Product } from "@/components/ProductCard";
import { useEffect, useMemo, useState } from "react";

export default function BeautyUI1Layout({
  heroImage = "/hero/beautyhero1.png",
  productImage = "/items/beautyproduct1.png",
}: {
  heroImage?: string;
  productImage?: string;
}) {
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
        title: "Categories",
        name: "categories",
        options: [
          { label: "Haircare", value: "haircare" },
          { label: "All", value: "all" },
          { label: "Bracelet", value: "bracelet" },
          { label: "Rings", value: "rings" },
          { label: "Brooch", value: "brooch" },
          { label: "Watches", value: "watches" },
          { label: "Skincare", value: "skincare" },
          { label: "Grooming", value: "grooming" },
        ],
        type: "radio" as const,
        selected: ["all"],
      },
      {
        title: "Skin Type",
        name: "skinType",
        options: [
          { label: "Oily (150)", value: "oily" },
          { label: "Dry (320)", value: "dry" },
          { label: "Sensitive (300)", value: "sensitive" },
          { label: "All Type of Skin (50)", value: "all" },
        ],
        type: "checkbox" as const,
        selected: ["oily"],
      },
      {
        title: "Brands",
        name: "brand",
        options: [
          { label: "Rolliage. (254)", value: "rolliage" },
          { label: "HELEN & JAMES (168)", value: "helen-james" },
          { label: "QKE (120)", value: "qke" },
          { label: "Roman Paul (105)", value: "roman-paul" },
          { label: "KS Silverworks (96)", value: "ks-silverworks" },
          { label: "Love, Executive (72)", value: "love-executive" },
        ],
        type: "checkbox" as const,
        selected: ["qke"],
      },
    ],
    []
  );

  const beautyProducts: Product[] = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: `beauty-${i + 1}`,
        name: [
          "Face Skin Color",
          "Loose Face Powder",
          "Gentle Cleanser",
          "Hydra Serum",
        ][i % 4],
        description: "Dermatologist-approved formulas for radiant skin",
        image: productImage,
        url: `/products/beauty-${i + 1}`,
        price: [1299, 1799, 1499, 1999][i % 4],
        currency: "BDT",
        availability: "InStock",
        brand: "GLAMOUR",
      })),
    [productImage]
  );

  return (
    <div data-theme="beauty" className="bg-white min-h-screen">
      <BeautyNavbar />

      <BeautyHero
        title="Live in Glamour"
        description="From luxury skincare to iconic makeup looks, we bring you the best brands, and timeless essentials. Because it has measures in the extraordinary."
        heroImage={heroImage}
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
                <Beauty1Filter
                  price={{
                    min: 250,
                    max: 5000,
                    value: 5000,
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
                  <ProductCard key={p.id} variant={5} product={p} />
                ))}
              </div>
            </div>

            <div className="hidden lg:block w-full lg:w-80 flex-shrink-0">
              <div className="sticky top-20">
                <Beauty1Filter
                  price={{
                    min: 250,
                    max: 5000,
                    value: 5000,
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
