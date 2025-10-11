"use client";

import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { FAQ_ITEMS, FASHION2_ROUTES } from "@/data/fashion2/constants";
import Link from "next/link";
import { useState } from "react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="w-full py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link
                href={FASHION2_ROUTES.HOME}
                className="text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <span className="text-gray-400">→</span>
              <span className="text-[#D4B896] font-medium">FAQ</span>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our jewelry collection,
              shipping, returns, and more.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.q}
                  </h3>
                  <div
                    className={`w-6 h-6 flex items-center justify-center transition-transform ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-[#D4B896] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Please get in touch with
              our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@insole.com"
                className="px-8 py-3 bg-white text-[#D4B896] font-semibold rounded-md hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:+8801234567890"
                className="px-8 py-3 bg-white/20 text-white font-semibold rounded-md hover:bg-white/30 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <FashionFooter variant={2} />
    </div>
  );
}
