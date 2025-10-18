
'use client';

import { useState } from 'react';
import { DetailedProduct, ProductVariant } from '@/data/gadget1/iphone-14-pro-max';

interface ProductInfoProps {
  product: DetailedProduct;
  selectedVariant: ProductVariant;
  onVariantChange: (variantKey: string) => void;
}

export function ProductInfo({ product, selectedVariant, onVariantChange }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(selectedVariant.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(selectedVariant.storage[0]);

  const handleVariantChange = (variantKey: string) => {
    onVariantChange(variantKey);
    const newVariant = product.variants[variantKey];
    setSelectedColor(newVariant.colors[0]);
    setSelectedStorage(newVariant.storage[0]);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div>
        <span className="text-2xl font-bold text-red-600">{selectedVariant.price.toLocaleString()} {selectedVariant.currency}</span>
        {selectedVariant.originalPrice && (
          <span className="text-lg line-through text-gray-500 ml-2">{selectedVariant.originalPrice.toLocaleString()} {selectedVariant.currency}</span>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold">Select color</h3>
        <div className="flex gap-2 mt-2">
          {selectedVariant.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 ${selectedColor.name === color.name ? 'border-primary' : 'border-transparent'}`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Variant</h3>
        <div className="flex gap-2 mt-2">
          {Object.keys(product.variants).map((variantKey) => (
            <button
              key={variantKey}
              onClick={() => handleVariantChange(variantKey)}
              className={`px-4 py-2 rounded-lg border ${selectedVariant.name === variantKey ? 'bg-primary text-white' : 'bg-gray-100'}`}>
              {variantKey}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Storage</h3>
        <div className="flex gap-2 mt-2">
          {selectedVariant.storage.map((storage) => (
            <button
              key={storage}
              onClick={() => setSelectedStorage(storage)}
              className={`px-4 py-2 rounded-lg border ${selectedStorage === storage ? 'bg-primary text-white' : 'bg-gray-100'}`}>
              {storage}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="btn btn-primary flex-1">Add to Cart</button>
        <button className="btn btn-outline flex-1">Add to Wishlist</button>
      </div>
    </div>
  );
}
