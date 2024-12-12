'use client'
import Image from "next/image";
import { useState } from "react";

const MenuGallery = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

  const menuItems = [
    {
      category: "Breakfast",
      largeImage: "/chicken.png", 
      items: [
        {
          name: "strawberry custard",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "14.5$",
          image: "/strawberrycream.png",
        },
        {
          name: "steak",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "12.5$",
          image: "/steak.png",
        },
        {
          name: "milkshake",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "12.5$",
          image: "/milkshake.png",
        },
        {
          name: "dorito platter",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "12.5$",
          image: "/doritoplatter.png",
        },
        {
          name: "cheeze burger",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "14.5$",
          image: "/burgerr.png",
        },
        {
          name: "club sandwich",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "12.5$",
          image: "/clubsandwich.png",
        },
        {
          name: "Meat balls",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "12.5$",
          image: "/meatball.png",
        },
        {
          name: "strawberry custard",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "14.5$",
          image: "/strawberrycream.png",
        }
      ],
    },
    // Add other categories if needed.
  ];

  const activeMenu = menuItems.find((menu) => menu.category === activeCategory);

  return (
    <div className="bg-black text-white py-10 px-4 left-20 right-20 pl-20 pr-20">
      <div className="text-center mb-8">
        <p className="text-orange-400 font-semibold text-lg">Choose & pick</p>
        <h2 className="text-4xl font-bold">From Our Menu</h2>
      </div>

      {/* Categories */}
      <div className="flex justify-center space-x-8 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`font-semibold ${
              activeCategory === category ? "text-orange-400" : "text-gray-400"
            } hover:text-orange-400`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Image */}
        <div className="lg:col-span-1">
          <Image
            src={activeMenu?.largeImage || ""} // Replace with default image if needed
            alt="Large Dish"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Small Items */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeMenu?.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center rounded-lg overflow-hidden"
            >
              <div className="w-1/3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 w-2/3">
                <h3 className="font-bold text-lg text-orange-400">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <p className="text-lg font-bold text-white mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuGallery;
