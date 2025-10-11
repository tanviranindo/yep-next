"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const dynamic = "force-dynamic";

export default function OrderConfirmedPage() {
  const { currentOrder, setCurrentOrder } = useFashionStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentOrder) {
      router.push(FASHION2_ROUTES.HOME);
    }
  }, [currentOrder, router]);

  // Clear order when leaving page
  useEffect(() => {
    return () => {
      setCurrentOrder(null);
    };
  }, [setCurrentOrder]);

  if (!currentOrder) {
    return null;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Order Confirmed
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link
                href={FASHION2_ROUTES.HOME}
                className="text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <span className="text-gray-400">→</span>
              <Link
                href={FASHION2_ROUTES.CHECKOUT}
                className="text-gray-600 hover:text-gray-900"
              >
                Checkout
              </Link>
              <span className="text-gray-400">→</span>
              <span className="text-[#D4B896] font-medium">
                Order Confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Confirmation Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Success Icon and Message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Thank you for your order!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your order has been successfully placed and is being processed.
              You will receive a confirmation email shortly.
            </p>
          </div>

          {/* Order Summary Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Order Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 mb-2">Order Number</p>
                <p className="font-semibold text-gray-900 text-lg">
                  {currentOrder.orderNumber}
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 mb-2">Order Date</p>
                <p className="font-semibold text-gray-900">
                  {currentOrder.date}
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                <p className="font-semibold text-[#D4B896] text-lg">
                  BDT {currentOrder.total.toFixed(2)}
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 mb-2">Payment Method</p>
                <p className="font-semibold text-gray-900">
                  {currentOrder.paymentMethod}
                </p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Order Items
            </h3>
            <div className="space-y-4">
              {currentOrder.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      BDT {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={FASHION2_ROUTES.TRACK_ORDER}
              className="px-8 py-4 bg-[#D4B896] text-white font-semibold rounded-md hover:bg-[#C4A886] transition-colors text-center"
            >
              Track Your Order
            </Link>
            <Link
              href={FASHION2_ROUTES.SHOP}
              className="px-8 py-4 bg-white border-2 border-[#D4B896] text-[#D4B896] font-semibold rounded-md hover:bg-[#D4B896] hover:text-white transition-colors text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <FashionFooter variant={2} />
    </div>
  );
}
