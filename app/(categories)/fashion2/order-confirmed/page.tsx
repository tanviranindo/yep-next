"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";

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
        <div className="w-full py-12 text-center border-b">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href={FASHION2_ROUTES.HOME} className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-[#D4B896]">Checkout</span>
          </div>
        </div>

        {/* Confirmation Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-center text-gray-600 mb-12">
            Thank you! Your order has been received.
          </p>

          {/* Order Summary Card */}
          <div className="bg-white border border-gray-200 p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Order Number:</p>
                <p className="font-semibold text-gray-900">
                  {currentOrder.orderNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Date:</p>
                <p className="font-semibold text-gray-900">{currentOrder.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total:</p>
                <p className="font-semibold text-gray-900">
                  BDT {currentOrder.total.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Payment method:</p>
                <p className="font-semibold text-gray-900">
                  {currentOrder.paymentMethod}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#"
              className="px-8 py-3 bg-white border-2 border-[#D4B896] text-gray-900 hover:bg-gray-50 transition-colors text-center"
            >
              View Order details
            </a>
          </div>

          {/* Track Order Button */}
          <div>
            <a
              href="#"
              className="block w-full text-center px-6 py-4 bg-[#D4B896] text-white hover:bg-[#C4A886] transition-colors"
            >
              Track Order
            </a>
          </div>
        </div>
      </main>
      <FashionFooter variant={2} />
    </div>
  );
}
