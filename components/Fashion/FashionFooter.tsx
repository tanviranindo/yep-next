"use client";

import { FashionFooter as FashionFooterV1 } from "@/components/Footer";
import InsoleFooter from "@/components/Footer/InsoleFooter";

export type FashionFooterVariant = 1 | 2;

interface FashionFooterProps {
  variant: FashionFooterVariant;
}

export default function FashionFooter({ variant }: FashionFooterProps) {
  if (variant === 2) {
    return <InsoleFooter />;
  }

  return <FashionFooterV1 />;
}
