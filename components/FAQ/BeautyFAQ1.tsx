"use client";

import { useState } from "react";

export interface BeautyFAQ1Item {
  q: string;
  a: string;
}

export default function BeautyFAQ1({ items }: { items: BeautyFAQ1Item[] }) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <section className="w-full bg-transparent py-12 md:py-16">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900 uppercase tracking-wide">
          FAQ
        </h2>
        <p className="max-w-3xl text-sm md:text-base leading-7 text-gray-600">
          We offer a wide range of skincare, makeup, haircare, wellness, and
          beauty tools from trusted global and local brands—carefully selected
          for quality, safety, and effectiveness.
        </p>

        <div className="mt-10 divide-y divide-gray-200 border-t border-b border-gray-200">
          {items.map((item, idx) => (
            <div key={idx} className="">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-gray-900 pr-6">
                  {item.q}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
                <div className="pb-6 text-sm md:text-base text-gray-600 leading-7">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
