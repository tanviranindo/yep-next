import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ProductCardProps, buildProductJsonLd } from "../types";

export interface CardAction {
  icon: string | React.ReactElement;
  href?: string;
  label?: string;
  onClick?: (e?: React.MouseEvent) => void;
}
export interface ProductCardV4Props extends ProductCardProps {
  actions?: CardAction[];
  cta?: { label: string; href?: string; onClick?: (e?: React.MouseEvent) => void };
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

// Fashion UI 1: Tall image, vertical action icons, add-to-cart bar
export default function ProductCardVariant4({
  product,
  className,
  actions = [],
  cta = { label: "Add To Cart" },
}: ProductCardV4Props) {
  const jsonLd = buildProductJsonLd(product);
  return (
    <Link href={product.url} className="block">
      <article
        className={clsx(
          "card bg-white shadow-sm border border-gray-200 rounded-lg",
          className
        )}
        itemScope
        itemType="https://schema.org/Product"
      >
        <div className="relative">
          <div className="relative w-full h-80">
            <Image
              src={product.image || "/items/product1.png"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          {/* Bottom overlay add-to-cart bar to match design */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-2rem)]">
            {cta?.href ? (
              <Link
                href={cta.href}
                onClick={(e) => {
                  e.stopPropagation();
                  cta.onClick?.(e);
                }}
                className="block w-full px-6 py-3 bg-white text-neutral-900 tracking-[0.2em] uppercase rounded-none shadow-lg border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 active:scale-98 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 text-center font-medium"
              >
                {cta.label.toUpperCase()}
              </Link>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  cta.onClick?.(e);
                }}
                className="w-full px-6 py-3 bg-white text-neutral-900 tracking-[0.2em] uppercase rounded-none shadow-lg border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 active:scale-98 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 font-medium"
              >
                {cta.label.toUpperCase()}
              </button>
            )}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-3 flex flex-col gap-3">
            {actions.map((action, i) =>
              action.href ? (
                <Link
                  key={i}
                  href={action.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick?.(e);
                  }}
                  className="group grid place-items-center w-9 h-9 rounded-full bg-white/95 border border-neutral-200 shadow hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 ease-out"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 ease-out">
                    {action.icon as any}
                  </div>
                </Link>
              ) : (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick?.(e);
                  }}
                  className="group grid place-items-center w-9 h-9 rounded-full bg-white/95 border border-neutral-200 shadow hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 ease-out"
                  aria-label={action.label}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 ease-out">
                    {action.icon as any}
                  </div>
                </button>
              )
            )}
          </div>
        </div>
        <div className="card-body p-3 bg-white">
          <h3 className="font-semibold text-base text-gray-900" itemProp="name">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div
              className="text-lg font-bold text-gray-900"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <meta itemProp="priceCurrency" content={product.currency} />
              <span itemProp="price">
                {product.currency} {product.price.toLocaleString()}.00
              </span>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </article>
    </Link>
  );
}