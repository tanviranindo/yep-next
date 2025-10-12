"use client";

import { BeautyFooter, BeautyNavbar } from "@/components/Beauty";
import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { BEAUTY1_ROUTES, DELIVERY_CHARGES } from "@/data/beauty1/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ReviewOrderPage() {
  const router = useRouter();
  const { cart, cartTotal, currentOrder } = useBeautyStore();

  // Calculate totals
  const deliveryArea = currentOrder?.customerInfo?.deliveryArea || "inside";
  const deliveryCharge =
    deliveryArea === "inside" ? DELIVERY_CHARGES.INSIDE_DHAKA : DELIVERY_CHARGES.OUTSIDE_DHAKA;
  const subtotal = cartTotal;
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax + deliveryCharge;

  if (cart.length === 0 && !currentOrder) {
    router.push(BEAUTY1_ROUTES.CART);
    return null;
  }

  const orderItems = cart.length > 0 ? cart : currentOrder?.items || [];

  return (
    <div className="bg-white min-h-screen">
      <BeautyNavbar variant={1} routes={BEAUTY1_ROUTES} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-8">
          <Link href={BEAUTY1_ROUTES.HOME} className="hover:text-[#842898]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={BEAUTY1_ROUTES.CART} className="hover:text-[#842898]">
            My Orders
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Review Order</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Review Your Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                    <div className="relative w-20 h-20 bg-gray-100 rounded-md flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
                      <p className="text-lg font-bold text-[#842898] mt-2">
                        BDT {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Information</h2>
              {currentOrder?.customerInfo ? (
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Name:</span>{" "}
                    {currentOrder.customerInfo.firstName} {currentOrder.customerInfo.lastName}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> {currentOrder.customerInfo.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {currentOrder.customerInfo.email}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {currentOrder.customerInfo.streetAddress}
                  </p>
                  <p>
                    {currentOrder.customerInfo.city}, {currentOrder.customerInfo.state}{" "}
                    {currentOrder.customerInfo.zipCode}
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Name:</span> John Doe
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> +880 1234-567890
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> customer@example.com
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span> 123 Dhanmondi Road, Dhaka 1205
                  </p>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
              <p className="text-gray-700">
                {currentOrder?.paymentMethod
                  ? currentOrder.paymentMethod.toUpperCase()
                  : "Cash on Delivery"}
              </p>
            </div>
          </div>

          {/* Price Summary - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Price Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>BDT {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (5%)</span>
                  <span>BDT {tax.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Charge</span>
                  <span>BDT {deliveryCharge}</span>
                </div>
                <div className="border-t border-gray-300 pt-3">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-[#842898]">BDT {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href={BEAUTY1_ROUTES.ORDER_CONFIRMED}
                  className="block w-full bg-[#842898] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#6d1f7a] transition-colors"
                >
                  Confirm Order
                </Link>
                <Link
                  href={BEAUTY1_ROUTES.CART}
                  className="block w-full text-center text-[#842898] hover:underline"
                >
                  Edit Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BeautyFooter variant={1} />
    </div>
  );
}
