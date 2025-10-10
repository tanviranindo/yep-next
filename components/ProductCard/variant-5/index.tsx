import { formatPrice } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ProductCardProps, buildProductJsonLd } from "../types";

// Variant 5: Minimal, no border/shadow, large media, bold name, subdued price
export default function ProductCardVariant5({
  product,
  className,
}: ProductCardProps) {
  const jsonLd = buildProductJsonLd(product);

  return (
    <article
      className={clsx("bg-transparent", className)}
      itemScope
      itemType="https://schema.org/Product"
    >
      <Link
        href={product.url}
        aria-label={product.name}
        className="group block"
      >
        <figure className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <meta itemProp="image" content={product.image} />
        </figure>
        <div className="pt-4">
          <h3
            className="text-lg font-semibold text-gray-900 tracking-tight leading-tight"
            itemProp="name"
          >
            {product.name}
          </h3>
          <div
            className="mt-1 text-base text-gray-700"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content={product.currency} />
            <span itemProp="price">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>
        </div>
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
