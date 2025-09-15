// Fashion footer matching the exact reference design - responsive for mobile and desktop
export default function FashionFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-8">
          {/* Navigation Sections - Mobile */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h6 className="font-semibold text-sm mb-3">Company</h6>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300">
                  About Us
                </a>
                <a href="#" className="block text-sm text-gray-300">
                  Campaign
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-semibold text-sm mb-3">Support</h6>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300">
                  FAQ
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-semibold text-sm mb-3">My Account</h6>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300">
                  Order List
                </a>
                <a href="#" className="block text-sm text-gray-300">
                  Track Order
                </a>
                <a href="#" className="block text-sm text-gray-300">
                  Wishlist
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-semibold text-sm mb-3">Pages</h6>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300">
                  Refund Policy
                </a>
                <a href="#" className="block text-sm text-gray-300">
                  Terms & Conditions
                </a>
                <a href="#" className="block text-sm text-gray-300">
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
            <p className="text-sm text-gray-300 max-w-xs mx-auto">
              Discover fashion that fits your lifestyle. From casual looks to
              statement pieces.
            </p>
          </div>

          {/* Follow Us - Mobile (Centered) */}
          <div className="text-center">
            <h6 className="font-semibold text-sm mb-3">Follow us</h6>
            <div className="flex justify-center gap-3">
              <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                <span className="text-xs">✈</span>
              </div>
              <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                <span className="text-xs">📷</span>
              </div>
              <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                <span className="text-xs">●</span>
              </div>
            </div>
          </div>

          {/* Call Us - Mobile (Centered) */}
          <div className="text-center">
            <p className="text-sm text-white">Call Us: +880 15673 42557</p>
          </div>

          {/* Copyright - Mobile (Centered) */}
          <div className="text-center">
            <div className="border-t border-gray-600 pt-4">
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
              <p className="text-sm text-gray-300 max-w-xs">
                Discover fashion that fits your lifestyle. From casual looks to
                statement pieces.
              </p>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <p className="text-xs text-gray-400">
                © 2025 All Rights Reserved
              </p>
            </div>
          </div>

          {/* Follow Us & Call Us Section */}
          <div className="flex-1 space-y-6">
            <div>
              <h6 className="font-semibold text-sm mb-3">Follow us</h6>
              <div className="flex gap-3">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <span className="text-xs">✈</span>
                </div>
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <span className="text-xs">📷</span>
                </div>
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <span className="text-xs">●</span>
                </div>
              </div>
            </div>
            <div>
              <h6 className="font-semibold text-sm mb-2">Call us</h6>
              <p className="text-sm text-gray-300">+880 15673 34566</p>
            </div>
          </div>

          {/* Company Section */}
          <div className="flex-1">
            <h6 className="font-semibold text-sm mb-3">Company</h6>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Campaign
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex-1">
            <h6 className="font-semibold text-sm mb-3">Support</h6>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* My Account Section */}
          <div className="flex-1">
            <h6 className="font-semibold text-sm mb-3">My Account</h6>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Order List
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Track Order
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Wishlist
              </a>
            </div>
          </div>

          {/* Pages Section */}
          <div className="flex-1">
            <h6 className="font-semibold text-sm mb-3">Pages</h6>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Refund Policy
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
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
