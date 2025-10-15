"use client";

import { useEffect, useId, useMemo, useState } from "react";

export type FurnitureFilterVariant = 1 | 2;

function SquareCheckbox({
  name,
  value,
  checked,
  label,
  onChange,
  variant = 1,
}: {
  name: string;
  value: string;
  checked?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
  variant?: 1 | 2;
}) {
  const id = useId();

  if (variant === 2) {
    return (
      <div className="flex items-center gap-3 py-3 cursor-pointer group hover:bg-white/50 rounded-md px-2 -mx-2 transition-colors">
        <input
          id={id}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer sr-only"
        />
        <div className="relative">
          <span
            className={`w-6 h-6 border-2 rounded-md transition-all duration-200 flex items-center justify-center ${
              checked
                ? "bg-[#8B4513] border-[#8B4513] shadow-sm"
                : "border-gray-300 group-hover:border-[#8B4513] bg-white"
            }`}
          >
            {checked && (
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </div>
        <label
          htmlFor={id}
          className={`text-sm cursor-pointer transition-colors duration-200 flex-1 ${
            checked
              ? "text-gray-900 font-semibold"
              : "text-gray-700 group-hover:text-gray-900"
          }`}
        >
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 py-1 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
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
  onFilterChange?: (
    filters: Record<string, string[]>,
    priceRange: [number, number]
  ) => void;
  totalResults?: number;
}

export interface FilterSidebarV2Props {
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
  onFilterChange?: (
    filters: Record<string, string[]>,
    priceRange: [number, number]
  ) => void;
  totalResults?: number;
}

interface FurnitureFilterProps {
  variant: FurnitureFilterVariant;
  filterProps?: FilterSidebarV1Props | FilterSidebarV2Props;
}

/**
 * FurnitureFilter - Unified component for Furniture filter variants
 *
 * Variant 1: Furniture Studio filter sidebar
 * Variant 2: Insole filter sidebar
 */
export default function FurnitureFilter({ variant, filterProps }: FurnitureFilterProps) {
  const {
    action,
    price = variant === 1
      ? { min: 5500, max: 10500, value: 8000, name: "price", label: "Filter by Price" }
      : { min: 0, max: 10000, value: 10000, name: "price", label: "Filter by Price" },
    groups = variant === 1
      ? [
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
        ]
      : [],
    applyLabel = "FILTER",
    onFilterChange,
    totalResults,
  } = filterProps || {};

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

  const handlePriceChange = (newMin: number, newMax: number) => {
    setMinValue(newMin);
    setMaxValue(newMax);
  };

  // Notify parent of filter changes via useEffect
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selectedFilters, [minValue, maxValue]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters, minValue, maxValue]);

  const clearAllFilters = () => {
    const cleared: Record<string, string[]> = {};
    groups.forEach((group) => {
      cleared[group.name] = [];
    });
    setSelectedFilters(cleared);
    setMinValue(absoluteMin);
    setMaxValue(absoluteMax);
    // Parent will be notified via useEffect
  };

  const minPercent = useMemo(
    () => ((minValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
    [minValue, absoluteMin, absoluteMax]
  );
  const maxPercent = useMemo(
    () => ((maxValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
    [maxValue, absoluteMin, absoluteMax]
  );

  if (variant === 2) {
    // Variant 2: Insole Filter
    return (
      <aside className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Results Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <p className="text-sm text-gray-600 mt-1">
              {totalResults !== undefined
                ? `${totalResults} products found`
                : "51 products found"}
            </p>
          </div>
          <button
            type="button"
            onClick={clearAllFilters}
            className="text-sm text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors px-3 py-1 rounded-md hover:bg-[#8B4513]/10"
          >
            Clear All
          </button>
        </div>

        <div className="p-6 space-y-8">
          <form method="get" action={action} className="space-y-8">
            {/* Price Range Filter */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {price.label ?? "Price Range"}
                </h3>
                <span className="text-sm font-medium text-[#8B4513] bg-white px-3 py-1 rounded-md">
                  BDT {minValue.toLocaleString()} - BDT{" "}
                  {maxValue.toLocaleString()}
                </span>
              </div>

              <div className="relative mb-4">
                <div className="h-3 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-3 bg-[#8B4513] rounded-full"
                    style={{
                      left: `${minPercent}%`,
                      right: `${100 - maxPercent}%`,
                    }}
                  />
                </div>

                <input
                  type="range"
                  min={absoluteMin}
                  max={absoluteMax}
                  value={minValue}
                  onChange={(e) => {
                    const val = Math.min(Number(e.target.value), maxValue - 1);
                    handlePriceChange(val, maxValue);
                  }}
                  step={1}
                  className="absolute inset-0 w-full h-3 bg-transparent appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#8B4513] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-[#8B4513] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-lg"
                />
                <input
                  type="range"
                  min={absoluteMin}
                  max={absoluteMax}
                  value={maxValue}
                  onChange={(e) => {
                    const val = Math.max(Number(e.target.value), minValue + 1);
                    handlePriceChange(minValue, val);
                  }}
                  step={1}
                  className="absolute inset-0 w-full h-3 bg-transparent appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#8B4513] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-[#8B4513] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-lg"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-600 font-medium">
                <span>BDT {absoluteMin.toLocaleString()}</span>
                <span>BDT {absoluteMax.toLocaleString()}</span>
              </div>
            </div>

            {/* Filter Groups */}
            {groups.map((g) => (
              <div key={g.title} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {g.title}
                </h3>
                <div className="space-y-3">
                  {g.options.map((o) => (
                    <SquareCheckbox
                      key={o}
                      name={g.name}
                      value={o}
                      checked={selectedFilters[g.name]?.includes(o) || false}
                      label={o}
                      onChange={(checked) =>
                        handleFilterChange(g.name, o, checked)
                      }
                      variant={2}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Apply Button */}
            <div className="pt-6">
              <button
                className="w-full bg-[#8B4513] text-white py-4 px-6 font-bold text-base uppercase tracking-wider hover:bg-[#A0522D] transition-colors rounded-lg shadow-md hover:shadow-lg"
                type="button"
                onClick={() => {
                  console.log("Applying filters:");
                  console.log("Selected Filters:", selectedFilters);
                  console.log("Price Range:", { minValue, maxValue });
                }}
              >
                {applyLabel}
              </button>
            </div>

            {/* Hidden inputs for form submission */}
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
          </form>
        </div>
      </aside>
    );
  }

  // Variant 1: Furniture Studio Filter
  return (
    <aside className="w-64 bg-white border border-gray-200 p-4 text-sm text-gray-900">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-gray-900">
          {totalResults !== undefined
            ? `${totalResults} Results`
            : "51 Results"}
        </span>
        <button
          type="button"
          onClick={clearAllFilters}
          className="border border-gray-300 px-3 py-1.5 text-[12px] uppercase tracking-[0.15em] leading-none text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
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
                handlePriceChange(val, maxValue);
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
                handlePriceChange(minValue, val);
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
              className="bg-black text-white px-6 py-2 text-[12px] uppercase tracking-[0.25em] leading-none hover:bg-gray-800 active:bg-gray-900 cursor-pointer"
              type="button"
              onClick={() => {
                console.log("Applying filters:");
                console.log("Selected Filters:", selectedFilters);
                console.log("Price Range:", { minValue, maxValue });
              }}
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
                      checked={selectedFilters[g.name]?.includes(o) || false}
                      label={o}
                      onChange={(checked) =>
                        handleFilterChange(g.name, o, checked)
                      }
                      variant={1}
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
