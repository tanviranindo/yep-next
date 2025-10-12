"use client";

import { BeautyFooter, BeautyNavbar } from "@/components/Beauty";
import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrderConfirmedPage() {
  const router = useRouter();
  const { currentOrder } = useBeautyStore();

  // Generate mock order number if no current order
  const orderNumber = currentOrder?.orderNumber || `ORD-2023-${Math.floor(Math.random() * 90000) + 10000}`;

  // Calculate estimated delivery date (7 days from now)
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);
  const deliveryDate = estimatedDelivery.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white min-h-screen">
      <BeautyNavbar variant={1} routes={BEAUTY1_ROUTES} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" strokeWidth={2} />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">Thank you for your purchase!</p>

          {/* Order Details Card */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-8 text-left">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-purple-200">
                <span className="text-gray-700 font-medium">Order Number</span>
                <span className="text-xl font-bold text-[#842898]">{orderNumber}</span>
              </div>

              {currentOrder && (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Order Total</span>
                    <span className="text-lg font-bold text-gray-900">
                      BDT {currentOrder.total.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Payment Method</span>
                    <span className="text-gray-900">
                      {currentOrder.paymentMethod.toUpperCase()}
                    </span>
                  </div>
                </>
              )}

              <div className="flex justify-between items-center pt-4 border-t border-purple-200">
                <span className="text-gray-700 font-medium">Estimated Delivery</span>
                <span className="text-gray-900 font-semibold">{deliveryDate}</span>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What happens next?</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#842898] mr-2">•</span>
                <span>You will receive an order confirmation email shortly</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#842898] mr-2">•</span>
                <span>We'll send you tracking information once your order ships</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#842898] mr-2">•</span>
                <span>You can track your order status anytime using the Track Order button below</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={BEAUTY1_ROUTES.SHOP}
              className="px-8 py-3 bg-[#842898] text-white rounded-lg font-semibold hover:bg-[#6d1f7a] transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href={BEAUTY1_ROUTES.TRACK_ORDER}
              className="px-8 py-3 border-2 border-[#842898] text-[#842898] rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Track Order
            </Link>
          </div>

          {/* Customer Support */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Need help? Contact our{" "}
              <a href="#" className="text-[#842898] hover:underline font-medium">
                customer support
              </a>
            </p>
          </div>
        </div>
      </div>

      <BeautyFooter variant={1} />
    </div>
  );
}
