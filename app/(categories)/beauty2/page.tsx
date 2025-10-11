import BeautyFAQ from "@/components/Beauty/BeautyFAQ";
import BeautyFooter from "@/components/Beauty/BeautyFooter";
import BeautyLayout from "@/components/Beauty/BeautyLayout";
import { FAQ_ITEMS, BEAUTY2_ROUTES } from "@/data/beauty2/constants";

export const dynamic = "force-dynamic";

export default function Beauty2Page() {
  const heroProps = {
    variant: 2 as const,
    eyebrow: "NATURAL BEAUTY COLLECTION",
    sublabel: "Spring 2025",
    title: "EMBRACE NATURAL ELEGANCE",
    heroImage: "/hero/main.png",
    thumbnails: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
    cta: { label: "Explore →", href: "#" },
    ticker: [
      "Natural Beauty",
      "Organic Essentials",
      "Pure Radiance",
      "Nature's Best",
    ],
    socialIcons: [
      { icon: "f", href: "#" },
      { icon: "✈", href: "#" },
      { icon: "📷", href: "#" },
      { icon: "●", href: "#" },
    ],
    productCarousel: {
      title: "ORGANIC GLOW OIL",
      description:
        "Discover natural beauty products that celebrate your authentic self. From organic skincare to eco-friendly makeup.",
      cta: { label: "VIEW COLLECTION", href: "#" },
      images: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
    },
  };

  return (
    <div className="bg-white flex flex-col min-h-screen" id="faq">
      <main className="flex-grow">
        <BeautyLayout
          variant={2}
          routes={BEAUTY2_ROUTES}
          heroProps={heroProps}
        />
        <BeautyFAQ variant={2} items={FAQ_ITEMS} columns={2} />
      </main>
      <BeautyFooter variant={2} />
    </div>
  );
}
