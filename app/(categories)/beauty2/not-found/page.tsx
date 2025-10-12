"use client";

import { BeautyFooter, BeautyNavbar } from "@/components/Beauty";
import { BEAUTY2_ROUTES } from "@/data/beauty2/constants";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `${BEAUTY2_ROUTES.SHOP}?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <BeautyNavbar variant={2} routes={BEAUTY2_ROUTES} />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Large 404 Text */}
          <h1 className="text-9xl md:text-[200px] font-bold text-[#D4A574] mb-4 leading-none">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Please check the URL or try searching for what you need.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for natural beauty products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D4A574] text-white p-3 rounded-md hover:bg-[#C89563] transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={BEAUTY2_ROUTES.HOME}
              className="px-8 py-3 bg-[#D4A574] text-white rounded-lg font-semibold hover:bg-[#C89563] transition-colors"
            >
              Go to Home
            </Link>
            <Link
              href={BEAUTY2_ROUTES.SHOP}
              className="px-8 py-3 border-2 border-[#D4A574] text-[#D4A574] rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Browse Products
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={BEAUTY2_ROUTES.SHOP}
                className="text-[#D4A574] hover:underline"
              >
                Shop
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={BEAUTY2_ROUTES.PROMOTIONS}
                className="text-[#D4A574] hover:underline"
              >
                Promotions
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={BEAUTY2_ROUTES.CART}
                className="text-[#D4A574] hover:underline"
              >
                Cart
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={BEAUTY2_ROUTES.WISHLIST}
                className="text-[#D4A574] hover:underline"
              >
                Wishlist
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={BEAUTY2_ROUTES.TRACK_ORDER}
                className="text-[#D4A574] hover:underline"
              >
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BeautyFooter variant={2} />
    </div>
  );
}
