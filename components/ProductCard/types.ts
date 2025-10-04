export type CurrencyCode = "USD" | "EUR" | "GBP" | "BDT" | "JPY";

export interface Product {
  id: string;
  name: string;
  description?: string;
  image: string;
  url: string;
  price: number;
  currency: CurrencyCode;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  brand?: string;
  rating?: number; // 0-5
  reviewCount?: number;
}

export interface ProductCardProps {
  product: Product;
  badgeText?: string;
  className?: string;
}

export const buildProductJsonLd = (p: Product) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  name: p.name,
  image: [p.image],
  description: p.description,
  brand: p.brand ? { "@type": "Brand", name: p.brand } : undefined,
  sku: p.id,
  offers: {
    "@type": "Offer",
    url: p.url,
    priceCurrency: p.currency,
    price: p.price.toFixed(2),
    availability: `https://schema.org/${p.availability ?? "InStock"}`,
  },
  aggregateRating:
    p.rating && p.reviewCount
      ? {
          "@type": "AggregateRating",
          ratingValue: p.rating,
          reviewCount: p.reviewCount,
        }
      : undefined,
});
