import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ProductCardProps, buildProductJsonLd } from "../types";

export interface CardAction {
  icon: string | JSX.Element;
  href?: string;
  label?: string;
}
export interface ProductCardV4Props extends ProductCardProps {
  actions?: CardAction[];
  cta?: { label: string; href?: string };
}

// Fashion UI 1: Tall image, vertical action icons, add-to-cart bar
export default function ProductCardVariant4({
  product,
  className,
  actions = ["❤", "↗", "⊕"].map((i) => ({ icon: i })),
  cta = { label: "Add To Cart" },
}: ProductCardV4Props) {
  const jsonLd = buildProductJsonLd(product);
  return (
    <article
      className={clsx(
        "card bg-base-100 shadow border border-base-200",
        className
      )}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative">
        <div className="relative w-full h-80">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        {/* Bottom overlay add-to-cart bar to match design */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          {cta?.href ? (
            <Link
              href={cta.href}
              className="btn btn-xs bg-base-100 text-base-content border-base-300"
            >
              {cta.label.toUpperCase()}
            </Link>
          ) : (
            <button className="btn btn-xs bg-base-100 text-base-content border-base-300">
              {cta.label.toUpperCase()}
            </button>
          )}
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {actions.map((action, i) =>
            action.href ? (
              <Link
                key={i}
                href={action.href}
                className="btn btn-xs btn-circle bg-base-100/90 border border-base-300"
              >
                {action.icon as any}
              </Link>
            ) : (
              <button
                key={i}
                className="btn btn-xs btn-circle bg-base-100/90 border border-base-300"
                aria-label={action.label}
              >
                {action.icon as any}
              </button>
            )
          )}
        </div>
      </div>
      <div className="card-body p-3">
        <h3 className="font-semibold text-base" itemProp="name">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div
            className="text-lg font-bold"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content={product.currency} />
            <span itemProp="price">
              {product.currency} {product.price.toLocaleString()}.00
            </span>
          </div>
          {cta?.href ? (
            <Link href={cta.href} className="btn btn-xs btn-outline">
              {cta.label}
            </Link>
          ) : (
            <button className="btn btn-xs btn-outline">{cta.label}</button>
          )}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
