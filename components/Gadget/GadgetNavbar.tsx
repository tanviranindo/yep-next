"use client";

import { useGadgetStore } from "@/contexts/GadgetStoreContext";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import Link from "next/link";
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import Logo from "./Logo";

export type GadgetNavbarVariant = 1 | 2;

interface GadgetNavbarProps {
  variant: GadgetNavbarVariant;
  routes?: Record<string, string>;
}

export default function GadgetNavbar({
  variant,
  routes = GADGET1_ROUTES,
}: GadgetNavbarProps) {
  const { cartCount, wishlistCount } = useGadgetStore();

  if (variant === 2) {
    // Variant 2 - Keep existing for compatibility
    return (
      <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href={routes.HOME}
                  className="text-sm text-black hover:text-gray-600"
                >
                  Home
                </Link>
                <Link
                  href={routes.SHOP}
                  className="text-sm text-black hover:text-gray-600"
                >
                  Categories
                </Link>
                <Link
                  href={routes.SHOP}
                  className="text-sm text-black hover:text-gray-600"
                >
                  Shop
                </Link>
              </nav>
              <div className="flex items-center gap-3">
                <Link
                  href={routes.WISHLIST}
                  className="p-2 hover:bg-gray-50 rounded-md"
                >
                  <FiHeart
                    className={`w-5 h-5 ${
                      wishlistCount > 0
                        ? "fill-red-500 text-red-500"
                        : "text-black"
                    }`}
                  />
                </Link>
                <Link
                  href={routes.CART}
                  className="p-2 hover:bg-gray-50 rounded-md"
                >
                  <FiShoppingCart
                    className={`w-5 h-5 ${
                      cartCount > 0 ? "fill-red-500 text-red-500" : "text-black"
                    }`}
                  />
                </Link>
                <button className="p-2 hover:bg-gray-50 rounded-md">
                  <FiUser className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Variant 1 - e-Gagdgets Design (Pixel Perfect)
  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Navigation Links & Icons */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href={routes.HOME}
                className="text-sm font-normal text-black hover:text-gray-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href={routes.SHOP}
                className="text-sm font-normal text-black hover:text-gray-600 transition-colors"
              >
                Categories
              </Link>
              <Link
                href={routes.SHOP}
                className="text-sm font-normal text-black hover:text-gray-600 transition-colors"
              >
                Shop
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href={routes.WISHLIST}
                className="p-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                <FiHeart
                  className={`w-5 h-5 ${
                    wishlistCount > 0
                      ? "fill-red-500 text-red-500"
                      : "text-black"
                  }`}
                />
              </Link>

              <Link
                href={routes.CART}
                className="p-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                <FiShoppingCart
                  className={`w-5 h-5 ${
                    cartCount > 0 ? "fill-red-500 text-red-500" : "text-black"
                  }`}
                />
              </Link>

              <button className="p-2 hover:bg-gray-50 rounded-md transition-colors">
                <FiUser className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
