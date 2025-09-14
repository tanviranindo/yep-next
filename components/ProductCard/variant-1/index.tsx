import { ProductCardProps, buildProductJsonLd } from '../types'
import clsx from 'clsx'
import Image from 'next/image'

// Variant 1: Minimal card (good for Fashion)
export default function ProductCardVariant1({ product, badgeText, className }: ProductCardProps) {
  const jsonLd = buildProductJsonLd(product)
  return (
    <article className={clsx('card bg-base-100 shadow hover:shadow-lg transition-shadow', className)} itemScope itemType="https://schema.org/Product">
      <figure className="aspect-[4/3] overflow-hidden relative">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <meta itemProp="image" content={product.image} />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-base-content" itemProp="name">{product.name}</h3>
        {product.description ? (
          <p className="text-sm opacity-70 line-clamp-2" itemProp="description">{product.description}</p>
        ) : null}
        <div className="card-actions items-center justify-between mt-2">
          <div>
            <span className="text-2xl font-semibold text-primary" itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="priceCurrency" content={product.currency} />
              <span itemProp="price">{product.price.toFixed(2)}</span>
            </span>
          </div>
          {badgeText ? <div className="badge badge-outline">{badgeText}</div> : null}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
