"use client";

// Beauty Navbar - Glamour Design
import { beautyCategories } from "@/lib/navbarCategories";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import MenuBar from "../MenuBar";

export default function BeautyNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-100">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-[0.2em] text-gray-900"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              GLAMOUR
            </Link>

            {/* Right Section - Currency, Language, Support */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Currency Selector */}
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-purple-600 transition-colors">
                <span>BDT</span>
                <FiChevronDown className="w-4 h-4" />
              </button>

              {/* Language Selector */}
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-purple-600 transition-colors">
                <span>EN</span>
                <FiChevronDown className="w-4 h-4" />
              </button>

              {/* Support Link */}
              <Link
                href="#"
                className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Phone Number */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-purple-600 transition-colors"
            >
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            <div className="hidden md:flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm">+880 18756 34578</span>
            </div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
            >
              HOME
            </Link>

            {/* Categories with Dropdown */}
            <button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors">
              <span>CATEGORIES</span>
              <FiChevronDown className="w-4 h-4" />
            </button>

            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
            >
              SHOP
            </Link>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* User Icon */}
            <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Shopping Bag Icon */}
            <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-md transition-colors relative">
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>

            {/* Search Icon */}
            <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
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

            {/* Heart/Wishlist Icon */}
            <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-md transition-colors relative">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="space-y-2">
              <Link
                href="#"
                className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
              >
                HOME
              </Link>
              <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                CATEGORIES
              </button>
              <Link
                href="#"
                className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
              >
                SHOP
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
