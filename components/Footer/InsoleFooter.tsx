import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function InsoleFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Insole
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              From Everyday Essentials to Statement Pieces — We've Got You
              Covered.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Order List
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us - Full Width on Mobile */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center space-x-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FiFacebook className="w-5 h-5" />
                <span>Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
                <span>Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="w-full px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">Copyright © 2025</p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
