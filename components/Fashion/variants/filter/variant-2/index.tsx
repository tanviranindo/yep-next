"use client";

import { useEffect, useId, useMemo, useState } from "react";

function SquareCheckbox({
  name,
  value,
  checked,
  label,
  onChange,
}: {
  name: string;
  value: string;
  checked?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}) {
  const id = useId();
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
              ? "bg-[#D4B896] border-[#D4B896] shadow-sm"
              : "border-gray-300 group-hover:border-[#D4B896] bg-white"
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

export interface FilterGroup {
  title: string;
  name: string;
  options: string[];
  type?: "checkbox" | "buttons";
  selected?: string[];
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

export default function FilterSidebarVariant2({
  action,
  price = {
    min: 0,
    max: 10000,
    value: 10000,
    name: "price",
    label: "Filter by Price",
  },
  groups = [],
  applyLabel = "FILTER",
  onFilterChange,
  totalResults,
}: FilterSidebarV2Props) {
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
          className="text-sm text-[#D4B896] hover:text-[#C4A886] font-semibold transition-colors px-3 py-1 rounded-md hover:bg-[#D4B896]/10"
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
              <span className="text-sm font-medium text-[#D4B896] bg-white px-3 py-1 rounded-md">
                BDT {minValue.toLocaleString()} - BDT{" "}
                {maxValue.toLocaleString()}
              </span>
            </div>

            <div className="relative mb-4">
              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className="absolute h-3 bg-[#D4B896] rounded-full"
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
                className="absolute inset-0 w-full h-3 bg-transparent appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#D4B896] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-[#D4B896] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-lg"
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
                className="absolute inset-0 w-full h-3 bg-transparent appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#D4B896] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-[#D4B896] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-lg"
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
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Apply Button */}
          <div className="pt-6">
            <button
              className="w-full bg-[#D4B896] text-white py-4 px-6 font-bold text-base uppercase tracking-wider hover:bg-[#C4A886] transition-colors rounded-lg shadow-md hover:shadow-lg"
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
