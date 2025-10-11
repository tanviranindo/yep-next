"use client";

import ProductCardVariant1 from "./variants/productcard/variant-1";
import ProductCardVariant2 from "./variants/productcard/variant-2";
import { Product } from "@/components/ProductCard";

export type FashionProductCardVariant = 1 | 2;

interface FashionProductCardProps {
  variant: FashionProductCardVariant;
  product: Product;
  className?: string;
}

/**
 * FashionProductCard - Client component router for Fashion product card variants
 *
 * Must remain a client component to access FashionStoreContext for cart/wishlist.
 */
export default function FashionProductCard({ variant, product, className }: FashionProductCardProps) {
  if (variant === 2) {
    return <ProductCardVariant2 product={product} className={className} />;
  }

  return <ProductCardVariant1 product={product} className={className} />;
}
