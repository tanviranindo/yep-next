"use client";

import {
  GadgetFooter,
  GadgetNavbar,
  GadgetProductCard,
} from "@/components/Gadget";
import { useGadgetStore } from "@/contexts/GadgetStoreContext";
import { GADGET1_ROUTES } from "@/data/gadget1/constants";
import { relatedProducts } from "@/data/gadget1/products";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

// Copied from my previous attempt, as per user request to move it here.
export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  availability: string;
  images: { id: string; src: string; alt: string }[];
  colors: { name: string; hex: string }[];
  storage: string[];
}

export interface DetailedProduct {
  id: string;
  name: string;
  variants: {
    [key: string]: ProductVariant;
  };
  details: ProductDetails;
  reviews: ProductReviews;
}

export interface ProductDetails {
  title: string;
  description: string;
  specs: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export interface ProductReviews {
  average: number;
  total: number;
  distribution: {
    excellent: number;
    good: number;
    average: number;
    belowAverage: number;
    poor: number;
  };
  items: any[]; // Simplified for now
}

export const iphone14ProMax: DetailedProduct = {
  id: "apple-iphone-14-pro-max",
  name: "Apple iPhone 14 Pro Max",
  variants: {
    USA: {
      id: "usa",
      name: "USA",
      price: 114000,
      originalPrice: 120000,
      currency: "BDT",
      availability: "In Stock",
      images: [
        {
          id: "img1",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Front and Back View",
        },
        {
          id: "img2",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Front View",
        },
        {
          id: "img3",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Back View",
        },
        {
          id: "img4",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Angled View",
        },
      ],
      colors: [
        { name: "Deep Purple", hex: "#5B4F61" },
        { name: "Space Black", hex: "#000000" },
        { name: "Silver", hex: "#E3E4E6" },
        { name: "Gold", hex: "#F5DDC5" },
      ],
      storage: ["128GB", "256GB", "512GB", "1TB"],
    },
    AUS: {
      id: "aus",
      name: "AUS",
      price: 116000,
      originalPrice: 122000,
      currency: "BDT",
      availability: "In Stock",
      images: [
        {
          id: "img1",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Front and Back View",
        },
        {
          id: "img2",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Front View",
        },
        {
          id: "img3",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Back View",
        },
        {
          id: "img4",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Angled View",
        },
      ],
      colors: [{ name: "Deep Purple", hex: "#5B4F61" }],
      storage: ["256GB", "512GB"],
    },
    "SG/UAE": {
      id: "sg-uae",
      name: "SG/UAE",
      price: 115000,
      originalPrice: 121000,
      currency: "BDT",
      availability: "In Stock",
      images: [
        {
          id: "img1",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Front and Back View",
        },
        {
          id: "img2",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Front View",
        },
        {
          id: "img3",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Back View",
        },
        {
          id: "img4",
          src: "/gadgets/iphone.png",
          alt: "iPhone 14 Pro Max Angled View",
        },
      ],
      colors: [{ name: "Gold", hex: "#F5DDC5" }],
      storage: ["512GB", "1TB"],
    },
  },
  details: {
    title: "Details",
    description:
      "Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak, yes and in bright light using the new system with two cameras more...",
    specs: {
      Screen: {
        "Screen diagonal": "6.7''",
        "The screen resolution": "2796x1290",
        "The screen refresh rate": "120 Hz",
        "The pixel density": "460 ppi",
        "Screen type": "OLED",
        Additionally:
          "Dynamic Island, Always-On display, HDR display, True Tone, Wide color (P3)",
      },
      CPU: {
        CPU: "A16 Bionic",
        "Number of cores": "6",
      },
    },
  },
  reviews: {
    average: 4.8,
    total: 125,
    distribution: {
      excellent: 100,
      good: 11,
      average: 3,
      belowAverage: 8,
      poor: 1,
    },
    items: [
      {
        id: "review1",
        user: {
          name: "Parpti",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        rating: 5,
        comment:
          "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!!🖤",
        date: "24 January, 2025",
      },
      {
        id: "review2",
        user: {
          name: "Leonardo",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        rating: 5,
        comment:
          "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin's) So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and plugs.",
        date: "24 January, 2025",
      },
      {
        id: "review3",
        user: {
          name: "Tamim",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        rating: 4,
        comment:
          "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition",
        date: "24 January, 2025",
        images: ["/gadgets/iphone.png", "/gadgets/iphone.png"],
      },
      {
        id: "review4",
        user: {
          name: "John",
          avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        rating: 4,
        comment:
          "In Washington, it is already difficult to surprise with the opening of a new institution, but it is still possible. Especially if it is a True Cost project. Here you pay an entrance fee and get meals at cost price.",
        date: "24 January, 2025",
      },
      {
        id: "review5",
        user: {
          name: "Sarah",
          avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        },
        rating: 5,
        comment:
          "Absolutely love this phone! The camera quality is outstanding and the battery life is amazing. I've been using it for a month now and couldn't be happier with my purchase. The build quality is excellent and it feels premium in hand.",
        date: "23 January, 2025",
      },
      {
        id: "review6",
        user: {
          name: "Mike",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        rating: 4,
        comment:
          "Great phone overall, but the price is quite steep. The performance is smooth and the display is crisp. Would recommend if you're looking for a high-end device.",
        date: "22 January, 2025",
      },
      {
        id: "review7",
        user: {
          name: "Emma",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        rating: 5,
        comment:
          "This is my third iPhone and I'm still impressed with the quality. The new features are amazing and the integration with other Apple devices is seamless. Highly recommend!",
        date: "21 January, 2025",
      },
      {
        id: "review8",
        user: {
          name: "David",
          avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        },
        rating: 3,
        comment:
          "The phone is good but I expected more for the price. The camera is decent but not as good as advertised. The battery life could be better too.",
        date: "20 January, 2025",
      },
    ],
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, addToWishlist, isInWishlist } = useGadgetStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // For now, we only have one detailed product.
  const product = iphone14ProMax;

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants.USA
  );
  const [selectedColor, setSelectedColor] = useState(selectedVariant.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(
    selectedVariant.storage[0]
  );

  const handleVariantChange = (variantKey: string) => {
    const newVariant = product.variants[variantKey];
    setSelectedVariant(newVariant);
    setSelectedColor(newVariant.colors[0]);
    setSelectedStorage(newVariant.storage[0]);
    setSelectedImage(0);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: selectedVariant.price,
      image: selectedVariant.images[0].src,
      quantity: 1,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: selectedVariant.price,
      image: selectedVariant.images[0].src,
      stockStatus: "In Stock",
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <GadgetNavbar variant={1} routes={GADGET1_ROUTES} />

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="breadcrumbs text-sm text-gray-600">
          <ul>
            <li>
              <Link
                href={GADGET1_ROUTES.HOME}
                className="text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/gadget1"
                className="text-gray-600 hover:text-gray-900"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/gadget1"
                className="text-gray-600 hover:text-gray-900"
              >
                Smartphones
              </Link>
            </li>
            <li>
              <Link
                href="/gadget1"
                className="text-gray-600 hover:text-gray-900"
              >
                Apple
              </Link>
            </li>
            <li className="text-gray-900">{product.name}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex gap-4">
              {/* Thumbnail images on the left */}
              <div className="flex flex-col gap-3">
                {selectedVariant.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 bg-white border-2 rounded overflow-hidden transition-opacity ${
                      selectedImage === idx
                        ? "border-purple-500 opacity-100"
                        : "border-gray-200 opacity-50"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Main image on the right */}
              <div className="relative w-[600px] h-[600px] bg-white rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={selectedVariant.images[selectedImage].src}
                  alt={selectedVariant.images[selectedImage].alt}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                  -5%
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  {selectedVariant.price.toLocaleString()}{" "}
                  {selectedVariant.currency}
                </span>
                {selectedVariant.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {selectedVariant.originalPrice.toLocaleString()}{" "}
                    {selectedVariant.currency}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-medium text-gray-900 whitespace-nowrap">
                    Select color
                  </h3>
                  <div className="flex gap-3">
                    {selectedVariant.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 flex-shrink-0 ${
                          selectedColor.name === color.name
                            ? "border-gray-900"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-medium text-gray-900 whitespace-nowrap">
                    Variant
                  </h3>
                  <div className="flex gap-[10px]">
                    {Object.keys(product.variants).map((variantKey) => (
                      <button
                        key={variantKey}
                        onClick={() => handleVariantChange(variantKey)}
                        className={`min-w-[33px] h-[27px] border rounded-[16px] px-[10px] py-[10px] text-xs sm:text-sm flex items-center justify-center whitespace-nowrap ${
                          selectedVariant.name === variantKey
                            ? "border-[#4E4E4E] border-2 bg-white text-[#4E4E4E]"
                            : "border-[#4E4E4E] border text-[#4E4E4E]"
                        }`}
                      >
                        {variantKey}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex gap-3">
                    {selectedVariant.storage.map((storage) => {
                      // Determine if storage is available based on variant
                      // In a real app, this would come from product data
                      const isAvailable =
                        selectedVariant.id === "usa" ||
                        (selectedVariant.id === "aus" &&
                          (storage === "256GB" || storage === "512GB")) ||
                        (selectedVariant.id === "sg-uae" &&
                          (storage === "512GB" || storage === "1TB"));
                      const isSelected = selectedStorage === storage;

                      return (
                        <button
                          key={storage}
                          onClick={() =>
                            isAvailable && setSelectedStorage(storage)
                          }
                          disabled={!isAvailable}
                          className={`px-4 py-2 border rounded text-sm transition-colors ${
                            isSelected
                              ? "border-black text-black bg-white"
                              : isAvailable
                              ? "border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-500"
                              : "border-gray-200 text-gray-300 cursor-not-allowed"
                          }`}
                        >
                          {storage}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Specifications Section */}
              <div className="mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {/* Screen Size */}
                  <div className="bg-[#F4F4F4] rounded-[7px] p-4 flex items-center gap-2 w-[168px] h-[64px] min-w-[168px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3325_150)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.60765 3.25032C5.76475 4.09322 5.7648 5.44979 5.76475 8.16305L5.76475 15.8371C5.76475 18.5504 5.76475 19.907 6.60769 20.7499C7.45056 21.5928 8.80714 21.5928 11.5204 21.5928L12.4796 21.5928C15.1928 21.5928 16.5495 21.5928 17.3923 20.7499C18.2352 19.907 18.2352 18.5504 18.2352 15.8372L18.2353 8.16306C18.2352 5.4498 18.2353 4.09324 17.3923 3.25032C16.5495 2.40743 15.1928 2.40743 12.4796 2.40743L11.5204 2.40743C8.80715 2.40743 7.45054 2.40743 6.60765 3.25032ZM14.3978 6.03565C14.812 6.03565 15.1478 5.69986 15.1478 5.28565C15.1478 4.87143 14.812 4.53565 14.3978 4.53565L9.60149 4.53564C9.18727 4.53565 8.85149 4.87143 8.85149 5.28564C8.85149 5.69986 9.18727 6.03565 9.60149 6.03564L14.3978 6.03565ZM11.9994 18.7155C12.7942 18.7154 13.4383 18.0712 13.4384 17.2765C13.4384 16.4819 12.7942 15.8376 11.9995 15.8376C11.2048 15.8377 10.5606 16.4819 10.5606 17.2766C10.5606 18.0712 11.2048 18.7155 11.9994 18.7155Z"
                          fill="#4E4E4E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3325_150">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <div className="text-xs text-[#C4C4C4]">Screen size</div>
                      <div className="font-medium text-[#4E4E4E]">6.7"</div>
                    </div>
                  </div>

                  {/* CPU */}
                  <div className="bg-[#F4F4F4] rounded-[7px] p-4 flex items-center gap-2 w-[168px] h-[64px] min-w-[168px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 3C12.3853 3 12.6977 3.31236 12.6977 3.69767V6.48884C13.2084 6.48991 13.6717 6.49342 14.0932 6.50495L14.093 6.48837V3.69767C14.093 3.31236 14.4054 3 14.7907 3C15.176 3 15.4884 3.31236 15.4884 3.69767V6.48837C15.4884 6.52487 15.4856 6.56072 15.4802 6.5957C16.4162 6.71067 17.0648 6.94879 17.558 7.44198C18.0512 7.93517 18.2893 8.58381 18.4043 9.51984C18.4393 9.51443 18.4751 9.51163 18.5116 9.51163H21.3023C21.6876 9.51163 22 9.82399 22 10.2093C22 10.5946 21.6876 10.907 21.3023 10.907H18.5116L18.495 10.9068C18.5066 11.3283 18.5106 11.7916 18.5116 12.3023H21.3023C21.6876 12.3023 22 12.6147 22 13C22 13.3853 21.6876 13.6977 21.3023 13.6977H18.5112C18.5101 14.2084 18.5066 14.6717 18.495 15.0932L18.5116 15.093H21.3023C21.6876 15.093 22 15.4054 22 15.7907C22 16.176 21.6876 16.4884 21.3023 16.4884H18.5116C18.4751 16.4884 18.4393 16.4856 18.4043 16.4802C18.2893 17.4162 18.0512 18.0648 17.558 18.558C17.0648 19.0512 16.4162 19.2893 15.4802 19.4043C15.4856 19.4393 15.4884 19.4751 15.4884 19.5116V22.3023C15.4884 22.6876 15.176 23 14.7907 23C14.4054 23 14.093 22.6876 14.093 22.3023V19.5116L14.0932 19.495C13.6717 19.5066 13.2084 19.5106 12.6977 19.5116V22.3023C12.6977 22.6876 12.3853 23 12 23C11.6147 23 11.3023 22.6876 11.3023 22.3023V19.5112C10.7916 19.5101 10.3283 19.5066 9.90678 19.495L9.90698 19.5116V22.3023C9.90698 22.6876 9.59462 23 9.2093 23C8.82399 23 8.51163 22.6876 8.51163 22.3023V19.5116C8.51163 19.4751 8.51443 19.4393 8.51984 19.4043C7.58381 19.2893 6.93517 19.0512 6.44198 18.558C5.94879 18.0648 5.71067 17.4162 5.5957 16.4802C5.56071 16.4856 5.52487 16.4884 5.48837 16.4884H2.69767C2.31236 16.4884 2 16.176 2 15.7907C2 15.4054 2.31236 15.093 2.69767 15.093H5.48837L5.50495 15.0932C5.49342 14.6717 5.48944 14.2084 5.48837 13.6977H2.69767C2.31236 13.6977 2 13.3853 2 13C2 12.6147 2.31236 12.3023 2.69767 12.3023H5.48884C5.48991 11.7916 5.49342 11.3283 5.50495 10.9068L5.48837 10.907H2.69767C2.31236 10.907 2 10.5946 2 10.2093C2 9.82399 2.31236 9.51163 2.69767 9.51163H5.48837C5.52487 9.51163 5.56071 9.51443 5.5957 9.51984C5.71067 8.58381 5.94879 7.93517 6.44198 7.44198C6.93517 6.94879 7.58381 6.71067 8.51984 6.5957C8.51443 6.56072 8.51163 6.52487 8.51163 6.48837V3.69767C8.51163 3.31236 8.82399 3 9.2093 3C9.59462 3 9.90698 3.31236 9.90698 3.69767V6.48837L9.90678 6.50495C10.3283 6.49342 10.7916 6.48944 11.3023 6.48837V3.69767C11.3023 3.31236 11.6147 3 12 3ZM11.0238 8.5814C10.4054 8.58136 9.87247 8.58133 9.44573 8.63871C8.98839 8.70019 8.55001 8.83885 8.19443 9.19443C7.83885 9.55001 7.70019 9.98839 7.63871 10.4457C7.58133 10.8725 7.58136 11.4054 7.5814 12.0238V13.9762C7.58136 14.5946 7.58133 15.1275 7.63871 15.5543C7.70019 16.0116 7.83885 16.45 8.19443 16.8056C8.55001 17.1612 8.98839 17.2998 9.44573 17.3613C9.87247 17.4187 10.4054 17.4186 11.0238 17.4186H12.9762C13.5946 17.4186 14.1275 17.4187 14.5543 17.3613C15.0116 17.2998 15.45 17.1612 15.8056 16.8056C16.1612 16.45 16.2998 16.0116 16.3613 15.5543C16.4187 15.1275 16.4186 14.5946 16.4186 13.9762V12.0238C16.4186 11.4054 16.4187 10.8725 16.3613 10.4457C16.2998 9.98839 16.1612 9.55001 15.8056 9.19443C15.45 8.83885 15.0116 8.70019 14.5543 8.63871C14.1275 8.58133 13.5947 8.58136 12.9762 8.5814H11.0238Z"
                        fill="#4E4E4E"
                      />
                      <path
                        opacity="0.5"
                        d="M9.18091 10.1809C9.23402 10.1278 9.32886 10.0621 9.63147 10.0214C9.95415 9.97804 10.3921 9.97656 11.0696 9.97656H12.9301C13.6075 9.97656 14.0455 9.97804 14.3682 10.0214C14.6708 10.0621 14.7656 10.1278 14.8187 10.1809C14.8718 10.234 14.9375 10.3289 14.9782 10.6315C15.0216 10.9542 15.0231 11.3921 15.0231 12.0696V13.9301C15.0231 14.6075 15.0216 15.0455 14.9782 15.3682C14.9375 15.6708 14.8718 15.7656 14.8187 15.8187C14.7656 15.8718 14.6708 15.9375 14.3682 15.9782C14.0455 16.0216 13.6075 16.0231 12.9301 16.0231H11.0696C10.3921 16.0231 9.95415 16.0216 9.63147 15.9782C9.32886 15.9375 9.23402 15.8718 9.18091 15.8187C9.1278 15.7656 9.06211 15.6708 9.02143 15.3682C8.97804 15.0455 8.97656 14.6075 8.97656 13.9301V12.0696C8.97656 11.3921 8.97804 10.9542 9.02143 10.6315C9.06211 10.3289 9.1278 10.234 9.18091 10.1809Z"
                        fill="#4E4E4E"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-[#C4C4C4]">CPU</div>
                      <div className="font-medium text-[#4E4E4E] text-sm leading-tight">
                        Apple A16 Bionic
                      </div>
                    </div>
                  </div>

                  {/* Number of Cores */}
                  <div className="bg-[#F4F4F4] rounded-[7px] p-4 flex items-center gap-2 w-[168px] h-[64px] min-w-[168px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11C7 9.11438 7 8.17157 7.58579 7.58579C8.17157 7 9.11438 7 11 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 14.8856 17 15.8284 16.4142 16.4142C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 16.4142C7 15.8284 7 14.8856 7 13V11Z"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z"
                        fill="#4E4E4E"
                      />
                      <path
                        d="M10 7V4"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 7V4"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17 10H20"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17 14H20"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10 20V17"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 20V17"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 10H7"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 14H7"
                        stroke="#4E4E4E"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-[#C4C4C4] leading-tight">
                        Number of Cores
                      </div>
                      <div className="font-medium text-[#4E4E4E]">6</div>
                    </div>
                  </div>

                  {/* Main Camera */}
                  <div className="bg-[#F4F4F4] rounded-[7px] p-4 flex items-center gap-2 w-[168px] h-[64px] min-w-[168px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21ZM12 9.27273C9.69881 9.27273 7.83333 11.1043 7.83333 13.3636C7.83333 15.623 9.69881 17.4545 12 17.4545C14.3012 17.4545 16.1667 15.623 16.1667 13.3636C16.1667 11.1043 14.3012 9.27273 12 9.27273ZM12 10.9091C10.6193 10.9091 9.5 12.008 9.5 13.3636C9.5 14.7192 10.6193 15.8182 12 15.8182C13.3807 15.8182 14.5 14.7192 14.5 13.3636C14.5 12.008 13.3807 10.9091 12 10.9091ZM16.7222 10.0909C16.7222 9.63904 17.0953 9.27273 17.5556 9.27273H18.6667C19.1269 9.27273 19.5 9.63904 19.5 10.0909C19.5 10.5428 19.1269 10.9091 18.6667 10.9091H17.5556C17.0953 10.9091 16.7222 10.5428 16.7222 10.0909Z"
                        fill="#4E4E4E"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-[#C4C4C4]">Main camera</div>
                      <div className="font-medium text-[#4E4E4E] text-sm">
                        48-12-12 MP
                      </div>
                    </div>
                  </div>

                  {/* Front Camera */}
                  <div className="bg-[#F4F4F4] rounded-[7px] p-4 flex items-center gap-2 w-[168px] h-[64px] min-w-[168px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2222 21H9.77778C6.65675 21 5.09624 21 3.97524 20.2646C3.48995 19.9462 3.07328 19.5371 2.74902 19.0607C2 17.9601 2 16.4279 2 13.3636C2 10.2994 2 8.76721 2.74902 7.6666C3.07328 7.19014 3.48995 6.78104 3.97524 6.46268C4.69555 5.99013 5.59733 5.82123 6.978 5.76086C7.63685 5.76086 8.20412 5.27068 8.33333 4.63636C8.52715 3.68489 9.37805 3 10.3663 3H13.6337C14.6219 3 15.4728 3.68489 15.6667 4.63636C15.7959 5.27068 16.3631 5.76086 17.022 5.76086C18.4027 5.82123 19.3044 5.99013 20.0248 6.46268C20.51 6.78104 20.9267 7.19014 21.251 7.6666C22 8.76721 22 10.2994 22 13.3636C22 16.4279 22 17.9601 21.251 19.0607C20.9267 19.5371 20.51 19.9462 20.0248 20.2646C18.9038 21 17.3433 21 14.2222 21ZM15.2697 9.59961C15.2697 9.1854 14.9339 8.84961 14.5197 8.84961C14.1055 8.84961 13.7697 9.1854 13.7697 9.59961V9.74316C12.2996 8.99864 10.4581 9.24066 9.22951 10.4692C7.69954 11.9992 7.69954 14.4798 9.22951 16.0098C10.7595 17.5397 13.2401 17.5397 14.77 16.0098C15.421 15.3588 15.7957 14.5337 15.8923 13.6844C15.9391 13.2728 15.6434 12.9012 15.2319 12.8544C14.8203 12.8076 14.4487 13.1033 14.4019 13.5148C14.3422 14.0392 14.112 14.5465 13.7094 14.9491C12.7652 15.8933 11.2344 15.8933 10.2902 14.9491C9.34598 14.0049 9.34598 12.4741 10.2902 11.5299C10.9379 10.8822 11.8617 10.6788 12.6828 10.9198C12.3737 11.0637 12.1928 11.4061 12.2661 11.7542C12.3515 12.1595 12.7492 12.4189 13.1546 12.3335L14.6743 12.0135C15.0213 11.9404 15.2697 11.6342 15.2697 11.2796V9.59961Z"
                        fill="#4E4E4E"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-[#C4C4C4]">Front-camera</div>
                      <div className="font-medium text-[#4E4E4E]">12 MP</div>
                    </div>
                  </div>

                  {/* Battery Capacity */}
                  <div className="bg-[#F4F4F4] rounded-[7px] p-4 flex items-center gap-2 w-[168px] h-[64px] min-w-[168px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.42187 0.75C8.71912 0.75 8.48437 0.90825 8.48437 1.6875V2.39025H6.37462C4.98937 2.39025 4.73438 2.646 4.73438 4.0305V21.609C4.73438 22.9942 4.99012 23.2493 6.37462 23.2493H17.6246C19.0099 23.2493 19.2649 22.9935 19.2649 21.609V4.0305C19.2649 2.64525 19.0091 2.39025 17.6246 2.39025H15.5149V1.6875C15.5149 0.909 15.2809 0.75 14.5774 0.75H9.42187ZM6.37462 5.67225C6.37462 3.79725 6.14062 4.032 8.01487 4.032C8.95237 4.032 15.2809 4.032 15.9836 4.032C17.8586 4.032 17.6239 3.798 17.6239 5.67225C17.6239 6.60975 17.6239 19.032 17.6239 19.9695C17.6239 21.8445 17.8579 21.6097 15.9836 21.6097C15.0461 21.6097 8.95237 21.6097 8.01487 21.6097C6.13988 21.6097 6.37462 21.8438 6.37462 19.9695C6.37462 19.0312 6.37462 6.60975 6.37462 5.67225ZM7.54612 8.9535H16.4524C16.7111 8.9535 16.9211 9.1635 16.9211 9.42225V12.0007C16.9211 12.2595 16.7111 12.4695 16.4524 12.4695H7.54612C7.28737 12.4695 7.07737 12.2595 7.07737 12.0007V9.42225C7.07737 9.1635 7.28737 8.9535 7.54612 8.9535ZM7.54612 13.1722H16.4524C16.7111 13.1722 16.9211 13.3822 16.9211 13.641V16.2195C16.9211 16.4782 16.7111 16.6882 16.4524 16.6882H7.54612C7.28737 16.6882 7.07737 16.4782 7.07737 16.2195V13.641C7.07737 13.3822 7.28737 13.1722 7.54612 13.1722ZM7.54612 17.391H16.4524C16.7111 17.391 16.9211 17.601 16.9211 17.8597V20.4382C16.9211 20.697 16.7111 20.907 16.4524 20.907H7.54612C7.28737 20.907 7.07737 20.697 7.07737 20.4382V17.8597C7.07737 17.601 7.28737 17.391 7.54612 17.391Z"
                        fill="#4E4E4E"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-[#C4C4C4] leading-tight">
                        Battery capacity
                      </div>
                      <div className="font-medium text-[#4E4E4E] text-sm">
                        4323 mAh
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-6">
                <p
                  className="text-sm leading-6 tracking-[0.03em]"
                  style={{ fontFamily: "Manrope", color: "#6C6C6C" }}
                >
                  Enhanced capabilities thanks to an enlarged display of 6.7
                  inches and work without recharging throughout the day.
                  Incredible photos as in weak, yes and in bright light using
                  the new system with two cameras{" "}
                  <span className="underline" style={{ color: "#2C2C2C" }}>
                    more...
                  </span>
                </p>
              </div>

              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleAddToWishlist}
                  className={`w-[260px] h-[56px] min-w-[136px] px-14 py-4 text-sm font-medium rounded-[6px] border transition-colors ${
                    isInWishlist(product.id)
                      ? "border-red-500 bg-red-100 text-red-600"
                      : "border-black text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Add to Wishlist
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-6 py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {product.details.title}
          </h2>
          <div className="max-w-none">
            <p
              className="text-sm leading-6"
              style={{
                fontFamily: "Manrope",
                fontWeight: 500,
                color: "#9D9D9D",
              }}
            >
              Just as a book is judged by its cover, the first thing you notice
              when you pick up a modern smartphone is the display. Nothing
              surprising, because advanced technologies allow you to practically
              level the display frames and cutouts for the front camera and
              speaker, leaving no room for bold design solutions. And how good
              that in such realities Apple everything is fine with displays.
              Both critics and mass consumers always praise the quality of the
              picture provided by the products of the Californian brand. And
              last year's 6.7-inch Retina panels, which had ProMotion, caused
              real admiration for many.
            </p>

            {Object.entries(product.details.specs).map(([category, specs]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
                  {category}
                </h3>
                <div>
                  {Object.entries(specs).map(([key, value]) => {
                    // Handle the "Additionally" field specially
                    if (key === "Additionally") {
                      const items = value.split(", ");
                      return (
                        <div
                          key={key}
                          className="py-3 border-b border-gray-200"
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-gray-600">{key}</span>
                            <div className="text-gray-800 font-medium text-right">
                              {items.map((item, index) => (
                                <div key={index} className="mb-1 last:mb-0">
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={key}
                        className="flex justify-between py-3 border-b border-gray-200"
                      >
                        <span className="text-gray-600">{key}</span>
                        <span className="text-gray-800 font-medium text-right">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* View More Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowMoreDetails(!showMoreDetails)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                {showMoreDetails ? "View Less" : "View More"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-gray-600 transition-transform ${
                    showMoreDetails ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Overall Rating Summary */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {product.reviews.average}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  of {product.reviews.total} reviews
                </div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(product.reviews.average)
                          ? "text-[#FFB547]"
                          : i < product.reviews.average
                          ? "text-[#FFB547]"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-4">
              {[
                {
                  label: "Excellent",
                  count: product.reviews.distribution.excellent,
                  percentage:
                    (product.reviews.distribution.excellent /
                      product.reviews.total) *
                    100,
                },
                {
                  label: "Good",
                  count: product.reviews.distribution.good,
                  percentage:
                    (product.reviews.distribution.good /
                      product.reviews.total) *
                    100,
                },
                {
                  label: "Average",
                  count: product.reviews.distribution.average,
                  percentage:
                    (product.reviews.distribution.average /
                      product.reviews.total) *
                    100,
                },
                {
                  label: "Below Average",
                  count: product.reviews.distribution.belowAverage,
                  percentage:
                    (product.reviews.distribution.belowAverage /
                      product.reviews.total) *
                    100,
                },
                {
                  label: "Poor",
                  count: product.reviews.distribution.poor,
                  percentage:
                    (product.reviews.distribution.poor /
                      product.reviews.total) *
                    100,
                },
              ].map((rating) => (
                <div key={rating.label} className="flex items-center gap-4">
                  <div className="w-20 text-sm text-gray-600">
                    {rating.label}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${rating.percentage}%`,
                        backgroundColor: "#FFB547",
                      }}
                    ></div>
                  </div>
                  <div className="w-8 text-sm text-gray-600 text-right">
                    {rating.count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leave Comment Section */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Leave Comment"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Individual Reviews */}
          <div className="mt-8 space-y-4">
            {(showAllReviews
              ? product.reviews.items
              : product.reviews.items.slice(0, 4)
            ).map((review, index) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-[10px] w-full"
                style={{
                  minHeight: review.images ? "256px" : "160px",
                  padding: "24px 28px 24px 16px",
                }}
              >
                <div className="flex items-start gap-[19px]">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0">
                    <Image
                      src={review.user.avatar}
                      alt={review.user.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-base mb-1">
                          {review.user.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-[#FFB547]"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 ml-4 flex-shrink-0">
                        {review.date}
                      </div>
                    </div>
                    <div className="relative">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {review.comment}
                      </p>
                      {!showAllReviews && index === 3 && (
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
                      )}
                    </div>
                    {review.images && (
                      <div className="flex gap-2 mt-4">
                        {review.images.map(
                          (image: string, imgIndex: number) => (
                            <div
                              key={imgIndex}
                              className="w-16 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0"
                            >
                              <Image
                                src={image}
                                alt={`Review image ${imgIndex + 1}`}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {!showAllReviews && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllReviews(true)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                View More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <GadgetProductCard key={p.id} variant={1} product={p} />
            ))}
          </div>
        </div>
      </div>
      <GadgetFooter variant={1} />
    </div>
  );
}
