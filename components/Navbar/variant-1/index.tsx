"use client";

// Fashion Navbar - Responsive design matching mobile and desktop references
import { fashionCategories } from "@/lib/navbarCategories";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronRight,
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import MenuBar from "../MenuBar";

export default function FashionNavbar() {
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
  const [isMobileShoesOpen, setIsMobileShoesOpen] = useState(false);
  const [isMobileJewelryOpen, setIsMobileJewelryOpen] = useState(false);

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
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <FiHeart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Shopping Cart Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md"
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
                className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
              >
                HOME
              </Link>
              <Link
                href="#"
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
          {/* Logo */}
          <div className="border border-gray-800 p-2 w-fit">
            <div className="text-lg font-bold text-gray-800">FASHION</div>
            <div className="text-xs text-center text-gray-800">STUDIO</div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              HOME
            </Link>
            <Link
              href="#"
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
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <FiHeart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Shopping Cart Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Account Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <FiUser className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
