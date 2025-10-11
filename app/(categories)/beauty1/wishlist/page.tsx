"use client";

import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";
import { beautyProducts } from "@/data/beauty1/products";
import Image from "next/image";
import Link from "next/link";
import { Heart, X, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useBeautyStore();

  const handleAddToCart = (item: typeof wishlist[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  const suggestedProducts = beautyProducts.slice(0, 4);

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center">
              <Heart size={64} className="text-[#842898]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8">
            Save your favorite items and come back to them later!
          </p>
          <Link
            href={BEAUTY1_ROUTES.SHOP}
            className="inline-flex items-center justify-center px-8 py-3 bg-[#842898] text-white font-semibold rounded-lg hover:bg-[#6d1f7a] transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
      <p className="text-gray-600 mb-8">{wishlist.length} items saved</p>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group relative">
            {/* Remove Button */}
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 transition-colors"
              aria-label="Remove from wishlist"
            >
              <X size={16} className="text-gray-600" />
            </button>

            <Link href={`/beauty1/product/${item.id}`}>
              <div className="relative w-full aspect-[3/4] bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                {item.name}
              </h3>
              <p className="text-xl font-bold text-[#842898] mb-3">
                BDT {item.price.toLocaleString()}
              </p>
              <p className={`text-sm mb-3 ${item.stockStatus === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                {item.stockStatus}
              </p>
              <button
                onClick={() => handleAddToCart(item)}
                disabled={item.stockStatus === "Out of Stock"}
                className="w-full bg-[#842898] text-white py-2 rounded-lg font-semibold hover:bg-[#6d1f7a] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* You May Also Like */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestedProducts.map((product) => (
            <Link
              key={product.id}
              href={product.url || "#"}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative w-full aspect-[3/4] bg-gray-100">
                <Image
                  src={product.image || "/items/product1.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-[#842898]">
                  BDT {product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
