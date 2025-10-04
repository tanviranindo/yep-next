import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";

export interface HeroV1Props {
  eyebrow?: string;
  sublabel?: string;
  title: string;
  cta?: { label: string; href: string };
  thumbnails?: string[];
  heroImage: string;
  ticker?: string[];
  socialIcons?: { icon: string; href: string }[];
  productCarousel?: {
    title: string;
    description: string;
    cta: { label: string; href: string };
    images: string[];
  };
}

export default function FashionHeroVariant1({
  eyebrow = "LATEST COLLECTIONS OF",
  sublabel = "Summer 2025",
  title = "LET'S CREATE YOUR OWN Fashion Statement",
  cta = { label: "Explore →", href: "#" },
  thumbnails = ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
  heroImage,
  ticker = [
    "Fashion with a Flair",
    "Strut with Confidence",
    "Own Your Runway",
    "Chic, Classy & Confident",
  ],
  socialIcons = [
    { icon: "f", href: "#" },
    { icon: "✈", href: "#" },
    { icon: "📷", href: "#" },
    { icon: "●", href: "#" },
  ],
  productCarousel = {
    title: "OFANCE HALF SLEEVE SHIRT",
    description:
      "Discover fashion that fits your lifestyle. From casual looks to statement pieces.",
    cta: { label: "VIEW COLLECTION", href: "#" },
    images: ["/hero/1.png", "/hero/2.png", "/hero/3.png"],
  },
}: HeroV1Props) {
  return (
    <section className="relative -mt-16 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]">
        {/* Left Side - Content */}
        <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 flex flex-col justify-between relative z-10 h-full">
          {/* Row 1: LATEST COLLECTIONS OF + Summer 2025 */}
          <div className="mb-1">
            {eyebrow && (
              <p
                className="uppercase text-gray-600 mb-0.5 text-sm sm:text-base md:text-lg lg:text-xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "5%",
                }}
              >
                {eyebrow}
              </p>
            )}
            {sublabel && (
              <p
                className="text-gray-500 mb-0.5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 400,
                  lineHeight: "100%",
                  letterSpacing: "6%",
                }}
              >
                {sublabel}
              </p>
            )}
          </div>

          {/* Row 2: LET'S CREATE YOUR OWN + Fashion Statement */}
          <div className="mb-1">
            <h1
              className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "20%",
              }}
            >
              LET'S CREATE YOUR OWN
            </h1>
            <h1
              className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                lineHeight: "100%",
                letterSpacing: "-2%",
              }}
            >
              Fashion Statement
            </h1>
          </div>

          {/* Row 3: Images + Navigation + Product Info */}
          <div className="flex flex-col sm:flex-row items-end gap-4 sm:gap-6">
            {/* All Images (1, 2, 3) with different sizes */}
            <div className="flex gap-2 sm:gap-4 items-end">
              {/* Image 1 - Larger */}
              <div className="relative bg-base-300 rounded w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-36 lg:w-28 lg:h-40">
                <Image
                  src={thumbnails[0]}
                  alt="product-1"
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* Images 2 & 3 - Smaller with navigation above */}
              <div className="flex flex-col gap-1">
                {/* Navigation arrows above images */}
                <div className="flex gap-2 sm:gap-3 justify-center">
                  <button className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center hover:opacity-70 transition-opacity text-gray-700">
                    <svg
                      className="w-2 h-2 sm:w-3 sm:h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center hover:opacity-70 transition-opacity text-gray-700">
                    <svg
                      className="w-2 h-2 sm:w-3 sm:h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Images 2 & 3 */}
                <div className="flex gap-2 sm:gap-3">
                  {/* Image 2 */}
                  <div className="relative bg-base-300 rounded w-12 h-16 sm:w-16 sm:h-24 md:w-18 md:h-28 lg:w-20 lg:h-32">
                    <Image
                      src={thumbnails[1]}
                      alt="product-2"
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  {/* Image 3 */}
                  <div className="relative bg-base-300 rounded w-12 h-16 sm:w-16 sm:h-24 md:w-18 md:h-28 lg:w-20 lg:h-32">
                    <Image
                      src={thumbnails[2]}
                      alt="product-3"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-1 sm:space-y-2">
              <div>
                <h3
                  className="text-gray-800 mb-0.5 sm:mb-1 text-sm sm:text-base md:text-lg lg:text-xl"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    lineHeight: "100%",
                    letterSpacing: "2%",
                  }}
                >
                  {productCarousel.title}
                </h3>
                <p
                  className="text-gray-600 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 400,
                    lineHeight: "17px",
                    letterSpacing: "0%",
                  }}
                >
                  {productCarousel.description}
                </p>
              </div>
              <Link
                href={productCarousel.cta.href}
                className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors rounded"
              >
                {productCarousel.cta.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="relative h-full">
          <div className="relative w-full h-full">
            <Image
              src={heroImage}
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Social Media Icons on Right Edge - Exact Figma specs */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden sm:block">
            <div className="bg-black rounded-full flex flex-col items-center justify-center py-4 px-3 sm:py-5 sm:px-4 gap-3 sm:gap-4">
              {/* Twitter Icon */}
              <Link
                href="#"
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="18"
                  height="15"
                  className="sm:w-5 sm:h-4"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7149 1.46417C13.2189 1.68961 12.6843 1.83775 12.1304 1.9086C12.6972 1.56723 13.1352 1.02618 13.3413 0.375636C12.8067 0.697687 12.2141 0.923123 11.5893 1.05194C11.0805 0.498016 10.3655 0.175964 9.55396 0.175964C8.04032 0.175964 6.80364 1.41264 6.80364 2.93916C6.80364 3.15816 6.8294 3.37071 6.87449 3.57039C4.58149 3.45445 2.53968 2.35303 1.18062 0.684805C0.942306 1.09059 0.807045 1.56723 0.807045 2.06963C0.807045 3.02934 1.29012 3.87955 2.03728 4.36263C1.57997 4.36263 1.15486 4.23381 0.781281 4.04058V4.0599C0.781281 5.39964 1.73455 6.52037 2.99699 6.77157C2.59168 6.88249 2.16616 6.89793 1.75388 6.81666C1.92882 7.36575 2.27144 7.8462 2.73357 8.19049C3.1957 8.53477 3.7541 8.72558 4.33029 8.73609C3.35359 9.50929 2.14291 9.92724 0.897219 9.92124C0.678224 9.92124 0.459229 9.90835 0.240234 9.88259C1.46403 10.6684 2.9197 11.1257 4.47843 11.1257C9.55396 11.1257 12.3429 6.91328 12.3429 3.26122C12.3429 3.13884 12.3429 3.0229 12.3365 2.90052C12.8775 2.51406 13.3413 2.02454 13.7149 1.46417Z"
                    fill="white"
                  />
                </svg>
              </Link>

              {/* Instagram Icon */}
              <Link
                href="#"
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="18"
                  height="18"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.64064 0.228271C8.36526 0.230204 8.73304 0.234068 9.05058 0.243086L9.17554 0.247595C9.31982 0.252747 9.46216 0.259188 9.63414 0.266918C10.3195 0.299123 10.7871 0.407332 11.1974 0.566425C11.6225 0.730027 11.9806 0.951599 12.3387 1.30908C12.6663 1.63106 12.9197 2.02054 13.0814 2.45043C13.2405 2.86072 13.3487 3.32834 13.3809 4.01431C13.3886 4.18564 13.3951 4.32798 13.4002 4.47291L13.4041 4.59786C13.4137 4.91476 13.4176 5.28254 13.4189 6.00716L13.4195 6.48766V7.33143C13.4211 7.80125 13.4162 8.27106 13.4047 8.74073L13.4009 8.86569C13.3957 9.01061 13.3893 9.15296 13.3815 9.32429C13.3493 10.0103 13.2398 10.4772 13.0814 10.8882C12.9201 11.3183 12.6667 11.7079 12.3387 12.0295C12.0167 12.3569 11.6272 12.6103 11.1974 12.7722C10.7871 12.9313 10.3195 13.0395 9.63414 13.0717C9.48131 13.0789 9.32844 13.0853 9.17554 13.091L9.05058 13.0949C8.73304 13.1039 8.36526 13.1084 7.64064 13.1097L7.16014 13.1103H6.31701C5.84699 13.1119 5.37696 13.107 4.90707 13.0955L4.78212 13.0916C4.62921 13.0859 4.47634 13.0792 4.32352 13.0717C3.63819 13.0395 3.17057 12.9313 2.75963 12.7722C2.32981 12.6107 1.94048 12.3573 1.61893 12.0295C1.29111 11.7077 1.03745 11.3181 0.875635 10.8882C0.716542 10.4779 0.608332 10.0103 0.576127 9.32429C0.568951 9.17145 0.56251 9.01858 0.556804 8.86569L0.553584 8.74073C0.541714 8.27106 0.536346 7.80125 0.537481 7.33143V6.00716C0.535683 5.53735 0.540407 5.06754 0.551651 4.59786L0.55616 4.47291C0.561313 4.32798 0.567754 4.18564 0.575483 4.01431C0.607688 3.32834 0.715897 2.86136 0.874991 2.45043C1.03673 2.0201 1.2909 1.6305 1.61957 1.30908C1.94104 0.981533 2.33011 0.728087 2.75963 0.566425C3.17057 0.407332 3.63755 0.299123 4.32352 0.266918C4.49485 0.259188 4.63784 0.252747 4.78212 0.247595L4.90707 0.24373C5.37675 0.232286 5.84656 0.227347 6.31637 0.228916L7.64064 0.228271ZM6.97851 3.44878C6.12437 3.44878 5.30522 3.78809 4.70126 4.39205C4.0973 4.99601 3.75799 5.81516 3.75799 6.6693C3.75799 7.52343 4.0973 8.34258 4.70126 8.94654C5.30522 9.55051 6.12437 9.88981 6.97851 9.88981C7.83264 9.88981 8.65179 9.55051 9.25575 8.94654C9.85972 8.34258 10.199 7.52343 10.199 6.6693C10.199 5.81516 9.85972 4.99601 9.25575 4.39205C8.65179 3.78809 7.83264 3.44878 6.97851 3.44878ZM6.97851 4.73699C7.23226 4.73695 7.48354 4.78689 7.71799 4.88395C7.95245 4.98102 8.16549 5.12332 8.34495 5.30272C8.52441 5.48212 8.66678 5.69512 8.76392 5.92954C8.86107 6.16396 8.91109 6.41522 8.91114 6.66898C8.91118 6.92273 8.86124 7.17401 8.76417 7.40846C8.6671 7.64292 8.52481 7.85596 8.3454 8.03542C8.166 8.21488 7.95301 8.35725 7.71859 8.45439C7.48417 8.55154 7.2329 8.60156 6.97915 8.6016C6.46667 8.60161 5.97518 8.39802 5.6128 8.03565C5.25042 7.67327 5.04684 7.18178 5.04684 6.6693C5.04684 6.15682 5.25042 5.66533 5.6128 5.30295C5.97518 4.94057 6.46667 4.73699 6.97915 4.73699M10.3607 2.48263C10.1472 2.48263 9.94237 2.56746 9.79138 2.71845C9.64039 2.86944 9.55556 3.07423 9.55556 3.28776C9.55556 3.50129 9.64039 3.70608 9.79138 3.85707C9.94237 4.00806 10.1472 4.09289 10.3607 4.09289C10.5742 4.09289 10.779 4.00806 10.93 3.85707C11.081 3.70608 11.1658 3.50129 11.1658 3.28776C11.1658 3.07423 11.081 2.86944 10.93 2.71845C10.779 2.56746 10.5742 2.48263 10.3607 2.48263Z"
                    fill="white"
                  />
                </svg>
              </Link>

              {/* LinkedIn Icon */}
              <Link
                href="#"
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="18"
                  height="15"
                  className="sm:w-5 sm:h-4"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.41625 1.50205C3.41608 1.8437 3.2802 2.17129 3.03849 2.41276C2.79679 2.65422 2.46906 2.78978 2.12741 2.78961C1.78575 2.78944 1.45816 2.65355 1.21669 2.41184C0.97523 2.17014 0.839673 1.84241 0.839844 1.50076C0.840015 1.1591 0.9759 0.831511 1.21761 0.590047C1.45931 0.348582 1.78704 0.213025 2.12869 0.213196C2.47035 0.213367 2.79794 0.349252 3.0394 0.590958C3.28087 0.832664 3.41643 1.16039 3.41625 1.50205ZM3.4549 3.74352H0.87849V11.8077H3.4549V3.74352ZM7.52563 3.74352H4.9621V11.8077H7.49986V7.57593C7.49986 5.21852 10.5722 4.99952 10.5722 7.57593V11.8077H13.1164V6.69995C13.1164 2.72584 8.56907 2.87398 7.49986 4.82561L7.52563 3.74352Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AnimatedText texts={ticker} />
    </section>
  );
}
