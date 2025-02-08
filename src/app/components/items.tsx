'use client'
import Image from "next/image";
import Link from "next/link";
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
  ];

  const activeMenu = menuItems.find((menu) => menu.category === activeCategory);

  return (
    <div className="min-h-screen bg-black px-4 py-10">
      <div className="text-center mb-8 animate-fadeIn">
        <p className="text-orange-400 font-semibold text-lg">Choose & pick</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">From Our Menu</h2>
      </div>

      {/* Categories */}
    <Link href="/shop">  <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`font-semibold px-4 py-2 rounded transition-transform duration-300 
              ${activeCategory === category ? "text-orange-400 border-b-2 border-orange-400 scale-105" : "text-gray-400 hover:text-orange-400 hover:scale-105"}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div></Link>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Image */}
        <div className="lg:col-span-1 flex justify-center items-center animate-slideIn">
          <Image
            src={activeMenu?.largeImage || "/placeholder.png"}
            alt="Large Dish"
            width={400}
            height={400}
            className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Small Items */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activeMenu?.items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden flex flex-col sm:flex-row transform transition duration-300 hover:scale-105 shadow-md animate-fadeIn"
            >
              <div className="sm:w-1/3 relative h-32">
               <Link href="/shop"> <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                /></Link>
              </div>
              <div className="p-4 sm:w-2/3">
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
