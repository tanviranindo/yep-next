import FashionFAQ from "@/components/Fashion/FashionFAQ";
import FashionFooter from "@/components/Fashion/FashionFooter";
import FashionLayout from "@/components/Fashion/FashionLayout";
import { FashionStoreProvider } from "@/contexts/FashionStoreContext";
import { FAQ_ITEMS, FASHION1_ROUTES } from "@/data/fashion1/constants";

export const dynamic = "force-dynamic";

export default function FashionPage() {
  const heroProps = {
    variant: 1 as const,
    eyebrow: "LATEST COLLECTIONS OF",
    sublabel: "Summer 2025",
    title: "LET'S CREATE YOUR OWN Fashion Statement",
    heroImage: "/hero/main.png",
    thumbnails: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
    cta: { label: "Explore →", href: "#" },
    ticker: [
      "Fashion with a Flair",
      "Strut with Confidence",
      "Own Your Runway",
      "Chic, Classy & Confident",
    ],
    socialIcons: [
      { icon: "f", href: "#" },
      { icon: "✈", href: "#" },
      { icon: "📷", href: "#" },
      { icon: "●", href: "#" },
    ],
    productCarousel: {
      title: "OFANCE HALF SLEEVE SHIRT",
      description:
        "Discover fashion that fits your lifestyle. From casual looks to statement pieces.",
      cta: { label: "VIEW COLLECTION", href: "#" },
      images: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
    },
  };

  return (
    <FashionStoreProvider>
      <div className="bg-white flex flex-col min-h-screen" id="faq">
        <main className="flex-grow">
          <FashionLayout
            variant={1}
            routes={FASHION1_ROUTES}
            heroProps={heroProps}
          />
          <FashionFAQ variant={1} items={FAQ_ITEMS} columns={2} />
        </main>
        <FashionFooter variant={1} />
      </div>
    </FashionStoreProvider>
  );
}
