"use client";

import FashionProductCardV1 from "@/components/ProductCard/FashionProductCard";
import Fashion2ProductCard from "@/components/ProductCard/Fashion2Card";
import { Product } from "@/components/ProductCard";

export type FashionProductCardVariant = 1 | 2;

interface FashionProductCardProps {
  variant: FashionProductCardVariant;
  product: Product;
  className?: string;
}

export default function FashionProductCard({ variant, product, className }: FashionProductCardProps) {
  if (variant === 2) {
    return <Fashion2ProductCard product={product} className={className} />;
  }

  return <FashionProductCardV1 product={product} className={className} />;
}
