import { FashionFooter, FashionNavbar } from "@/components/Fashion";
import { FASHION2_ROUTES } from "@/data/fashion2/constants";

export default function Error404Page() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FashionNavbar variant={2} routes={FASHION2_ROUTES} />

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-[120px] md:text-[180px] font-bold text-[#D4B896] leading-none mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-[#D4B896] mx-auto"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Don't
              worry, let's get you back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={FASHION2_ROUTES.HOME}
              className="px-8 py-4 bg-[#D4B896] text-white font-semibold rounded-md hover:bg-[#C4A886] transition-colors"
            >
              Go Home
            </a>
            <a
              href={FASHION2_ROUTES.SHOP}
              className="px-8 py-4 bg-white border-2 border-[#D4B896] text-[#D4B896] font-semibold rounded-md hover:bg-[#D4B896] hover:text-white transition-colors"
            >
              Browse Jewelry
            </a>
          </div>

          {/* Help Text */}
          <div className="mt-12 text-sm text-gray-500">
            <p>
              Need help?{" "}
              <a
                href={FASHION2_ROUTES.FAQ}
                className="text-[#D4B896] hover:underline"
              >
                Visit our FAQ
              </a>{" "}
              or{" "}
              <a
                href="mailto:support@insole.com"
                className="text-[#D4B896] hover:underline"
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      </div>

      <FashionFooter variant={2} />
    </div>
  );
}
