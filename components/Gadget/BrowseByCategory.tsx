"use client";

import Link from "next/link";
import React, { useRef } from "react";

interface CategoryItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const categories: CategoryItem[] = [
  {
    label: "Phones",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#c1)">
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
          <clipPath id="c1">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Smart Watches",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#c2)">
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
        </g>
        <defs>
          <clipPath id="c2">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Cameras",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#c3)">
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
          <clipPath id="c3">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Headphones",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#c4)">
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
          <clipPath id="c4">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Computers",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#c5)">
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
          <clipPath id="c5">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  // Extra 5 categories
  {
    label: "Tablets",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="8"
          width="28"
          height="32"
          rx="3"
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="24" cy="37" r="1.5" fill="black" />
      </svg>
    ),
  },
  {
    label: "Drones",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="4" stroke="black" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="black" strokeWidth="2" />
        <circle cx="36" cy="12" r="4" stroke="black" strokeWidth="2" />
        <circle cx="12" cy="36" r="4" stroke="black" strokeWidth="2" />
        <circle cx="36" cy="36" r="4" stroke="black" strokeWidth="2" />
        <line x1="20" y1="20" x2="14" y2="14" stroke="black" strokeWidth="2" />
        <line x1="28" y1="20" x2="34" y2="14" stroke="black" strokeWidth="2" />
        <line x1="20" y1="28" x2="14" y2="34" stroke="black" strokeWidth="2" />
        <line x1="28" y1="28" x2="34" y2="34" stroke="black" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Smart Home",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 22L24 10L40 22V38C40 39.1046 39.1046 40 38 40H10C8.89543 40 8 39.1046 8 38V22Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 24C30.2091 24 32 25.7909 32 28"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 28C29.1046 28 30 28.8954 30 30"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Accessories",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="18"
          width="28"
          height="18"
          rx="2"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M16 18V14C16 11.7909 17.7909 10 20 10H28C30.2091 10 32 11.7909 32 14V18"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Cables",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 30C10 34.4183 13.5817 38 18 38H30C34.4183 38 38 34.4183 38 30"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="16"
          y="12"
          width="16"
          height="8"
          rx="2"
          stroke="black"
          strokeWidth="2"
        />
        <line x1="20" y1="20" x2="20" y2="26" stroke="black" strokeWidth="2" />
        <line x1="28" y1="20" x2="28" y2="26" stroke="black" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Chargers",
    href: "/gadget1/products",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="14"
          width="24"
          height="18"
          rx="2"
          stroke="black"
          strokeWidth="2"
        />
        <rect x="34" y="20" width="4" height="6" rx="1" fill="black" />
        <path d="M24 18L20 26H24L22 32L28 24H24L26 18H24Z" fill="black" />
      </svg>
    ),
  },
];

export default function BrowseByCategory() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (delta: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-black">
          Browse By Category
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous category"
            className="p-2 rounded hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
            onClick={() => scrollByAmount(-300)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3338 27.6667C21.0683 27.6679 20.8136 27.5622 20.6271 27.3733L9.96042 16.7067C9.57048 16.3162 9.57048 15.6838 9.96042 15.2933L20.6271 4.62667C21.0211 4.25952 21.6351 4.27035 22.0159 4.65117C22.3967 5.03199 22.4076 5.64599 22.0404 6.04L12.0804 16L22.0404 25.96C22.4304 26.3504 22.4304 26.9829 22.0404 27.3733C21.8539 27.5622 21.5992 27.6679 21.3338 27.6667Z"
                fill="black"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next category"
            className="p-2 rounded hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
            onClick={() => scrollByAmount(300)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6662 4.33333C10.9317 4.33208 11.1864 4.43782 11.3729 4.62667L22.0396 15.2933C22.4295 15.6838 22.4295 16.3162 22.0396 16.7067L11.3729 27.3733C10.9789 27.7405 10.3649 27.7296 9.98408 27.3488C9.60327 26.968 9.59243 26.354 9.95958 25.96L19.9196 16L9.95958 6.04C9.56964 5.64958 9.56964 5.01709 9.95958 4.62667C10.1461 4.43782 10.4008 4.33208 10.6662 4.33333Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {categories.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="flex-shrink-0 flex flex-col items-center justify-center min-w-[135px] h-32 px-[52px] py-6 gap-2 bg-[#EDEDED] rounded-[15px] hover:bg-gray-200 transition-colors"
          >
            {c.icon}
            <span className="text-xs font-medium text-black text-center">
              {c.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
