"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";

export interface BeautyHeroV2Props {
  slides?: Array<{
    title: string;
    subtitle?: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    image: string;
    badge?: string;
  }>;
}

export default function BeautyHeroVariant2({
  slides = [
    {
      title: "Effective, Gentle Science-Backed Skincare",
      subtitle: "Natural Beauty Reimagined",
      description: "Discover the power of nature combined with science. Our carefully curated collection brings you the best in natural, effective skincare.",
      ctaLabel: "EXPLORE COLLECTION",
      ctaHref: "#products",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop",
      badge: "100% Natural",
    },
    {
      title: "Up to 50% OFF on Selected Items",
      subtitle: "Limited Time Offer",
      description: "Don't miss out on our exclusive deals. Premium quality skincare products at unbeatable prices. Shop now and save big!",
      ctaLabel: "SHOP SALE",
      ctaHref: "#sale",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&h=800&fit=crop",
      badge: "Sale",
    },
    {
      title: "Gentle on Skin, Powerful Results",
      subtitle: "For All Skin Types",
      description: "Experience the perfect balance of gentle care and effective results. Our products are dermatologically tested and suitable for sensitive skin.",
      ctaLabel: "LEARN MORE",
      ctaHref: "#about",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=800&fit=crop",
      badge: "Dermatologist Approved",
    },
  ],
}: BeautyHeroV2Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-stone-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            {slide.badge && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A574] to-[#C89563] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                <Leaf size={16} />
                {slide.badge}
              </div>
            )}

            {/* Subtitle */}
            {slide.subtitle && (
              <p className="text-[#D4A574] font-semibold text-lg md:text-xl uppercase tracking-wide">
                {slide.subtitle}
              </p>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#D4A574] to-[#C89563] text-white font-bold text-lg rounded-full hover:from-[#C89563] hover:to-[#B8854F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {slide.ctaLabel}
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

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#D4A574] hover:bg-[#D4A574] hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots Navigation */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#D4A574] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#D4A574] hover:bg-[#D4A574] hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              {/* Decorative Leaf Overlay */}
              <div className="absolute top-8 right-8 opacity-20">
                <Leaf size={120} className="text-white" strokeWidth={1} />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4A574] rounded-full opacity-20 blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-300 rounded-full opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A574] rounded-full opacity-5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full opacity-5 blur-3xl -z-10"></div>
    </section>
  );
}
