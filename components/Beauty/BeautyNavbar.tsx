"use client";

import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";
import NavbarVariant1 from "./variants/navbar/variant-1";
import NavbarVariant2 from "./variants/navbar/variant-2";

export type BeautyNavbarVariant = 1 | 2;

interface BeautyNavbarProps {
  variant: BeautyNavbarVariant;
  routes?: Record<string, string>;
}

/**
 * BeautyNavbar - Client component router for Beauty navbar variants
 *
 * This component must remain a client component to access BeautyStoreContext,
 * but it's minimal - only handles store access and routes to variant implementations.
 */
export default function BeautyNavbar({ variant, routes = BEAUTY1_ROUTES }: BeautyNavbarProps) {
  const { cartCount, wishlistCount } = useBeautyStore();

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
