import { BeautyLayout, BeautyFooter } from "@/components/Beauty";
import { BEAUTY2_ROUTES } from "@/data/beauty2/constants";

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <BeautyLayout variant={2} routes={BEAUTY2_ROUTES} />
      <BeautyFooter variant={2} />
    </div>
  );
}
