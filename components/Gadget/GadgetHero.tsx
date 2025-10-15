"use client";

import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type GadgetHeroVariant = 1 | 2;

// Variant 1 Props
export interface HeroV1Props {
  eyebrow?: string;
  sublabel?: string;
  title: string;
  cta?: { label: string; href: string };
  thumbnails?: string[];
  heroImage: string;
  ticker?: string[];
  socialIcons?: { icon: string; href: string }[];
  productCarousel?: {
    title: string;
    description: string;
    cta: { label: string; href: string };
    images: string[];
  };
}

// Variant 2 Props
export interface HeroV2Props {
  slides?: Array<{
    image: string;
    eyebrow: string;
    title: string;
    cta: { label: string; href: string };
  }>;
}

type GadgetHeroProps =
  | ({ variant: 1 } & HeroV1Props)
  | ({ variant: 2 } & HeroV2Props);

/**
 * GadgetHero - Unified component for Gadget hero variants
 *
 * Variant 1: Gadget Store hero with product carousel
 * Variant 2: TechHub hero with image slider
 */
export default function GadgetHero(props: GadgetHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (props.variant === 2) {
    // Variant 2: TechHub Hero
    const {
      slides = [
        {
          image: "/hero/gadget2.jpg",
          eyebrow: "NEW TECH ARRIVALS 2025!",
          title: "Innovation Meets Design",
          cta: { label: "VIEW ALL", href: "#" },
        },
        {
          image: "/hero/1.png",
          eyebrow: "SMART DEVICES 2025!",
          title: "Tech Redefined",
          cta: { label: "SHOP NOW", href: "#" },
        },
        {
          image: "/hero/2.png",
          eyebrow: "TRENDING NOW!",
          title: "Latest Gadgets",
          cta: { label: "EXPLORE", href: "#" },
        },
      ],
    } = props;

    return (
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt="Gadget Shopping"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content - Left Aligned */}
        <div className="relative h-full flex items-center px-8 md:px-16 lg:px-28">
          <div className="max-w-2xl">
            {/* Decorative Line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-24 bg-blue-600" />
              <div>
                <p
                  className="text-white mb-4 uppercase tracking-widest"
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
              className="inline-flex items-center justify-center transition-all ml-5 mt-6 border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white"
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
                    ? "h-10 bg-blue-600"
                    : "h-6 bg-white/50 group-hover:bg-white/80"
                } w-[3px] transition-all duration-200`}
              />
            </button>
          ))}
        </div>
      </section>
    );
  }

  // Variant 1: Gadget Store Hero
  const {
    eyebrow = "LATEST COLLECTION OF",
    sublabel = "Tech 2025",
    title = "LET'S CREATE YOUR OWN Tech Experience",
    cta = { label: "Explore →", href: "#" },
    thumbnails = ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
    heroImage,
    ticker = [
      "Tech with Innovation",
      "Power Your Life",
      "Smart Solutions",
      "Future Ready Gadgets",
    ],
    socialIcons = [
      { icon: "f", href: "#" },
      { icon: "✈", href: "#" },
      { icon: "📷", href: "#" },
      { icon: "●", href: "#" },
    ],
    productCarousel = {
      title: "SMART WIRELESS HEADPHONES",
      description:
        "Discover gadgets that fit your lifestyle. From everyday tech to premium devices.",
      cta: { label: "VIEW COLLECTION", href: "#" },
      images: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
    },
  } = props;

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]">
        {/* Left Side - Content */}
        <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between relative z-10 h-full">
          {/* Row 1: LATEST COLLECTION OF + Tech 2025 */}
          <div className="mb-2 md:mb-4">
            {eyebrow && (
              <p
                className="uppercase text-gray-600 mb-1 md:mb-2 text-sm sm:text-base md:text-lg lg:text-xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "5%",
                }}
              >
                {eyebrow}
              </p>
            )}
            {sublabel && (
              <p
                className="text-gray-500 mb-1 md:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 400,
                  lineHeight: "100%",
                  letterSpacing: "6%",
                }}
              >
                {sublabel}
              </p>
            )}
          </div>

          {/* Row 2: Title */}
          <div className="mb-4 md:mb-8">
            <h1
              className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "20%",
              }}
            >
              LET'S CREATE YOUR OWN
            </h1>
            <h1
              className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                lineHeight: "100%",
                letterSpacing: "-2%",
              }}
            >
              Tech Experience
            </h1>
          </div>

          {/* Row 3: Images + Navigation + Product Info */}
          <div className="flex flex-col sm:flex-row items-end gap-4 sm:gap-6 md:gap-8">
            {/* All Images (1, 2, 3) with different sizes */}
            <div className="flex gap-2 sm:gap-4 items-end">
              <div className="relative bg-base-300 rounded w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-36 lg:w-28 lg:h-40">
                <Image
                  src={thumbnails[0]}
                  alt="product-1"
                  fill
                  className="object-cover rounded"
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-2 sm:gap-3 justify-center">
                  <button className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center hover:opacity-70 transition-opacity text-gray-700">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center hover:opacity-70 transition-opacity text-gray-700">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <div className="relative bg-base-300 rounded w-12 h-16 sm:w-16 sm:h-24 md:w-18 md:h-28 lg:w-20 lg:h-32">
                    <Image src={thumbnails[1]} alt="product-2" fill className="object-cover rounded" />
                  </div>
                  <div className="relative bg-base-300 rounded w-12 h-16 sm:w-16 sm:h-24 md:w-18 md:h-28 lg:w-20 lg:h-32">
                    <Image src={thumbnails[2]} alt="product-3" fill className="object-cover rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-2 md:space-y-3">
              <div>
                <h3
                  className="text-gray-800 mb-1 md:mb-2 text-sm sm:text-base md:text-lg lg:text-xl"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    lineHeight: "100%",
                    letterSpacing: "2%",
                  }}
                >
                  {productCarousel.title}
                </h3>
                <p
                  className="text-gray-600 mb-2 md:mb-3 text-xs sm:text-sm md:text-base"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 400,
                    lineHeight: "17px",
                    letterSpacing: "0%",
                  }}
                >
                  {productCarousel.description}
                </p>
              </div>
              <Link
                href={productCarousel.cta.href}
                className="inline-block px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white text-xs sm:text-sm md:text-base font-medium hover:bg-blue-700 transition-colors rounded"
              >
                {productCarousel.cta.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="relative h-full">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image src={heroImage} alt="Hero" fill className="object-contain" priority />
            </div>

            {/* Social Media Icons on Right Edge */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden sm:block">
              <div className="bg-blue-600 rounded-full flex flex-col items-center justify-center py-4 px-3 sm:py-5 sm:px-4 gap-3 sm:gap-4">
                {socialIcons.map((social, idx) => (
                  <Link key={idx} href={social.href} className="flex items-center justify-center hover:opacity-80 transition-opacity text-white">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatedText texts={ticker} />
    </section>
  );
}
