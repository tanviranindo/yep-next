"use client";

// Fashion Navbar - Responsive design matching mobile and desktop references
import Link from "next/link";
import { useState } from "react";
import {
  FiChevronDown,
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

export default function FashionNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between px-4 py-4 h-16">
          {/* Logo */}
          <div className="border border-gray-800 p-2 w-fit">
            <div className="text-lg font-bold text-gray-800">FASHION</div>
            <div className="text-xs text-center text-gray-800">STUDIO</div>
          </div>

          {/* Right Section - Icons and Menu */}
          <div className="flex items-center space-x-2">
            {/* Search Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors">
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors relative">
              <FiHeart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Shopping Cart Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors relative">
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                HOME
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                SHOP
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                CATEGORIES
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-6 py-4 h-16 w-full">
          {/* Logo */}
          <div className="border border-gray-800 p-2 w-fit">
            <div className="text-lg font-bold text-gray-800">FASHION</div>
            <div className="text-xs text-center text-gray-800">STUDIO</div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              SHOP
            </Link>
            <div className="flex items-center space-x-1">
              <Link
                href="#"
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                CATEGORIES
              </Link>
              <FiChevronDown className="w-3 h-3 text-gray-800" />
            </div>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors">
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors relative">
              <FiHeart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Shopping Cart Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors relative">
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Account Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors">
              <FiUser className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
