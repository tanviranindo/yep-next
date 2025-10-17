import GadgetFooter from "@/components/Gadget/GadgetFooter";
import GadgetNavbar from "@/components/Gadget/GadgetNavbar";
import GadgetProductCard from "@/components/Gadget/GadgetProductCard";
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

        {/* Category Icons - Full Width */}
        <section className="w-full bg-white py-8">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {/* Phones */}
              <Link
                href="/gadget1/products"
                className="flex flex-col items-center justify-center min-w-[135px] h-32 px-[52px] py-6 gap-2 bg-[#EDEDED] rounded-[15px] hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_7205)">
                    <path
                      d="M33.375 5.25H14.625C13.3306 5.25 12.2812 6.29933 12.2812 7.59375V40.4062C12.2812 41.7007 13.3306 42.75 14.625 42.75H33.375C34.6694 42.75 35.7188 41.7007 35.7188 40.4062V7.59375C35.7188 6.29933 34.6694 5.25 33.375 5.25Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6H26.6875"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 37.7188V37.7404"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="13"
                      y1="34"
                      x2="35"
                      y2="34"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_7205">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-xs font-medium text-black text-center">
                  Phones
                </span>
              </Link>

              {/* Smart Watches */}
              <Link
                href="/gadget1/products"
                className="flex flex-col items-center justify-center min-w-[135px] h-32 px-[52px] py-6 gap-2 bg-[#EDEDED] rounded-[15px] hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_7211)">
                    <path
                      d="M30 12H18C14.6863 12 12 14.6863 12 18V30C12 33.3137 14.6863 36 18 36H30C33.3137 36 36 33.3137 36 30V18C36 14.6863 33.3137 12 30 12Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 36V42H30V36"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 12V6H30V12"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="20.7139"
                      y1="18"
                      x2="20.7139"
                      y2="29"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="24.7139"
                      y1="23"
                      x2="24.7139"
                      y2="29"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="28.7139"
                      y1="21"
                      x2="28.7139"
                      y2="29"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_7211">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-xs font-medium text-black text-center">
                  Smart Watches
                </span>
              </Link>

              {/* Cameras */}
              <Link
                href="/gadget1/products"
                className="flex flex-col items-center justify-center min-w-[135px] h-32 px-[52px] py-6 gap-2 bg-[#EDEDED] rounded-[15px] hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_7220)">
                    <path
                      d="M10 14H12C13.0609 14 14.0783 13.5786 14.8284 12.8284C15.5786 12.0783 16 11.0609 16 10C16 9.46957 16.2107 8.96086 16.5858 8.58579C16.9609 8.21071 17.4696 8 18 8H30C30.5304 8 31.0391 8.21071 31.4142 8.58579C31.7893 8.96086 32 9.46957 32 10C32 11.0609 32.4214 12.0783 33.1716 12.8284C33.9217 13.5786 34.9391 14 36 14H38C39.0609 14 40.0783 14.4214 40.8284 15.1716C41.5786 15.9217 42 16.9391 42 18V36C42 37.0609 41.5786 38.0783 40.8284 38.8284C40.0783 39.5786 39.0609 40 38 40H10C8.93913 40 7.92172 39.5786 7.17157 38.8284C6.42143 38.0783 6 37.0609 6 36V18C6 16.9391 6.42143 15.9217 7.17157 15.1716C7.92172 14.4214 8.93913 14 10 14"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 32C27.3137 32 30 29.3137 30 26C30 22.6863 27.3137 20 24 20C20.6863 20 18 22.6863 18 26C18 29.3137 20.6863 32 24 32Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_7220">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-xs font-medium text-black text-center">
                  Cameras
                </span>
              </Link>

              {/* Headphones */}
              <Link
                href="/gadget1/products"
                className="flex flex-col items-center justify-center min-w-[135px] h-32 px-[52px] py-6 gap-2 bg-[#EDEDED] rounded-[15px] hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_7224)">
                    <path
                      d="M14 26H12C9.79086 26 8 27.7909 8 30V36C8 38.2091 9.79086 40 12 40H14C16.2091 40 18 38.2091 18 36V30C18 27.7909 16.2091 26 14 26Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36 26H34C31.7909 26 30 27.7909 30 30V36C30 38.2091 31.7909 40 34 40H36C38.2091 40 40 38.2091 40 36V30C40 27.7909 38.2091 26 36 26Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 30V24C8 19.7565 9.68571 15.6869 12.6863 12.6863C15.6869 9.68571 19.7565 8 24 8C28.2435 8 32.3131 9.68571 35.3137 12.6863C38.3143 15.6869 40 19.7565 40 24V30"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_7224">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-xs font-medium text-black text-center">
                  Headphones
                </span>
              </Link>

              {/* Computers */}
              <Link
                href="/gadget1/products"
                className="flex flex-col items-center justify-center min-w-[135px] h-32 px-[52px] py-6 gap-2 bg-[#EDEDED] rounded-[15px] hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_7229)">
                    <path
                      d="M40 8H8C6.89543 8 6 8.89543 6 10V30C6 31.1046 6.89543 32 8 32H40C41.1046 32 42 31.1046 42 30V10C42 8.89543 41.1046 8 40 8Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 40H34"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 32V40"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 32V40"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.85742 27.4286H41.1431"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_7229">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-xs font-medium text-black text-center">
                  Computers
                </span>
              </Link>

              {/* Gaming */}
              <Link
                href="/gadget1/products"
                className="flex flex-col items-center justify-center min-w-[135px] h-32 px-[52px] py-6 gap-2 bg-[#EDEDED] rounded-[15px] hover:bg-gray-200 transition-colors"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_7236)">
                    <path
                      d="M40 12H8C5.79086 12 4 13.7909 4 16V32C4 34.2091 5.79086 36 8 36H40C42.2091 36 44 34.2091 44 32V16C44 13.7909 42.2091 12 40 12Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 24H20M16 20V28"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 22V22.0207"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36 25.9999V26.0206"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_7236">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-xs font-medium text-black text-center">
                  Gaming
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* New Arrival Section - Full Width */}
        <section className="w-full bg-white py-8">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                New Arrival
              </h2>
              <Link
                href="/gadget1/products"
                className="text-sm text-black hover:underline font-medium"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {newArrivalProducts.map((product) => (
                <GadgetProductCard
                  key={product.id}
                  variant={1}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Second Row Products - Full Width */}
        <section className="w-full bg-white pb-8">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {secondRowProducts.map((product) => (
                <GadgetProductCard
                  key={product.id}
                  variant={1}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Four Banner Cards - Custom Layout */}
        <section className="w-full bg-white py-8">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[580px]">
              {/* Apple AirPods Max - Top Left */}
              <div className="bg-red-500 rounded-lg p-6 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/gadgets/airpod.png"
                    alt="Apple AirPods Max"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold mb-1 text-black">
                    Apple AirPods Max
                  </h3>
                  <p className="text-xs mb-2 text-gray-600 leading-relaxed">
                    Computational audio. Listen, it's powerful
                  </p>
                </div>
              </div>

              {/* Apple Vision Pro - Top Middle */}
              <div className="bg-[#353535] rounded-lg p-6 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/gadgets/vision.png"
                    alt="Apple Vision Pro"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    Apple Vision Pro
                  </h3>
                  <p className="text-xs mb-2 text-gray-300 leading-relaxed">
                    An immersive way to experience entertainment
                  </p>
                </div>
              </div>

              {/* MacBook Air - Top Right, spans 2 rows */}
              <div className="bg-[#2C2C2C] rounded-lg p-6 flex flex-col row-span-2">
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/gadgets/macbook.png"
                    alt="MacBook Air"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    Macbook Air
                  </h3>
                  <p className="text-xs mb-2 text-gray-300 leading-relaxed">
                    The new 15-inch MacBook Air makes room for more of what you
                    love
                  </p>
                </div>
              </div>

              {/* PlayStation 5 - Bottom Left, spans 2 columns */}
              <div className="bg-[#EDEDED] rounded-lg p-6 flex flex-col col-span-2">
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/gadgets/playstation.png"
                    alt="PlayStation 5"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold mb-1 text-black">
                    Playstation 5
                  </h3>
                  <p className="text-xs mb-2 text-gray-600 leading-relaxed">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated
                    I/O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discount Products Section - Full Width */}
        <section className="w-full bg-white py-8">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Discounts up to -50%
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {thirdRowProducts.map((product) => (
                <GadgetProductCard
                  key={product.id}
                  variant={1}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Fourth Row Products - Full Width */}
        <section className="w-full bg-white pb-12">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fourthRowProducts.map((product) => (
                <GadgetProductCard
                  key={product.id}
                  variant={1}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Big Summer Sale Banner - AT BOTTOM (Before Footer) - Full Width */}
        <section className="w-full bg-[#2C2C2C] py-12 md:py-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative">
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Big Summer <span className="font-normal">Sale</span>
              </h2>
              <p className="text-white/70 text-sm mb-6">
                Commodo fames vitae vitae leo mauris in. Eu consequat.
              </p>
              <Link
                href="/gadget1/products"
                className="inline-block px-10 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
            </div>
            {/* Background Images */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-30">
              <Image
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-30">
              <Image
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <GadgetFooter variant={1} />
    </div>
  );
}
