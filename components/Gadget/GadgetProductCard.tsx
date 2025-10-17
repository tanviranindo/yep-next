"use client";

import { Product } from "@/components/ProductCard";
import { useGadgetStore } from "@/contexts/GadgetStoreContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiHeart } from "react-icons/fi";

export type GadgetProductCardVariant = 1 | 2;

interface GadgetProductCardProps {
  variant: GadgetProductCardVariant;
  product: Product;
  className?: string;
}

export default function GadgetProductCard({
  variant,
  product,
  className,
}: GadgetProductCardProps) {
  const { addToCart, addToWishlist, isInWishlist } = useGadgetStore();

  // Build product URL based on variant
  const productUrl =
    variant === 1
      ? `/gadget1/product/${product.id}`
      : `/gadget2/product/${product.id}`;

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/gadget1.jpg",
    });
  };

  const handleAddToWishlist = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/gadget1.jpg",
      stockStatus:
        product.availability === "InStock" ? "In Stock" : "Out of Stock",
    });
  };

  // Calculate discount percentage
  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  if (variant === 2) {
    // Variant 2 - Keep for compatibility
    return (
      <article className={`bg-white group ${className || ""}`}>
        <Link href={productUrl}>
          <div className="relative">
            <div className="relative w-full aspect-square bg-gray-100 overflow-hidden rounded-lg">
              <Image
                src={product.image || "/items/gadget2.jpg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {discountPercent > 0 && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{discountPercent}%
                </div>
              )}
              <button
                onClick={handleAddToWishlist}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <FiHeart
                  className={`w-4 h-4 ${
                    isInWishlist(product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-700"
                  }`}
                />
              </button>
            </div>
            <div className="mt-3 space-y-2">
              <h3 className="text-sm font-normal text-black line-clamp-2">
                {product.name}
              </h3>
              {product.rating && (
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${
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
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-black">
                  {product.price.toLocaleString()} BDT
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {product.originalPrice.toLocaleString()} BDT
                  </span>
                )}
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full py-2.5 bg-white text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  // Variant 1 - e-Gagdgets Design (Pixel Perfect)
  return (
    <article
      className={`bg-[#F9F9F9] border border-[#EAEAEA] rounded-2xl overflow-hidden group hover:shadow-md transition-shadow h-full ${
        className || ""
      }`}
    >
      <Link href={productUrl} className="block h-full">
        <div className="relative flex flex-col h-full">
          {/* Product Image */}
          <div className="relative w-full aspect-square bg-[#F9F9F9] overflow-hidden">
            <Image
              src={product.image || "/items/gadget1.jpg"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Sale Badge - Show NEW or Discount */}
            {product.badge === "NEW" ? (
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1.5 rounded">
                NEW
              </div>
            ) : discountPercent > 0 ? (
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1.5 rounded">
                -{discountPercent}%
              </div>
            ) : null}

            {/* Wishlist Button */}
            <button
              onClick={handleAddToWishlist}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <FiHeart
                className={`w-5 h-5 ${
                  isInWishlist(product.id)
                    ? "fill-red-500 text-red-500"
                    : "text-black"
                }`}
              />
            </button>
          </div>

          {/* Product Info */}
          <div className="p-4 flex flex-col gap-3 flex-1">
            {/* Product Name */}
            <h3 className="text-lg font-normal text-black line-clamp-2 font-manrope text-center min-h-[56px]">
              {product.name}
            </h3>
            {/* Price */}
            <div className="flex items-center justify-between gap-2 mt-2">
              <span className="text-xl font-semibold text-black">
                {product.price.toLocaleString()} BDT
              </span>
              {product.originalPrice && (
                <span className="text-base text-red-600 line-through">
                  {product.originalPrice.toLocaleString()} BDT
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-auto py-2.5 bg-white text-black border border-black text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white hover:cursor-pointer transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
