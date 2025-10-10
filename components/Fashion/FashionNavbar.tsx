"use client";

import { useFashionStore } from "@/contexts/FashionStoreContext";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingBag, FiHeart, FiUser, FiChevronRight } from "react-icons/fi";
import MenuBar from "@/components/Navbar/MenuBar";
import { fashionCategories } from "@/lib/navbarCategories";
import { FASHION1_ROUTES } from "@/data/fashion1/constants";

export type FashionNavbarVariant = 1 | 2;

interface FashionNavbarProps {
  variant: FashionNavbarVariant;
  routes?: {
    HOME: string;
    SHOP: string;
    CART: string;
    WISHLIST: string;
  };
}

export default function FashionNavbar({ variant, routes = FASHION1_ROUTES }: FashionNavbarProps) {
  const { cartCount, wishlistCount } = useFashionStore();

  if (variant === 2) {
    return <NavbarVariant2 cartCount={cartCount} wishlistCount={wishlistCount} routes={routes} />;
  }

  return <NavbarVariant1 cartCount={cartCount} wishlistCount={wishlistCount} routes={routes} />;
}

// Variant 1: Fashion Studio (Original)
function NavbarVariant1({ cartCount, wishlistCount, routes }: { cartCount: number; wishlistCount: number; routes: any }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [isMobileWomenOpen, setIsMobileWomenOpen] = useState(false);
  const [isMobileMenOpen, setIsMobileMenOpen] = useState(false);
  const [isMobileAccessoriesOpen, setIsMobileAccessoriesOpen] = useState(false);
  const [isMobileDressesOpen, setIsMobileDressesOpen] = useState(false);
  const [isMobileTopsOpen, setIsMobileTopsOpen] = useState(false);
  const [isMobileShirtsOpen, setIsMobileShirtsOpen] = useState(false);
  const [isMobileBagsOpen, setIsMobileBagsOpen] = useState(false);

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
            <div className="text-lg font-bold text-gray-800">FASHION</div>
            <div className="text-xs text-center text-gray-800">STUDIO</div>
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

        {/* Mobile Menu Dropdown - truncated for brevity, keeping structure */}
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
              <div className="text-lg font-bold text-gray-800">FASHION</div>
              <div className="text-xs text-center text-gray-800">STUDIO</div>
            </Link>

            <Link href={routes.HOME} className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
              HOME
            </Link>
            <Link href={routes.SHOP} className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
              SHOP
            </Link>

            <MenuBar label="CATEGORIES" items={fashionCategories} buttonClassName="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center space-x-1" />

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

// Variant 2: Insole (Minimalist)
function NavbarVariant2({ cartCount, wishlistCount, routes }: { cartCount: number; wishlistCount: number; routes: any }) {
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
