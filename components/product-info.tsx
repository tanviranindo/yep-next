"use client";

import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  sizes: string[];
  colors?: string[];
  inStock: boolean;
}

export function ProductInfo({
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  description,
  sizes,
  colors = [],
  inStock,
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("orange");
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => `BDT ${price.toFixed(2)}`;

  return (
    <div className="space-y-6 max-w-[480px]">
      {/* NEW IN Chip */}
      <div className="inline-block">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
          New Item
        </span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-[32px] font-bold text-black leading-tight mb-2">
          {title}
        </h1>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-[32px] font-bold text-black">
          {formatPrice(price)}
        </span>
        {originalPrice && (
          <span className="text-[18px] text-gray-400 line-through">
            {formatPrice(4500.0)}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>

      {/* Rating, Reviews, SKU, Stock */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-300 text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">24 Reviews</span>
        <span className="text-sm text-gray-600">Sku: KD-566498</span>
        <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded text-xs">
          In Stock
        </span>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Colour Orange
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedColor("orange")}
            className={`w-6 h-6 rounded-full bg-orange-500 ${
              selectedColor === "orange"
                ? "ring-2 ring-orange-600 ring-offset-2"
                : ""
            }`}
          />
          <button
            onClick={() => setSelectedColor("black")}
            className={`w-6 h-6 rounded-full bg-black ${
              selectedColor === "black" ? "ring-2 ring-black ring-offset-2" : ""
            }`}
          />
          <button
            onClick={() => setSelectedColor("gray")}
            className={`w-6 h-6 rounded-full bg-gray-400 ${
              selectedColor === "gray"
                ? "ring-2 ring-gray-400 ring-offset-2"
                : ""
            }`}
          />
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Size: Extra Large
        </h3>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-2 border text-sm font-medium ${
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Stock Alert */}
      <p className="text-red-600 text-sm font-medium">
        Hurry! Only <span className="font-semibold">24 items</span> left in
        stock.
      </p>

      {/* Quantity and Add to Cart */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-300">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 text-gray-600 hover:text-gray-800"
          >
            -
          </button>
          <span className="px-4 py-2 border-x border-gray-300 min-w-[50px] text-center">
            3
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-gray-600 hover:text-gray-800"
          >
            +
          </button>
        </div>

        <Button className="flex-1 bg-black text-white hover:bg-gray-800 h-12 font-medium">
          ADD TO CART
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 border border-gray-300"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      {/* Buy Now Button */}
      <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600 h-12 font-medium">
        BUY NOW
      </Button>

      {/* Shipping Info */}
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-start gap-2">
          <span>🚚</span>
          <span>Free return within 30 days of purchase.</span>
        </div>
        <div className="flex items-start gap-2">
          <span>🔄</span>
          <span>Estimate delivery times: 12-26 days (International)</span>
        </div>
      </div>
    </div>
  );
}
