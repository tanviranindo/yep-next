"use client";

import { useFashionStore } from "@/contexts/FashionStoreContext";
import { FASHION1_ROUTES } from "@/data/fashion1/constants";
import NavbarVariant1 from "./variants/navbar/variant-1";
import NavbarVariant2 from "./variants/navbar/variant-2";

export type FashionNavbarVariant = 1 | 2;

interface FashionNavbarProps {
  variant: FashionNavbarVariant;
  routes?: {
    HOME: string;
    SHOP: string;
    CART: string;
    WISHLIST: string;
  };
}

/**
 * FashionNavbar - Client component router for Fashion navbar variants
 *
 * This component must remain a client component to access FashionStoreContext,
 * but it's minimal - only handles store access and routes to variant implementations.
 */
export default function FashionNavbar({ variant, routes = FASHION1_ROUTES }: FashionNavbarProps) {
  const { cartCount, wishlistCount } = useFashionStore();

  const sharedProps = {
    cartCount,
    wishlistCount,
    routes,
  };

  if (variant === 2) {
    return <NavbarVariant2 {...sharedProps} />;
  }

  return <NavbarVariant1 {...sharedProps} />;
}
