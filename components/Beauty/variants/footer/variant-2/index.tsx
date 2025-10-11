import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Leaf } from "lucide-react";

export default function BeautyFooterVariant2() {
  return (
    <footer className="bg-gradient-to-b from-stone-100 to-amber-50 text-gray-900">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#D4A574] to-[#C89563]">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Leaf size={28} className="text-white" />
              <h3 className="text-3xl font-bold text-white">Subscribe</h3>
            </div>
            <p className="text-white/95 mb-6">
              Join our natural beauty community and get exclusive offers & tips
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#D4A574] px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-md">
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
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A574] to-[#C89563] rounded-full flex items-center justify-center">
                <Leaf size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">NIKA</h2>
                <p className="text-sm text-[#D4A574]">Natural Beauty</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Embrace the power of nature with our science-backed, gentle skincare products. Natural ingredients, powerful results.
            </p>
            <div className="flex gap-3 pt-2">
              <Link href="#" className="w-10 h-10 bg-[#D4A574]/10 hover:bg-[#D4A574] hover:text-white text-[#D4A574] rounded-full flex items-center justify-center transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#D4A574]/10 hover:bg-[#D4A574] hover:text-white text-[#D4A574] rounded-full flex items-center justify-center transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#D4A574]/10 hover:bg-[#D4A574] hover:text-white text-[#D4A574] rounded-full flex items-center justify-center transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#D4A574]/10 hover:bg-[#D4A574] hover:text-white text-[#D4A574] rounded-full flex items-center justify-center transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Our Mission</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">My Account</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Order List</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Track Order</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Wishlist</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">My Profile</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#D4A574] transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Natural Ingredients Banner */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-gray-700 font-semibold flex items-center gap-2">
              <Leaf size={20} className="text-[#D4A574]" />
              Natural Ingredients:
            </div>
            {["Aloe Vera", "Green Tea", "Vitamin C", "Hyaluronic Acid", "Jojoba Oil"].map((ingredient) => (
              <div key={ingredient} className="text-gray-600 hover:text-[#D4A574] transition-colors cursor-pointer font-medium">
                {ingredient}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm border-t border-gray-300 pt-6">
          <p>© 2025 NIKA. All Rights Reserved. | Naturally beautiful, scientifically proven</p>
        </div>
      </div>
    </footer>
  );
}
