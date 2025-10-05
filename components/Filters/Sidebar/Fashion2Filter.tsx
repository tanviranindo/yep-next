"use client";

import { useId, useState } from "react";

const colors = [
  "#5B7FD7", "#8B73D6", "#D9865F", "#9FC1C1", "#A3D98F",
  "#9E9E9E", "#6FB5C1", "#E8A5A5", "#D8A5A5", "#7A9E8E",
  "#C8D97F", "#000000", "#B8879E", "#D4C1E8", "#9EC18F",
  "#A5C8D9", "#7FD9C1", "#E8C19E", "#D97F7F"
];

const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

export default function Fashion2Filter() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([2500, 12000]);

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <aside className="w-full bg-white p-6 space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-900">Categories</h3>
        <div className="space-y-3">
          {["Men", "Women", "Kids", "Accessories"].map((cat) => (
            <label key={cat} className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border-gray-300" />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Collection */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-900">Collection</h3>
        <div className="space-y-3">
          {["Shirts", "Jeans", "Tops", "Footwear", "Rings", "Necklace", "Bracelet", "T-shirt"].map((item) => (
            <label key={item} className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border-gray-300" />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-900">Availability</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border-gray-300" />
            <span className="text-gray-700">In stock (164)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border-gray-300" />
            <span className="text-gray-700">Out of stock (28)</span>
          </label>
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-900">Price</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="15000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-gray-900"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>BDT {priceRange[0].toFixed(2)}</span>
            <span>BDT {priceRange[1].toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-900">Color</h3>
        <div className="grid grid-cols-8 gap-2">
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => toggleColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColors.includes(color)
                  ? "border-gray-900 scale-110"
                  : "border-transparent hover:border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-900">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-2 px-4 font-medium text-sm transition-colors ${
                selectedSize === size
                  ? "bg-[#D4B896] text-white"
                  : "bg-[#D4B896]/30 text-gray-800 hover:bg-[#D4B896]/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
