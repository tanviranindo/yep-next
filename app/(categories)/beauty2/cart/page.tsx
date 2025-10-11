"use client";

import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { BEAUTY2_ROUTES, DELIVERY_CHARGES } from "@/data/beauty2/constants";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, Leaf } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useBeautyStore();

  const deliveryCharge = cartTotal > 3000 ? 0 : DELIVERY_CHARGES.INSIDE_DHAKA;
  const total = cartTotal + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-100 to-stone-100 flex items-center justify-center">
              <ShoppingBag size={64} className="text-[#D4A574]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">
            Discover our natural beauty collection and add your favorites to the cart!
          </p>
          <Link
            href={BEAUTY2_ROUTES.SHOP}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#D4A574] to-[#C89563] text-white font-semibold rounded-xl hover:from-[#C89563] hover:to-[#B8854F] transition-all shadow-md"
          >
            <Leaf size={20} />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Leaf size={32} className="text-[#D4A574]" />
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-4 border-2 border-transparent hover:border-[#D4A574] transition-all"
            >
              {/* Product Image */}
              <div className="relative w-full sm:w-32 h-32 flex-shrink-0 bg-gradient-to-br from-amber-50 to-stone-50 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold text-[#D4A574]">
                    BDT {item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors text-[#D4A574]"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors text-[#D4A574]"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Subtotal & Remove */}
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold text-gray-900">
                      BDT {(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-4 border-2 border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>BDT {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery Charge</span>
                <span>
                  {deliveryCharge === 0 ? (
                    <span className="text-green-600 font-semibold">FREE</span>
                  ) : (
                    `BDT ${deliveryCharge}`
                  )}
                </span>
              </div>
              {cartTotal > 0 && cartTotal < 3000 && (
                <div className="text-sm text-gray-600 bg-amber-50 p-3 rounded-xl flex items-center gap-2">
                  <Leaf size={16} className="text-[#D4A574]" />
                  Add BDT {(3000 - cartTotal).toLocaleString()} more for free delivery!
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span className="text-[#D4A574]">BDT {total.toLocaleString()}</span>
              </div>
            </div>

            <Link
              href={BEAUTY2_ROUTES.CHECKOUT}
              className="block w-full bg-gradient-to-r from-[#D4A574] to-[#C89563] text-white text-center py-3 rounded-xl font-semibold hover:from-[#C89563] hover:to-[#B8854F] transition-all shadow-md mb-3"
            >
              Proceed to Checkout
            </Link>

            <Link
              href={BEAUTY2_ROUTES.SHOP}
              className="block w-full border-2 border-[#D4A574] text-[#D4A574] text-center py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
