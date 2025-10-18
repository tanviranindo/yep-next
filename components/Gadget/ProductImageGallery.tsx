
'use client';

import { useState } from 'react';

interface ProductImageGalleryProps {
  images: { id: string; src: string; alt: string }[];
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      <div className="flex sm:flex-col gap-2">
        {images.map((image) => (
          <button key={image.id} onClick={() => setMainImage(image)} className={`p-1 rounded-lg ${mainImage.id === image.id ? 'ring-2 ring-primary' : ''}`}>
            <img src={image.src} alt={image.alt} className="w-16 h-16 object-cover rounded-md" />
          </button>
        ))}
      </div>
      <div className="flex-1">
        <img src={mainImage.src} alt={mainImage.alt} className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
