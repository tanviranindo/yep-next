"use client";

import { GadgetFooter, GadgetNavbar } from "@/components/Gadget";
import { useGadgetStore } from "@/contexts/GadgetStoreContext";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingCartPage() {
  const { cart, updateCartQuantity, removeFromCart } = useGadgetStore();
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleUpdateQuantity = (id: string, delta: number) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      updateCartQuantity(id, (item.quantity || 1) + delta);
    }
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "TECH10") {
      setCouponMessage("Coupon applied! 10% discount");
    } else {
      setCouponMessage("Invalid coupon code");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <GadgetNavbar variant={1} routes={GADGET1_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-12 text-center border-b">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link
              href={GADGET1_ROUTES.HOME}
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-blue-600">Cart</span>
          </div>
        </div>

        {/* Cart Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
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
                        Quantity
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id} className="border-b">
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
                          <div className="flex items-center gap-2">
                            <div className="flex flex-col border border-gray-300">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, 1)}
                                className="px-3 py-1 hover:bg-gray-100 text-sm"
                              >
                                ▲
                              </button>
                              <div className="px-3 py-1 text-center border-t border-b">
                                {item.quantity || 1}
                              </div>
                              <button
                                onClick={() =>
                                  handleUpdateQuantity(item.id, -1)
                                }
                                className="px-3 py-1 hover:bg-gray-100 text-sm"
                              >
                                ▼
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-2 text-gray-400 hover:text-red-500 text-xl"
                            >
                              ×
                            </button>
                          </div>
                        </td>
                        <td className="py-6 px-4 text-gray-900 font-semibold">
                          BDT {(item.price * (item.quantity || 1)).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                {/* Coupon Code */}
                <div className="bg-white border border-gray-200 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Coupon Code
                  </h3>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon Code"
                      className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-6 py-2 border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {couponMessage && (
                    <p className="text-sm text-gray-600">{couponMessage}</p>
                  )}
                </div>

                {/* Cart Totals */}
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Cart Totals
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>BDT {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-gray-900 font-bold text-lg">
                      <span>Total</span>
                      <span>BDT {cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  <Link
                    href={GADGET1_ROUTES.CHECKOUT}
                    className="block w-full text-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Proceed To Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <GadgetFooter variant={1} />
    </div>
  );
}
