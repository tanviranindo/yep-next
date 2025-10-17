"use client";

import GadgetProductCard from "@/components/Gadget/GadgetProductCard";
import { Product } from "@/components/ProductCard";
import Link from "next/link";
import { useMemo, useState } from "react";

interface GadgetTabbedProductsProps {
  products: Product[];
}

export default function GadgetTabbedProducts({
  products,
}: GadgetTabbedProductsProps) {
  const [activeTab, setActiveTab] = useState<"new" | "bestseller" | "featured">(
    "new"
  );

  const { newArrivals, bestsellers, featured } = useMemo(() => {
    const byRating = [...products].sort(
      (a, b) => (b.rating || 0) - (a.rating || 0)
    );
    const byDiscount = [...products].sort((a, b) => {
      const aDisc = a.originalPrice
        ? (a.originalPrice - a.price) / a.originalPrice
        : 0;
      const bDisc = b.originalPrice
        ? (b.originalPrice - b.price) / b.originalPrice
        : 0;
      return bDisc - aDisc;
    });
    const byIsNew = products.filter((p) => p.badge === "NEW");

    return {
      newArrivals:
        byIsNew.length > 0 ? byIsNew.slice(0, 8) : products.slice(0, 8),
      bestsellers: byRating.slice(0, 8),
      featured: byDiscount.slice(0, 8),
    };
  }, [products]);

  const display =
    activeTab === "new"
      ? newArrivals
      : activeTab === "bestseller"
      ? bestsellers
      : featured;

  return (
    <div>
      <div className="mb-6">
        <nav
          className="flex items-center gap-6"
          role="tablist"
          aria-label="Product tabs"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "new"}
            onClick={() => setActiveTab("new")}
            className={`pb-3 text-sm md:text-base font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === "new"
                ? "text-black border-black"
                : "text-gray-500 border-transparent hover:text-black"
            }`}
          >
            New Arrival
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "bestseller"}
            onClick={() => setActiveTab("bestseller")}
            className={`pb-3 text-sm md:text-base font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === "bestseller"
                ? "text-black border-black"
                : "text-gray-500 border-transparent hover:text-black"
            }`}
          >
            Bestseller
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "featured"}
            onClick={() => setActiveTab("featured")}
            className={`pb-3 text-sm md:text-base font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === "featured"
                ? "text-black border-black"
                : "text-gray-500 border-transparent hover:text-black"
            }`}
          >
            Featured Products
          </button>
        </nav>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {display.map((product) => (
          <GadgetProductCard key={product.id} variant={1} product={product} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/gadget1/products"
          className="inline-block px-6 py-2 border border-black text-black text-sm font-medium rounded hover:bg-black hover:text-white transition-colors"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
