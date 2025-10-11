"use client";

import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { BEAUTY2_ROUTES } from "@/data/beauty2/constants";
import { beauty2Products } from "@/data/beauty2/products";
import Image from "next/image";
import Link from "next/link";
import { Heart, X, ShoppingCart, Leaf } from "lucide-react";

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

  const suggestedProducts = beauty2Products.slice(0, 4);

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-100 to-stone-100 flex items-center justify-center">
              <Heart size={64} className="text-[#D4A574]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8">
            Save your favorite natural beauty products and shop them later!
          </p>
          <Link
            href={BEAUTY2_ROUTES.SHOP}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#D4A574] to-[#C89563] text-white font-semibold rounded-xl hover:from-[#C89563] hover:to-[#B8854F] transition-all shadow-md"
          >
            <Leaf size={20} />
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-2">
        <Heart size={32} className="text-[#D4A574]" />
        <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
      </div>
      <p className="text-gray-600 mb-8">{wishlist.length} natural products saved</p>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden group relative border-2 border-transparent hover:border-[#D4A574] transition-all">
            {/* Remove Button */}
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition-colors"
              aria-label="Remove from wishlist"
            >
              <X size={18} className="text-gray-600" />
            </button>

            <Link href={`/beauty2/product/${item.id}`}>
              <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-amber-50 to-stone-50">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Link>

            <div className="p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                {item.name}
              </h3>
              <p className="text-xl font-bold text-[#D4A574] mb-3">
                BDT {item.price.toLocaleString()}
              </p>
              <p className={`text-sm mb-3 font-medium ${item.stockStatus === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                {item.stockStatus}
              </p>
              <button
                onClick={() => handleAddToCart(item)}
                disabled={item.stockStatus === "Out of Stock"}
                className="w-full bg-gradient-to-r from-[#D4A574] to-[#C89563] text-white py-2.5 rounded-xl font-semibold hover:from-[#C89563] hover:to-[#B8854F] transition-all disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* You May Also Like */}
      <div className="border-t-2 border-gray-200 pt-12">
        <div className="flex items-center gap-2 mb-6">
          <Leaf size={28} className="text-[#D4A574]" />
          <h2 className="text-2xl font-bold text-gray-900">You May Also Like</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestedProducts.map((product) => (
            <Link
              key={product.id}
              href={product.url || "#"}
              className="bg-white rounded-2xl shadow-md overflow-hidden group border-2 border-transparent hover:border-[#D4A574] transition-all"
            >
              <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-amber-50 to-stone-50">
                <Image
                  src={product.image || "/items/product1.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-[#D4A574]">
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
