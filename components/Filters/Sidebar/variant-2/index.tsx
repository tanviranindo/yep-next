"use client";

import { useId, useMemo, useState } from "react";

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
      <span className="inline-grid place-items-center h-5 w-5 border-[1.5px] border-gray-600 bg-white peer-checked:border-gray-600 peer-checked:bg-gray-600 transition-colors duration-200">
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
  type: "checkbox" | "buttons";
  selected?: string[];
}

export interface FilterSidebarV2Props {
  action?: string;
  price?: {
    min: number;
    max: number;
    value?: number;
    name: string;
    label: string;
  };
  groups?: FilterGroup[];
  applyLabel?: string;
}

export default function FilterSidebarVariant2({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Filters applied:", selectedFilters);
    console.log("Price range:", { min: minValue, max: maxValue });
  };

  const percentage = useMemo(() => {
    const range = absoluteMax - absoluteMin;
    const currentRange = maxValue - minValue;
    return ((range - currentRange) / range) * 100;
  }, [minValue, maxValue, absoluteMin, absoluteMax]);

  return (
    <aside className="w-full bg-white p-6 space-y-8">
      <form action={action} onSubmit={handleSubmit} className="space-y-8">
        {/* Price Range Slider */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900">
            {price.label}
          </h3>
          <div className="space-y-4">
            <div className="relative">
              <div className="h-2 bg-gray-200 rounded-lg">
                <div
                  className="h-2 bg-gray-600 rounded-lg transition-all duration-200"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>${minValue}</span>
                <span>${maxValue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Groups */}
        {groups.map((g, idx) => (
          <div key={g.name} className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">{g.title}</h3>
            {g.type === "buttons" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {g.options.map((o) => (
                  <button
                    key={o}
                    className="w-full h-8 bg-gray-600 text-white text-[12px] hover:bg-gray-700 active:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
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
                      checked={
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

        {/* Apply Button */}
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 active:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          {applyLabel}
        </button>
      </form>
    </aside>
  );
}