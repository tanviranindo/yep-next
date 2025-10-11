"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Lock, Truck, Award } from "lucide-react";

export interface BeautyHeroV1Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  modelImage?: string;
  features?: Array<{
    icon: "certified" | "secure" | "shipping" | "transparent";
    label: string;
  }>;
}

export default function BeautyHeroVariant1({
  title = "Live in Glamour",
  subtitle = "Discover Your Beauty",
  description = "Experience the luxury of premium beauty products that enhance your natural radiance. From skincare to makeup, we bring you the finest collection.",
  ctaLabel = "SHOP NOW",
  ctaHref = "#products",
  modelImage = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=1200&fit=crop",
  features = [
    { icon: "certified", label: "Certified Products" },
    { icon: "secure", label: "Secure Payment" },
    { icon: "shipping", label: "Fast Shipping" },
    { icon: "transparent", label: "100% Transparent" },
  ],
}: BeautyHeroV1Props) {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "certified":
        return <Award size={28} strokeWidth={1.5} />;
      case "secure":
        return <Lock size={28} strokeWidth={1.5} />;
      case "shipping":
        return <Truck size={28} strokeWidth={1.5} />;
      case "transparent":
        return <Shield size={28} strokeWidth={1.5} />;
      default:
        return <Award size={28} strokeWidth={1.5} />;
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Model Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] max-w-lg mx-auto lg:mx-0">
              <Image
                src={modelImage}
                alt="Beauty Model"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#842898] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            {/* Large Overlapping Text */}
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                <span className="text-black">Gla</span>
                <span className="text-[#842898]">mour</span>
              </h1>
              <div className="mt-2 md:mt-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mt-2">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#842898] text-white font-bold text-lg rounded-full hover:bg-[#6d1f7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {ctaLabel}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Features Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <div className="text-[#842898]">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#842898] rounded-full opacity-5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full opacity-5 blur-3xl -z-10"></div>
    </section>
  );
}
