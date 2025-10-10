import FAQVariant1 from "@/components/FAQ/variant-1";
import { FashionFooter } from "@/components/Footer";
import FashionUI1 from "@/components/Layout/FashionUI1";
import { FAQ_ITEMS } from "@/data/fashion1/constants";

export const dynamic = "force-static";

export default function FashionPage() {
  return (
    <div className="bg-white" id="faq">
      <FashionUI1 />
      <FAQVariant1 items={FAQ_ITEMS} columns={2} />
      <FashionFooter />
    </div>
  );
}
