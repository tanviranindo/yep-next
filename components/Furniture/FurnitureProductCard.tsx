"use client";

import React from "react";
import { useFurnitureStore } from "@/contexts/FurnitureStoreContext";
import ProductCardVariant4 from "@/components/ProductCard/variant-4";
import { Product } from "@/components/ProductCard";
import { buildProductJsonLd } from "@/components/ProductCard/types";
import Image from "next/image";
import Link from "next/link";

export type FurnitureProductCardVariant = 1 | 2;

interface FurnitureProductCardProps {
  variant: FurnitureProductCardVariant;
  product: Product;
  className?: string;
}

/**
 * FurnitureProductCard - Unified component for Furniture product card variants
 *
 * Variant 1: Furniture Studio product card with ProductCardVariant4
 * Variant 2: Insole product card with hover effects
 */
export default function FurnitureProductCard({ variant, product, className }: FurnitureProductCardProps) {
  const { addToCart, addToWishlist, isInWishlist } = useFurnitureStore();

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || (variant === 1 ? "/items/product1.jpg" : "/items/product2.jpg"),
    });
  };

  const handleAddToWishlist = (e?: React.MouseEvent) => {
    e?.preventDefault();
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || (variant === 1 ? "/items/product1.jpg" : "/items/product2.jpg"),
      stockStatus: product.availability === "InStock" ? "In Stock" : "Out of Stock",
    });
  };

  if (variant === 2) {
    // Variant 2: Furniture2 / Insole Product Card
    const jsonLd = buildProductJsonLd(product);

    return (
      <article
        className={`bg-white group ${className || ""}`}
        itemScope
        itemType="https://schema.org/Product"
      >
        <div className="relative">
          {/* Product Image */}
          <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
            <Image
              src={product.image || "/items/product2.jpg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 25vw"
            />

            {/* Sale Badge */}
            {product.originalPrice && (
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
              </div>
            )}

            {/* Action Icons - Right Side */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {/* Heart/Wishlist Icon */}
              <button
                onClick={handleAddToWishlist}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                  isInWishlist(product.id)
                    ? "bg-red-500 text-white"
                    : "bg-white/90 hover:bg-[#8B4513] text-gray-700 hover:text-white"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill={isInWishlist(product.id) ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Quick View Icon */}
              <Link href={`/furniture2/product/${product.id}`}>
                <button className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-[#8B4513] text-gray-700 hover:text-white transition-colors shadow-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Add to Cart Button - Bottom (Hidden by default, shown on hover) */}
            <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#8B4513] text-white py-3 font-semibold text-sm uppercase tracking-wider hover:bg-[#A0522D] transition-colors"
              >
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-4 space-y-2">
            <h3
              className="font-semibold text-base text-gray-900 hover:text-[#8B4513] transition-colors"
              itemProp="name"
            >
              <Link href={`/furniture2/product/${product.id}`}>{product.name}</Link>
            </h3>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(product.rating || 0)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-xs text-gray-500 ml-1">
                  ({product.reviews})
                </span>
              </div>
            )}

            {/* Price */}
            <div
              className="flex items-center gap-2"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <meta itemProp="priceCurrency" content={product.currency} />
              <span itemProp="price" className="text-lg font-bold text-gray-900">
                {product.currency} {product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.currency} {product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </article>
    );
  }

  // Variant 1: Furniture Studio Product Card
  const actions = [
    {
      icon: (
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.62722 11.7922C6.43852 11.7922 6.2566 11.7238 6.11483 11.5997C5.57938 11.1315 5.06314 10.6915 4.60769 10.3034L4.60536 10.3013C3.27003 9.16339 2.11692 8.18068 1.3146 7.21262C0.417741 6.1304 0 5.1043 0 3.98335C0 2.89425 0.373448 1.88949 1.05148 1.15402C1.7376 0.409853 2.67906 0 3.70273 0C4.46783 0 5.16852 0.241887 5.78527 0.718886C6.09652 0.95966 6.37866 1.25433 6.62722 1.59805C6.87588 1.25433 7.15791 0.95966 7.46927 0.718886C8.08602 0.241887 8.78671 0 9.55181 0C10.5754 0 11.5169 0.409853 12.2031 1.15402C12.8811 1.88949 13.2544 2.89425 13.2544 3.98335C13.2544 5.1043 12.8368 6.1304 11.9399 7.21252C11.1376 8.18068 9.98462 9.16329 8.64948 10.3011C8.19322 10.6898 7.67617 11.1305 7.13951 11.5999C6.99784 11.7238 6.81581 11.7922 6.62722 11.7922ZM3.70273 0.776425C2.8985 0.776425 2.15969 1.09739 1.62222 1.68027C1.07676 2.27194 0.776324 3.08982 0.776324 3.98335C0.776324 4.92612 1.12672 5.76929 1.91234 6.71722C2.67168 7.6335 3.80113 8.59599 5.10885 9.71047L5.11128 9.71249C5.56846 10.1021 6.08671 10.5438 6.62611 11.0155C7.16873 10.5429 7.6878 10.1005 8.14589 9.71027C9.45352 8.59579 10.5829 7.6335 11.3422 6.71722C12.1277 5.76929 12.4781 4.92612 12.4781 3.98335C12.4781 3.08982 12.1777 2.27194 11.6322 1.68027C11.0948 1.09739 10.3559 0.776425 9.55181 0.776425C8.96266 0.776425 8.42175 0.963705 7.94415 1.33301C7.51852 1.66227 7.22203 2.07849 7.0482 2.36972C6.9588 2.51949 6.80145 2.60888 6.62722 2.60888C6.45298 2.60888 6.29564 2.51949 6.20624 2.36972C6.03251 2.07849 5.73602 1.66227 5.31029 1.33301C4.83268 0.963705 4.29178 0.776425 3.70273 0.776425Z"
            fill={isInWishlist(product.id) ? "#EF4444" : "#020202"}
            fillOpacity={isInWishlist(product.id) ? 1 : 1}
          />
        </svg>
      ),
      label: "Add to favorites",
      onClick: handleAddToWishlist,
    },
    {
      icon: (
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.36673 8.93328C8.73168 8.93328 8.15952 9.20753 7.76241 9.64377L4.19064 7.4316C4.286 7.18749 4.33889 6.92235 4.33889 6.64497C4.33889 6.36748 4.286 6.10234 4.19064 5.85833L7.76241 3.64606C8.15952 4.0823 8.73168 4.35665 9.36673 4.35665C10.563 4.35665 11.5362 3.38344 11.5362 2.18716C11.5362 0.990869 10.563 0.0177612 9.36673 0.0177612C8.17045 0.0177612 7.19724 0.99097 7.19724 2.18726C7.19724 2.46464 7.25023 2.72978 7.34548 2.97389L3.77381 5.18606C3.3767 4.74982 2.80455 4.47547 2.1695 4.47547C0.973209 4.47547 0 5.44878 0 6.64497C0 7.84125 0.973209 8.81446 2.1695 8.81446C2.80455 8.81446 3.3767 8.54022 3.77381 8.10387L7.34548 10.316C7.25023 10.5602 7.19724 10.8253 7.19724 11.1028C7.19724 12.299 8.17045 13.2722 9.36673 13.2722C10.563 13.2722 11.5362 12.299 11.5362 11.1028C11.5362 9.90649 10.563 8.93328 9.36673 8.93328ZM7.98832 2.18726C7.98832 1.42722 8.60669 0.808847 9.36673 0.808847C10.1268 0.808847 10.7451 1.42722 10.7451 2.18726C10.7451 2.9473 10.1268 3.56567 9.36673 3.56567C8.60669 3.56567 7.98832 2.9473 7.98832 2.18726ZM2.1695 8.02338C1.40935 8.02338 0.790985 7.40501 0.790985 6.64497C0.790985 5.88493 1.40935 5.26656 2.1695 5.26656C2.92954 5.26656 3.5478 5.88493 3.5478 6.64497C3.5478 7.40501 2.92954 8.02338 2.1695 8.02338ZM7.98832 11.1027C7.98832 10.3426 8.60669 9.72427 9.36673 9.72427C10.1268 9.72427 10.7451 10.3426 10.7451 11.1027C10.7451 11.8627 10.1268 12.4811 9.36673 12.4811C8.60669 12.4811 7.98832 11.8627 7.98832 11.1027Z"
            fill="#020202"
          />
        </svg>
      ),
      label: "Share product",
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_22_2810)">
            <path
              d="M1.5 10V14.5H6"
              stroke="#303030"
              strokeWidth="1.1"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6L14 2"
              stroke="#303030"
              strokeWidth="1.1"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1.5H14.5V6"
              stroke="#020202"
              strokeWidth="1.1"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.33333 10.6667L2 14"
              stroke="#020202"
              strokeWidth="1.1"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_22_2810">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      label: "Expand view",
    },
  ];

  return (
    <ProductCardVariant4
      product={product}
      actions={actions as any}
      cta={{
        label: "Add To Cart",
        onClick: handleAddToCart,
      }}
      className={className}
    />
  );
}
