import { ProductCardProps, buildProductJsonLd } from '../types'
import clsx from 'clsx'
import Image from 'next/image'

// Variant 3: Tech-forward, emphasis on rating (good for Gadgets)
export default function ProductCardVariant3({ product, badgeText, className }: ProductCardProps) {
  const jsonLd = buildProductJsonLd(product)
  return (
    <article className={clsx('card bg-base-100 shadow-lg hover:shadow-2xl border border-base-300 transition-shadow', className)} itemScope itemType="https://schema.org/Product">
      <figure className="aspect-[4/3] overflow-hidden bg-base-200 relative">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <meta itemProp="image" content={product.image} />
      </figure>
      <div className="card-body">
        <div className="flex items-start justify-between gap-2">
          <h3 className="card-title text-base-content" itemProp="name">{product.name}</h3>
          {badgeText ? <div className="badge badge-accent text-white">{badgeText}</div> : null}
        </div>
        {product.description ? (
          <p className="text-sm opacity-70 line-clamp-2" itemProp="description">{product.description}</p>
        ) : null}

        <div className="flex items-center justify-between mt-2">
          <div className="text-2xl font-semibold text-primary" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content={product.currency} />
            <span itemProp="price">{product.price.toFixed(2)}</span>
          </div>
          {typeof product.rating === 'number' ? (
            <div className="flex items-center gap-2" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <div className="rating rating-sm">
                {/* purely visual stars; real rating provided via microdata below */}
                <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly checked />
              </div>
              <span className="text-sm opacity-70">
                {product.rating.toFixed(1)}{product.reviewCount ? ` (${product.reviewCount})` : ''}
              </span>
              <meta itemProp="ratingValue" content={String(product.rating)} />
              {product.reviewCount ? <meta itemProp="reviewCount" content={String(product.reviewCount)} /> : null}
            </div>
          ) : null}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
