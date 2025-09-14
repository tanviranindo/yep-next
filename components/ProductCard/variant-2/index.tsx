import { ProductCardProps, buildProductJsonLd } from '../types'
import clsx from 'clsx'
import Image from 'next/image'

// Variant 2: Soft, rounded, pastel accent (good for Beauty)
export default function ProductCardVariant2({ product, badgeText, className }: ProductCardProps) {
  const jsonLd = buildProductJsonLd(product)
  return (
    <article className={clsx('card bg-base-100 shadow-md hover:shadow-xl transition-all rounded-2xl border border-base-200', className)} itemScope itemType="https://schema.org/Product">
      <figure className="aspect-[4/3] overflow-hidden rounded-t-2xl bg-gradient-to-br from-secondary/10 to-accent/10 relative">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
        <meta itemProp="image" content={product.image} />
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-lg" itemProp="name">{product.name}</h3>
        {product.description ? (
          <p className="text-sm opacity-70 line-clamp-2" itemProp="description">{product.description}</p>
        ) : null}
        <div className="flex items-center justify-between mt-2">
          <div className="text-xl font-bold text-primary" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content={product.currency} />
            <span itemProp="price">{product.price.toFixed(2)}</span>
          </div>
          {badgeText ? <div className="badge badge-secondary badge-outline">{badgeText}</div> : null}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
