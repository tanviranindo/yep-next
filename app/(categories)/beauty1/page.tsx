import BeautyFAQ from "@/components/Beauty/BeautyFAQ";
import BeautyFooter from "@/components/Beauty/BeautyFooter";
import BeautyLayout from "@/components/Beauty/BeautyLayout";
import { FAQ_ITEMS, BEAUTY1_ROUTES } from "@/data/beauty1/constants";

export const dynamic = "force-dynamic";

export default function Beauty1Page() {
  const heroProps = {
    variant: 1 as const,
    eyebrow: "LATEST COLLECTIONS OF",
    sublabel: "Spring 2025",
    title: "DISCOVER YOUR GLAMOUR",
    heroImage: "/hero/main.png",
    thumbnails: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
    cta: { label: "Explore →", href: "#" },
    ticker: [
      "Glow with Glamour",
      "Radiance Redefined",
      "Beauty Unleashed",
      "Confidence in Every Product",
    ],
    socialIcons: [
      { icon: "f", href: "#" },
      { icon: "✈", href: "#" },
      { icon: "📷", href: "#" },
      { icon: "●", href: "#" },
    ],
    productCarousel: {
      title: "RADIANT GLOW SERUM",
      description:
        "Discover beauty products that enhance your natural glow. From skincare essentials to makeup must-haves.",
      cta: { label: "VIEW COLLECTION", href: "#" },
      images: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
    },
  };

  return (
    <div className="bg-white flex flex-col min-h-screen" id="faq">
      <main className="flex-grow">
        <BeautyLayout
          variant={1}
          routes={BEAUTY1_ROUTES}
          heroProps={heroProps}
        />
        <BeautyFAQ variant={1} items={FAQ_ITEMS} columns={2} />
      </main>
      <BeautyFooter variant={1} />
    </div>
  );
}
