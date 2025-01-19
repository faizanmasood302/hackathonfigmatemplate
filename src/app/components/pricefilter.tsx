'use client'
import React, { useState } from "react";

const PriceFilter: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 8000]);

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
   {/* Filter By Price Section */}
   <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Filter By Price</h4>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">${priceRange[0]}</span>
          <div className="relative flex-1 h-1 bg-orange-500 rounded-full">
            <input
              type="range"
              min="0"
              max="8000"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
              style={{ zIndex: 1 }}
            />
            <input
              type="range"
              min="0"
              max="8000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
              style={{ zIndex: 1 }}
            />
            <div
              className="absolute w-4 h-4 bg-blue-500 border-2 border-white rounded-full"
              style={{
                left: `${(priceRange[0] / 8000) * 100}%`,
                transform: "translateX(-50%)",
              }}
            ></div>
            <div
              className="absolute w-4 h-4 bg-blue-500 border-2 border-white rounded-full"
              style={{
                left: `${(priceRange[1] / 8000) * 100}%`,
                transform: "translateX(-50%)",
              }}
            ></div>
          </div>
          <span className="text-sm text-gray-600">${priceRange[1]}</span>
        </div>
        <button className="mt-2 px-4 py-2 w-full text-white bg-gray-800 rounded-md hover:bg-gray-900">
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
