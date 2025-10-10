"use client";

import { useId, useMemo, useState } from "react";

function Beauty1CircleRadio({
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
        className="cursor-pointer inline-flex items-center justify-center w-6 h-6 rounded-full border border-neutral-300 peer-checked:border-purple-600 transition-all duration-200"
        style={{ backgroundColor: color }}
      >
        {checked && (
          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
        )}
      </label>
    </div>
  );
}

function Beauty1SquareCheckbox({
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
  const parts = /^(.*?)(\s*\((?:\d|,)+\)\s*)$/.exec(label);
  const mainText = parts ? parts[1] : label;
  const countText = parts ? parts[2] : "";
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-3 py-1 cursor-pointer select-none"
    >
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only"
      />
      <span
        className={`relative grid place-items-center h-[18px] w-[18px] flex-shrink-0 rounded-sm border-2 transition-all duration-200 ${
          checked
            ? "border-purple-600 bg-purple-600"
            : "border-gray-300 bg-white"
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 16 16"
          className={`h-3 w-3 pointer-events-none text-white transition-opacity duration-200 ${
            checked ? "opacity-100" : "opacity-0"
          }`}
          fill="none"
        >
          <path
            d="M3 8L7 12L13 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`text-sm ${checked ? "text-purple-700 font-medium" : "text-gray-900"}`}>
        {mainText}{" "}
        {countText && (
          <span className="text-gray-400 font-normal">{countText}</span>
        )}
      </span>
    </label>
  );
}

export interface Beauty1FilterGroup {
  title: string;
  name: string;
  options: Array<{ label: string; value: string; color?: string }>;
  type?: "checkbox" | "radio" | "buttons";
  selected?: string[];
}

export interface Beauty1FilterProps {
  price?: {
    name?: string;
    min: number;
    max: number;
    value?: number;
    label?: string;
  };
  groups?: Beauty1FilterGroup[];
}

export default function Beauty1Filter({
  price = {
    min: 250,
    max: 5000,
    value: 5000,
    name: "price",
    label: "Price",
  },
  groups = [
    {
      title: "Categories",
      name: "categories",
      options: [
        { label: "Haircare", value: "haircare" },
        { label: "All", value: "all" },
        { label: "Bracelet", value: "bracelet" },
        { label: "Rings", value: "rings" },
        { label: "Brooch", value: "brooch" },
        { label: "Watches", value: "watches" },
        { label: "Skincare", value: "skincare" },
        { label: "Grooming", value: "grooming" },
      ],
      type: "radio" as const,
      selected: ["all"],
    },
    {
      title: "Skin Type",
      name: "skinType",
      options: [
        { label: "Oily (150)", value: "oily" },
        { label: "Dry (320)", value: "dry" },
        { label: "Sensitive (300)", value: "sensitive" },
        { label: "All Type of Skin (50)", value: "all" },
      ],
      type: "checkbox" as const,
      selected: ["oily"],
    },
    {
      title: "Brands",
      name: "brand",
      options: [
        { label: "Rolliage. (254)", value: "rolliage" },
        { label: "HELEN & JAMES (168)", value: "helen-james" },
        { label: "QKE (120)", value: "qke" },
        { label: "Roman Paul (105)", value: "roman-paul" },
        { label: "KS Silverworks (96)", value: "ks-silverworks" },
        { label: "Love, Executive (72)", value: "love-executive" },
      ],
      type: "checkbox" as const,
      selected: ["qke"],
    },
  ],
}: Beauty1FilterProps) {
  const absoluteMin = price.min;
  const absoluteMax = price.max;
  const [minValue, setMinValue] = useState<number>(price.min);
  const [maxValue, setMaxValue] = useState<number>(price.value ?? price.max);

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

  const categoriesGroup = groups.find((g) => g.name === "categories");
  const otherGroups = groups.filter((g) => g.name !== "categories");

  return (
    <aside className="w-full bg-white">
      {/* Categories Section */}
      {categoriesGroup && (
        <div>
          <h3 className="font-bold mb-4 text-black text-base">
            {categoriesGroup.title}
          </h3>
          <div className="space-y-0.5">
            {categoriesGroup.options.map((o) => {
              const id = `${categoriesGroup.name}-${o.value}`;
              const isChecked = selectedFilters[categoriesGroup.name]?.includes(
                o.value
              );
              return (
                <label
                  key={o.value}
                  htmlFor={id}
                  className="block py-1.5 cursor-pointer select-none"
                >
                  <input
                    id={id}
                    type="radio"
                    name={categoriesGroup.name}
                    value={o.value}
                    checked={isChecked}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedFilters((prev) => ({
                          ...prev,
                          [categoriesGroup.name]: [o.value],
                        }));
                      }
                    }}
                    className="sr-only peer"
                  />
                  <span
                    className={`text-sm ${
                      isChecked
                        ? "text-purple-700 font-normal border-l-2 border-purple-700 pl-2"
                        : "text-gray-400 pl-[10px]"
                    }`}
                  >
                    {o.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Price Section */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="font-bold mb-4 text-black text-base">
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
          Price: ৳ {minValue.toLocaleString()} - ৳{maxValue.toLocaleString()}
        </div>
      </div>

      {/* Other Groups (Skin Type, Brands, etc.) */}
      {otherGroups.map((g) => (
        <div key={g.title} className="pt-6 border-t border-gray-200">
          <h3 className="font-bold mb-4 text-black text-base">{g.title}</h3>
          {g.type === "radio" ? (
            <div className="flex flex-wrap gap-3">
              {g.options.map((o) => (
                <div key={o.value} className="flex items-center gap-2">
                  <Beauty1CircleRadio
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
            <div className="flex flex-col gap-2">
              {g.options.map((o) => (
                <Beauty1SquareCheckbox
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
