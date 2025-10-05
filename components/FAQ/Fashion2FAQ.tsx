"use client";

import { useState } from "react";

export interface Fashion2FAQItem {
  q: string;
  a: string;
}

export default function Fashion2FAQ({ items }: { items: Fashion2FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900">
          Frequently asked questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - FAQ List */}
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === idx && (
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 md:p-8 border border-gray-200">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <textarea
                  placeholder="Type Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4B896] text-white py-3 font-semibold uppercase tracking-wider hover:bg-[#C4A886] transition-colors"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
