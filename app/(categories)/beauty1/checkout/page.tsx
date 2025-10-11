"use client";

import { useState } from "react";
import { useBeautyStore } from "@/contexts/BeautyStoreContext";
import { BEAUTY1_ROUTES, PAYMENT_METHODS, DELIVERY_CHARGES } from "@/data/beauty1/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CheckoutFormData } from "@/contexts/BeautyStoreContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart, setCurrentOrder } = useBeautyStore();
  const [deliveryArea, setDeliveryArea] = useState<"inside" | "outside">("inside");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState<Partial<CheckoutFormData>>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetAddress: "",
    city: "Dhaka",
    state: "Dhaka",
    zipCode: "",
    deliveryArea: "inside",
    paymentMethod: "cod",
  });

  const deliveryCharge =
    deliveryArea === "inside" ? DELIVERY_CHARGES.INSIDE_DHAKA : DELIVERY_CHARGES.OUTSIDE_DHAKA;
  const total = cartTotal + deliveryCharge;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const order = {
      orderNumber: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      items: cart,
      subtotal: cartTotal,
      deliveryCharge,
      total,
      paymentMethod,
      customerInfo: formData as CheckoutFormData,
    };

    setCurrentOrder(order);
    clearCart();
    router.push(BEAUTY1_ROUTES.ORDER_CONFIRMED);
  };

  if (cart.length === 0) {
    router.push(BEAUTY1_ROUTES.CART);
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898]"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898]"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898]"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Street Address *"
                  required
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898]"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City *"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898]"
                  />
                  <input
                    type="text"
                    placeholder="State *"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898]"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code *"
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#842898]"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Area */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Area</h2>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all has-[:checked]:border-[#842898] has-[:checked]:bg-purple-50">
                  <input
                    type="radio"
                    name="deliveryArea"
                    value="inside"
                    checked={deliveryArea === "inside"}
                    onChange={(e) => setDeliveryArea(e.target.value as "inside")}
                    className="w-5 h-5 text-[#842898]"
                  />
                  <div>
                    <p className="font-semibold">Inside Dhaka</p>
                    <p className="text-sm text-gray-600">BDT {DELIVERY_CHARGES.INSIDE_DHAKA}</p>
                  </div>
                </label>
                <label className="flex-1 flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all has-[:checked]:border-[#842898] has-[:checked]:bg-purple-50">
                  <input
                    type="radio"
                    name="deliveryArea"
                    value="outside"
                    checked={deliveryArea === "outside"}
                    onChange={(e) => setDeliveryArea(e.target.value as "outside")}
                    className="w-5 h-5 text-[#842898]"
                  />
                  <div>
                    <p className="font-semibold">Outside Dhaka</p>
                    <p className="text-sm text-gray-600">BDT {DELIVERY_CHARGES.OUTSIDE_DHAKA}</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {PAYMENT_METHODS.map((method) => (
                  <label
                    key={method.id}
                    className="flex flex-col items-center gap-2 p-4 border-2 rounded-lg cursor-pointer transition-all has-[:checked]:border-[#842898] has-[:checked]:bg-purple-50"
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-3xl">{method.logo}</span>
                    <span className="text-sm font-medium text-center">{method.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 bg-gray-100 rounded-md flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover rounded-md" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-bold text-[#842898]">
                        BDT {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>BDT {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span>BDT {deliveryCharge}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-[#842898]">BDT {total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#842898] text-white py-3 rounded-lg font-semibold hover:bg-[#6d1f7a] transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
