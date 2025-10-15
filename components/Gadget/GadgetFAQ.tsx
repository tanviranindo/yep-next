"use client";

import {
  ChevronDown,
  ChevronUp,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

export type GadgetFAQVariant = 1 | 2;

export interface FAQItem {
  q: string;
  a: string;
}

export interface GadgetFAQV1Props {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface GadgetFAQV2Props {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  contactMethods?: Array<{
    icon: "phone" | "chat" | "email" | "support";
    title: string;
    description: string;
    action: string;
  }>;
  className?: string;
}

interface GadgetFAQProps {
  variant: GadgetFAQVariant;
  faqProps?: GadgetFAQV1Props | GadgetFAQV2Props;
  // Legacy props for backward compatibility
  items?: FAQItem[];
  columns?: 1 | 2;
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * GadgetFAQ - Unified component for Gadget FAQ variants
 *
 * Variant 1: Collapsible FAQ list with tech support CTA (Gadget Store)
 * Variant 2: FAQ with tech support methods sidebar (TechHub)
 */
export default function GadgetFAQ({
  variant,
  faqProps,
  // Legacy props
  items: legacyItems,
  columns: legacyColumns,
  title: legacyTitle,
  subtitle: legacySubtitle,
  className: legacyClassName,
}: GadgetFAQProps) {
  // Merge legacy props with faqProps for backward compatibility
  const mergedProps = {
    ...faqProps,
    ...(legacyItems ? { items: legacyItems } : {}),
    ...(legacyTitle ? { title: legacyTitle } : {}),
    ...(legacySubtitle ? { subtitle: legacySubtitle } : {}),
    ...(legacyClassName ? { className: legacyClassName } : {}),
  };

  if (variant === 2) {
    // Variant 2: TechHub FAQ with tech support methods
    const {
      items = [
        {
          q: "What is your warranty policy?",
          a: "All our gadgets come with a 1-year manufacturer warranty. Extended warranty options are available for premium devices. We also offer 30-day return policy for unopened items.",
        },
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 2-3 business days within Dhaka and 4-5 days outside Dhaka. Express delivery is available for urgent orders with same-day dispatch.",
        },
        {
          q: "Do you offer technical support?",
          a: "Yes, we provide comprehensive technical support for all our products. Our expert team is available via phone, chat, and email to help with setup, troubleshooting, and maintenance.",
        },
        {
          q: "Are your products authentic?",
          a: "All our products are 100% authentic and sourced directly from authorized distributors. We provide authenticity certificates and offer money-back guarantee if any product is found to be counterfeit.",
        },
      ],
      title = "Need Tech Support? We're Here to Help!",
      subtitle = "Get expert assistance for all your gadget needs",
      contactMethods = [
        {
          icon: "phone",
          title: "Call Support",
          description: "Mon-Fri 9AM-8PM",
          action: "+880 15673 42557",
        },
        {
          icon: "chat",
          title: "Live Chat",
          description: "Instant tech support",
          action: "Start Chat",
        },
        {
          icon: "email",
          title: "Email Support",
          description: "Detailed technical help",
          action: "support@techhub.com",
        },
        {
          icon: "support",
          title: "Tech Center",
          description: "Visit our service center",
          action: "Find Location",
        },
      ],
      className = "",
    } = (faqProps || {}) as GadgetFAQV2Props;

    const getContactIcon = (icon: string) => {
      switch (icon) {
        case "phone":
          return <Phone size={32} />;
        case "chat":
          return <MessageCircle size={32} />;
        case "email":
          return <Mail size={32} />;
        case "support":
          return <Headphones size={32} />;
        default:
          return <Phone size={32} />;
      }
    };

    return (
      <section
        className={`py-16 bg-gradient-to-b from-blue-50 to-white ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-gray-600 text-lg">{subtitle}</p>
                )}
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white flex-shrink-0">
                        {getContactIcon(method.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {method.description}
                        </p>
                        <a
                          href={
                            method.icon === "phone"
                              ? `tel:${method.action}`
                              : method.icon === "email"
                              ? `mailto:${method.action}`
                              : "#"
                          }
                          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                        >
                          {method.action}
                          <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - FAQ Cards */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Tech Questions
                </h3>
                <p className="text-gray-600">
                  Frequently asked technical questions
                </p>
              </div>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center text-sm font-bold">
                        Q
                      </span>
                      <span>{item.q}</span>
                    </h4>
                    <div className="pl-11">
                      <p className="text-gray-700 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Still Need Technical Help?
            </h3>
            <p className="mb-6 text-white/90">
              Our expert technical support team is ready to assist you with any
              gadget-related questions
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg">
              Contact Tech Support
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Variant 1: Gadget Store FAQ with collapsible list
  const {
    items = [
      {
        q: "How do I place an order?",
        a: "Browse our gadget collection, add items to your cart, and proceed to checkout. You can track your order status through our Track Order page after placing your order.",
      },
      {
        q: "What are the shipping options?",
        a: "We offer standard shipping within Dhaka (2-3 business days) and outside Dhaka (4-5 business days). Express delivery is available for urgent orders with additional charges.",
      },
      {
        q: "What is your return policy?",
        a: "We accept returns within 7 days of delivery for unopened gadgets. Items must be in original condition with all packaging and accessories intact. Contact customer service to initiate a return.",
      },
      {
        q: "Do you offer technical support?",
        a: "Yes, we provide comprehensive technical support for all our products. Our expert team is available via phone, chat, and email to help with setup, troubleshooting, and maintenance.",
      },
    ],
    title = "Frequently Asked Questions",
    subtitle = "Find answers to common questions about our gadgets and services",
    className = "",
  } = (faqProps || {}) as GadgetFAQV1Props;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-16 bg-gradient-to-b from-white to-blue-50 ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
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
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={20} className="text-blue-600" />
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
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Contact Tech Support
          </button>
        </div>
      </div>
    </section>
  );
}
