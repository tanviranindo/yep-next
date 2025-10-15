import GadgetFooter from "@/components/Gadget/GadgetFooter";
import GadgetLayout from "@/components/Gadget/GadgetLayout";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";

export const dynamic = "force-dynamic";

export default function ProductsPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <main className="flex-grow">
        <GadgetLayout variant={1} routes={GADGET1_ROUTES} />
      </main>
      <GadgetFooter variant={1} />
    </div>
  );
}
