"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingBag, FiHeart, FiUser } from "react-icons/fi";

export default function InsoleNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-200">
      {/* Desktop & Mobile Layout */}
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 h-16 w-full">
        {/* Left Section - Mobile Hamburger & Desktop Nav */}
        <div className="flex items-center space-x-6">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-gray-600"
          >
            <FiMenu className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors uppercase"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors uppercase"
            >
              SHOP
            </Link>
            <div className="relative group">
              <button className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors uppercase flex items-center gap-1">
                CATEGORIES
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-900">
            Insole
          </Link>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Search Icon */}
          <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors">
            <FiSearch className="w-5 h-5" />
          </button>

          {/* Shopping Bag with Badge */}
          <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors relative">
            <FiShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Heart/Wishlist with Badge */}
          <button className="hidden sm:block p-2 text-gray-800 hover:text-gray-600 transition-colors relative">
            <FiHeart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* User Icon */}
          <button className="hidden sm:block p-2 text-gray-800 hover:text-gray-600 transition-colors">
            <FiUser className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="#"
              className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md uppercase"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md uppercase"
            >
              SHOP
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md uppercase"
            >
              CATEGORIES
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
