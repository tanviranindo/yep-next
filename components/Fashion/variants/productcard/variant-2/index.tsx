"use client";

import {
  ProductCardProps,
  buildProductJsonLd,
} from "@/components/ProductCard/types";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import Image from "next/image";
import Link from "next/link";

// Fashion 2 / Insole Product Card
export default function Fashion2ProductCard({
  product,
  className,
}: ProductCardProps) {
  const jsonLd = buildProductJsonLd(product);
  const { addToCart, addToWishlist, isInWishlist } = useFashionStore();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/product2.jpg",
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/product2.jpg",
      stockStatus: "In Stock",
    });
  };

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
                  : "bg-white/90 hover:bg-[#D4B896] text-gray-700 hover:text-white"
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
            <Link href={`/fashion2/product/${product.id}`}>
              <button className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-[#D4B896] text-gray-700 hover:text-white transition-colors shadow-sm">
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
              className="w-full bg-[#D4B896] text-white py-3 font-semibold text-sm uppercase tracking-wider hover:bg-[#C4A886] transition-colors"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-2">
          <h3
            className="font-semibold text-base text-gray-900 hover:text-[#D4B896] transition-colors"
            itemProp="name"
          >
            <Link href={`/fashion2/product/${product.id}`}>{product.name}</Link>
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
