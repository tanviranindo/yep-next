"use client";

import { useFurnitureStore } from "@/contexts/FurnitureStoreContext";
import { FURNITURE1_ROUTES } from "@/data/furniture1/constants";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiMenu, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import MenuBar from "@/components/Navbar/MenuBar";
import { furnitureCategories } from "@/lib/navbarCategories";

export type FurnitureNavbarVariant = 1 | 2;

interface FurnitureNavbarProps {
  variant: FurnitureNavbarVariant;
  routes?: Record<string, string>;
}

/**
 * FurnitureNavbar - Unified component for Furniture navbar with multiple variants
 */
export default function FurnitureNavbar({ variant, routes = FURNITURE1_ROUTES }: FurnitureNavbarProps) {
  const { cartCount, wishlistCount } = useFurnitureStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (variant === 2) {
    return (
      <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 h-16 w-full">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-[#8B4513] transition-colors"
            >
              <FiMenu className="w-6 h-6" />
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href={routes.HOME}
                className="text-sm font-semibold text-gray-900 hover:text-[#8B4513] transition-colors uppercase tracking-wider"
              >
                HOME
              </Link>
              <Link
                href={routes.SHOP}
                className="text-sm font-semibold text-gray-900 hover:text-[#8B4513] transition-colors uppercase tracking-wider"
              >
                SHOP
              </Link>
              <MenuBar label="CATEGORIES" items={furnitureCategories} />
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link
              href={routes.HOME}
              className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-[#8B4513] transition-colors"
            >
              FURNISH
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            <button className="p-2 text-gray-800 hover:text-[#8B4513] transition-colors">
              <FiSearch className="w-5 h-5" />
            </button>

            <Link
              href={routes.CART}
              className="p-2 text-gray-800 hover:text-[#8B4513] transition-colors relative"
            >
              <FiShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8B4513] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href={routes.WISHLIST}
              className="hidden sm:block p-2 text-gray-800 hover:text-[#8B4513] transition-colors relative"
            >
              <FiHeart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8B4513] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button className="hidden sm:block p-2 text-gray-800 hover:text-[#8B4513] transition-colors">
              <FiUser className="w-5 h-5" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <Link
                href={routes.HOME}
                className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md uppercase"
              >
                HOME
              </Link>
              <Link
                href={routes.SHOP}
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

  // Variant 1
  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-100">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between px-4 py-4 h-16 w-full">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md"
          >
            <FiMenu className="w-6 h-6" />
          </button>

          <Link href={routes.HOME} className="border border-gray-800 p-2 w-fit">
            <div className="text-lg font-bold text-gray-800">FURNITURE</div>
            <div className="text-xs text-center text-gray-800">HOUSE</div>
          </Link>

          <div className="flex items-center space-x-1">
            <Link href={routes.CART} className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link href={routes.WISHLIST} className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <Link href={routes.HOME} className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md">
                HOME
              </Link>
              <Link href={routes.SHOP} className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md">
                SHOP
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-6 py-4 h-16 w-full">
          <div className="flex items-center space-x-8">
            <Link href={routes.HOME} className="border border-gray-800 p-2 w-fit">
              <div className="text-lg font-bold text-gray-800">FURNITURE</div>
              <div className="text-xs text-center text-gray-800">HOUSE</div>
            </Link>

            <Link href={routes.HOME} className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
              HOME
            </Link>
            <Link href={routes.SHOP} className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
              SHOP
            </Link>

            <MenuBar label="CATEGORIES" items={furnitureCategories} buttonClassName="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center space-x-1" />

            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <FiSearch className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-1">
            <Link href={routes.CART} className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link href={routes.WISHLIST} className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
