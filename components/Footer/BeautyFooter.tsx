"use client";

import Link from "next/link";
import { useState } from "react";

export default function BeautyFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    // Add subscription logic here
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Get In Touch Section */}
          <div className="lg:col-span-1">
            <h3
              className="text-xl font-bold text-purple-600 mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Get In Touch
            </h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Get our latest news and promo updates directly to your email
              address every month.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address ..."
                className="w-full px-4 py-3 text-sm border-b-2 border-gray-300 bg-transparent focus:border-purple-600 focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 text-sm font-semibold uppercase tracking-wider hover:bg-purple-700 transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Subscribe
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="#"
                className="text-purple-600 hover:text-purple-700 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-purple-600 hover:text-purple-700 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-purple-600 hover:text-purple-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-purple-600 hover:text-purple-700 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* GLAMOUR Section */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <h2
              className="text-3xl font-bold text-gray-900 tracking-[0.2em] mb-8"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              GLAMOUR
            </h2>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Location
                  </p>
                  <p className="text-sm text-gray-700">Dhaka, Bashundhara</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1"
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
                <div>
                  <p className="text-sm font-semibold text-gray-900">Phone</p>
                  <p className="text-sm text-gray-700">+880 18756 34578</p>
                </div>
              </div>

              {/* E-Mail */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">E-Mail</p>
                  <p className="text-sm text-gray-700">support@beautyls.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-1">
            <h3
              className="text-xl font-bold text-purple-600 mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Campaign
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-1">
            <h3
              className="text-xl font-bold text-purple-600 mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account Section */}
          <div className="lg:col-span-1">
            <h3
              className="text-xl font-bold text-purple-600 mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              My Account
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Order List
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="lg:col-span-1">
            <h3
              className="text-xl font-bold text-purple-600 mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
