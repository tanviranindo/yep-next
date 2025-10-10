"use client";

import { FooterVariant1 } from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const categories = [
    {
      name: "Fashion",
      slug: "/fashion1",
      emoji: "👗",
      description:
        "Discover the latest trends in fashion. Premium quality, sustainable materials, and timeless designs.",
      color: "from-slate-900 to-slate-700",
      theme: "fashion",
      features: ["NEW", "WOMEN", "MEN", "ACCESSORIES", "SALE"],
    },
    {
      name: "Fashion 2",
      slug: "/fashion2",
      emoji: "👔",
      description:
        "Alternative fashion collection with unique styles and contemporary designs for modern lifestyle.",
      color: "from-gray-800 to-gray-600",
      theme: "fashion",
      features: ["TRENDY", "CASUAL", "FORMAL", "STREETWEAR", "SALE"],
    },
    {
      name: "Beauty",
      slug: "/beauty",
      emoji: "💄",
      description:
        "Your trusted beauty destination for premium skincare, makeup, and fragrance from the world's best brands.",
      color: "from-pink-300 to-purple-600",
      theme: "beauty",
      features: ["Skincare", "Makeup", "Fragrance", "Hair Care", "Sale"],
    },
    {
      name: "Gadgets",
      slug: "/gadgets",
      emoji: "📱",
      description:
        "Latest tech and electronics. Cutting-edge gadgets for the modern lifestyle.",
      color: "from-blue-600 to-blue-800",
      theme: "gadgets",
      features: ["Smartphones", "Laptops", "Audio", "Gaming", "Sale"],
    },
    {
      name: "Furniture",
      slug: "/furniture",
      emoji: "🛋️",
      description:
        "Premium home and office furniture. Quality craftsmanship meets modern design.",
      color: "from-amber-600 to-amber-800",
      theme: "furniture",
      features: ["Living Room", "Bedroom", "Kitchen", "Office", "Sale"],
    },
    {
      name: "Kids & Mom",
      slug: "/kids-mom",
      emoji: "👶",
      description:
        "Everything for families. Safe, fun, and practical products for kids and moms.",
      color: "from-purple-400 to-pink-400",
      theme: "kidsmom",
      features: ["0-12 months", "1-3 years", "4-8 years", "Mom Care", "Sale"],
    },
  ];

  return (
    <div className="min-h-screen" data-theme="light">
      {/* Main Navigation */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <Link href="/" className="text-2xl font-bold text-primary">
            YEP NEXT
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/products"
                className="text-base-content hover:text-primary"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-base-content hover:text-primary"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/welcome"
                className="text-base-content hover:text-primary"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/products" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-96 bg-gradient-to-br from-primary to-secondary">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h1 className="mb-5 text-6xl font-bold">Welcome to YEP Next</h1>
            <p className="mb-5 text-xl">
              Your ultimate multi-category e-commerce destination. Discover
              premium products across Fashion, Beauty, Gadgets, Furniture, and
              Kids & Mom categories.
            </p>
            <Link href="/products" className="btn btn-primary btn-lg">
              Explore All Products
            </Link>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="w-full px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg opacity-70">
            Choose your favorite category to start shopping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.slug} href={category.slug} className="group">
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className={`hero min-h-48 bg-gradient-to-r ${category.color}`}
                >
                  <div className="hero-overlay bg-opacity-40"></div>
                  <div className="hero-content text-center text-neutral-content">
                    <div>
                      <div className="text-6xl mb-2">{category.emoji}</div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title justify-center">{category.name}</h2>
                  <p className="text-center opacity-70 text-sm">
                    {category.description}
                  </p>

                  {/* Category Features */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {category.features.map((feature, index) => (
                      <span
                        key={index}
                        className="badge badge-outline badge-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary btn-sm group-hover:btn-lg transition-all">
                      Shop {category.name}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Navigation */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/products"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="card-title justify-center">All Products</h3>
                <p>Browse our complete product catalog</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline hover:bg-primary hover:border-primary hover:text-primary-content">
                    View All
                  </button>
                </div>
              </div>
            </Link>

            <Link
              href="/faq"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="card-title justify-center">FAQ</h3>
                <p>Find answers to common questions</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline">Get Help</button>
                </div>
              </div>
            </Link>

            <Link
              href="/welcome"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-4">ℹ️</div>
                <h3 className="card-title justify-center">About Us</h3>
                <p>Learn more about YEP Next</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterVariant1 />
    </div>
  );
}
