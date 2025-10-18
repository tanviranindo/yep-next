
'use client';

import { useState } from 'react';
import { DetailedProduct, ProductVariant } from '@/data/gadget1/iphone-14-pro-max';
import { ProductImageGallery } from './ProductImageGallery';
import { ProductInfo } from './ProductInfo';

interface ProductViewProps {
  product: DetailedProduct;
}

export function ProductView({ product }: ProductViewProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants.USA);

  const handleVariantChange = (variantKey: string) => {
    const newVariant = product.variants[variantKey];
    setSelectedVariant(newVariant);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProductImageGallery images={selectedVariant.images} />
      <ProductInfo product={product} selectedVariant={selectedVariant} onVariantChange={handleVariantChange} />
    </div>
  );
}
