"use client";

import { FashionFooter } from "@/components/Footer";
import { FashionNavbar } from "@/components/Navbar";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const dynamic = "force-dynamic";

export default function ReviewOrderPage() {
  const { currentOrder, clearCart } = useFashionStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentOrder) {
      router.push("/fashion1/cart");
    }
  }, [currentOrder, router]);

  if (!currentOrder) {
    return null;
  }

  const handleConfirm = () => {
    clearCart();
    router.push("/fashion1/order-confirmed");
  };

  return (
    <div className="bg-white min-h-screen">
      <FashionNavbar />

      {/* Page Header */}
      <div className="w-full py-12 text-center border-b">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Review Order</h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <span className="text-gray-400">→</span>
          <span className="text-red-500">Checkout</span>
        </div>
      </div>

      {/* Review Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600 mb-8">
          Thank you! Your order has been received.
        </p>

        {/* Order Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-50 p-4">
            <p className="text-sm text-gray-600 mb-1">Order Number:</p>
            <p className="font-semibold text-gray-900">{currentOrder.orderNumber}</p>
          </div>
          <div className="bg-gray-50 p-4">
            <p className="text-sm text-gray-600 mb-1">Date:</p>
            <p className="font-semibold text-gray-900">{currentOrder.date}</p>
          </div>
          <div className="bg-gray-50 p-4">
            <p className="text-sm text-gray-600 mb-1">Total:</p>
            <p className="font-semibold text-gray-900">
              BDT {currentOrder.total.toFixed(2)}
            </p>
          </div>
          <div className="bg-gray-50 p-4">
            <p className="text-sm text-gray-600 mb-1">Payment method:</p>
            <p className="font-semibold text-gray-900">
              {currentOrder.paymentMethod}
            </p>
          </div>
        </div>

        {/* Order Details */}
        <div className="border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order details</h2>

          {/* Products Table */}
          <div className="mb-6">
            <div className="flex justify-between py-3 border-b font-semibold text-gray-900">
              <span>Products</span>
              <span>Amount</span>
            </div>
            {currentOrder.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b text-gray-700"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>BDT {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between py-3 border-b text-gray-700">
              <span>Delivery Charge</span>
              <span>BDT {currentOrder.deliveryCharge.toFixed(2)}</span>
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between py-3 border-b font-semibold text-gray-900">
            <span>Subtotal</span>
            <span>BDT {currentOrder.subtotal.toFixed(2)}</span>
          </div>

          {/* Payment Method */}
          <div className="flex justify-between py-3 border-b text-gray-700">
            <span>Payment method</span>
            <span>{currentOrder.paymentMethod}</span>
          </div>

          {/* Total */}
          <div className="flex justify-between py-4 text-xl font-bold text-gray-900">
            <span>Total</span>
            <span>BDT {currentOrder.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="mt-8">
          <button
            onClick={handleConfirm}
            className="w-full px-6 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Confirm Order
          </button>
        </div>
      </div>

      <FashionFooter />
    </div>
  );
}
