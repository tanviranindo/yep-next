"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingCartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal, applyCoupon } =
    useFashionStore();
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  const handleUpdateQuantity = (id: string, delta: number) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      updateQuantity(id, item.quantity + delta);
    }
  };

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponCode);
    setCouponMessage(result.message);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-12 text-center border-b">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link
              href={FASHION2_ROUTES.HOME}
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-[#D4B896]">Cart</span>
          </div>
        </div>

        {/* Cart Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {cart.length === 0 ? (
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                href={FASHION2_ROUTES.SHOP}
                className="inline-block px-8 py-3 bg-[#D4B896] text-white font-semibold rounded-md hover:bg-[#C4A886] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Shopping Cart ({cart.length} items)
                    </h2>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {cart.map((item) => (
                      <div key={item.id} className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Jewelry Collection
                            </p>
                            <p className="text-[#D4B896] font-semibold mt-1">
                              BDT {item.price.toFixed(2)}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() =>
                                  handleUpdateQuantity(item.id, -1)
                                }
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 12H4"
                                  />
                                </svg>
                              </button>
                              <span className="w-12 h-10 flex items-center justify-center text-gray-900 font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, 1)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold text-gray-900">
                                BDT {(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1 space-y-6">
                {/* Coupon Code */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Coupon Code
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="px-6 py-3 bg-[#D4B896] text-white font-semibold rounded-md hover:bg-[#C4A886] transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {couponMessage && (
                      <p
                        className={`text-sm ${
                          couponMessage.includes("success")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {couponMessage}
                      </p>
                    )}
                  </div>
                </div>

                {/* Cart Totals */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Order Summary
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal ({cart.length} items)</span>
                      <span className="font-medium">
                        BDT {cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-medium">BDT 60.00</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax</span>
                      <span className="font-medium">BDT 0.00</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span>BDT {(cartTotal + 60).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={FASHION2_ROUTES.CHECKOUT}
                    className="block w-full text-center px-6 py-4 bg-[#D4B896] text-white font-semibold rounded-md hover:bg-[#C4A886] transition-colors"
                  >
                    Proceed To Checkout
                  </Link>
                  <Link
                    href={FASHION2_ROUTES.SHOP}
                    className="block w-full text-center px-6 py-3 mt-3 text-[#D4B896] font-medium hover:text-[#C4A886] transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <FashionFooter variant={2} />
    </div>
  );
}
