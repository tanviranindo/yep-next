"use client";

import { GadgetFooter, GadgetNavbar } from "@/components/Gadget";
import { useGadgetStore } from "@/contexts/GadgetStoreContext";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useGadgetStore();

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
      <GadgetNavbar variant={1} routes={GADGET1_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-12 text-center border-b">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wishlist</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link
              href={GADGET1_ROUTES.HOME}
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-blue-600">Wishlist</span>
          </div>
        </div>

        {/* Wishlist Table */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {wishlist.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Your wishlist is empty</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">
                      Product
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">
                      Price
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">
                      Stock Status
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-6 px-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover"
                          />
                          <span className="text-gray-900">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-6 px-4 text-gray-900">
                        BDT {item.price.toFixed(2)}
                      </td>
                      <td className="py-6 px-4">
                        <span className="text-gray-900">
                          {item.stockStatus}
                        </span>
                      </td>
                      <td className="py-6 px-4">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-500 text-xl"
                          >
                            ×
                          </button>
                          <button
                            onClick={() => handleAddToCart(item.id)}
                            className="px-6 py-2 border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
      <GadgetFooter variant={1} />
    </div>
  );
}
