import { BeautyFAQ1 } from "@/components/FAQ";
import BeautyFooter from "@/components/Footer/BeautyFooter";
import BeautyUI1 from "@/components/Layout/BeautyUI1";

export const dynamic = "force-static";

export default function Beauty1Page() {
  const faqItems = [
    { q: "The Order", a: "Information about placing and modifying orders." },
    { q: "Shipping", a: "Standard and express shipping options explained." },
    {
      q: "Returns, Exchanges And Complaints",
      a: "How to return, exchange, or submit a complaint.",
    },
    { q: "Refund Policy", a: "Refund timeframes and eligibility." },
    { q: "Order Cancellation", a: "How to cancel before fulfillment." },
    { q: "Delivery Time", a: "Typical delivery windows by region." },
    { q: "Delivery Charge", a: "Cost breakdown and free shipping thresholds." },
    { q: "Track Order", a: "How to track parcels using your order ID." },
  ];
  return (
    <div className="bg-white">
      <BeautyUI1 />
      <BeautyFAQ1 items={faqItems} />
      <BeautyFooter />
    </div>
  );
}
