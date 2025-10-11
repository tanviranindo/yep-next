"use client";

import { FashionFooter, FashionNavbar, FashionProductCard } from "@/components/Fashion";
import Link from "next/link";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProductById, relatedProducts } from "@/data/fashion2/products";
import { FASHION2_ROUTES, PRODUCT_SIZES, PRODUCT_COLORS } from "@/data/fashion2/constants";

export const dynamic = "force-dynamic";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, addToWishlist, isInWishlist } = useFashionStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const productData = getProductById(params.id as string);

  if (!productData) {
    router.push(FASHION2_ROUTES.HOME);
    return null;
  }

  const product = {
    ...productData,
    images: [productData.image, productData.image, productData.image, productData.image],
    sizes: PRODUCT_SIZES,
    colors: PRODUCT_COLORS.slice(0, 4),
    sku: `SKU-${productData.id.toUpperCase()}`,
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    }, quantity);
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      stockStatus: "In Stock",
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <Link href={FASHION2_ROUTES.HOME} className="hover:text-gray-900">Home</Link> /
          {product.category && <span> {product.category} / </span>}
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square bg-gray-100 border-2 ${
                    selectedImage === idx ? "border-[#D4B896]" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              {product.rating && product.reviews && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">BDT {product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">BDT {product.originalPrice.toFixed(2)}</span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Size</label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border ${
                      selectedSize === size
                        ? "border-[#D4B896] bg-[#D4B896] text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Color</label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border ${
                      selectedColor === color
                        ? "border-[#D4B896] bg-[#D4B896] text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">Only 14 left in stock</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-6 py-4 bg-[#D4B896] text-white font-semibold hover:bg-[#C4A886] transition-colors"
              >
                ADD TO CART
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`px-6 py-4 border-2 ${
                  isInWishlist(product.id)
                    ? "border-red-500 text-red-500"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                <svg className="w-6 h-6" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Product Meta */}
            <div className="border-t pt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">SKU:</span>
                <span className="text-gray-900">{product.sku}</span>
              </div>
              {product.category && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="text-gray-900">{product.category}</span>
                </div>
              )}
              {product.subcategory && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Subcategory:</span>
                  <span className="text-gray-900">{product.subcategory}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex gap-8">
              {["description", "additional", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold ${
                    activeTab === tab
                      ? "border-b-2 border-[#D4B896] text-[#D4B896]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Item Features</h3>
                <ul className="space-y-2">
                  <li>Authentic and certified jewelry</li>
                  <li>Premium quality materials</li>
                  <li>Comes with warranty and certificate</li>
                  <li>Elegant design for any occasion</li>
                </ul>
              </div>
            )}
            {activeTab === "additional" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Additional Information</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Material</td>
                      <td className="py-3">Premium Gold/Silver</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Care Instructions</td>
                      <td className="py-3">Clean with soft cloth, avoid chemicals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>

        {/* Recently Viewed & Related Products */}
        <div className="mt-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <FashionProductCard key={p.id} variant={2} product={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">People Also Bought</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <FashionProductCard key={p.id} variant={2} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <FashionFooter variant={2} />
    </div>
  );
}
