"use client";

import Image from "next/image";
import Link from "next/link";

export interface BeautyHeroProps {
  title?: string;
  description?: string;
  cta?: { label: string; href: string };
  heroImage: string;
  brand?: string;
}

export default function BeautyHero({
  title = "Live in Glamour",
  description = "From luxury skincare to iconic makeup looks, we bring you the best brands, and timeless essentials. Because it has measures in the extraordinary.",
  cta = { label: "SHOP NOW", href: "#products" },
  heroImage,
  brand = "GLAMOUR",
}: BeautyHeroProps) {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Hero Image */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto">
            <Image
              src={heroImage}
              alt="Beauty Hero"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            {/* Title */}
            <div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-purple-700 mb-4"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  lineHeight: "1.1",
                }}
              >
                {title}
              </h1>
              <p
                className="text-gray-700 text-base md:text-lg max-w-lg"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                {description}
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href={cta.href}
                className="inline-block px-8 py-3 bg-black text-white text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors duration-200 rounded"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                }}
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
