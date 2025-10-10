"use client";

// Fashion Navbar - Responsive design matching mobile and desktop references
import { fashionCategories } from "@/lib/navbarCategories";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronRight,
  FiMenu,
  FiSearch,
} from "react-icons/fi";
import MenuBar from "../MenuBar";
import { FASHION1_ROUTES } from "@/data/fashion1/constants";

export default function FashionNavbar() {
  const { cartCount, wishlistCount } = useFashionStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [isMobileWomenOpen, setIsMobileWomenOpen] = useState(false);
  const [isMobileMenOpen, setIsMobileMenOpen] = useState(false);
  const [isMobileAccessoriesOpen, setIsMobileAccessoriesOpen] = useState(false);

  // Sub-dropdown states for mobile
  const [isMobileDressesOpen, setIsMobileDressesOpen] = useState(false);
  const [isMobileTopsOpen, setIsMobileTopsOpen] = useState(false);
  const [isMobileShirtsOpen, setIsMobileShirtsOpen] = useState(false);
  const [isMobileBagsOpen, setIsMobileBagsOpen] = useState(false);

  const categoriesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsMobileCategoriesOpen(false);
        setIsMobileWomenOpen(false);
        setIsMobileMenOpen(false);
        setIsMobileAccessoriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-100">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between px-4 py-4 h-16 w-full">
          {/* Left Section - Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md"
          >
            <FiMenu className="w-6 h-6" />
          </button>

          {/* Center - Logo */}
          <Link href={FASHION1_ROUTES.HOME} className="border border-gray-800 p-2 w-fit">
            <div className="text-lg font-bold text-gray-800">FASHION</div>
            <div className="text-xs text-center text-gray-800">STUDIO</div>
          </Link>

          {/* Right Section - Shopping, Wishlist, User Icons */}
          <div className="flex items-center space-x-1">
            {/* Shopping Bag Icon with Badge */}
            <Link href={FASHION1_ROUTES.CART} className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Heart/Wishlist Icon with Badge */}
            <Link href={FASHION1_ROUTES.WISHLIST} className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* User Icon */}
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
              <Link
                href={FASHION1_ROUTES.HOME}
                className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
              >
                HOME
              </Link>
              <Link
                href={FASHION1_ROUTES.PROMOTIONS}
                className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
              >
                SHOP
              </Link>

              {/* Mobile Categories Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setIsMobileCategoriesOpen(!isMobileCategoriesOpen)
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
                >
                  <span>CATEGORIES</span>
                  <FiChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileCategoriesOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {isMobileCategoriesOpen && (
                  <div className="ml-4 space-y-1">
                    {/* Women Section */}
                    <div>
                      <button
                        onClick={() => setIsMobileWomenOpen(!isMobileWomenOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
                      >
                        <span>Women</span>
                        <FiChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileWomenOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isMobileWomenOpen && (
                        <div className="ml-4 space-y-1">
                          {/* Dresses with sub-dropdown */}
                          <div>
                            <button
                              onClick={() =>
                                setIsMobileDressesOpen(!isMobileDressesOpen)
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <span>Dresses</span>
                              <FiChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isMobileDressesOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isMobileDressesOpen && (
                              <div className="ml-4 space-y-1">
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Evening Dresses
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Casual Dresses
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Party Dresses
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Maxi Dresses
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Tops & Blouses with sub-dropdown */}
                          <div>
                            <button
                              onClick={() =>
                                setIsMobileTopsOpen(!isMobileTopsOpen)
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <span>Tops & Blouses</span>
                              <FiChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isMobileTopsOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isMobileTopsOpen && (
                              <div className="ml-4 space-y-1">
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  T-Shirts
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Blouses
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Tank Tops
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Sweaters
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Simple links for other items */}
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Pants & Jeans
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Skirts
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Outerwear
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Activewear
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Men Section */}
                    <div>
                      <button
                        onClick={() => setIsMobileMenOpen(!isMobileMenOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
                      >
                        <span>Men</span>
                        <FiChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileMenOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isMobileMenOpen && (
                        <div className="ml-4 space-y-1">
                          {/* Shirts with sub-dropdown */}
                          <div>
                            <button
                              onClick={() =>
                                setIsMobileShirtsOpen(!isMobileShirtsOpen)
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <span>Shirts</span>
                              <FiChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isMobileShirtsOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isMobileShirtsOpen && (
                              <div className="ml-4 space-y-1">
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Dress Shirts
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Casual Shirts
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Polo Shirts
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Button Downs
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Simple links for other items */}
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            T-Shirts
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Pants & Jeans
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Jackets
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Suits
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Activewear
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Accessories Section */}
                    <div>
                      <button
                        onClick={() =>
                          setIsMobileAccessoriesOpen(!isMobileAccessoriesOpen)
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
                      >
                        <span>Accessories</span>
                        <FiChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileAccessoriesOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isMobileAccessoriesOpen && (
                        <div className="ml-4 space-y-1">
                          {/* Bags with sub-dropdown */}
                          <div>
                            <button
                              onClick={() =>
                                setIsMobileBagsOpen(!isMobileBagsOpen)
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <span>Bags</span>
                              <FiChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isMobileBagsOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isMobileBagsOpen && (
                              <div className="ml-4 space-y-1">
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Handbags
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Tote Bags
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Crossbody Bags
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Backpacks
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Simple links for other items */}
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Shoes
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Jewelry
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Watches
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Belts
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Hats
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-6 py-4 h-16 w-full">
          {/* Left Section - Logo, Navigation, Search */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href={FASHION1_ROUTES.HOME} className="border border-gray-800 p-2 w-fit">
              <div className="text-lg font-bold text-gray-800">FASHION</div>
              <div className="text-xs text-center text-gray-800">STUDIO</div>
            </Link>

            {/* Navigation Links */}
            <Link
              href={FASHION1_ROUTES.HOME}
              className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              HOME
            </Link>
            <Link
              href={FASHION1_ROUTES.PROMOTIONS}
              className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              SHOP
            </Link>

            {/* Categories Dropdown */}
            <MenuBar
              label="CATEGORIES"
              items={fashionCategories}
              buttonClassName="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center space-x-1"
            />

            {/* Search Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <FiSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Right Section - Cart, Wishlist, User Icons */}
          <div className="flex items-center space-x-1">
            {/* Shopping Bag Icon with Badge */}
            <Link href={FASHION1_ROUTES.CART} className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Heart/Wishlist Icon with Badge */}
            <Link href={FASHION1_ROUTES.WISHLIST} className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* User Icon */}
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
