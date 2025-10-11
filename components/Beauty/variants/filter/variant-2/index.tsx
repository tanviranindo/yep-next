"use client";

import { useState } from "react";

export interface BeautyFilterV2Props {
  categories?: string[];
  skinTypes?: string[];
  priceRanges?: Array<{ label: string; min: number; max: number }>;
  onFilterChange?: (filters: any) => void;
  className?: string;
}

export default function BeautyFilterVariant2({
  categories = ["All Products", "Skincare", "Makeup", "Haircare", "Grooming"],
  skinTypes = ["All", "Normal", "Dry", "Oily", "Combination", "Sensitive"],
  priceRanges = [
    { label: "All Prices", min: 0, max: 10000 },
    { label: "Under BDT 1,000", min: 0, max: 1000 },
    { label: "BDT 1,000 - 2,000", min: 1000, max: 2000 },
    { label: "BDT 2,000 - 3,000", min: 2000, max: 3000 },
    { label: "Above BDT 3,000", min: 3000, max: 10000 },
  ],
  onFilterChange,
  className = "",
}: BeautyFilterV2Props) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSkinType, setSelectedSkinType] = useState(skinTypes[0]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange?.({
      category,
      skinType: selectedSkinType,
      priceRange: selectedPriceRange,
    });
  };

  const handleSkinTypeChange = (skinType: string) => {
    setSelectedSkinType(skinType);
    onFilterChange?.({
      category: selectedCategory,
      skinType,
      priceRange: selectedPriceRange,
    });
  };

  const handlePriceRangeChange = (priceRange: typeof priceRanges[0]) => {
    setSelectedPriceRange(priceRange);
    onFilterChange?.({
      category: selectedCategory,
      skinType: selectedSkinType,
      priceRange,
    });
  };

  const clearFilters = () => {
    setSelectedCategory(categories[0]);
    setSelectedSkinType(skinTypes[0]);
    setSelectedPriceRange(priceRanges[0]);
    onFilterChange?.({
      category: categories[0],
      skinType: skinTypes[0],
      priceRange: priceRanges[0],
    });
  };

  return (
    <div className={`bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Filter Products
        </h3>
        <button
          onClick={clearFilters}
          className="text-sm text-[#D4A574] hover:text-[#C89563] font-semibold"
        >
          Reset
        </button>
      </div>

      <div className="space-y-5">
        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Skin Type Dropdown */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Skin Type
          </label>
          <select
            value={selectedSkinType}
            onChange={(e) => handleSkinTypeChange(e.target.value)}
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
          >
            {skinTypes.map((skinType) => (
              <option key={skinType} value={skinType}>
                {skinType}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Cards */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Price Range
          </label>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => handlePriceRangeChange(range)}
                className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all ${
                  selectedPriceRange.label === range.label
                    ? "bg-gradient-to-r from-[#D4A574] to-[#C89563] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-amber-50 border-2 border-gray-200"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={() =>
            onFilterChange?.({
              category: selectedCategory,
              skinType: selectedSkinType,
              priceRange: selectedPriceRange,
            })
          }
          className="w-full bg-gradient-to-r from-[#D4A574] to-[#C89563] text-white py-3.5 rounded-xl font-bold hover:from-[#C89563] hover:to-[#B8854F] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6L8.5 13.5L4 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Apply Filters
        </button>
      </div>
    </div>
  );
}
