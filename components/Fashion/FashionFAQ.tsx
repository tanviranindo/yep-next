import FAQVariant1, { FAQItem } from "./variants/faq/variant-1";
import FAQVariant2, { Fashion2FAQItem } from "./variants/faq/variant-2";

export type FashionFAQVariant = 1 | 2;

interface FashionFAQProps {
  variant: FashionFAQVariant;
  items: Array<{ q: string; a: string }>;
  columns?: 1 | 2;
}

/**
 * FashionFAQ - Server component router for Fashion FAQ variants
 *
 * Variant 1 is a server component (collapsible FAQ using <details>).
 * Variant 2 is a client component (FAQ with contact form and state).
 */
export default function FashionFAQ({ variant, items, columns = 2 }: FashionFAQProps) {
  if (variant === 2) {
    return <FAQVariant2 items={items as Fashion2FAQItem[]} />;
  }

  return <FAQVariant1 items={items as FAQItem[]} columns={columns} />;
}
