import GadgetFAQ from "@/components/Gadget/GadgetFAQ";
import GadgetFooter from "@/components/Gadget/GadgetFooter";
import GadgetNavbar from "@/components/Gadget/GadgetNavbar";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";

export const dynamic = "force-dynamic";

export default function FAQPage() {
  const faqItems = [
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
    {
      q: "Are your products authentic?",
      a: "All our products are 100% authentic and sourced directly from authorized distributors. We provide authenticity certificates and offer money-back guarantee if any product is found to be counterfeit.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit/debit cards, mobile banking (bKash, Nagad, Rocket), and cash on delivery for orders within Bangladesh.",
    },
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <GadgetNavbar variant={1} routes={GADGET1_ROUTES} />
      <main className="flex-grow">
        <GadgetFAQ variant={1} items={faqItems} />
      </main>
      <GadgetFooter variant={1} />
    </div>
  );
}
