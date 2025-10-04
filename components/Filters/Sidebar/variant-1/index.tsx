"use client";

import { useId, useMemo, useState } from "react";

function SquareCheckbox({
  name,
  value,
  defaultChecked,
  label,
  onChange,
}: {
  name: string;
  value: string;
  defaultChecked?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}) {
  const id = useId();
  return (
    <div className="flex items-center gap-3 py-1 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer sr-only"
      />
      <span className="inline-grid place-items-center h-5 w-5 border-[1.5px] border-black bg-white peer-checked:border-black peer-checked:bg-black transition-colors duration-200">
        <div className="w-full h-full border-[2px] border-white">
          <svg
            viewBox="0 0 16 12"
            className="h-3 w-3.5 opacity-0 peer-checked:opacity-100 pointer-events-none text-white transition-opacity duration-200"
            aria-hidden="true"
          >
            <path
              d="M1 6.5L5.5 11L15 1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </span>
      <label
        htmlFor={id}
        className="cursor-pointer text-gray-700 select-none hover:text-gray-900 transition-colors duration-200 peer-checked:text-gray-900"
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
        "Gucci",
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

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >(() => {
    const initial: Record<string, string[]> = {};
    groups.forEach((group) => {
      if (group.selected) {
        initial[group.name] = group.selected;
      } else {
        initial[group.name] = [];
      }
    });
    return initial;
  });

  const handleFilterChange = (
    groupName: string,
    value: string,
    checked: boolean
  ) => {
    setSelectedFilters((prev) => {
      const current = prev[groupName] || [];
      if (checked) {
        return {
          ...prev,
          [groupName]: [...current, value],
        };
      } else {
        return {
          ...prev,
          [groupName]: current.filter((item) => item !== value),
        };
      }
    });
  };

  const clearAllFilters = () => {
    const cleared: Record<string, string[]> = {};
    groups.forEach((group) => {
      cleared[group.name] = [];
    });
    setSelectedFilters(cleared);
    setMinValue(absoluteMin);
    setMaxValue(absoluteMax);
  };

  const minPercent = useMemo(
    () => ((minValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
    [minValue, absoluteMin, absoluteMax]
  );
  const maxPercent = useMemo(
    () => ((maxValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
    [maxValue, absoluteMin, absoluteMax]
  );

  return (
    <aside className="w-64 bg-white border border-gray-200 p-4 text-sm text-gray-900">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-gray-900">51 Results</span>
        <button
          type="button"
          onClick={clearAllFilters}
          className="border border-gray-300 px-3 py-1.5 text-[12px] uppercase tracking-[0.15em] leading-none text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors duration-200"
        >
          CLEAR FILTERS
        </button>
      </div>

      <form method="get" action={action} className="space-y-0">
        <div className="mb-8">
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
              className="bg-black text-white px-6 py-2 text-[12px] uppercase tracking-[0.25em] leading-none"
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
          <div key={g.title} className="mb-8">
            {idx > 4 && <div className="border-t border-gray-300 mb-6"></div>}
            <h3 className="font-semibold mb-4 text-gray-900 text-sm uppercase tracking-wide">
              {g.title}
            </h3>
            {g.title === "Collections" ? (
              <ul className="divide-y divide-neutral-200">
                {g.options.map((o) => (
                  <li key={o}>
                    <button
                      type="submit"
                      name={g.name}
                      value={o}
                      className="w-full text-left py-3 px-2 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 cursor-pointer focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-gray-300 focus:ring-inset"
                    >
                      {o}
                    </button>
                  </li>
                ))}
              </ul>
            ) : g.type === "buttons" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {g.options.map((o) => (
                  <button
                    key={o}
                    className="w-full h-8 bg-black text-white text-[12px] hover:bg-gray-800 active:bg-gray-900 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    name={g.name}
                    value={o}
                    type="submit"
                  >
                    {o}
                  </button>
                ))}
              </div>
            ) : (
              <ul className="space-y-0">
                {g.options.map((o, optionIdx) => (
                  <li key={o} className="form-control">
                    <SquareCheckbox
                      name={g.name}
                      value={o}
                      defaultChecked={
                        selectedFilters[g.name]?.includes(o) || false
                      }
                      label={o}
                      onChange={(checked) =>
                        handleFilterChange(g.name, o, checked)
                      }
                    />
                    {g.title !== "Availability" &&
                      optionIdx < g.options.length - 1 && (
                        <div className="border-b border-neutral-200 my-2"></div>
                      )}
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
