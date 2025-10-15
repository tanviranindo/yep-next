"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export type BeautyFilterVariant = 1 | 2;

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

export interface BeautyFilterV2Props {
  categories?: string[];
  skinTypes?: string[];
  priceRanges?: Array<{ label: string; min: number; max: number }>;
  onFilterChange?: (filters: any) => void;
  className?: string;
}

interface BeautyFilterProps {
  variant: BeautyFilterVariant;
  filterProps?: BeautyFilterV1Props | BeautyFilterV2Props;
}

/**
 * BeautyFilter - Unified component for Beauty filter variants
 *
 * Variant 1: Collapsible filter with checkboxes (GLAMOUR)
 * Variant 2: Dropdown filter with button-based price ranges (NIKA)
 */
export default function BeautyFilter({ variant, filterProps }: BeautyFilterProps) {
  if (variant === 2) {
    // Variant 2: NIKA Filter with dropdowns
    const {
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
    } = (filterProps || {}) as BeautyFilterV2Props;

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

  // Variant 1: GLAMOUR Filter with collapsible sections
  const {
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
  } = (filterProps || {}) as BeautyFilterV1Props;

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
