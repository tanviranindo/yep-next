"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";

export const dynamic = "force-dynamic";

export default function ReviewOrderPage() {
  const { currentOrder, clearCart } = useFashionStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentOrder) {
      router.push(FASHION2_ROUTES.CART);
    }
  }, [currentOrder, router]);

  if (!currentOrder) {
    return null;
  }

  const handleConfirm = () => {
    clearCart();
    router.push(FASHION2_ROUTES.ORDER_CONFIRMED);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-12 text-center border-b">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Review Order</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href={FASHION2_ROUTES.HOME} className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-[#D4B896]">Checkout</span>
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
              className="w-full px-6 py-4 bg-[#D4B896] text-white hover:bg-[#C4A886] transition-colors"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </main>
      <FashionFooter variant={2} />
    </div>
  );
}
