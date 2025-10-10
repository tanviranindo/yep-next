import { FashionFooter } from "@/components/Footer";
import { FashionNavbar } from "@/components/Navbar";
import FashionShopLayout from "@/components/Layout/FashionShopLayout";

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <FashionNavbar />
      <main className="flex-grow">
        <FashionShopLayout />
      </main>
      <FashionFooter />
    </div>
  );
}