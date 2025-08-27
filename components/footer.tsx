import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">FASHION</h3>
            <p className="text-gray-400 mb-4">
              Discover fashion that fits your lifestyle. From casual looks to
              formal attire, we have everything you need to express your unique
              style.
            </p>
            <p className="text-gray-400">+880 1567-3 34566</p>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <p className="text-gray-400 mt-4">Get App</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Order List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="font-semibold mb-4">My Account</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Order List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  My Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
