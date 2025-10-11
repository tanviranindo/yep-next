"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { beautyProducts, getProductById } from "@/data/beauty1/products";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";
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
          href={BEAUTY1_ROUTES.SHOP}
          className="inline-block bg-[#842898] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6d1f7a] transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  // Get related products (same category, different product)
  const relatedProducts = beautyProducts
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
        <Link href={BEAUTY1_ROUTES.HOME} className="hover:text-[#842898]">
          Home
        </Link>
        <span>/</span>
        <Link href={BEAUTY1_ROUTES.SHOP} className="hover:text-[#842898]">
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
                  selectedImage === index ? "border-[#842898]" : "border-transparent"
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
              <span className="text-3xl font-bold text-[#842898]">
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
              className="flex-1 bg-[#842898] text-white py-3 rounded-lg font-semibold hover:bg-[#6d1f7a] transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              ADD TO CART
            </button>
            <button
              onClick={handleAddToWishlist}
              disabled={isInWishlist(product.id)}
              className={`w-14 h-12 rounded-lg flex items-center justify-center transition-colors ${
                isInWishlist(product.id)
                  ? "bg-purple-100 text-[#842898]"
                  : "border-2 border-[#842898] text-[#842898] hover:bg-purple-50"
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
                ? "text-[#842898] border-b-2 border-[#842898]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className={`pb-3 font-semibold transition-colors ${
              activeTab === "ingredients"
                ? "text-[#842898] border-b-2 border-[#842898]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            INGREDIENTS
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 font-semibold transition-colors ${
              activeTab === "reviews"
                ? "text-[#842898] border-b-2 border-[#842898]"
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
                Introducing our exquisite Rose Gold Earrings from the Blue Lake Collection
              </h3>
              <p className="mb-4">
                These earrings are the epitome of sophistication and grace. Crafted with meticulous
                attention to detail, they feature a delicate rose gold finish that adds a touch of
                elegance to any look. The earrings capture the essence of timeless beauty, inspired
                by the serene waters of Blue Lake.
              </p>
              <p className="mb-4">
                The glamorous, carefully selected for their exceptional quality, radiate brilliance
                and sparkle with every movement. Set in smooth 18kt rose gold components. The blue
                gold complement of the warm, rosy hue creates an alluring and glamorous combination
                that is sure to turn heads.
              </p>
              <p>
                Drop Earrings are the perfect choice. They effortlessly add a touch of sophistication
                and glamour to any ensemble, making them a must-have accessory for those who
                appreciate exquisite beauty and impeccable craftsmanship.
              </p>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Ingredients</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Hyaluronic Acid - Deep hydration and plumping</li>
                <li>Vitamin C - Brightening and antioxidant protection</li>
                <li>Niacinamide - Improves skin texture and tone</li>
                <li>Peptides - Supports skin firmness and elasticity</li>
                <li>Botanical Extracts - Soothes and nourishes skin</li>
                <li>Natural Oils - Locks in moisture and adds radiance</li>
              </ul>
              <p className="mt-4">
                <strong>Full Ingredient List:</strong> Aqua, Glycerin, Sodium Hyaluronate, Ascorbic
                Acid, Niacinamide, Palmitoyl Tripeptide-1, Chamomilla Recutita Extract, Aloe
                Barbadensis Leaf Juice, and other natural ingredients.
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
                      <p className="font-semibold text-gray-900">Sarah Johnson</p>
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
                        <span className="text-sm text-gray-500">2 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Absolutely love this product! It exceeded my expectations and the quality is
                    outstanding. Will definitely purchase again.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">Emily Chen</p>
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
                    Great product with fast delivery. The packaging was beautiful and the product
                    works wonderfully on my skin.
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
                href={`/beauty1/product/${item.id}`}
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
                  <p className="text-lg font-bold text-[#842898]">
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
