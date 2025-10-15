import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Smartphone, Headphones } from "lucide-react";

export type GadgetFooterVariant = 1 | 2;

interface GadgetFooterProps {
  variant: GadgetFooterVariant;
}

/**
 * GadgetFooter - Unified component for Gadget footer with multiple variants
 *
 * Variant 1: Gadget Store footer with tech theme
 * Variant 2: TechHub footer with modern design
 */
export default function GadgetFooter({ variant }: GadgetFooterProps) {
  if (variant === 2) {
    // Variant 2: TechHub Footer with modern design
    return (
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Newsletter Section */}
        <div className="bg-blue-600">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Smartphone size={28} className="text-white" />
                <h3 className="text-3xl font-bold text-white">Tech Updates</h3>
              </div>
              <p className="text-white/95 mb-6">
                Stay updated with the latest tech trends and exclusive gadget offers
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-md">
                  <Mail size={20} />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <Smartphone size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">TechHub</h2>
                  <p className="text-sm text-blue-400">Innovation & Technology</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your one-stop destination for cutting-edge gadgets and technology. We bring you the latest innovations from around the world.
              </p>
              <div className="flex gap-3 pt-2">
                <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 hover:text-white text-white rounded-full flex items-center justify-center transition-all">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 hover:text-white text-white rounded-full flex items-center justify-center transition-all">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 hover:text-white text-white rounded-full flex items-center justify-center transition-all">
                  <Linkedin size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 hover:text-white text-white rounded-full flex items-center justify-center transition-all">
                  <Twitter size={18} />
                </Link>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Products</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Smartphones</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Laptops</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Accessories</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Gaming</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Tech Support</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Warranty</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Shipping Info</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Returns</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Refund Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>

          {/* Tech Brands Banner */}
          <div className="bg-white/5 rounded-2xl p-6 mb-8">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-gray-300 font-semibold flex items-center gap-2">
                <Headphones size={20} className="text-blue-400" />
                Trusted Brands:
              </div>
              {["Apple", "Samsung", "Dell", "HP", "Sony", "Microsoft"].map((brand) => (
                <div key={brand} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer font-medium">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-6">
            <p>© 2025 TechHub. All Rights Reserved. | Innovation meets technology</p>
          </div>
        </div>
      </footer>
    );
  }

  // Variant 1: Gadget Store Footer
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-2">Stay Connected</h3>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for the latest gadget updates and exclusive tech deals
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <Mail size={20} />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Smartphone size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">GADGET STORE</h2>
                <p className="text-sm text-gray-400">Tech Innovation</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted destination for cutting-edge gadgets and technology. We bring you the latest innovations from around the world.
            </p>
            <div className="flex gap-3 pt-2">
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Smartphones</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Laptops</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Accessories</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Gaming</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Tech Support</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Warranty</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Tech Brands */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-gray-600 font-semibold">Trusted Brands:</div>
            {["Apple", "Samsung", "Dell", "HP", "Sony", "Microsoft"].map((brand) => (
              <div key={brand} className="text-gray-500 hover:text-blue-400 transition-colors cursor-pointer">
                {brand}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 Gadget Store. All Rights Reserved. | Technology redefined</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
