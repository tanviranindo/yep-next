"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FilterSection {
  title: string;
  options: { value: string; label: string; count?: number }[];
}

export interface BeautyFilterV1Props {
  categories?: FilterSection;
  skinTypes?: FilterSection;
  brands?: FilterSection;
  priceRange?: { min: number; max: number };
  onFilterChange?: (filters: any) => void;
  className?: string;
}

export default function BeautyFilterVariant1({
  categories = {
    title: "Categories",
    options: [
      { value: "all", label: "All Products", count: 20 },
      { value: "skincare", label: "Skincare", count: 8 },
      { value: "makeup", label: "Makeup", count: 6 },
      { value: "haircare", label: "Haircare", count: 4 },
      { value: "grooming", label: "Grooming", count: 2 },
    ],
  },
  skinTypes = {
    title: "Skin Type",
    options: [
      { value: "normal", label: "Normal" },
      { value: "dry", label: "Dry" },
      { value: "oily", label: "Oily" },
      { value: "combination", label: "Combination" },
      { value: "sensitive", label: "Sensitive" },
    ],
  },
  brands = {
    title: "Brands",
    options: [
      { value: "glamour", label: "GLAMOUR", count: 20 },
      { value: "beauty-pro", label: "Beauty Pro", count: 15 },
      { value: "natural-glow", label: "Natural Glow", count: 12 },
    ],
  },
  priceRange = { min: 0, max: 5000 },
  onFilterChange,
  className = "",
}: BeautyFilterV1Props) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState(priceRange.min);
  const [priceMax, setPriceMax] = useState(priceRange.max);

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    skinTypes: true,
    brands: true,
    price: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (value: string) => {
    const newCategories = selectedCategories.includes(value)
      ? selectedCategories.filter((c) => c !== value)
      : [...selectedCategories, value];
    setSelectedCategories(newCategories);
    onFilterChange?.({ categories: newCategories, skinTypes: selectedSkinTypes, brands: selectedBrands, priceMin, priceMax });
  };

  const handleSkinTypeChange = (value: string) => {
    const newSkinTypes = selectedSkinTypes.includes(value)
      ? selectedSkinTypes.filter((s) => s !== value)
      : [...selectedSkinTypes, value];
    setSelectedSkinTypes(newSkinTypes);
    onFilterChange?.({ categories: selectedCategories, skinTypes: newSkinTypes, brands: selectedBrands, priceMin, priceMax });
  };

  const handleBrandChange = (value: string) => {
    const newBrands = selectedBrands.includes(value)
      ? selectedBrands.filter((b) => b !== value)
      : [...selectedBrands, value];
    setSelectedBrands(newBrands);
    onFilterChange?.({ categories: selectedCategories, skinTypes: selectedSkinTypes, brands: newBrands, priceMin, priceMax });
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceMin(min);
    setPriceMax(max);
    onFilterChange?.({ categories: selectedCategories, skinTypes: selectedSkinTypes, brands: selectedBrands, priceMin: min, priceMax: max });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSkinTypes([]);
    setSelectedBrands([]);
    setPriceMin(priceRange.min);
    setPriceMax(priceRange.max);
    onFilterChange?.({ categories: [], skinTypes: [], brands: [], priceMin: priceRange.min, priceMax: priceRange.max });
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-[#842898] hover:text-[#6d1f7a] font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          onClick={() => toggleSection("categories")}
          className="w-full flex items-center justify-between mb-3"
        >
          <h4 className="text-base font-semibold text-gray-900">{categories.title}</h4>
          {expandedSections.categories ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
        </button>
        {expandedSections.categories && (
          <div className="space-y-2">
            {categories.options.map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(option.value)}
                  onChange={() => handleCategoryChange(option.value)}
                  className="w-4 h-4 text-[#842898] border-gray-300 rounded focus:ring-[#842898] focus:ring-2"
                />
                <span className="text-sm text-gray-700 group-hover:text-[#842898] flex-1">
                  {option.label}
                </span>
                {option.count !== undefined && (
                  <span className="text-xs text-gray-500">({option.count})</span>
                )}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Skin Types */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          onClick={() => toggleSection("skinTypes")}
          className="w-full flex items-center justify-between mb-3"
        >
          <h4 className="text-base font-semibold text-gray-900">{skinTypes.title}</h4>
          {expandedSections.skinTypes ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
        </button>
        {expandedSections.skinTypes && (
          <div className="space-y-2">
            {skinTypes.options.map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedSkinTypes.includes(option.value)}
                  onChange={() => handleSkinTypeChange(option.value)}
                  className="w-4 h-4 text-[#842898] border-gray-300 rounded focus:ring-[#842898] focus:ring-2"
                />
                <span className="text-sm text-gray-700 group-hover:text-[#842898]">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          onClick={() => toggleSection("price")}
          className="w-full flex items-center justify-between mb-3"
        >
          <h4 className="text-base font-semibold text-gray-900">Price Range</h4>
          {expandedSections.price ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceMin}
                onChange={(e) => handlePriceChange(Number(e.target.value), priceMax)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#842898]"
                placeholder="Min"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                value={priceMax}
                onChange={(e) => handlePriceChange(priceMin, Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#842898]"
                placeholder="Max"
              />
            </div>
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={priceMax}
              onChange={(e) => handlePriceChange(priceMin, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#842898]"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>BDT {priceMin}</span>
              <span>BDT {priceMax}</span>
            </div>
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="pb-4">
        <button
          onClick={() => toggleSection("brands")}
          className="w-full flex items-center justify-between mb-3"
        >
          <h4 className="text-base font-semibold text-gray-900">{brands.title}</h4>
          {expandedSections.brands ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
        </button>
        {expandedSections.brands && (
          <div className="space-y-2">
            {brands.options.map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(option.value)}
                  onChange={() => handleBrandChange(option.value)}
                  className="w-4 h-4 text-[#842898] border-gray-300 rounded focus:ring-[#842898] focus:ring-2"
                />
                <span className="text-sm text-gray-700 group-hover:text-[#842898] flex-1">
                  {option.label}
                </span>
                {option.count !== undefined && (
                  <span className="text-xs text-gray-500">({option.count})</span>
                )}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
