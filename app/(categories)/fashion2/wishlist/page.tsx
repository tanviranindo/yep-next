"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useFashionStore();

  const handleRemoveItem = (id: string) => {
    removeFromWishlist(id);
  };

  const handleAddToCart = (id: string) => {
    const item = wishlist.find((i) => i.id === id);
    if (item) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      });
      // Optionally remove from wishlist after adding to cart
      removeFromWishlist(id);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Wishlist
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link
                href={FASHION2_ROUTES.HOME}
                className="text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <span className="text-gray-400">→</span>
              <span className="text-[#D4B896] font-medium">Wishlist</span>
            </div>
          </div>
        </div>

        {/* Wishlist Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {wishlist.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Save items you love by adding them to your wishlist.
              </p>
              <Link
                href={FASHION2_ROUTES.SHOP}
                className="inline-block px-8 py-3 bg-[#D4B896] text-white font-semibold rounded-md hover:bg-[#C4A886] transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  My Wishlist ({wishlist.length} items)
                </h2>
                <button
                  onClick={() => {
                    wishlist.forEach((item) => removeFromWishlist(item.id));
                  }}
                  className="text-sm text-gray-600 hover:text-red-500 transition-colors"
                >
                  Clear All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group"
                  >
                    <div className="relative">
                      <div className="aspect-square bg-gray-100 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-[#D4B896]">
                          BDT {item.price.toFixed(2)}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            item.stockStatus === "In Stock"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.stockStatus}
                        </span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item.id)}
                        className="w-full bg-[#D4B896] text-white py-2 px-4 font-semibold rounded-md hover:bg-[#C4A886] transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <FashionFooter variant={2} />
    </div>
  );
}
