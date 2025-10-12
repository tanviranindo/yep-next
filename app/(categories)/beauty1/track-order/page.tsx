"use client";

import { BeautyFooter, BeautyNavbar } from "@/components/Beauty";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

const mockOrders = [
  {
    id: "ORD-2023-001",
    product: "Diamond Drop Lipstick",
    image:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 1199.99,
    quantity: 1,
    status: "To Pay",
  },
  {
    id: "ORD-2023-002",
    product: "Flawless Matte Foundation",
    image:
      "https://images.pexels.com/photos/3785706/pexels-photo-3785706.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 899.99,
    quantity: 1,
    status: "To Ship",
  },
  {
    id: "ORD-2023-003",
    product: "Liquid Sheer",
    image:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 1399.99,
    quantity: 2,
    status: "To Review",
  },
  {
    id: "ORD-2023-004",
    product: "Blue Cream",
    image:
      "https://images.pexels.com/photos/3785815/pexels-photo-3785815.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 149.99,
    quantity: 1,
    status: "Completed",
  },
  {
    id: "ORD-2023-005",
    product: "NIOR Red Carpet Flawless Matte Foundation",
    image:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 1299.99,
    quantity: 1,
    status: "Completed",
  },
];

const youMayLike = [
  {
    title: "Medivale Face Cream",
    price: 149.99,
    image:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Face Tint",
    price: 1249.99,
    image:
      "https://images.pexels.com/photos/3785706/pexels-photo-3785706.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Cloud-Eash Toner",
    price: 1049.99,
    image:
      "https://images.pexels.com/photos/3785815/pexels-photo-3785815.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Lili Night Cream",
    price: 499.99,
    image:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400",
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
          <button className="px-6 py-2 border border-[#842898] text-gray-900 hover:bg-[#842898] hover:text-white transition-colors rounded">
            To Pay
          </button>
        );
      case "To Ship":
        return (
          <button className="px-6 py-2 border border-[#842898] text-gray-900 hover:bg-[#842898] hover:text-white transition-colors rounded">
            To Ship
          </button>
        );
      case "To Review":
        return (
          <button className="px-6 py-2 border border-[#842898] text-gray-900 hover:bg-[#842898] hover:text-white transition-colors rounded">
            To Review
          </button>
        );
      case "Completed":
        return (
          <button className="px-6 py-2 bg-gray-200 text-gray-700 cursor-not-allowed rounded">
            Completed
          </button>
        );
      default:
        return (
          <button className="px-6 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded">
            {status}
          </button>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <BeautyNavbar variant={1} routes={BEAUTY1_ROUTES} />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href={BEAUTY1_ROUTES.HOME} className="hover:text-[#842898]">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">My Orders</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="w-full py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Track Your Recent Order</h1>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#842898]" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Order ID"
              className="w-full pl-12 pr-4 py-3 border-b-2 border-[#842898] focus:outline-none focus:border-[#6d1f7a]"
            />
          </div>
          <button className="px-12 py-3 bg-[#842898] text-white hover:bg-[#6d1f7a] transition-colors rounded-full">
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
                  ? "border-b-2 border-[#842898] text-black"
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
              className="flex flex-col md:flex-row md:items-center gap-6 p-6 border border-gray-200 rounded-lg"
            >
              <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={order.image}
                  alt={order.product}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {order.product}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  BDT {order.price.toLocaleString()}
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
          <button className="w-10 h-10 flex items-center justify-center bg-[#842898] text-white rounded">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#842898] rounded">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#842898] rounded">
            3
          </button>
          <span className="w-10 h-10 flex items-center justify-center text-gray-400">
            ...
          </span>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#842898] rounded">
            10
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#842898] rounded">
            →
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:border-[#842898] rounded">
            »
          </button>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            You May Also Like
          </h2>
          <Link
            href={BEAUTY1_ROUTES.SHOP}
            className="text-[#842898] hover:text-[#6d1f7a] font-medium flex items-center gap-2"
          >
            View More →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {youMayLike.map((item, idx) => (
            <Link
              key={idx}
              href={BEAUTY1_ROUTES.SHOP}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-gray-100 mb-3 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-[#842898] font-bold">
                BDT {item.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <BeautyFooter variant={1} />
    </div>
  );
}
