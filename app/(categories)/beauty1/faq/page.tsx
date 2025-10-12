"use client";

import { BeautyFooter, BeautyNavbar } from "@/components/Beauty";
import { BEAUTY1_ROUTES, FAQ_ITEMS } from "@/data/beauty1/constants";
import Link from "next/link";
import BeautyFAQVariant1 from "@/components/Beauty/variants/faq/variant-1";

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <BeautyNavbar variant={1} routes={BEAUTY1_ROUTES} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-8">
          <Link href={BEAUTY1_ROUTES.HOME} className="hover:text-[#842898]">
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
            Find answers to common questions about GLAMOUR beauty products, shipping, returns, and more.
          </p>
        </div>

        {/* FAQ Component */}
        <BeautyFAQVariant1
          items={FAQ_ITEMS}
          title="Common Questions"
          subtitle="Everything you need to know about our beauty products and services"
        />
      </div>

      <BeautyFooter variant={1} />
    </div>
  );
}
