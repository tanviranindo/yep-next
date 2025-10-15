import { BeautyFooter, BeautyLayout } from "@/components/Beauty";
import { BEAUTY1_ROUTES } from "@/data/beauty1/constants";

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <BeautyLayout variant={1} routes={BEAUTY1_ROUTES} />
      <BeautyFooter variant={1} />
    </div>
  );
}
