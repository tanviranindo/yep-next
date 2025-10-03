"use client";

import { useId, useMemo, useState } from "react";

function SquareCheckbox({
  name,
  value,
  defaultChecked,
  label,
}: {
  name: string;
  value: string;
  defaultChecked?: boolean;
  label: string;
}) {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="inline-grid place-items-center h-5 w-5 border-2 border-neutral-900 rounded-none bg-white peer-checked:border-neutral-900">
        <svg
          viewBox="0 0 16 12"
          className="h-3 w-3.5 opacity-0 peer-checked:opacity-100 pointer-events-none text-neutral-900"
          aria-hidden="true"
        >
          <path
            d="M1 6.5L5.5 11L15 1"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <label
        htmlFor={id}
        className="cursor-pointer text-neutral-900 select-none"
      >
        {label}
      </label>
    </div>
  );
}

export interface FilterGroup {
  title: string;
  name: string;
  options: string[];
  type?: "checkbox" | "buttons";
  selected?: string[];
}

export interface FilterSidebarV1Props {
  action?: string;
  price?: {
    name?: string;
    min: number;
    max: number;
    value?: number;
    label?: string;
  };
  groups?: FilterGroup[];
  applyLabel?: string;
}

export default function FilterSidebarVariant1({
  action,
  price = {
    min: 5500,
    max: 10500,
    value: 8000,
    name: "price",
    label: "Filter by Price",
  },
  groups = [
    {
      title: "Categories",
      name: "category",
      options: ["All", "Men", "Women", "Accessories"],
      type: "checkbox",
    },
    {
      title: "Collections",
      name: "collection",
      options: [
        "Men's Top Wear",
        "Men's Jeans",
        "Women's Top Wear",
        "Women's Jeans",
        "Sunglass",
        "Watch",
        "Belt",
      ],
      type: "checkbox",
    },
    {
      title: "Size",
      name: "size",
      options: ["S", "M", "L", "XL", "XXL", "XXXL"],
      type: "buttons",
    },
    {
      title: "Product Brands",
      name: "brand",
      options: [
        "All",
        "Verchache",
        "Premium Style",
        "Velvet",
        "Haus Of Core",
        "Guochi",
      ],
      type: "checkbox",
    },
    {
      title: "Availability",
      name: "availability",
      options: ["In stock (164)", "Out of stock (28)"],
      type: "checkbox",
    },
  ],
  applyLabel = "FILTER",
}: FilterSidebarV1Props) {
  const absoluteMin = price.min;
  const absoluteMax = price.max;
  const [minValue, setMinValue] = useState<number>(price.min);
  const [maxValue, setMaxValue] = useState<number>(price.value ?? price.max);

  const minPercent = useMemo(
    () => ((minValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
    [minValue, absoluteMin, absoluteMax]
  );
  const maxPercent = useMemo(
    () => ((maxValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
    [maxValue, absoluteMin, absoluteMax]
  );

  return (
    <aside className="w-full md:w-64 bg-white border border-base-200 p-4 text-sm text-neutral-900">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold">51 Results</span>
        <button
          type="button"
          className="rounded-none border border-neutral-900 px-4 py-2 text-[12px] uppercase tracking-[0.25em] leading-none"
        >
          CLEAR FILTERS
        </button>
      </div>

      <form method="get" action={action} className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="uppercase tracking-widest text-xs text-neutral-600">
              {price.label ?? "Filter by Price"}
            </span>
            <span className="text-xs text-neutral-600">
              BDT {price.min.toLocaleString()} — BDT{" "}
              {price.max.toLocaleString()}+
            </span>
          </div>
          <div className="relative mt-2 h-6">
            <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-neutral-200" />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-neutral-900"
              style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
            />
            <input
              type="range"
              min={absoluteMin}
              max={absoluteMax}
              value={minValue}
              onChange={(e) => {
                const val = Math.min(Number(e.target.value), maxValue - 1);
                setMinValue(val);
              }}
              step={1}
              className="absolute inset-0 z-10 w-full bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-neutral-900 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:bg-neutral-900 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full"
            />
            <input
              type="range"
              min={absoluteMin}
              max={absoluteMax}
              value={maxValue}
              onChange={(e) => {
                const val = Math.max(Number(e.target.value), minValue + 1);
                setMaxValue(val);
              }}
              step={1}
              className="absolute inset-0 z-20 w-full bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-neutral-900 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:bg-neutral-900 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full"
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-xs text-neutral-700">
              BDT {minValue.toLocaleString()} — BDT {maxValue.toLocaleString()}
            </div>
            <button
              className="rounded-none bg-black text-white px-6 py-2 text-[12px] uppercase tracking-[0.25em] leading-none"
              type="submit"
            >
              {applyLabel}
            </button>
            {/* submit actual min/max values */}
            <input
              type="hidden"
              name={(price.name ?? "price") + "_min"}
              value={minValue}
            />
            <input
              type="hidden"
              name={(price.name ?? "price") + "_max"}
              value={maxValue}
            />
          </div>
        </div>

        {groups.map((g, idx) => (
          <div key={g.title}>
            {idx > 0 && <div className="divider my-4"></div>}
            <h3 className="font-semibold mb-2">{g.title}</h3>
            {g.title === "Collections" ? (
              <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
                {g.options.map((o) => (
                  <li key={o}>
                    <button
                      type="submit"
                      name={g.name}
                      value={o}
                      className="w-full text-left py-3 px-2 hover:bg-neutral-50"
                    >
                      {o}
                    </button>
                  </li>
                ))}
              </ul>
            ) : g.type === "buttons" ? (
              <div className="flex flex-wrap gap-2">
                {g.options.map((o) => (
                  <button
                    key={o}
                    className="w-10 h-8 bg-black text-white rounded-none text-[12px]"
                    name={g.name}
                    value={o}
                    type="submit"
                  >
                    {o}
                  </button>
                ))}
              </div>
            ) : (
              <ul className="space-y-1">
                {g.options.map((o) => (
                  <li key={o} className="form-control">
                    <SquareCheckbox
                      name={g.name}
                      value={o}
                      defaultChecked={g.selected?.includes(o)}
                      label={o}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </form>
    </aside>
  );
}
