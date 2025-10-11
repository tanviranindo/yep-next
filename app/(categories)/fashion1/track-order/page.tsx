"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { FASHION1_ROUTES } from "@/data/fashion1/constants";
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
          <button className="px-6 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
            To Pay
          </button>
        );
      case "To Review":
        return (
          <button className="px-6 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
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
          <button className="px-6 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
            {status}
          </button>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <FashionNavbar variant={1} routes={FASHION1_ROUTES} />

      {/* Page Header */}
      <div className="w-full py-12 text-center border-b">
        <h1 className="text-4xl font-bold text-gray-900">Track Order</h1>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Order ID"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
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
          <button className="px-12 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Orders List</h2>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 border-b overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 font-medium whitespace-nowrap ${
                activeFilter === filter
                  ? "border-b-2 border-black text-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col md:flex-row md:items-center gap-6 p-6 border border-gray-200"
            >
              <img
                src={order.image}
                alt={order.product}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {order.product}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  BDT {order.price.toFixed(2)}
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-600 mb-3">Qty: {order.quantity}</p>
                {getStatusButton(order.status)}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-10 h-10 flex items-center justify-center bg-black text-white">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-gray-900">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-gray-900">
            3
          </button>
          <span className="w-10 h-10 flex items-center justify-center text-gray-400">
            ...
          </span>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-gray-900">
            10
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-gray-900">
            →
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-gray-900">
            »
          </button>
        </div>
      </div>

      {/* New Collections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          New Collections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {newCollections.map((collection, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 mb-3 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-center">
                {collection.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <FashionFooter variant={1} />
    </div>
  );
}
