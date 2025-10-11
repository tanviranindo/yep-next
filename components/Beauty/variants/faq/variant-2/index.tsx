"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export interface BeautyFAQV2Props {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  contactMethods?: Array<{
    icon: "phone" | "chat" | "email";
    title: string;
    description: string;
    action: string;
  }>;
  className?: string;
}

export default function BeautyFAQVariant2({
  items = [
    {
      q: "Are your products natural?",
      a: "Yes, all our products are made with natural, science-backed ingredients that are gentle on your skin yet deliver powerful results.",
    },
    {
      q: "How long does shipping take?",
      a: "Standard shipping takes 3-5 business days within Dhaka and 5-7 days outside Dhaka. Express delivery is available for urgent orders.",
    },
    {
      q: "What is your return policy?",
      a: "We accept returns within 7 days of delivery for unopened products. Items must be in original condition with seals intact.",
    },
    {
      q: "Are products suitable for sensitive skin?",
      a: "Our products are dermatologically tested and suitable for all skin types, including sensitive skin. Check individual product descriptions for specific information.",
    },
  ],
  title = "Have Questions? We Have Answers!",
  subtitle = "Learn more about our natural beauty products",
  contactMethods = [
    {
      icon: "phone",
      title: "Call Us",
      description: "Mon-Fri 9AM-6PM",
      action: "+880 15673 42557",
    },
    {
      icon: "chat",
      title: "Live Chat",
      description: "Chat with our team",
      action: "Start Chat",
    },
    {
      icon: "email",
      title: "Email Us",
      description: "Reply within 24 hours",
      action: "hello@nika.beauty",
    },
  ],
  className = "",
}: BeautyFAQV2Props) {
  const getContactIcon = (icon: string) => {
    switch (icon) {
      case "phone":
        return <Phone size={32} />;
      case "chat":
        return <MessageCircle size={32} />;
      case "email":
        return <Mail size={32} />;
      default:
        return <Phone size={32} />;
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-b from-amber-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Methods */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2>
              {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#D4A574]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C89563] flex items-center justify-center text-white flex-shrink-0">
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
                        className="inline-flex items-center text-[#D4A574] font-semibold hover:text-[#C89563] transition-colors"
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
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Questions</h3>
              <p className="text-gray-600">Most frequently asked questions</p>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C89563] text-white flex items-center justify-center text-sm font-bold">
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
        <div className="mt-12 text-center bg-gradient-to-r from-[#D4A574] to-[#C89563] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Still Need Help?</h3>
          <p className="mb-6 text-white/90">
            Our customer support team is always here to assist you
          </p>
          <button className="bg-white text-[#D4A574] px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
