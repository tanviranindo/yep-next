import GadgetFooter from "@/components/Gadget/GadgetFooter";
import GadgetNavbar from "@/components/Gadget/GadgetNavbar";
import GadgetProductCard from "@/components/Gadget/GadgetProductCard";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import { gadgetProducts } from "@/data/gadget1/products";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
        <section className="relative bg-black h-[360px] md:h-[450px]">
          <div className="max-w-[1400px] mx-auto h-full relative">
            {/* Left Arrow */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
              <ChevronLeft size={24} />
            </button>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Left - Text */}
              <div className="flex flex-col justify-center px-8 md:px-12 z-10">
                <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-3">
                  CREATIVE HARMONY
                </p>
                <h1 className="text-white text-5xl md:text-6xl font-bold mb-3">
                  iPhone 14 Pro
                </h1>
                <p className="text-white/80 text-sm mb-6 max-w-md">
                  Created to change everything for the better. For everyone
                </p>
                <Link
                  href="/gadget1/products"
                  className="inline-block w-fit px-10 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </Link>
              </div>

              {/* Right - iPhone Image */}
              <div className="relative hidden md:flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=800&h=800&fit=crop"
                  alt="iPhone 14 Pro"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        {/* Three Promotional Cards */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* PlayStation 5 - Full Height */}
            <div className="relative bg-[#EDEDED] rounded-lg overflow-hidden h-[272px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop"
                  alt="PlayStation 5"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Playstation 5
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </div>
            </div>

            {/* Right Column - Two Stacked Cards */}
            <div className="md:col-span-2 grid grid-rows-2 gap-4">
              {/* MacBook Air */}
              <div className="relative bg-[#EDEDED] rounded-lg overflow-hidden h-[130px] flex items-center px-6">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Macbook Air
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    The new 15-inch MacBook Air makes room for more of what you
                    love with a spacious Liquid Retina display.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
                    alt="MacBook Air"
                    width={160}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Dark Card */}
              <div className="relative bg-[#2C2C2C] rounded-lg overflow-hidden h-[130px] flex items-center px-6">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    iPad Pro
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    iPad combines a magnificent 10.2-inch Retina display,
                    incredible performance, multitasking and ease of use.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
                    alt="iPad Pro"
                    width={120}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Icons */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: "📱", label: "Phones" },
              { icon: "⌚", label: "Smart Watches" },
              { icon: "📷", label: "Cameras" },
              { icon: "🎧", label: "Headphones" },
              { icon: "💻", label: "Computers" },
              { icon: "🎮", label: "Gaming" },
            ].map((category, index) => (
              <Link
                key={index}
                href="/gadget1/products"
                className="flex flex-col items-center justify-center p-4 bg-[#EDEDED] rounded-full aspect-square hover:bg-gray-200 transition-colors"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <span className="text-xs font-medium text-black text-center">
                  {category.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* New Arrival Section */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">New Arrival</h2>
            <Link
              href="/gadget1/products"
              className="text-sm text-black hover:underline"
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
        </section>

        {/* Second Row Products */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {secondRowProducts.map((product) => (
              <GadgetProductCard
                key={product.id}
                variant={1}
                product={product}
              />
            ))}
          </div>
        </section>

        {/* Four Banner Cards */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop",
                title: "Popular Products",
                subtitle:
                  "iPad combines a magnificent 10.2-inch Retina display",
                price: "99 USD",
                bg: "bg-white",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
                title: "Ipad Pro",
                subtitle:
                  "iPad combines a magnificent 10.2-inch Retina display",
                price: "99 USD",
                bg: "bg-[#F4F4F4]",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
                title: "Samsung Galaxy",
                subtitle:
                  "iPad combines a magnificent 10.2-inch Retina display",
                price: "99 USD",
                bg: "bg-[#EAEAEA]",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
                title: "Macbook Pro",
                subtitle:
                  "iPad combines a magnificent 10.2-inch Retina display",
                price: "99 USD",
                bg: "bg-[#2C2C2C]",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`${card.bg} rounded-lg p-4 h-[280px] flex flex-col`}
              >
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <div className="mt-auto">
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      index === 3 ? "text-white" : "text-black"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs mb-2 line-clamp-2 ${
                      index === 3 ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {card.subtitle}
                  </p>
                  <button
                    className={`text-sm font-medium ${
                      index === 3 ? "text-white" : "text-black"
                    } underline`}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discount Products Section */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">
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
        </section>

        {/* Big Summer Sale Banner */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
          <div className="relative bg-[#2C2C2C] rounded-lg overflow-hidden h-[240px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  Big Summer Sale
                </h2>
                <p className="text-white/70 text-sm mb-5">
                  Commodo fames vitae vitae leo mauris in. Eu consequat.
                </p>
                <Link
                  href="/gadget1/products"
                  className="inline-block px-10 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            {/* Background Images */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-40">
              <Image
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-40">
              <Image
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Fourth Row Products */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-2 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fourthRowProducts.map((product) => (
              <GadgetProductCard
                key={product.id}
                variant={1}
                product={product}
              />
            ))}
          </div>
        </section>
      </main>

      <GadgetFooter variant={1} />
    </div>
  );
}
