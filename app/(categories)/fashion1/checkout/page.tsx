"use client";

import { FashionFooter } from "@/components/Footer";
import { FashionNavbar } from "@/components/Navbar";
import { useFashionStore } from "@/contexts/FashionStoreContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PAYMENT_METHODS, DELIVERY_CHARGES, FASHION1_ROUTES } from "@/data/fashion1/constants";

export default function CheckoutPage() {
  const { cart, cartTotal, setCurrentOrder } = useFashionStore();
  const router = useRouter();

  const [usePersonalAsBilling, setUsePersonalAsBilling] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);
  const [deliveryArea, setDeliveryArea] = useState<"inside" | "outside">("inside");
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const deliveryCharge = deliveryArea === "inside" ? DELIVERY_CHARGES.INSIDE_DHAKA : DELIVERY_CHARGES.OUTSIDE_DHAKA;
    const order = {
      orderNumber: Math.floor(Math.random() * 900000 + 100000).toString(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      items: cart,
      subtotal: cartTotal,
      deliveryCharge,
      total: cartTotal + deliveryCharge,
      paymentMethod: selectedPayment.toUpperCase(),
      customerInfo: {
        ...formData,
        createAccount,
        usePersonalAsBilling,
        deliveryArea,
        paymentMethod: selectedPayment,
      },
    };

    setCurrentOrder(order);
    router.push(FASHION1_ROUTES.REVIEW_ORDER);
  };


  return (
    <div className="bg-white min-h-screen">
      <FashionNavbar />

      {/* Page Header */}
      <div className="w-full py-12 text-center border-b">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Checkout</h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <span className="text-gray-400">→</span>
          <span className="text-red-500">Checkout</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Have a coupon?{" "}
            <a href="#" className="text-red-500 hover:underline">
              Click here to enter your code
            </a>
          </p>
        </div>

        {/* Personal Details */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Personal details</h2>
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
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
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
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
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
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country / Region *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            >
              <option>Bangladesh</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street address *
            </label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              placeholder="Bashundhara"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 mb-2"
            />
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
              placeholder="Apartment, suite, unit etc. (optional)"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Town / City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State *
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            >
              <option>Dhaka</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ZIP Code *
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>

          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={createAccount}
                onChange={(e) => setCreateAccount(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">What to create an account?</span>
            </label>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Additional information
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Order notes (optional)
            </label>
            <textarea
              rows={4}
              name="orderNotes"
              value={formData.orderNotes}
              onChange={handleInputChange}
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
          </div>
        </div>

        {/* Billing Details */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={usePersonalAsBilling}
                onChange={(e) => setUsePersonalAsBilling(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">
                Use personal details as billing address
              </span>
            </label>
          </div>

          {!usePersonalAsBilling && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Billing details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address line
                  </label>
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                    placeholder="P.o.Box 1223"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="billingCity"
                    value={formData.billingCity}
                    onChange={handleInputChange}
                    placeholder="Dhaka"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="billingState"
                    value={formData.billingState}
                    onChange={handleInputChange}
                    placeholder="Sonora"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal code
                  </label>
                  <input
                    type="text"
                    name="billingPostalCode"
                    value={formData.billingPostalCode}
                    onChange={handleInputChange}
                    placeholder="9090"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Select Delivery Area */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Select Delivery Area
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border border-gray-300 cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="delivery"
                value="inside"
                checked={deliveryArea === "inside"}
                onChange={(e) => setDeliveryArea("inside")}
                className="w-4 h-4"
              />
              <span className="text-gray-900">
                <span className="font-semibold">Inside Dhaka:</span> Delivery charge
                of BDT {DELIVERY_CHARGES.INSIDE_DHAKA}
              </span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-gray-300 cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="delivery"
                value="outside"
                checked={deliveryArea === "outside"}
                onChange={(e) => setDeliveryArea("outside")}
                className="w-4 h-4"
              />
              <span className="text-gray-900">
                <span className="font-semibold">Outside Dhaka:</span> Delivery charge
                of BDT {DELIVERY_CHARGES.OUTSIDE_DHAKA}
              </span>
            </label>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Payment methods</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {PAYMENT_METHODS.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => {
                  setSelectedPayment(method.id);
                  setShowCardDetails(method.requiresCardDetails);
                }}
                className={`px-6 py-3 border-2 transition-colors ${
                  selectedPayment === method.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {method.logo} {method.name}
              </button>
            ))}
          </div>

          {/* Card Details */}
          {showCardDetails && (
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Card details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder's name
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    placeholder="Seen on your card"
                    required={showCardDetails}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Seen on your card"
                    required={showCardDetails}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 bg-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expirity
                    </label>
                    <input
                      type="text"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      placeholder="20/29"
                      required={showCardDetails}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cardCvc"
                      value={formData.cardCvc}
                      onChange={handleInputChange}
                      placeholder="000"
                      required={showCardDetails}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Proceed To Checkout
          </button>
        </div>
      </form>

      <FashionFooter />
    </div>
  );
}
