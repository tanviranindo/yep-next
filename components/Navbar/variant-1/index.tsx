"use client";

// Fashion Navbar - Responsive design matching mobile and desktop references
import Link from "next/link";
import { useState } from "react";

export default function FashionNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between px-4 py-4 h-16">
          {/* Logo */}
          <div className="border border-gray-800 p-2 w-fit">
            <div className="text-lg font-bold text-gray-800">FASHION</div>
            <div className="text-xs text-center text-gray-800">STUDIO</div>
          </div>

          {/* Right Section - Hamburger Menu and Notification Chips */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Notification Chips */}
            <div className="flex items-center space-x-2">
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                3
              </div>
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                6
              </div>
            </div>
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
        <div className="flex items-center justify-between px-6 py-4 h-16">
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
              <svg
                className="w-3 h-3 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Right Section - Search and Notification Chips */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Notification Chips */}
            <div className="flex items-center space-x-2">
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                3
              </div>
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
