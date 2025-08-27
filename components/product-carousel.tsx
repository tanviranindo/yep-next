"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function ProductCarousel({
  title,
  subtitle,
  products = [],
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  // Add null check for products
  if (!products || products.length === 0) {
    return (
      <div className="w-full py-12">
        <div className="text-center mb-8">
          <h2 className="text-[28px] font-bold text-black">{title}</h2>
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>
        <div className="text-center text-gray-500">
          <p>No products available at the moment.</p>
        </div>
      </div>
    );
  }

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < products.length - itemsPerView;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const formatPrice = (price: number) => `BDT ${price.toFixed(2)}`;

  return (
    <div className="w-full py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[28px] font-bold text-black">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </div>

      {/* Products Grid */}
      <div className="relative">
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md hover:bg-gray-50 rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md hover:bg-gray-50 rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Products */}
        <div className="grid grid-cols-4 gap-6">
          {products
            .slice(currentIndex, currentIndex + itemsPerView)
            .map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Product Image */}
                <div className="relative w-full h-[280px] bg-gray-100 overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1">
                      SALE
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-black group-hover:text-gray-600">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-black">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < Math.floor(product.rating)
                            ? "bg-orange-400"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
