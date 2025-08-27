"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "PRODUCT DESCRIPTION" },
    { id: "reviews", label: "CLIENT REVIEW" },
    { id: "shipping", label: "SHIPPING POLICY" },
    { id: "custom", label: "CUSTOM TAB" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tab Navigation - Responsive Rectangular Design */}
      <div className="flex overflow-x-auto mb-8 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-6 py-3 text-sm font-medium border whitespace-nowrap flex-shrink-0 ${
              activeTab === tab.id
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:border-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          {activeTab === "description" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Item Features</h3>
                <p className="text-gray-600 mb-6">
                  This dress is crafted from soft, breathable fabric that keeps
                  you comfortable all day long. Designed with a flattering
                  silhouette and versatile styling, it's perfect for casual
                  outings or everyday wear. The lightweight material ensures
                  comfort, and easy care fabric makes it ideal to wear in any
                  condition.
                </p>

                {/* Two Column Layout for Material and Washing - like image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Material Texture */}
                  <div>
                    <h4 className="font-semibold mb-3">Material Texture</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 text-lg">✓</span>
                        <span>
                          Light, airy, and flowy with a soft sheer finish
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 text-lg">✓</span>
                        <span>Slightly crinkled, semi-sheer, and soft</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 text-lg">✓</span>
                        <span>Stretchy, smooth, and body-hugging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 text-lg">✓</span>
                        <span>Lightly textured with a soft sheen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 text-lg">✓</span>
                        <span>Crisp, breathable, and naturally textured</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 text-lg">✓</span>
                        <span>Lightweight netting with a structured feel</span>
                      </li>
                    </ul>
                  </div>

                  {/* Washing Instructions */}
                  <div>
                    <h4 className="font-semibold mb-3">Washing Instructions</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 text-lg">🧺</span>
                        <span>Machine wash upto 30°</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 text-lg">🚫</span>
                        <span>Do not bleach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 text-lg">🔧</span>
                        <span>Iron upto 110°</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 text-lg">🧼</span>
                        <span>Do not dry clean</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 text-lg">⚠️</span>
                        <span>Do not terrible wash</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-semibold mb-3 mt-6">Product Quality</h4>
                <p className="text-gray-600">
                  Crafted with attention to detail, this dress offers premium
                  quality in both fabric and finish. From the stitching to fit,
                  every element is designed for durability, comfort, and lasting
                  elegance. It's a piece you can wear with confidence — again
                  and again.
                </p>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Client review</h3>

              {/* Review - Updated to match image */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                    Z
                  </div>
                  <div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Zhon Abony - August 12, 2023
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  I recently purchased the Arino T-shirts and I'm thoroughly
                  impressed. The sound quality is exceptional, the wireless
                  connectivity is seamless, and the noise cancellation
                  technology is fantastic. Features: They're a bit pricey, but
                  well worth the investment. Highly recommend.
                </p>
              </div>

              {/* Review Form - Updated to match image */}
              <div className="space-y-4">
                <h4 className="font-semibold">Post your review</h4>
                <p className="text-sm text-gray-600">
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your rating *
                  </label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-gray-300 hover:text-yellow-400 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Write your review *
                  </label>
                  <Textarea
                    placeholder="Your review"
                    className="min-h-[120px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your name *
                    </label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your email *
                    </label>
                    <Input placeholder="Your email" type="email" />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="rounded mt-1"
                  />
                  <label htmlFor="save-info" className="text-sm text-gray-600">
                    By using this form you agree with the storage and handling
                    of your data by this website.
                  </label>
                </div>

                <Button className="bg-black text-white hover:bg-gray-800">
                  Submit
                </Button>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shipping Policy</h3>
              <p className="text-gray-600">
                Shipping information and policies will be displayed here.
              </p>
            </div>
          )}

          {activeTab === "custom" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Custom Tab</h3>
              <p className="text-gray-600">
                Custom tab content will be displayed here.
              </p>
            </div>
          )}
        </div>

        {/* Right side image */}
        <div className="hidden lg:block">
          <img
            src="/woman-in-black-dress-lifestyle-photo.png"
            alt="Product lifestyle"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
