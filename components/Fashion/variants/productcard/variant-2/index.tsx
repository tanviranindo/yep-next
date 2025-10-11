import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCardProps, buildProductJsonLd } from "@/components/ProductCard/types";

// Fashion 2 / Insole Product Card
export default function Fashion2ProductCard({ product, className }: ProductCardProps) {
  const jsonLd = buildProductJsonLd(product);

  return (
    <article
      className={`bg-white ${className || ""}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative group">
        {/* Product Image */}
        <div className="relative w-full aspect-square bg-gray-100">
          <Image
            src={product.image || "/items/product2.jpg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />

          {/* Action Icons - Right Side */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {/* Heart/Wishlist Icon */}
            <button className="w-10 h-10 rounded-full bg-[#E8D4B8] flex items-center justify-center hover:bg-[#D4B896] transition-colors shadow-sm">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Share Icon */}
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            {/* Expand Icon */}
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>

          {/* Add to Cart Button - Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <button className="w-full bg-[#E8D4B8] text-white py-3 font-semibold text-sm uppercase tracking-wider hover:bg-[#D4B896] transition-colors">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-1">
          <h3 className="font-semibold text-base text-gray-900" itemProp="name">
            {product.name}
          </h3>
          <div
            className="text-base font-bold text-gray-900"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content={product.currency} />
            <span itemProp="price">
              {product.currency} {product.price.toFixed(2)}
            </span>
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
