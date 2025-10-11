"use client";

import React from "react";
import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { Product } from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export interface BeautyProductCardV1Props {
  product: Product;
  className?: string;
}

export default function BeautyProductCardVariant1({
  product,
  className = "",
}: BeautyProductCardV1Props) {
  const { addToCart, addToWishlist, isInWishlist } = useBeautyStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/product1.jpg",
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/product1.jpg",
      stockStatus: product.availability === "InStock" ? "In Stock" : "Out of Stock",
    });
  };

  const inWishlist = isInWishlist(product.id);

  return (
    <div className={`group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`}>
      <Link href={product.url || "#"} className="block">
        {/* Product Image */}
        <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
          <Image
            src={product.image || "/items/product1.jpg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Wishlist Heart Icon */}
          <button
            onClick={handleAddToWishlist}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Add to wishlist"
          >
            <Heart
              size={20}
              className={`${
                inWishlist
                  ? "fill-[#842898] text-[#842898]"
                  : "text-gray-600"
              } transition-colors`}
            />
          </button>

          {/* Discount Badge */}
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="absolute top-3 left-3 bg-[#842898] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-gray-800 font-semibold text-base mb-2 line-clamp-2 group-hover:text-[#842898] transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating || 0)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews || 0})</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-[#842898]">
              {product.currency} {product.price.toLocaleString()}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through">
                {product.currency} {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#842898] text-white py-3 rounded-lg font-semibold hover:bg-[#6d1f7a] transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 2.5H4.16667L6.66667 13.3333H15.8333L17.5 6.66667H5.83333"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="7.5" cy="16.6667" r="1.66667" fill="currentColor" />
            <circle cx="15" cy="16.6667" r="1.66667" fill="currentColor" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
