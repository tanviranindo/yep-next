"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { beauty2Products, getProductById } from "@/data/beauty2/products";
import { BEAUTY2_ROUTES } from "@/data/beauty2/constants";
import Image from "next/image";
import Link from "next/link";
import { Star, Plus, Minus, ShoppingCart, Heart } from "lucide-react";

type TabType = "description" | "ingredients" | "reviews";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  const { addToCart, addToWishlist, isInWishlist } = useBeautyStore();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>("description");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link
          href={BEAUTY2_ROUTES.SHOP}
          className="inline-block bg-[#D4A574] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c49564] transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  // Get related products (same category, different product)
  const relatedProducts = beauty2Products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Thumbnail images (using same image with different crop params)
  const thumbnails = [
    product.image,
    product.image + "&crop=entropy&cs=tinysrgb&fit=crop&h=800&w=600",
    product.image + "&crop=faces&cs=tinysrgb&fit=crop&h=800&w=600",
    product.image + "&crop=edges&cs=tinysrgb&fit=crop&h=800&w=600",
  ];

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image || "/items/product1.jpg",
      },
      quantity
    );
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/items/product1.jpg",
      stockStatus: product.availability === "InStock" ? "In Stock" : "Out of Stock",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href={BEAUTY2_ROUTES.HOME} className="hover:text-[#D4A574]">
          Home
        </Link>
        <span>/</span>
        <Link href={BEAUTY2_ROUTES.SHOP} className="hover:text-[#D4A574]">
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={thumbnails[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-3">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? "border-[#D4A574]" : "border-transparent"
                }`}
              >
                <Image src={thumb} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-[#D4A574]">
                BDT {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  BDT {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
          </div>

          {/* Product Details */}
          <div className="border-t border-b border-gray-200 py-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium text-gray-900">{product.category}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Availability:</span>
              <span className="font-medium text-green-600">
                {product.availability === "InStock" ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tags:</span>
              <span className="font-medium text-gray-900">{product.subcategory}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">SKU:</span>
              <span className="font-medium text-gray-900">{product.id.toUpperCase()}</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Quantity</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#D4A574] text-white py-3 rounded-lg font-semibold hover:bg-[#c49564] transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              ADD TO CART
            </button>
            <button
              onClick={handleAddToWishlist}
              disabled={isInWishlist(product.id)}
              className={`w-14 h-12 rounded-lg flex items-center justify-center transition-colors ${
                isInWishlist(product.id)
                  ? "bg-amber-100 text-[#D4A574]"
                  : "border-2 border-[#D4A574] text-[#D4A574] hover:bg-amber-50"
              }`}
            >
              <Heart size={20} className={isInWishlist(product.id) ? "fill-current" : ""} />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-16">
        {/* Tab Headers */}
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-3 font-semibold transition-colors ${
              activeTab === "description"
                ? "text-[#D4A574] border-b-2 border-[#D4A574]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className={`pb-3 font-semibold transition-colors ${
              activeTab === "ingredients"
                ? "text-[#D4A574] border-b-2 border-[#D4A574]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            INGREDIENTS
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 font-semibold transition-colors ${
              activeTab === "reviews"
                ? "text-[#D4A574] border-b-2 border-[#D4A574]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            REVIEWS
          </button>
        </div>

        {/* Tab Content */}
        <div className="prose max-w-none">
          {activeTab === "description" && (
            <div className="text-gray-700 leading-relaxed">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Discover the power of natural beauty with our premium product
              </h3>
              <p className="mb-4">
                This carefully formulated beauty essential combines the finest natural ingredients
                to deliver exceptional results. Crafted with meticulous attention to detail, our
                product harnesses the power of botanical extracts and organic compounds to enhance
                your natural beauty.
              </p>
              <p className="mb-4">
                Each ingredient is thoughtfully selected for its unique properties and benefits.
                From deeply nourishing oils to skin-loving vitamins, every component works in
                harmony to provide comprehensive care. The lightweight, fast-absorbing formula
                ensures effortless application and quick results.
              </p>
              <p>
                Perfect for daily use, this product seamlessly integrates into your beauty routine,
                offering lasting benefits and visible improvements. Experience the difference that
                natural, high-quality ingredients can make in your beauty journey.
              </p>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Ingredients</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Organic Argan Oil - Deep nourishment and moisture retention</li>
                <li>Green Tea Extract - Antioxidant protection and soothing</li>
                <li>Aloe Vera - Calming and hydrating properties</li>
                <li>Vitamin E - Skin protection and rejuvenation</li>
                <li>Chamomile Extract - Anti-inflammatory and gentle care</li>
                <li>Jojoba Oil - Balances and softens skin naturally</li>
              </ul>
              <p className="mt-4">
                <strong>Complete Ingredient List:</strong> Aqua, Argania Spinosa Kernel Oil,
                Camellia Sinensis Leaf Extract, Aloe Barbadensis Leaf Juice, Tocopherol,
                Chamomilla Recutita Extract, Simmondsia Chinensis Seed Oil, and other natural
                botanical ingredients.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} out of 5 ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">Maya Rahman</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">3 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    I love how natural and gentle this product is! It works beautifully and I can
                    feel the difference in my skin. Highly recommend for anyone looking for organic
                    beauty products.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">Nusrat Ahmed</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < 4
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">1 month ago</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Beautiful product with excellent quality. The natural ingredients make such a
                    difference compared to chemical-heavy alternatives. Will definitely buy again!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">RELATED PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/beauty2/product/${item.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative w-full aspect-[3/4] bg-gray-100">
                  <Image
                    src={item.image || "/items/product1.jpg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-lg font-bold text-[#D4A574]">
                    BDT {item.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
