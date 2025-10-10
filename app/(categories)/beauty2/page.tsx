import Fashion2FAQ from "@/components/FAQ/Fashion2FAQ";
import InsoleFooter from "@/components/Footer/InsoleFooter";
import FashionUI2 from "@/components/Layout/FashionUI2";

export const dynamic = "force-static";

export default function Beauty2Page() {
  const faqItems = [
    {
      q: "What is your return policy?",
      a: "We offer a 30-day return policy for all unworn items with original tags. Simply contact our customer service team to initiate a return.",
    },
    {
      q: "How long does shipping take?",
      a: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location.",
    },
    {
      q: "How can I track my order?",
      a: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your delivery.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and various digital payment methods.",
    },
    {
      q: "Are your products authentic?",
      a: "Yes, all our jewelry is 100% authentic and comes with a certificate of authenticity.",
    },
  ];
  return (
    <div className="bg-white">
      <FashionUI2 />
      <Fashion2FAQ items={faqItems} />
      <InsoleFooter />
    </div>
  );
}
