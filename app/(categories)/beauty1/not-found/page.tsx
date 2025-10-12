"use client";

import { BeautyFooter, BeautyNavbar } from "@/components/Beauty";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `${BEAUTY1_ROUTES.SHOP}?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <BeautyNavbar variant={1} routes={BEAUTY1_ROUTES} />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Large 404 Text */}
          <h1 className="text-9xl md:text-[200px] font-bold text-[#842898] mb-4 leading-none">
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
                placeholder="Search for beauty products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898] focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#842898] text-white p-3 rounded-md hover:bg-[#6d1f7a] transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={BEAUTY1_ROUTES.HOME}
              className="px-8 py-3 bg-[#842898] text-white rounded-lg font-semibold hover:bg-[#6d1f7a] transition-colors"
            >
              Go to Home
            </Link>
            <Link
              href={BEAUTY1_ROUTES.SHOP}
              className="px-8 py-3 border-2 border-[#842898] text-[#842898] rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Browse Products
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={BEAUTY1_ROUTES.SHOP}
                className="text-[#842898] hover:underline"
              >
                Shop
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={BEAUTY1_ROUTES.PROMOTIONS}
                className="text-[#842898] hover:underline"
              >
                Promotions
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={BEAUTY1_ROUTES.CART}
                className="text-[#842898] hover:underline"
              >
                Cart
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={BEAUTY1_ROUTES.WISHLIST}
                className="text-[#842898] hover:underline"
              >
                Wishlist
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={BEAUTY1_ROUTES.TRACK_ORDER}
                className="text-[#842898] hover:underline"
              >
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BeautyFooter variant={1} />
    </div>
  );
}
