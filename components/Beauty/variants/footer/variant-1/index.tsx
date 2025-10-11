import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export default function BeautyFooterVariant1() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="bg-[#842898]">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-2">Get In Touch</h3>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for exclusive beauty tips and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#842898] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
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
              <div className="w-12 h-12 bg-[#842898] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">G</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">GLAMOUR</h2>
                <p className="text-sm text-gray-400">Beauty Redefined</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Experience the luxury of premium beauty products that enhance your natural radiance. Your beauty, our passion.
            </p>
            <div className="flex gap-3 pt-2">
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#842898] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#842898] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#842898] rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-[#842898] rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Our Story</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-lg font-bold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Order List</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Track Order</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Wishlist</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">My Profile</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-bold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#842898] transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-gray-600 font-semibold">Trusted Brands:</div>
            {["CHANEL", "DIOR", "ESTÉE LAUDER", "MAC", "CLINIQUE"].map((brand) => (
              <div key={brand} className="text-gray-500 hover:text-[#842898] transition-colors cursor-pointer">
                {brand}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 GLAMOUR. All Rights Reserved. | Made with beauty and care</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
