"use client"

import { useState } from "react"
import { Star, Heart, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProductDetailProps {
  productId?: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/woman-in-black-dress-posing.png",
    "/woman-in-black-dress-side-view.png",
    "/woman-in-black-dress-back-view.png",
    "/woman-in-black-dress-detail.png",
  ]

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <span>Home</span> / <span>Activewear</span> / <span>Printed letwear</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="flex gap-4">
          {/* Thumbnail Images */}
          <div className="flex flex-col gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? "border-orange-500" : "border-gray-200"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 relative">
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt="Drawstring-detail dress"
              className="w-[421px] h-[513px] object-cover rounded-lg"
            />
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">Drawstring-detail dress</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">26 Reviews</span>
              <span className="text-sm text-gray-600">SKU: 0044698</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                In Stock
              </Badge>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-orange-500">BDT 3500.00</span>
              <span className="text-xl text-gray-400 line-through">BDT 4000.00</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              A beautifully tailored dress that flatters every figure. Perfect for both special occasions and relaxed
              everyday wear.
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color: Orange</h3>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-orange-500 border-2 border-orange-600"></button>
                <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
                <button className="w-8 h-8 rounded-full bg-gray-400 border-2 border-gray-300"></button>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Size: Extra Large</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <p className="text-orange-600 text-sm mb-6">
              Hurry! Only <span className="font-semibold">20 items</span> left in stock.
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>

              <Button className="flex-1 bg-black text-white hover:bg-gray-800 h-12">ADD TO CART</Button>

              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 h-12 mb-6">BUY NOW</Button>

            {/* Shipping Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>Free return within 30 days of purchase</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                <span>Estimate delivery time: 15-30 days (International)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
