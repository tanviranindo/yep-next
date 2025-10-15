"use client";

import Image from "next/image";
import Link from "next/link";

export type GadgetHeroVariant = 1 | 2;

export interface HeroV1Props {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: { label: string; href: string };
  heroImage: string;
  backgroundColor?: string;
}

export interface HeroV2Props {
  slides?: Array<{
    image: string;
    title: string;
    subtitle: string;
    cta: { label: string; href: string };
  }>;
}

type GadgetHeroProps =
  | ({ variant: 1 } & HeroV1Props)
  | ({ variant: 2 } & HeroV2Props);

export default function GadgetHero(props: GadgetHeroProps) {
  if (props.variant === 2) {
    // Variant 2 - Keep for compatibility
    const { slides = [] } = props;
    const currentSlide = slides[0] || {
      image: "/hero/gadget.jpg",
      title: "Innovation Meets Design",
      subtitle: "NEW TECH ARRIVALS 2025!",
      cta: { label: "VIEW ALL", href: "#" },
    };

    return (
      <section className="relative w-full h-[500px] md:h-[600px] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={currentSlide.image}
            alt="Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative h-full flex items-center px-8 md:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-2xl">
            <p className="text-white/80 text-sm uppercase tracking-widest mb-4">
              {currentSlide.subtitle}
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-8">
              {currentSlide.title}
            </h1>
            <Link
              href={currentSlide.cta.href}
              className="inline-block px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              {currentSlide.cta.label}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Variant 1 - e-Gagdgets Design (Pixel Perfect)
  const {
    title = "iPhone 14 Pro",
    subtitle = "Created to change everything for the better. For everyone",
    description = "CREATIVE HARMONY",
    cta = { label: "Shop Now", href: "#" },
    heroImage,
    backgroundColor = "#000000",
  } = props;

  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="max-w-[1400px] mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-8 md:py-0 z-10">
            <div className="space-y-4 md:space-y-6">
              {description && (
                <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.2em]">
                  {description}
                </p>
              )}

              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="text-white/80 text-sm md:text-base max-w-md">
                  {subtitle}
                </p>
              )}

              {cta && (
                <div className="pt-4">
                  <Link
                    href={cta.href}
                    className="inline-block px-8 md:px-12 py-3 md:py-4 bg-white text-black text-sm md:text-base font-medium rounded hover:bg-gray-100 transition-colors"
                  >
                    {cta.label}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Product Image - Overlay */}
      <div className="md:hidden absolute inset-0 opacity-20">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
