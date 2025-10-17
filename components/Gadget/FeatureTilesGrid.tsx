"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export type FeatureTile = {
  id: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  backgroundColor?: string; // hex or tailwind class
  image?: {
    src: string;
    alt: string;
    fill?: boolean; // if true uses fill, otherwise width/height
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
    objectFit?: "contain" | "cover";
  };
  // Optional custom content render override
  renderContent?: () => React.ReactNode;
};

export type FeatureTilesGridProps = {
  tiles: FeatureTile[];
  columns?: 1 | 2 | 3 | 4;
  gap?: number; // px gap between tiles
  edgeToEdge?: boolean; // if true, removes horizontal padding
  className?: string;
};

const titleClass =
  "font-manrope font-light text-[33px] leading-[48px] tracking-[0]";
const descriptionClass =
  "font-manrope font-light text-[14px] leading-[24px] text-[#909090]";

export default function FeatureTilesGrid({
  tiles,
  columns = 4,
  gap = 0,
  edgeToEdge = true,
  className = "",
}: FeatureTilesGridProps) {
  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  // Convert numeric gap to Tailwind style using inline style for precision
  const wrapperPadding = edgeToEdge ? "px-0" : "px-4 md:px-6";

  return (
    <section className={`w-full bg-white py-8 ${className}`}>
      <div className={`w-full grid ${gridCols}`} style={{ gap }}>
        {tiles.map((tile) => {
          const bgStyle: React.CSSProperties = tile.backgroundColor
            ? { backgroundColor: tile.backgroundColor }
            : {};

          return (
            <div
              key={tile.id}
              className="overflow-hidden flex flex-col"
              style={bgStyle}
            >
              <div className="relative h-72 md:h-96">
                {tile.image &&
                  (tile.image.fill ? (
                    <Image
                      src={tile.image.src}
                      alt={tile.image.alt}
                      fill
                      className={tile.image.className || "object-contain"}
                      style={tile.image.style}
                    />
                  ) : (
                    <Image
                      src={tile.image.src}
                      alt={tile.image.alt}
                      width={tile.image.width || 240}
                      height={tile.image.height || 240}
                      className={tile.image.className}
                      style={tile.image.style}
                    />
                  ))}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                {tile.renderContent ? (
                  tile.renderContent()
                ) : (
                  <>
                    <h3
                      className={`${titleClass} ${
                        tile.backgroundColor === "#2C2C2C"
                          ? "text-white"
                          : "text-black"
                      } mb-2`}
                    >
                      {tile.title}
                    </h3>
                    <p className={`${descriptionClass} mb-4`}>
                      {tile.description}
                    </p>
                    {tile.cta && (
                      <Link
                        href={tile.cta.href}
                        className={
                          tile.backgroundColor === "#2C2C2C"
                            ? "mt-auto inline-block px-6 py-2 border border-white text-white text-sm font-medium rounded hover:bg-white hover:text-black transition-colors w-max"
                            : "mt-auto inline-block px-6 py-2 border border-black text-black text-sm font-medium rounded hover:bg-black hover:text-white transition-colors w-max"
                        }
                      >
                        {tile.cta.label}
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
