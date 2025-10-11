import { FashionFooter, FashionLayout } from "@/components/Fashion";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";
import { fashion2Products } from "@/data/fashion2/products";

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <FashionLayout
        variant={2}
        routes={FASHION2_ROUTES}
        products={fashion2Products}
      />
      <FashionFooter variant={2} />
    </div>
  );
}
