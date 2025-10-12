"use client";

import { BeautyFooter, BeautyNavbar } from "@/components/Beauty";
import { BEAUTY2_ROUTES, FAQ_ITEMS } from "@/data/beauty2/constants";
import Link from "next/link";
import BeautyFAQVariant2 from "@/components/Beauty/variants/faq/variant-2";

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <BeautyNavbar variant={2} routes={BEAUTY2_ROUTES} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-8">
          <Link href={BEAUTY2_ROUTES.HOME} className="hover:text-[#D4A574]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">FAQ</span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about NIKA natural beauty products, shipping, returns, and more.
          </p>
        </div>

        {/* FAQ Component */}
        <BeautyFAQVariant2
          items={FAQ_ITEMS}
          title="Have Questions? We Have Answers!"
          subtitle="Everything you need to know about our natural beauty products"
        />
      </div>

      <BeautyFooter variant={2} />
    </div>
  );
}
