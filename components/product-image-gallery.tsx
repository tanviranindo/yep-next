"use client"

import { useState } from "react"
import Image from "next/image"
import { Expand, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex gap-6">
      {/* Thumbnails - Left Side */}
      <div className="flex flex-col gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-20 h-20 border-2 overflow-hidden rounded-sm transition-all ${
              selectedImage === index ? "border-black" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <Image
              src={image}
              alt={`${productName} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image - Right Side */}
      <div className="relative w-[500px] h-[600px] bg-gray-50 overflow-hidden rounded-sm">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-cover"
          priority
        />
        
        {/* Expand Button - Top Right */}
        <Button
          variant="ghost" 
          size="icon"
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded shadow-sm backdrop-blur-sm"
        >
          <Expand className="h-5 w-5 text-gray-700" />
        </Button>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={previousImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded shadow-sm backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded shadow-sm backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </Button>
      </div>
    </div>
  )
}