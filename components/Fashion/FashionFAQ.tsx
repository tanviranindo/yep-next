"use client";

import { useState } from "react";

export type FashionFAQVariant = 1 | 2;

export interface FAQItem {
  q: string;
  a: string;
}

interface FashionFAQProps {
  variant: FashionFAQVariant;
  items: Array<{ q: string; a: string }>;
  columns?: 1 | 2;
}

/**
 * FashionFAQ - Unified component for Fashion FAQ variants
 *
 * Variant 1: Server-rendered collapsible FAQ using <details> (Fashion Studio)
 * Variant 2: Client component FAQ with contact form and state (Insole)
 */
export default function FashionFAQ({ variant, items, columns = 2 }: FashionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (variant === 2) {
    // Variant 2: Fashion2 / Insole FAQ with contact form
    return (
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900">
            Frequently asked questions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - FAQ List */}
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">
                      {item.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Type Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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

  // Variant 1: Fashion Studio FAQ with details/summary
  const perCol = Math.ceil(items.length / columns);
  const cols: FAQItem[][] = Array.from({ length: columns }).map((_, i) =>
    items.slice(i * perCol, (i + 1) * perCol)
  );

  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-10 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 uppercase tracking-wide">
        FAQ
      </h2>
      <div
        className={`grid gap-4 ${
          columns === 2 ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {cols.map((col, i) => (
          <div key={i} className="space-y-2">
            {col.map((it, idx) => (
              <details
                key={idx}
                className="group border border-gray-200 bg-white"
              >
                <summary className="list-none cursor-pointer text-sm md:text-base font-semibold flex items-center gap-2 pr-4 py-4 px-4 text-gray-900 hover:bg-gray-50 transition-colors">
                  <span className="flex-1">{`${String(i * perCol + idx + 1).padStart(2, "0")}. ${
                    it.q
                  }`}</span>
                  <span className="text-gray-600 font-normal text-xl group-open:hidden flex-shrink-0">
                    +
                  </span>
                  <span className="text-gray-600 font-normal text-xl hidden group-open:inline flex-shrink-0">
                    −
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm md:text-base text-gray-600 leading-relaxed">{it.a}</div>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
