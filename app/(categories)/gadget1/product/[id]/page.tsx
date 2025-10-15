"use client";

import {
  GadgetFooter,
  GadgetNavbar,
  GadgetProductCard,
} from "@/components/Gadget";
import { useGadgetStore } from "@/contexts/GadgetStoreContext";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import { getProductById, relatedProducts } from "@/data/gadget1/products";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, addToWishlist, isInWishlist } = useGadgetStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const productData = getProductById(params.id as string);

  if (!productData) {
    router.push(GADGET1_ROUTES.HOME);
    return null;
  }

  const product = {
    ...productData,
    images: [
      productData.image,
      productData.image,
      productData.image,
      productData.image,
    ],
    sku: `SKU-${productData.id.toUpperCase()}`,
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    });
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
      <GadgetNavbar variant={1} routes={GADGET1_ROUTES} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <Link href={GADGET1_ROUTES.HOME} className="hover:text-gray-900">
            Home
          </Link>{" "}
          /{product.category && <span> {product.category} / </span>}
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
                    selectedImage === idx
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              {product.rating && product.reviews && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(product.rating || 0)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  BDT {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      BDT {product.originalPrice.toFixed(2)}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">In stock</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-6 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
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
                <svg
                  className="w-6 h-6"
                  fill={isInWishlist(product.id) ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
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
              {product.brand && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Brand:</span>
                  <span className="text-gray-900">{product.brand}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex gap-8">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600"
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
                <h3 className="text-xl font-bold mb-4">Product Features</h3>
                <ul className="space-y-2">
                  <li>Premium quality with advanced technology</li>
                  <li>Durable construction for long-lasting performance</li>
                  <li>User-friendly design with intuitive controls</li>
                  <li>Compatible with multiple devices and platforms</li>
                </ul>
              </div>
            )}
            {activeTab === "specifications" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Technical Specifications</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Brand</td>
                      <td className="py-3">{product.brand}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">Warranty</td>
                      <td className="py-3">1 Year Manufacturer Warranty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                <p className="text-gray-600">
                  No reviews yet. Be the first to review this product!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <GadgetProductCard key={p.id} variant={1} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <GadgetFooter variant={1} />
    </div>
  );
}
