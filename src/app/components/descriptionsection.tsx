'use client'
import React, { useState } from "react";
import Image from "next/image";

const ProductAdditionalInfo = () => {
  const [activeTab, setActiveTab] = useState("description");

  const similarProducts = [
    {
      id: 1,
      name: "Fresh Lime",
      price: "$38.00",
      oldPrice: "$45.00",
      ImageUrl: "/shop1.png",
    },
    {
      id: 2,
      name: "Chocolate Muffin",
      price: "$28.00",
      oldPrice: null,
      ImageUrl: "/shop2.png",
    },
    {
      id: 3,
      name: "Burger",
      price: "$21.00",
      oldPrice: null,
      ImageUrl: "/shop3.png",
    },
    {
      id: 4,
      name: "Fresh Lime",
      price: "$38.00",
      oldPrice: "$45.00",
      ImageUrl: "/shop4.png",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">
      {/* Tabs for Description and Reviews */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-4">
          <button
            className={`pb-2 font-semibold ${
              activeTab === "description"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`pb-2 font-semibold ${
              activeTab === "reviews"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (24)
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "description" && (
          <div className="text-gray-700">
            <p className="mb-5">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla
              sed purus augue, eu euismod tellus. Nam mattis eros nec mi
              sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at
              justo eget sem auctor auctor eget vitae arcu.
            </p>
            <p className="mb-5">
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex.
              Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi
              rutrum accumsan et sagittis massa.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
              <li>
                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
                nisl.
              </li>
              <li>
                Etiam nec massa et lectus faucibus ornare congue in nunc.
              </li>
              <li>Mauris eget diam magna, in blandit turpis.</li>
            </ul>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-gray-700">
            <p className="mb-5">Customer reviews will appear here.</p>
          </div>
        )}
      </div>

      {/* Similar Products Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-5">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className= " p-4"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.ImageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-orange-500 font-bold">{product.price}</p>
                {product.oldPrice && (
                  <p className="text-gray-500 line-through">{product.oldPrice}</p>
                )}
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
