import FAQVariant1 from "@/components/FAQ/variant-1";
import { FashionFooter } from "@/components/Footer";
import FashionUI1 from "@/components/Layout/FashionUI1";
import { FAQ_ITEMS } from "@/data/fashion1/constants";

export const dynamic = "force-dynamic";

export default function FashionPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen" id="faq">
      <main className="flex-grow">
        <FashionUI1 />
        <FAQVariant1 items={FAQ_ITEMS} columns={2} />
      </main>
      <FashionFooter />
    </div>
  );
}
