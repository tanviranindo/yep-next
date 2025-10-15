import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export type GadgetFooterVariant = 1 | 2;

interface GadgetFooterProps {
  variant: GadgetFooterVariant;
}

export default function GadgetFooter({ variant }: GadgetFooterProps) {
  if (variant === 2) {
    // Variant 2 - Keep for compatibility
    return (
      <footer className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-xl font-bold">e-Gagdgets</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We are a gadgets eCommerce store located in Bangladesh. Our
                e-store offers more than your imagination.
              </p>
              <div className="flex gap-3 pt-2">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram size={18} />
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-base font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Campaign
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-base font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* My Account */}
            <div>
              <h3 className="text-base font-semibold mb-4">My Account</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Order List
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="text-base font-semibold mb-4">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
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

  // Variant 1 - e-Gagdgets Design (Pixel Perfect)
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold">e-Gagdgets</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are a gadgets eCommerce store located in Bangladesh. Our
              e-store offers more than your imagination.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/gadget1"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gadget1"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Campaign
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/gadget1/faq"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/gadget1/tracking"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/gadget1/wishlist"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-base font-semibold mb-4">My Account</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/gadget1/cart"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Order List
                </Link>
              </li>
              <li>
                <Link
                  href="/gadget1/tracking"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/gadget1/wishlist"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-base font-semibold mb-4">Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/gadget1"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/gadget1"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  href="/gadget1"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
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
