"use client";

import { GadgetFooter, GadgetNavbar } from "@/components/Gadget";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import Link from "next/link";
import { useState } from "react";

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order tracking
    setOrderStatus({
      orderNumber: trackingNumber,
      status: "In Transit",
      estimatedDelivery: "Dec 25, 2024",
      timeline: [
        { status: "Order Placed", date: "Dec 20, 2024", completed: true },
        { status: "Processing", date: "Dec 21, 2024", completed: true },
        { status: "Shipped", date: "Dec 22, 2024", completed: true },
        { status: "In Transit", date: "Dec 23, 2024", completed: true },
        { status: "Out for Delivery", date: "Dec 25, 2024", completed: false },
        { status: "Delivered", date: "Dec 25, 2024", completed: false },
      ],
    });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <GadgetNavbar variant={1} routes={GADGET1_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-12 text-center border-b">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Track Your Order
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link
              href={GADGET1_ROUTES.HOME}
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-blue-600">Tracking</span>
          </div>
        </div>

        {/* Tracking Form */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-white border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Enter Tracking Number
            </h2>
            <form onSubmit={handleTrack} className="flex gap-4">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter your tracking number"
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Track Order
              </button>
            </form>
          </div>

          {/* Order Status */}
          {orderStatus && (
            <div className="bg-white border border-gray-200 p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Order #{orderStatus.orderNumber}
                </h3>
                <p className="text-gray-600">
                  Current Status:{" "}
                  <span className="font-semibold text-blue-600">
                    {orderStatus.status}
                  </span>
                </p>
                <p className="text-gray-600">
                  Estimated Delivery:{" "}
                  <span className="font-semibold">
                    {orderStatus.estimatedDelivery}
                  </span>
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {orderStatus.timeline.map((item: any, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.completed
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {item.completed ? "✓" : index + 1}
                      </div>
                      {index < orderStatus.timeline.length - 1 && (
                        <div
                          className={`w-0.5 h-12 ${
                            item.completed ? "bg-blue-600" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold ${
                          item.completed ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {item.status}
                      </h4>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <GadgetFooter variant={1} />
    </div>
  );
}
