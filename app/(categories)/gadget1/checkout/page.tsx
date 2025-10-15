"use client";

import { GadgetFooter, GadgetNavbar } from "@/components/Gadget";
import { useGadgetStore } from "@/contexts/GadgetStoreContext";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useGadgetStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "cod",
  });

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shippingCost = 100;
  const total = cartTotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    alert("Order placed successfully!");
    clearCart();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <GadgetNavbar variant={1} routes={GADGET1_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-12 text-center border-b">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Checkout</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link
              href={GADGET1_ROUTES.HOME}
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <Link
              href={GADGET1_ROUTES.CART}
              className="text-gray-600 hover:text-gray-900"
            >
              Cart
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-blue-600">Checkout</span>
          </div>
        </div>

        {/* Checkout Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Billing Details */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Billing Details
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Your Order
                  </h3>

                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-700">
                          {item.name} × {item.quantity || 1}
                        </span>
                        <span className="text-gray-900 font-medium">
                          BDT {(item.price * (item.quantity || 1)).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>BDT {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span>BDT {shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-gray-900 font-bold text-lg">
                      <span>Total</span>
                      <span>BDT {total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Payment Method
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === "cod"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          Cash on Delivery
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === "card"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          Credit/Debit Card
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="mobile"
                          checked={formData.paymentMethod === "mobile"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          Mobile Banking
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <GadgetFooter variant={1} />
    </div>
  );
}
