import Image from "next/image";
import Link from "next/link";

export interface HeroV2Props {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage: string;
  cta?: { label: string; href: string };
}

export default function FashionHeroVariant2({
  title = "Fabulous Collections",
  subtitle = "MID YEAR'S EASIEST SALES EVER",
  description,
  heroImage,
  cta = { label: "SHOP ALL", href: "#" },
}: HeroV2Props) {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {subtitle && (
          <p
            className="text-white text-[10px] md:text-xs font-medium mb-2 uppercase"
            style={{
              letterSpacing: "0.2em",
              fontFamily: "var(--font-outfit)",
            }}
          >
            {subtitle}
          </p>
        )}
        <h1
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8"
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-white text-sm md:text-base mb-6 md:mb-8 max-w-2xl">
            {description}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="inline-block px-10 md:px-14 py-3 md:py-3.5 bg-white text-black text-xs md:text-sm font-bold hover:bg-gray-100 transition-colors uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-outfit)",
            }}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
