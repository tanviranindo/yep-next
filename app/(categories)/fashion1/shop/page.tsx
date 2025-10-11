import { FashionLayout, FashionFooter } from "@/components/Fashion";
import { FASHION1_ROUTES } from "@/data/fashion1/constants";

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <FashionLayout variant={1} routes={FASHION1_ROUTES} />
      <FashionFooter variant={1} />
    </div>
  );
}