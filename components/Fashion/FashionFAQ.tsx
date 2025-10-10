"use client";

import FAQVariant1 from "@/components/FAQ/variant-1";
import Fashion2FAQ, { Fashion2FAQItem } from "@/components/FAQ/Fashion2FAQ";

export type FashionFAQVariant = 1 | 2;

interface FashionFAQProps {
  variant: FashionFAQVariant;
  items: Array<{ q: string; a: string }>;
  columns?: 1 | 2;
}

export default function FashionFAQ({ variant, items, columns = 2 }: FashionFAQProps) {
  if (variant === 2) {
    return <Fashion2FAQ items={items as Fashion2FAQItem[]} />;
  }

  return <FAQVariant1 items={items} columns={columns} />;
}
