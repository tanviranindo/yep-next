"use client";

import { BeautyFooter, BeautyNavbar, BeautyProductCard } from "@/components/Beauty";
import { useEffect, useState } from "react";
import { saleProducts, hotDeals } from "@/data/beauty1/products";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";

export const dynamic = "force-dynamic";

export default function PromotionsPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 18,
    minutes: 32,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <BeautyNavbar variant={1} routes={BEAUTY1_ROUTES} />

      {/* Hero Banner - Flash Sale */}
      <div className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-20">
          {/* Left Side - Text Content */}
          <div className="max-w-xl z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              FLASH SALE
              <br />
              ON TRENDING
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Discover beauty products that elevate your glow. From skincare essentials to makeup must-haves.
            </p>
            <a
              href="#products"
              className="inline-block px-8 py-3 bg-[#842898] text-white hover:bg-[#6d1f7a] transition-colors rounded-md"
            >
              Shop Now &rarr;
            </a>
          </div>

          {/* Right Side - Decorative Element */}
          <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-purple-100 to-transparent">
            <div className="h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <p className="text-sm">Up to 50% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EID/Sale Special Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#842898] text-white text-sm font-semibold mb-4 rounded-full">
              SALE
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Special Sale On Beauty Products
            </h2>
          </div>

          {/* Products Grid */}
          <div
            id="products"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {saleProducts.map((product) => (
              <div key={product.id} className="relative">
                <span className="absolute top-2 left-2 z-10 bg-[#842898] text-white text-xs px-3 py-1 font-semibold rounded-full">
                  SALE
                </span>
                <BeautyProductCard variant={1} product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={BEAUTY1_ROUTES.SHOP}
              className="inline-block px-8 py-3 border-2 border-[#842898] text-gray-900 hover:bg-[#842898] hover:text-white transition-colors rounded-md"
            >
              See All Products
            </a>
          </div>
        </div>
      </section>

      {/* Limited Time Deals Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Limited-Time Deals</h2>
            <p className="text-gray-300 mb-8">
              Hurry up! These deals won't last long
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 md:gap-8 mb-12">
              <div className="text-center">
                <div className="bg-white text-gray-900 text-3xl md:text-5xl font-bold w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
                  {timeLeft.days}
                </div>
                <p className="mt-2 text-sm text-gray-300">Days</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-gray-900 text-3xl md:text-5xl font-bold w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
                  {timeLeft.hours}
                </div>
                <p className="mt-2 text-sm text-gray-300">Hours</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-gray-900 text-3xl md:text-5xl font-bold w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
                  {timeLeft.minutes}
                </div>
                <p className="mt-2 text-sm text-gray-300">Minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-gray-900 text-3xl md:text-5xl font-bold w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
                  {timeLeft.seconds}
                </div>
                <p className="mt-2 text-sm text-gray-300">Seconds</p>
              </div>
            </div>
          </div>

          <a
            href={BEAUTY1_ROUTES.SHOP}
            className="block text-center px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors max-w-xs mx-auto rounded-md"
          >
            Explore &rarr;
          </a>
        </div>
      </section>

      {/* Today's Hot Deal Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Today's Hot Deals</h2>
            <a
              href={BEAUTY1_ROUTES.SHOP}
              className="text-gray-900 hover:underline hidden md:block"
            >
              See All &rarr;
            </a>
          </div>

          {/* Hot Deals Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hotDeals.map((product) => (
              <BeautyProductCard key={product.id} variant={1} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <a href={BEAUTY1_ROUTES.SHOP} className="text-gray-900 hover:underline">
              See All &rarr;
            </a>
          </div>
        </div>
      </section>

      <BeautyFooter variant={1} />
    </div>
  );
}
