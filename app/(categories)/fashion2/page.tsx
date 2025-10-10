import FashionFAQ from "@/components/Fashion/FashionFAQ";
import FashionFooter from "@/components/Fashion/FashionFooter";
import FashionLayout from "@/components/Fashion/FashionLayout";
import { FashionStoreProvider } from "@/contexts/FashionStoreContext";
import { FAQ_ITEMS, FASHION2_ROUTES } from "@/data/fashion2/constants";

export const dynamic = "force-static";

export default function Fashion2Page() {
  const heroProps = {
    variant: 2 as const,
    slides: [
      {
        image: "/hero/fashion2.jpg",
        eyebrow: "MID VALUE RANGE SALE 2025!",
        title: "Fabulous Collections",
        cta: { label: "VIEW ALL", href: "#" },
      },
      {
        image: "/hero/1.png",
        eyebrow: "SUMMER COLLECTION 2025!",
        title: "Style Redefined",
        cta: { label: "SHOP NOW", href: "#" },
      },
      {
        image: "/hero/2.png",
        eyebrow: "NEW ARRIVALS!",
        title: "Trending Now",
        cta: { label: "EXPLORE", href: "#" },
      },
    ],
  };

  return (
    <FashionStoreProvider>
      <div className="bg-white">
        <FashionLayout
          variant={2}
          routes={FASHION2_ROUTES}
          heroProps={heroProps}
        />
        <FashionFAQ variant={2} items={FAQ_ITEMS} />
        <FashionFooter variant={2} />
      </div>
    </FashionStoreProvider>
  );
}
