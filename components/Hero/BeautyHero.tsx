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
  title = "Live in",
  description = "From luxury skincare to iconic makeup must-haves, we bring you top-tier brands and timeless essentials. Because beauty deserves to feel extraordinary.",
  cta = { label: "SHOP NOW", href: "#products" },
  heroImage,
  brand = "Glamour",
}: BeautyHeroProps) {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Image */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto">
            <Image
              src={heroImage}
              alt="Beauty Hero"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Title */}
            <div className="relative">
              <h1 className="mb-0">
                <span
                  className="block text-black leading-tight"
                  style={{
                    fontFamily: "var(--font-afacad)",
                    fontWeight: 400,
                    fontSize: "clamp(48px, 8vw, 96px)",
                    letterSpacing: "0%",
                  }}
                >
                  {title} {brand}
                </span>
              </h1>

              {/* Overlapping GLAMOUR - Black and Purple */}
              <div className="relative mt-2">
                {/* Black GLAMOUR */}
                <span
                  className="block text-black uppercase absolute top-0 left-0"
                  style={{
                    fontFamily: "var(--font-afacad)",
                    fontWeight: 400,
                    fontSize: "clamp(48px, 8vw, 96px)",
                    lineHeight: "1",
                    letterSpacing: "0.02em",
                    zIndex: 2,
                  }}
                >
                  {brand.toUpperCase()}
                </span>

                {/* Purple GLAMOUR - Larger, overlapping */}
                <span
                  className="block text-purple-600 uppercase"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 400,
                    fontSize: "clamp(80px, 13vw, 180px)",
                    lineHeight: "1",
                    letterSpacing: "0.08em",
                    marginTop: "-10px",
                    marginLeft: "-5px",
                  }}
                >
                  {brand.toUpperCase()}
                </span>
              </div>
            </div>

            <p
              className="text-gray-600 max-w-xl mt-20 relative z-10"
              style={{
                fontFamily: "var(--font-dmsans)",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "1.8",
                letterSpacing: "0%",
              }}
            >
              {description}
            </p>

            {/* CTA Button */}
            <div className="relative z-10">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-50 transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dmsans)",
                  width: "249px",
                  height: "56px",
                  borderRadius: "2px",
                  border: "1px solid #842898",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "24px",
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
