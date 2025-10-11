"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export interface BeautyFAQV1Props {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function BeautyFAQVariant1({
  items = [
    {
      q: "How do I place an order?",
      a: "Browse our beauty collection, add items to your cart, and proceed to checkout. You can track your order status through our Track Order page after placing your order.",
    },
    {
      q: "What are the shipping options?",
      a: "We offer standard shipping within Dhaka (3-5 business days) and outside Dhaka (5-7 business days). Express delivery is available for urgent orders with additional charges.",
    },
    {
      q: "What is your return policy?",
      a: "We accept returns within 7 days of delivery for unopened beauty products. Items must be in original condition with seals intact. Contact customer service to initiate a return.",
    },
    {
      q: "How do refunds work?",
      a: "Refunds are processed within 7-14 business days after we receive and inspect the returned item. The amount will be credited to your original payment method.",
    },
  ],
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our products and services",
  className = "",
}: BeautyFAQV1Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 bg-gradient-to-b from-white to-purple-50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2>
          {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.q}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#842898]/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-[#842898]" />
                  ) : (
                    <ChevronDown size={20} className="text-[#842898]" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-[#842898] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6d1f7a] transition-colors shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
