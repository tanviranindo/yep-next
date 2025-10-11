"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingBag, FiHeart, FiUser } from "react-icons/fi";
import MenuBar from "@/components/Navbar/MenuBar";
import { fashionCategories } from "@/lib/navbarCategories";

export interface NavbarV2Props {
  cartCount: number;
  wishlistCount: number;
  routes: {
    HOME: string;
    SHOP: string;
    CART: string;
    WISHLIST: string;
  };
}

export default function NavbarVariant2({ cartCount, wishlistCount, routes }: NavbarV2Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-200">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 h-16 w-full">
        <div className="flex items-center space-x-6">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-800 hover:text-gray-600">
            <FiMenu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <Link href={routes.HOME} className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors uppercase">
              HOME
            </Link>
            <Link href={routes.SHOP} className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors uppercase">
              SHOP
            </Link>
            <MenuBar label="CATEGORIES" items={fashionCategories} />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href={routes.HOME} className="text-2xl md:text-3xl font-bold text-gray-900">
            Insole
          </Link>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3">
          <button className="p-2 text-gray-800 hover:text-gray-600 transition-colors">
            <FiSearch className="w-5 h-5" />
          </button>

          <Link href={routes.CART} className="p-2 text-gray-800 hover:text-gray-600 transition-colors relative">
            <FiShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link href={routes.WISHLIST} className="hidden sm:block p-2 text-gray-800 hover:text-gray-600 transition-colors relative">
            <FiHeart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <button className="hidden sm:block p-2 text-gray-800 hover:text-gray-600 transition-colors">
            <FiUser className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link href={routes.HOME} className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md uppercase">
              HOME
            </Link>
            <Link href={routes.SHOP} className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md uppercase">
              SHOP
            </Link>
            <Link href="#" className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md uppercase">
              CATEGORIES
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
