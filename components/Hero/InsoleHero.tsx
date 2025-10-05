"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const heroSlides = [
  {
    image: "/hero/fashion2.jpg",
    eyebrow: "MID VALUE RANGE SALE 2025!",
    title: "Fabulous Collections",
    cta: { label: "VIEW ALL", href: "#" }
  },
  {
    image: "/hero/1.png",
    eyebrow: "SUMMER COLLECTION 2025!",
    title: "Style Redefined",
    cta: { label: "SHOP NOW", href: "#" }
  },
  {
    image: "/hero/2.png",
    eyebrow: "NEW ARRIVALS!",
    title: "Trending Now",
    cta: { label: "EXPLORE", href: "#" }
  }
];

export default function InsoleHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={heroSlides[currentSlide].image}
          alt="Fashion Shopping"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay - darker on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative h-full flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          {/* Decorative Line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-24 bg-white" />
            <div>
              <p className="text-white text-sm md:text-base tracking-[0.3em] mb-4 font-light">
                {heroSlides[currentSlide].eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
            </div>
          </div>

          <Link
            href={heroSlides[currentSlide].cta.href}
            className="inline-block border-2 border-white text-white px-8 py-3 md:px-10 md:py-4 font-semibold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all ml-16"
          >
            {heroSlides[currentSlide].cta.label}
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === idx ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
