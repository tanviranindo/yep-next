"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Variant 2 Props (Insole)
export interface HeroV2Props {
  slides?: Array<{
    image: string;
    eyebrow: string;
    title: string;
    cta: { label: string; href: string };
  }>;
}

export default function HeroVariant2({
  slides = [
    {
      image: "/hero/fashion2.jpg",
      eyebrow: "MID VALUE RANGE SALE 2025!",
      title: "Fabulous Collections",
      cta: { label: "VIEW ALL", href: "#" },
    },
    {
      image: "/hero/1.png",
      eyebrow: "SUMMER COLLECTION 2025!",
      title: "Style Redefined",
      cta: { label: "SHOP NOW", href: "#" },
    },
    {
      image: "/hero/2.png",
      eyebrow: "NEW ARRIVALS!",
      title: "Trending Now",
      cta: { label: "EXPLORE", href: "#" },
    },
  ],
}: HeroV2Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt="Fashion Shopping"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative h-full flex items-center px-8 md:px-16 lg:px-28">
        <div className="max-w-2xl">
          {/* Decorative Line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-24 bg-white" />
            <div>
              <p
                className="text-white mb-4 uppercase"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0.25em",
                  textAlign: "left",
                }}
              >
                {slides[currentSlide].eyebrow}
              </p>
              <h1
                className="text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "70px",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                {slides[currentSlide].title}
              </h1>
            </div>
          </div>

          <Link
            href={slides[currentSlide].cta.href}
            className="inline-flex items-center justify-center transition-all ml-5 mt-6 border border-white text-white bg-black/30 hover:bg-white hover:text-gray-900"
            style={{
              width: "196px",
              height: "58px",
              opacity: 1,
              gap: "10px",
              paddingTop: "20px",
              paddingRight: "52px",
              paddingBottom: "20px",
              paddingLeft: "52px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dmsans)",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {slides[currentSlide].cta.label}
            </span>
          </Link>
        </div>
      </div>

      {/* Vertical stepper */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Show slide ${idx + 1}`}
            className="group"
          >
            <div
              className={`${
                currentSlide === idx
                  ? "h-10 bg-white"
                  : "h-6 bg-white/50 group-hover:bg-white/80"
              } w-[3px] transition-all duration-200`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
