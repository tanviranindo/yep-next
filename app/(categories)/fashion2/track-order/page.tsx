"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";
import { useState } from "react";

const mockOrders = [
  {
    id: "ORD-2023-001",
    product: "Ravendale Super High Waist Legging",
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
    price: 3500.0,
    quantity: 1,
    status: "To Pay",
  },
  {
    id: "ORD-2023-002",
    product: "Luxury Leather Handbag",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    price: 2500.0,
    quantity: 1,
    status: "To Pay",
  },
  {
    id: "ORD-2023-003",
    product: "Classic Bomber Jacket",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    price: 2500.0,
    quantity: 2,
    status: "To Review",
  },
  {
    id: "ORD-2023-004",
    product: "Little Black Dress",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    price: 2500.0,
    quantity: 1,
    status: "Completed",
  },
  {
    id: "ORD-2023-005",
    product: "Cashmere Scarf",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop",
    price: 2200.0,
    quantity: 1,
    status: "Completed",
  },
];

const newCollections = [
  {
    title: "Woolen Clothes",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
  },
  {
    title: "Over Coat",
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop",
  },
  {
    title: "Women Tops",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop",
  },
  {
    title: "Activewear",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
  },
  {
    title: "Women Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop",
  },
];

export default function TrackOrderPage() {
  const [searchId, setSearchId] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "To Pay", "To Ship", "To Receive", "To Review (146)"];

  const filteredOrders = mockOrders.filter((order) => {
    if (activeFilter === "All") return true;
    if (activeFilter.includes("To Review")) return order.status === "To Review";
    return order.status === activeFilter;
  });

  const getStatusButton = (status: string) => {
    switch (status) {
      case "To Pay":
        return (
          <button className="px-6 py-2 border border-[#D4B896] text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
            To Pay
          </button>
        );
      case "To Review":
        return (
          <button className="px-6 py-2 border border-[#D4B896] text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
            To Review
          </button>
        );
      case "Completed":
        return (
          <button className="px-6 py-2 bg-gray-200 text-gray-700 cursor-not-allowed">
            Completed
          </button>
        );
      default:
        return (
          <button className="px-6 py-2 border border-[#D4B896] text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
            {status}
          </button>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />

      {/* Page Header */}
      <div className="w-full py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Track Your Order
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your order ID to track the status of your order and get
            real-time updates
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Order Tracking
          </h2>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter your order ID (e.g., ORD-2023-001)"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="px-8 py-4 bg-[#D4B896] text-white font-semibold rounded-md hover:bg-[#C4A886] transition-colors">
              Track Order
            </button>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Your Orders</h2>
          <p className="text-gray-600">
            Showing {filteredOrders.length} orders
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? "border-b-2 border-[#D4B896] text-[#D4B896]"
                  : "text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {order.product}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Order ID: {order.id}</span>
                    <span>•</span>
                    <span>Qty: {order.quantity}</span>
                    <span>•</span>
                    <span className="font-semibold text-[#D4B896]">
                      BDT {order.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-end gap-3">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-2">Status</p>
                    {getStatusButton(order.status)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-10 h-10 flex items-center justify-center bg-[#D4B896] text-white rounded-md">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#D4B896] hover:text-[#D4B896] rounded-md transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#D4B896] hover:text-[#D4B896] rounded-md transition-colors">
            3
          </button>
          <span className="w-10 h-10 flex items-center justify-center text-gray-400">
            ...
          </span>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#D4B896] hover:text-[#D4B896] rounded-md transition-colors">
            10
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#D4B896] hover:text-[#D4B896] rounded-md transition-colors">
            →
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#D4B896] hover:text-[#D4B896] rounded-md transition-colors">
            »
          </button>
        </div>
      </div>

      {/* New Collections */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover New Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest jewelry collections and find your perfect
              pieces
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {newCollections.map((collection, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-center group-hover:text-[#D4B896] transition-colors">
                  {collection.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FashionFooter variant={2} />
    </div>
  );
}
