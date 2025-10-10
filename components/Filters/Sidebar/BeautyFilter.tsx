"use client";

import { useId, useMemo, useState } from "react";

function CircleRadio({
  name,
  value,
  checked,
  onChange,
  color,
}: {
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: string;
}) {
  const id = useId();
  return (
    <div className="inline-flex items-center">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer sr-only"
      />
      <label
        htmlFor={id}
        className="cursor-pointer inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-purple-600 transition-all duration-200"
        style={{ backgroundColor: color }}
      >
        {checked && (
          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
        )}
      </label>
    </div>
  );
}

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
    <div className="flex items-center gap-3 py-2">
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer sr-only"
      />
      <span className="inline-grid place-items-center h-4 w-4 border border-gray-400 bg-white peer-checked:border-purple-600 peer-checked:bg-purple-600 transition-colors duration-200 cursor-pointer">
        <svg
          viewBox="0 0 16 12"
          className="h-2.5 w-2.5 opacity-0 peer-checked:opacity-100 pointer-events-none text-white transition-opacity duration-200"
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
      </span>
      <label
        htmlFor={id}
        className="cursor-pointer text-gray-700 text-sm select-none hover:text-gray-900 transition-colors duration-200"
      >
        {label}
      </label>
    </div>
  );
}

export interface BeautyFilterGroup {
  title: string;
  name: string;
  options: Array<{ label: string; value: string; color?: string }>;
  type?: "checkbox" | "radio" | "buttons";
  selected?: string[];
}

export interface BeautyFilterProps {
  price?: {
    name?: string;
    min: number;
    max: number;
    value?: number;
    label?: string;
  };
  groups?: BeautyFilterGroup[];
}

export default function BeautyFilter({
  price = {
    min: 500,
    max: 5000,
    value: 1800,
    name: "price",
    label: "Price",
  },
  groups = [
    {
      title: "Skin Type",
      name: "skinType",
      options: [
        { label: "All", value: "all" },
        { label: "Dry", value: "dry" },
        { label: "Oily", value: "oily" },
        { label: "Combination", value: "combination" },
        { label: "Normal", value: "normal" },
        { label: "Sensitive", value: "sensitive" },
      ],
      type: "checkbox" as const,
    },
    {
      title: "Shade",
      name: "shade",
      options: [
        { label: "Fair", value: "fair", color: "#F5D6C6" },
        { label: "Light", value: "light", color: "#E8B895" },
        { label: "Medium", value: "medium", color: "#D4956C" },
        { label: "Tan", value: "tan", color: "#B4764E" },
        { label: "Deep", value: "deep", color: "#8B5A3C" },
      ],
      type: "radio" as const,
    },
    {
      title: "Brands",
      name: "brand",
      options: [
        { label: "All", value: "all" },
        { label: "GLAMOUR", value: "glamour" },
        { label: "NIKA", value: "nika" },
        { label: "SkinLab", value: "skinlab" },
        { label: "Glow Co.", value: "glowco" },
      ],
      type: "checkbox" as const,
    },
  ],
}: BeautyFilterProps) {
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

  const minPercent = useMemo(
    () => ((minValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
    [minValue, absoluteMin, absoluteMax]
  );
  const maxPercent = useMemo(
    () => ((maxValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100,
    [maxValue, absoluteMin, absoluteMax]
  );

  return (
    <aside className="w-full bg-white p-6 space-y-8">
      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-4 text-gray-900 text-sm">
          {price.label ?? "Price"}
        </h3>
        <div className="relative mt-4 h-6">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gray-200" />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-purple-600"
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
            className="absolute inset-0 z-10 w-full bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-purple-600 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:bg-purple-600 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full"
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
            className="absolute inset-0 z-20 w-full bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-purple-600 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:bg-purple-600 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full"
          />
        </div>
        <div className="mt-3 text-sm text-gray-700">
          BDT {minValue.toLocaleString()} — BDT {maxValue.toLocaleString()}
        </div>
      </div>

      {/* Other Filter Groups */}
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="font-semibold mb-4 text-gray-900 text-sm">
            {g.title}
          </h3>
          {g.type === "radio" ? (
            <div className="flex flex-wrap gap-3">
              {g.options.map((o) => (
                <div key={o.value} className="flex items-center gap-2">
                  <CircleRadio
                    name={g.name}
                    value={o.value}
                    checked={selectedFilters[g.name]?.includes(o.value)}
                    onChange={(checked) =>
                      handleFilterChange(g.name, o.value, checked)
                    }
                    color={o.color}
                  />
                  <label className="text-sm text-gray-700 cursor-pointer">
                    {o.label}
                  </label>
                </div>
              ))}
            </div>
          ) : g.type === "buttons" ? (
            <div className="grid grid-cols-2 gap-2">
              {g.options.map((o) => (
                <button
                  key={o.value}
                  className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm hover:border-purple-600 hover:text-purple-600 transition-colors duration-200"
                >
                  {o.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              {g.options.map((o) => (
                <SquareCheckbox
                  key={o.value}
                  name={g.name}
                  value={o.value}
                  checked={selectedFilters[g.name]?.includes(o.value) || false}
                  label={o.label}
                  onChange={(checked) =>
                    handleFilterChange(g.name, o.value, checked)
                  }
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
