import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function InsoleFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Single row on large screens: brand + 4 sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {/* Brand */}
          <div className="xl:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-[#D4B896] transition-colors">
              Insole
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              From Everyday Essentials to Statement Pieces — We've Got You
              Covered.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="#"
                className="w-10 h-10 bg-[#D4B896] text-white rounded-full flex items-center justify-center hover:bg-[#C4A886] transition-colors"
              >
                <FiFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#D4B896] text-white rounded-full flex items-center justify-center hover:bg-[#C4A886] transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#D4B896] text-white rounded-full flex items-center justify-center hover:bg-[#C4A886] transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
                >
                  Campaign
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">My Account</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
                >
                  Order List
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get updates on new arrivals and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-[#D4B896]"
              />
              <button className="px-4 py-2 bg-[#D4B896] text-white text-sm font-semibold hover:bg-[#C4A886] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="w-full px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700 font-medium">
              Copyright © 2025
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
              >
                Refund Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-700 hover:text-[#D4B896] transition-colors font-medium"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
