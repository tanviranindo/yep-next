import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";

export default function Error404Page() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-[150px] md:text-[200px] font-bold text-gray-900 leading-none">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Page You Are Looking For Is Not Found.
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">
            We're Really Sorry But We Can't Seem To Find The Page You Were Looking
            For.
          </p>
          <a
            href="/"
            className="inline-block px-12 py-4 bg-[#D4B896] text-white hover:bg-[#C4A886] transition-colors uppercase tracking-wider"
          >
            BACK TO HOME
          </a>
        </div>
      </div>

      <FashionFooter variant={2} />
    </div>
  );
}
