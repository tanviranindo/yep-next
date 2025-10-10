"use client";

import { FashionFooter } from "@/components/Footer";
import { FashionNavbar } from "@/components/Navbar";
import FashionProductCard from "@/components/ProductCard/FashionProductCard";
import { useEffect, useState } from "react";
import { saleProducts, hotDeals } from "@/data/fashion1/products";
import { FASHION1_ROUTES } from "@/data/fashion1/constants";

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
      <FashionNavbar />

      {/* Hero Banner - Special EID Discount */}
      <div className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-20">
          {/* Left Side - Text Content */}
          <div className="max-w-xl z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              SPECIAL EID
              <br />
              DISCOUNT!
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Discover fashion that fits your lifestyle. From casual looks to
              statement pieces.
            </p>
            <a
              href="#products"
              className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Discover →
            </a>
          </div>

          {/* Right Side - Model Image (placeholder) */}
          <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gray-300 to-transparent">
            <div className="h-full flex items-center justify-center text-gray-400">
              {/* Image placeholder */}
              <div className="text-center">
                <p className="text-sm">Model Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EID Special Discount Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-red-500 text-white text-sm font-semibold mb-4">
              SALE
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              EID Special Discount Going On
            </h2>
          </div>

          {/* Products Grid */}
          <div
            id="products"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {saleProducts.map((product) => (
              <div key={product.id} className="relative">
                <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs px-3 py-1 font-semibold">
                  SALE
                </span>
                <FashionProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
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
            <h2 className="text-4xl font-bold mb-4">Limited-Time Deals On</h2>
            <p className="text-gray-300 mb-8">
              Hurry up! These deals won't last long
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 md:gap-8 mb-12">
              <div className="text-center">
                <div className="bg-white text-gray-900 text-3xl md:text-5xl font-bold w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded">
                  {timeLeft.days}
                </div>
                <p className="mt-2 text-sm text-gray-300">Days</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-gray-900 text-3xl md:text-5xl font-bold w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded">
                  {timeLeft.hours}
                </div>
                <p className="mt-2 text-sm text-gray-300">Hours</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-gray-900 text-3xl md:text-5xl font-bold w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded">
                  {timeLeft.minutes}
                </div>
                <p className="mt-2 text-sm text-gray-300">Minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-gray-900 text-3xl md:text-5xl font-bold w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded">
                  {timeLeft.seconds}
                </div>
                <p className="mt-2 text-sm text-gray-300">Seconds</p>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="block text-center px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors max-w-xs mx-auto"
          >
            Explore →
          </a>
        </div>
      </section>

      {/* Today's Hot Deal Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Today's Hot Deal</h2>
            <a
              href="#"
              className="text-gray-900 hover:underline hidden md:block"
            >
              See All →
            </a>
          </div>

          {/* Hot Deals Carousel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hotDeals.map((product) => (
              <FashionProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <a href="#" className="text-gray-900 hover:underline">
              See All →
            </a>
          </div>
        </div>
      </section>

      <FashionFooter />
    </div>
  );
}
