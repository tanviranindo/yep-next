import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export type FashionFooterVariant = 1 | 2;

interface FashionFooterProps {
  variant: FashionFooterVariant;
}

/**
 * FashionFooter - Unified component for Fashion footer with multiple variants
 */
export default function FashionFooter({ variant }: FashionFooterProps) {
  if (variant === 2) {
    // Variant 2: Insole Footer
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

  // Variant 1: Fashion Studio Footer
  return (
    <footer className="bg-black text-white">
      <div className="w-full px-4 md:px-6 py-12">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-8">
          {/* Navigation Sections - Mobile */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
                Company
              </h6>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  Campaign
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
                Support
              </h6>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  FAQ
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
                My Account
              </h6>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  Order List
                </a>
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  Track Order
                </a>
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  Wishlist
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
                Pages
              </h6>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  Refund Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="block text-gray-300"
                  style={{ fontSize: "16px" }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Brand Section - Mobile (Centered) */}
          <div className="text-center space-y-4">
            <div className="border border-white p-3 w-fit mx-auto">
              <div className="text-xl font-bold">FASHION</div>
              <div className="text-sm text-center">STUDIO</div>
            </div>
            <p
              className="text-gray-300 max-w-xs mx-auto"
              style={{ fontSize: "14px" }}
            >
              Discover fashion that fits your lifestyle. From casual looks to
              statement pieces.
            </p>
          </div>

          {/* Follow Us - Mobile (Centered) */}
          <div className="text-center">
            <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
              Follow us
            </h6>
            <div className="flex justify-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M16.7273 4H14.3471C13.295 4 12.286 4.42143 11.5421 5.17157C10.7981 5.92172 10.3802 6.93913 10.3802 8V10.4H8V13.6H10.3802V20H13.5537V13.6H15.9339L16.7273 10.4H13.5537V8C13.5537 7.78783 13.6373 7.58434 13.7861 7.43431C13.9349 7.28429 14.1367 7.2 14.3471 7.2H16.7273V4Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M19 5L10 14"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 5L13.4 21L10.2 13.8L3 10.6L19 5Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M15.8027 4C18.1595 4.00016 20.0703 5.91081 20.0703 8.26758V15.8027C20.0702 18.1594 18.1594 20.0702 15.8027 20.0703H8.26758C5.91081 20.0703 4.00016 18.1595 4 15.8027V8.26758C4 5.91071 5.91071 4 8.26758 4H15.8027ZM8.26758 5C6.463 5 5 6.463 5 8.26758V15.8027C5.00016 17.6072 6.4631 19.0703 8.26758 19.0703H15.8027C17.6071 19.0702 19.0702 17.6071 19.0703 15.8027V8.26758C19.0703 6.4631 17.6072 5.00016 15.8027 5H8.26758ZM10.4492 8.88281C11.1052 8.54246 11.852 8.41799 12.583 8.52637C13.3288 8.63696 14.0196 8.98448 14.5527 9.51758C15.0857 10.0507 15.4334 10.7416 15.5439 11.4873C15.6522 12.2182 15.5269 12.9652 15.1865 13.6211C14.8461 14.2769 14.3075 14.8084 13.6475 15.1406C12.9874 15.4729 12.2394 15.589 11.5098 15.4717C10.7801 15.3543 10.1056 15.0098 9.58301 14.4873C9.0604 13.9647 8.71607 13.2902 8.59863 12.5605C8.48124 11.831 8.59658 11.0829 8.92871 10.4229C9.26101 9.76264 9.79316 9.22323 10.4492 8.88281ZM12.4365 9.51562C11.9136 9.43808 11.3794 9.52711 10.9102 9.77051C10.4408 10.014 10.06 10.3997 9.82227 10.8721C9.58458 11.3443 9.502 11.8794 9.58594 12.4014C9.66995 12.9234 9.91615 13.4064 10.29 13.7803C10.6638 14.154 11.1461 14.4003 11.668 14.4844C12.19 14.5684 12.7259 14.4858 13.1982 14.248C13.6704 14.0103 14.0553 13.6294 14.2988 13.1602C14.5423 12.6909 14.6322 12.1567 14.5547 11.6338C14.4756 11.1003 14.227 10.606 13.8457 10.2246C13.4643 9.84324 12.97 9.59476 12.4365 9.51562ZM16.1875 7.39062C16.4635 7.3907 16.6874 7.61458 16.6875 7.89062C16.6875 8.16672 16.4636 8.39055 16.1875 8.39062H16.1787C15.9028 8.39037 15.6787 8.16661 15.6787 7.89062C15.6788 7.61469 15.9028 7.39088 16.1787 7.39062H16.1875Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M7 6.5C7 5.83696 7.26339 5.20107 7.73223 4.73223C8.20107 4.26339 8.83696 4 9.5 4H12V9H9.5C8.83696 9 8.20107 8.73661 7.73223 8.26777C7.26339 7.79893 7 7.16304 7 6.5Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 4H14.5C14.8283 4 15.1534 4.06466 15.4567 4.1903C15.76 4.31594 16.0356 4.50009 16.2678 4.73223C16.4999 4.96438 16.6841 5.23998 16.8097 5.54329C16.9353 5.84661 17 6.1717 17 6.5C17 6.8283 16.9353 7.15339 16.8097 7.45671C16.6841 7.76002 16.4999 8.03562 16.2678 8.26777C16.0356 8.49991 15.76 8.68406 15.4567 8.8097C15.1534 8.93534 14.8283 9 14.5 9H12V4Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11.5C12 11.1717 12.0647 10.8466 12.1903 10.5433C12.3159 10.24 12.5001 9.96438 12.7322 9.73223C12.9644 9.50009 13.24 9.31594 13.5433 9.1903C13.8466 9.06466 14.1717 9 14.5 9C14.8283 9 15.1534 9.06466 15.4567 9.1903C15.76 9.31594 16.0356 9.50009 16.2678 9.73223C16.4999 9.96438 16.6841 10.24 16.8097 10.5433C16.9353 10.8466 17 11.1717 17 11.5C17 11.8283 16.9353 12.1534 16.8097 12.4567C16.6841 12.76 16.4999 13.0356 16.2678 13.2678C16.0356 13.4999 15.76 13.6841 15.4567 13.8097C15.1534 13.9353 14.8283 14 14.5 14C14.1717 14 13.8466 13.9353 13.5433 13.8097C13.24 13.6841 12.9644 13.4999 12.7322 13.2678C12.5001 13.0356 12.3159 12.76 12.1903 12.4567C12.0647 12.1534 12 11.8283 12 11.5V11.5Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 16.5C7 15.837 7.26339 15.2011 7.73223 14.7322C8.20107 14.2634 8.83696 14 9.5 14H12V16.5C12 17.163 11.7366 17.7989 11.2678 18.2678C10.7989 18.7366 10.163 19 9.5 19C8.83696 19 8.20107 18.7366 7.73223 18.2678C7.26339 17.7989 7 17.163 7 16.5Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 11.5C7 10.837 7.26339 10.2011 7.73223 9.73223C8.20107 9.26339 8.83696 9 9.5 9H12V14H9.5C8.83696 14 8.20107 13.7366 7.73223 13.2678C7.26339 12.7989 7 12.163 7 11.5Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Call Us - Mobile (Centered) */}
          <div className="text-center">
            <p className="text-white" style={{ fontSize: "16px" }}>
              Call Us: +880 15673 42557
            </p>
          </div>

          {/* Copyright - Mobile (Centered) */}
          <div className="text-center">
            <div className="border-t-2 border-white pt-4">
              <p className="text-xs text-gray-400">
                © 2025 All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row gap-8">
          {/* Brand Section */}
          <div className="flex-[2] space-y-4">
            <div className="space-y-2">
              <div className="border border-white p-3 w-fit">
                <div className="text-xl font-bold">FASHION</div>
                <div className="text-sm text-center">STUDIO</div>
              </div>
              <p
                className="text-gray-300 max-w-xs"
                style={{ fontSize: "14px" }}
              >
                Discover fashion that fits your lifestyle. From casual looks to
                statement pieces.
              </p>
            </div>
            <div className="border-t-2 border-white pt-4">
              <p className="text-xs text-gray-400">
                © 2025 All Rights Reserved
              </p>
            </div>
          </div>

          {/* Follow Us & Call Us Section */}
          <div className="flex-1 space-y-6">
            <div>
              <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
                Follow us
              </h6>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <path
                      d="M16.7273 4H14.3471C13.295 4 12.286 4.42143 11.5421 5.17157C10.7981 5.92172 10.3802 6.93913 10.3802 8V10.4H8V13.6H10.3802V20H13.5537V13.6H15.9339L16.7273 10.4H13.5537V8C13.5537 7.78783 13.6373 7.58434 13.7861 7.43431C13.9349 7.28429 14.1367 7.2 14.3471 7.2H16.7273V4Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <path
                      d="M19 5L10 14"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 5L13.4 21L10.2 13.8L3 10.6L19 5Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <path
                      d="M15.8027 4C18.1595 4.00016 20.0703 5.91081 20.0703 8.26758V15.8027C20.0702 18.1594 18.1594 20.0702 15.8027 20.0703H8.26758C5.91081 20.0703 4.00016 18.1595 4 15.8027V8.26758C4 5.91071 5.91071 4 8.26758 4H15.8027ZM8.26758 5C6.463 5 5 6.463 5 8.26758V15.8027C5.00016 17.6072 6.4631 19.0703 8.26758 19.0703H15.8027C17.6071 19.0702 19.0702 17.6071 19.0703 15.8027V8.26758C19.0703 6.4631 17.6072 5.00016 15.8027 5H8.26758ZM10.4492 8.88281C11.1052 8.54246 11.852 8.41799 12.583 8.52637C13.3288 8.63696 14.0196 8.98448 14.5527 9.51758C15.0857 10.0507 15.4334 10.7416 15.5439 11.4873C15.6522 12.2182 15.5269 12.9652 15.1865 13.6211C14.8461 14.2769 14.3075 14.8084 13.6475 15.1406C12.9874 15.4729 12.2394 15.589 11.5098 15.4717C10.7801 15.3543 10.1056 15.0098 9.58301 14.4873C9.0604 13.9647 8.71607 13.2902 8.59863 12.5605C8.48124 11.831 8.59658 11.0829 8.92871 10.4229C9.26101 9.76264 9.79316 9.22323 10.4492 8.88281ZM12.4365 9.51562C11.9136 9.43808 11.3794 9.52711 10.9102 9.77051C10.4408 10.014 10.06 10.3997 9.82227 10.8721C9.58458 11.3443 9.502 11.8794 9.58594 12.4014C9.66995 12.9234 9.91615 13.4064 10.29 13.7803C10.6638 14.154 11.1461 14.4003 11.668 14.4844C12.19 14.5684 12.7259 14.4858 13.1982 14.248C13.6704 14.0103 14.0553 13.6294 14.2988 13.1602C14.5423 12.6909 14.6322 12.1567 14.5547 11.6338C14.4756 11.1003 14.227 10.606 13.8457 10.2246C13.4643 9.84324 12.97 9.59476 12.4365 9.51562ZM16.1875 7.39062C16.4635 7.3907 16.6874 7.61458 16.6875 7.89062C16.6875 8.16672 16.4636 8.39055 16.1875 8.39062H16.1787C15.9028 8.39037 15.6787 8.16661 15.6787 7.89062C15.6788 7.61469 15.9028 7.39088 16.1787 7.39062H16.1875Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <path
                      d="M7 6.5C7 5.83696 7.26339 5.20107 7.73223 4.73223C8.20107 4.26339 8.83696 4 9.5 4H12V9H9.5C8.83696 9 8.20107 8.73661 7.73223 8.26777C7.26339 7.79893 7 7.16304 7 6.5Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 4H14.5C14.8283 4 15.1534 4.06466 15.4567 4.1903C15.76 4.31594 16.0356 4.50009 16.2678 4.73223C16.4999 4.96438 16.6841 5.23998 16.8097 5.54329C16.9353 5.84661 17 6.1717 17 6.5C17 6.8283 16.9353 7.15339 16.8097 7.45671C16.6841 7.76002 16.4999 8.03562 16.2678 8.26777C16.0356 8.49991 15.76 8.68406 15.4567 8.8097C15.1534 8.93534 14.8283 9 14.5 9H12V4Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11.5C12 11.1717 12.0647 10.8466 12.1903 10.5433C12.3159 10.24 12.5001 9.96438 12.7322 9.73223C12.9644 9.50009 13.24 9.31594 13.5433 9.1903C13.8466 9.06466 14.1717 9 14.5 9C14.8283 9 15.1534 9.06466 15.4567 9.1903C15.76 9.31594 16.0356 9.50009 16.2678 9.73223C16.4999 9.96438 16.6841 10.24 16.8097 10.5433C16.9353 10.8466 17 11.1717 17 11.5C17 11.8283 16.9353 12.1534 16.8097 12.4567C16.6841 12.76 16.4999 13.0356 16.2678 13.2678C16.0356 13.4999 15.76 13.6841 15.4567 13.8097C15.1534 13.9353 14.8283 14 14.5 14C14.1717 14 13.8466 13.9353 13.5433 13.8097C13.24 13.6841 12.9644 13.4999 12.7322 13.2678C12.5001 13.0356 12.3159 12.76 12.1903 12.4567C12.0647 12.1534 12 11.8283 12 11.5V11.5Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 16.5C7 15.837 7.26339 15.2011 7.73223 14.7322C8.20107 14.2634 8.83696 14 9.5 14H12V16.5C12 17.163 11.7366 17.7989 11.2678 18.2678C10.7989 18.7366 10.163 19 9.5 19C8.83696 19 8.20107 18.7366 7.73223 18.2678C7.26339 17.7989 7 17.163 7 16.5Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 11.5C7 10.837 7.26339 10.2011 7.73223 9.73223C8.20107 9.26339 8.83696 9 9.5 9H12V14H9.5C8.83696 14 8.20107 13.7366 7.73223 13.2678C7.26339 12.7989 7 12.163 7 11.5Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-2" style={{ fontSize: "18px" }}>
                Call us
              </h6>
              <p className="text-gray-300" style={{ fontSize: "16px" }}>
                +880 15673 34566
              </p>
            </div>
          </div>

          {/* Company Section */}
          <div className="flex-1">
            <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
              Company
            </h6>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                Campaign
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex-1">
            <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
              Support
            </h6>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                FAQ
              </a>
            </div>
          </div>

          {/* My Account Section */}
          <div className="flex-1">
            <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
              My Account
            </h6>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                Order List
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                Track Order
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                Wishlist
              </a>
            </div>
          </div>

          {/* Pages Section */}
          <div className="flex-1">
            <h6 className="font-semibold mb-3" style={{ fontSize: "18px" }}>
              Pages
            </h6>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                Refund Policy
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
                style={{ fontSize: "16px" }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
