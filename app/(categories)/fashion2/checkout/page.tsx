"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import {
  DELIVERY_CHARGES,
  FASHION2_ROUTES,
  PAYMENT_METHODS,
} from "@/data/fashion2/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, cartTotal, setCurrentOrder } = useFashionStore();
  const router = useRouter();

  const [usePersonalAsBilling, setUsePersonalAsBilling] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);
  const [deliveryArea, setDeliveryArea] = useState<"inside" | "outside">(
    "inside"
  );
  const [selectedPayment, setSelectedPayment] = useState<string>("cod");
  const [showCardDetails, setShowCardDetails] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Bangladesh",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "Dhaka",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingPostalCode: "",
    cardholderName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const deliveryCharge =
      deliveryArea === "inside"
        ? DELIVERY_CHARGES.INSIDE_DHAKA
        : DELIVERY_CHARGES.OUTSIDE_DHAKA;
    const total = cartTotal + deliveryCharge;

    const order = {
      orderNumber: `ORD-${Date.now()}`,
      id: `ORD-${Date.now()}`,
      items: cart,
      total,
      deliveryCharge,
      subtotal: cartTotal,
      status: "pending",
      date: new Date().toLocaleDateString(),
      createdAt: new Date().toISOString(),
      paymentMethod:
        selectedPayment === "cod" ? "Cash on Delivery" : "Credit Card",
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      },
      customerInfo: {
        ...formData,
        createAccount,
        usePersonalAsBilling,
        deliveryArea,
        paymentMethod: selectedPayment,
      },
      shipping: {
        address: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
      },
      payment: {
        method: selectedPayment,
        status: selectedPayment === "cod" ? "pending" : "completed",
      },
    };

    setCurrentOrder(order);
    router.push("/fashion2/order-confirmed");
  };

  const deliveryCharge =
    deliveryArea === "inside"
      ? DELIVERY_CHARGES.INSIDE_DHAKA
      : DELIVERY_CHARGES.OUTSIDE_DHAKA;
  const total = cartTotal + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <FashionNavbar variant={2} routes={FASHION2_ROUTES} />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-6">
              Add some items to your cart before checking out.
            </p>
            <Link
              href={FASHION2_ROUTES.SHOP}
              className="inline-block px-8 py-3 bg-[#D4B896] text-white font-semibold rounded-md hover:bg-[#C4A886] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <FashionFooter variant={2} />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Checkout
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
                href={FASHION2_ROUTES.CART}
                className="text-gray-600 hover:text-gray-900"
              >
                Cart
              </Link>
              <span className="text-gray-400">→</span>
              <span className="text-[#D4B896] font-medium">Checkout</span>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Details */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Personal Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company name (optional)
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country / Region *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                      >
                        <option>Bangladesh</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street address *
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        placeholder="House number and street name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent mb-2"
                      />
                      <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                        >
                          <option>Dhaka</option>
                          <option>Chittagong</option>
                          <option>Sylhet</option>
                          <option>Rajshahi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Delivery Options
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="inside"
                        name="deliveryArea"
                        value="inside"
                        checked={deliveryArea === "inside"}
                        onChange={(e) =>
                          setDeliveryArea(
                            e.target.value as "inside" | "outside"
                          )
                        }
                        className="w-4 h-4 text-[#D4B896] focus:ring-[#D4B896]"
                      />
                      <label
                        htmlFor="inside"
                        className="text-sm font-medium text-gray-700"
                      >
                        Inside Dhaka - BDT {DELIVERY_CHARGES.INSIDE_DHAKA}
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="outside"
                        name="deliveryArea"
                        value="outside"
                        checked={deliveryArea === "outside"}
                        onChange={(e) =>
                          setDeliveryArea(
                            e.target.value as "inside" | "outside"
                          )
                        }
                        className="w-4 h-4 text-[#D4B896] focus:ring-[#D4B896]"
                      />
                      <label
                        htmlFor="outside"
                        className="text-sm font-medium text-gray-700"
                      >
                        Outside Dhaka - BDT {DELIVERY_CHARGES.OUTSIDE_DHAKA}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Payment Method
                  </h2>
                  <div className="space-y-4">
                    {PAYMENT_METHODS.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="radio"
                          id={method.id}
                          name="paymentMethod"
                          value={method.id}
                          checked={selectedPayment === method.id}
                          onChange={(e) => {
                            setSelectedPayment(e.target.value);
                            setShowCardDetails(e.target.value === "card");
                          }}
                          className="w-4 h-4 text-[#D4B896] focus:ring-[#D4B896]"
                        />
                        <label
                          htmlFor={method.id}
                          className="text-sm font-medium text-gray-700"
                        >
                          {method.name}
                        </label>
                      </div>
                    ))}
                  </div>

                  {showCardDetails && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardholderName"
                          value={formData.cardholderName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVC *
                          </label>
                          <input
                            type="text"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleInputChange}
                            placeholder="123"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Notes */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Order Notes
                  </h2>
                  <textarea
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Notes about your order, e.g. special instructions for delivery"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <button
                    type="submit"
                    className="w-full bg-[#D4B896] text-white py-4 px-6 font-semibold text-lg rounded-md hover:bg-[#C4A886] transition-colors"
                  >
                    Place Order - BDT {total.toFixed(2)}
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Order Summary
                </h3>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-semibold text-[#D4B896]">
                          BDT {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Subtotal</span>
                    <span>BDT {cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Shipping</span>
                    <span>BDT {deliveryCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Tax</span>
                    <span>BDT 0.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span>BDT {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FashionFooter variant={2} />
    </div>
  );
}
