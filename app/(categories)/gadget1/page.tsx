import BrowseByCategory from "@/components/Gadget/BrowseByCategory";
import FeatureTilesGrid from "@/components/Gadget/FeatureTilesGrid";
import GadgetFooter from "@/components/Gadget/GadgetFooter";
import GadgetNavbar from "@/components/Gadget/GadgetNavbar";
import GadgetProductCard from "@/components/Gadget/GadgetProductCard";
import GadgetTabbedProducts from "@/components/Gadget/GadgetTabbedProducts";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import { gadgetProducts } from "@/data/gadget1/products";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Gadget1Page() {
  // Get product sections
  const newArrivalProducts = gadgetProducts.slice(0, 4);
  const secondRowProducts = gadgetProducts.slice(4, 8);
  const thirdRowProducts = gadgetProducts.slice(8, 12);
  const fourthRowProducts = gadgetProducts.slice(12, 16);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <GadgetNavbar variant={1} routes={GADGET1_ROUTES} />

      <main className="flex-grow">
        {/* Hero Section - iPhone 14 Pro */}
        <section
          className="relative h-[400px] md:h-[500px] overflow-hidden w-full"
          style={{
            background: "linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%)",
          }}
        >
          <div className="w-full h-full relative">
            {/* Left Arrow */}
            <Link
              href="#"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
            >
              <svg
                width="30"
                height="55"
                viewBox="0 0 30 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3417 54.6291C26.7196 54.632 26.1226 54.3842 25.6854 53.9416L0.685437 28.9416C-0.228479 28.0265 -0.228479 26.5441 0.685437 25.629L25.6854 0.629039C26.6089 -0.231458 28.048 -0.206067 28.9405 0.686471C29.833 1.57901 29.8584 3.01807 28.9979 3.94154L5.65419 27.2853L28.9979 50.6291C29.9118 51.5441 29.9118 53.0265 28.9979 53.9416C28.5608 54.3842 27.9638 54.632 27.3417 54.6291Z"
                  fill="white"
                />
              </svg>
            </Link>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
              {/* Left - Text */}
              <div className="flex flex-col justify-center items-center px-8 md:px-12 z-10">
                <div className="text-left">
                  <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-4">
                    Pro.Beyond.
                  </p>
                  <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    iPhone 14 Pro
                  </h1>
                  <p className="text-white/80 text-base mb-8 max-w-md leading-relaxed">
                    Created to change everything for the better. For everyone
                  </p>
                  <Link
                    href="/gadget1/products"
                    className="inline-block px-8 py-3 border border-white text-white text-sm font-medium rounded hover:bg-white hover:text-black transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Right - iPhone Image */}
              <div className="relative hidden md:flex items-center justify-center overflow-hidden">
                <Image
                  src="/gadgets/iphone.png"
                  alt="iPhone 14 Pro"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Right Arrow */}
            <Link
              href="#"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
            >
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.0001 10.1563C25.6222 10.1533 26.2192 10.4012 26.6563 10.8438L51.6564 35.8438C52.5703 36.7588 52.5703 38.2412 51.6564 39.1563L26.6563 64.1562C25.7329 65.0167 24.2938 64.9913 23.4013 64.0988C22.5087 63.2063 22.4834 61.7672 23.3438 60.8437L46.6876 37.5L23.3438 14.1563C22.4299 13.2412 22.4299 11.7588 23.3438 10.8438C23.781 10.4012 24.378 10.1533 25.0001 10.1563Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* Four Promotional Cards - Custom Grid Layout */}
        <section className="w-full bg-white">
          <div
            className="grid h-[560px]"
            style={{
              gridTemplateColumns: "1fr 1fr 2fr",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            {/* PlayStation 5 - div1: spans 2 columns */}
            <div
              className="bg-[#FFFFFF] overflow-hidden h-full flex items-center pr-4 pl-0 pt-4 pb-0"
              style={{ gridColumn: "span 2 / span 2" }}
            >
              <div className="flex-shrink-0 self-end ml-[-130px] mb-[-50px]">
                <Image
                  src="/gadgets/playstation.png"
                  alt="PlayStation 5"
                  width={450}
                  height={450}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-[49px] leading-[40px] font-normal text-black mb-2 font-manrope">
                  Playstation 5
                </h3>
                <p className="text-[14px] leading-[24px] font-normal text-gray-600 font-manrope">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </div>
            </div>

            {/* MacBook Air - div4: spans 2 rows, column 3 */}
            <div
              className="bg-[#EDEDED] overflow-hidden h-full flex items-center py-6 pl-10 relative"
              style={{
                gridRow: "span 2 / span 2",
                gridColumnStart: 3,
                gridRowStart: 1,
              }}
            >
              <div className="flex-shrink-0 max-w-sm px-6 z-10">
                <h3 className="text-[64px] leading-[56px] font-normal text-black mb-3 font-manrope">
                  Macbook
                  <br />
                  Air
                </h3>
                <p className="text-[14px] leading-[24px] font-normal text-gray-600 mb-4 font-manrope">
                  The new 15-inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.
                </p>
                <button className="px-10 py-2 border border-black text-black text-[12px] font-medium hover:bg-black hover:text-white transition-colors rounded-sm">
                  Shop Now
                </button>
              </div>
              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-0 py-6">
                <Image
                  src="/gadgets/macbook.png"
                  alt="MacBook Air"
                  width={400}
                  height={320}
                  className="object-contain h-full -mr-8"
                  style={{ transform: "translateX(16px)" }}
                />
              </div>
            </div>

            {/* Apple AirPods Max - div2: column 1, row 2 */}
            <div
              className="bg-[#EDEDED] overflow-hidden h-full flex items-center p-3"
              style={{
                gridColumnStart: 1,
                gridRowStart: 2,
              }}
            >
              <div className="flex-1 flex items-center justify-start">
                <Image
                  src="/gadgets/airpod.png"
                  alt="Apple AirPods Max"
                  width={600}
                  height={680}
                  className="object-contain"
                  style={{
                    transform: "scaleX(-1)",
                    marginLeft: "-110px",
                    marginRight: "30px",
                    opacity: 1,
                  }}
                />
              </div>
              <div className="relative z-10 flex-1 pl-1">
                <h3 className="text-[29px] leading-[40px] font-normal text-black mb-1 font-manrope">
                  Apple
                  <br />
                  AirPods
                  <br />
                  Max
                </h3>
                <p className="text-[14px] leading-[24px] font-normal text-gray-600 font-manrope">
                  Computational audio.
                  <br />
                  Listen, it's powerful
                </p>
              </div>
            </div>

            {/* Apple Vision Pro - div3: column 2, row 2 */}
            <div
              className="bg-[#353535] overflow-hidden h-full flex items-center p-4"
              style={{
                gridColumnStart: 2,
                gridRowStart: 2,
              }}
            >
              <div className="shrink-0 w-[360px] md:w-[420px] ml-[-240px] flex items-center justify-center">
                <Image
                  src="/gadgets/vision.png"
                  alt="Apple Vision Pro"
                  width={400}
                  height={420}
                  className="object-contain"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
              <div className="relative z-10 flex-1 pl-3">
                <h3 className="text-[29px] leading-[40px] font-normal text-white mb-1 font-manrope">
                  Apple
                  <br />
                  Vision Pro
                </h3>
                <p className="text-[14px] leading-[24px] font-normal text-gray-300 font-manrope">
                  An immersive way to
                  <br />
                  experience
                  <br />
                  entertainment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Icons - Container width */}
        <section className="w-full bg-[#FAFAFA] py-8">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <BrowseByCategory />
          </div>
        </section>

        {/* Products Tabs Section - Container width */}
        <section className="w-full bg-white py-8">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <GadgetTabbedProducts products={gadgetProducts} />
          </div>
        </section>

        {/* Feature Tiles - Reusable grid (kept old FeatureTiles temporarily) */}
        <FeatureTilesGrid
          tiles={[
            {
              id: "t1",
              title: "Popular Products",
              description:
                "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
              cta: { label: "Shop Now", href: "/gadget1/products" },
              backgroundColor: "#FFFFFF",
              image: {
                src: "/gadgets/featuretiles/huawei.png",
                alt: "Huawei",
                fill: true,
                className: "object-contain",
              },
            },
            {
              id: "t2",
              title: "Ipad Pro",
              description:
                "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
              cta: { label: "Shop Now", href: "/gadget1/products" },
              backgroundColor: "#F9F9F9",
              image: {
                src: "/gadgets/featuretiles/pad.png",
                alt: "iPad Pro",
                fill: true,
                className: "object-contain",
              },
            },
            {
              id: "t3",
              title: "Samsung Galaxy",
              description:
                "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
              cta: { label: "Shop Now", href: "/gadget1/products" },
              backgroundColor: "#EAEAEA",
              image: {
                src: "/gadgets/featuretiles/samsung.png",
                alt: "Samsung Galaxy",
                fill: true,
                className: "object-contain",
              },
            },
            {
              id: "t4",
              title: "Macbook Pro",
              description:
                "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
              cta: { label: "Shop Now", href: "/gadget1/products" },
              backgroundColor: "#2C2C2C",
              image: {
                src: "/gadgets/featuretiles/mac2.png",
                alt: "Macbook Pro",
                fill: true,
                className: "object-contain",
              },
            },
          ]}
          columns={4}
          gap={0}
          edgeToEdge={true}
        />

        {/* Removed the extra second-row grid to avoid duplicate lists under tabs */}

        {/* Discount Products Section - Full Width */}
        <section className="w-full bg-white py-8">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Discounts up to -50%
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {thirdRowProducts.slice(0, 4).map((product) => (
                <GadgetProductCard
                  key={product.id}
                  variant={1}
                  product={product}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                href="/gadget1/products"
                className="inline-block px-6 py-2 border border-black text-black text-sm font-medium rounded hover:bg-black hover:text-white transition-colors"
              >
                View More
              </Link>
            </div>
          </div>
        </section>

        {/* Big Summer Sale Banner - AT BOTTOM (Before Footer) - Full Width */}
        <section className="w-full bg-[#2C2C2C] py-12 md:py-16">
          <div className="max-w-[1400px] mx-auto px-0">
            <div className="flex items-stretch gap-0 min-h-[340px] md:min-h-[420px]">
              {/* Left image */}
              <div className="flex-1 relative">
                <Image
                  src="/gadgets/sales/left.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Center content */}
              <div className="w-full md:w-[520px] flex items-center justify-center text-center px-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
                    Big Summer <span className="font-bold">Sale</span>
                  </h2>
                  <p className="text-white/70 text-sm mb-6">
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                  </p>
                  <Link
                    href="/gadget1/products"
                    className="inline-block px-10 py-3 bg-[#2C2C2C] text-white text-sm font-medium rounded-sm border border-white hover:text-[#2C2C2C] hover:bg-white transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              {/* Right image */}
              <div className="flex-1 relative">
                <Image
                  src="/gadgets/sales/right.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <GadgetFooter variant={1} />
    </div>
  );
}
