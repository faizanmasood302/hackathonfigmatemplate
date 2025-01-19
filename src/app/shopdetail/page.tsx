'use client'
import React, { useState } from "react";
import Header from '.././components/header'
import Image from "next/image";
import ProductAdditionalInfo from '.././components/descriptionsection'
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube , FaHeart} from "react-icons/fa";
interface Shopdet {
  id: number;
  name: string;
  price: string;
  ImageUrl: string;
}

// Array of food items
const food: Shopdet[] = [
  { id: 1, name: "burger", price: "$10.00", ImageUrl: "/shop1.png" },
  { id: 2, name: "cheese burger", price: "$10.00", ImageUrl: "/shop2.png" },
  { id: 3, name: "beef burger", price: "$10.00", ImageUrl: "/shop3.png" },
  { id: 4, name: "mass Burger", price: "$10.00", ImageUrl: "/shop4.png" },
  { id: 5, name: "coffee", price: "$10.00", ImageUrl: "/shop5.png" },
  { id: 6, name: "club sandwich", price: "$10.00", ImageUrl: "/shop6.png" },
  { id: 7, name: "coffee", price: "$10.00", ImageUrl: "/shop7.png" },
  { id: 8, name: "chicken", price: "$10.00", ImageUrl: "/shop8.png" },
  { id: 9, name: "dorito", price: "$10.00", ImageUrl: "/shop9.png" },
  { id: 10, name: "meatball", price: "$10.00", ImageUrl: "/shop10.png" },
  { id: 11, name: "steak", price: "$10.00", ImageUrl: "/shop11.png" },
  { id: 12, name: "pasta", price: "$10.00", ImageUrl: "/shop12.png" },
  { id: 13, name: "tacos", price: "$10.00", ImageUrl: "/shop13.png" },
  { id: 14, name: "strawberry", price: "$10.00", ImageUrl: "/shop14.png" },
  { id: 15, name: "burger", price: "$10.00", ImageUrl: "/shop14.png" },
  { id: 16, name: "burger", price: "$10.00", ImageUrl: "/shop11.png" },
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState<string>(food[0].ImageUrl);

  return (
    <> <Header>
    <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-2xl font-semibold">
            Home &gt; Shop Detail
        </p>
    </div>
</Header>
    <div className="max-w-5xl mx-auto py-10 px-5">

      <div className="flex flex-wrap md:flex-nowrap gap-8">
        {/* Left: Thumbnails and Main Image */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Vertical Thumbnail List */}
          <div className="flex md:flex-col gap-3">
            {food.slice(0, 5).map((item) => (
              <button
                key={item.id}
                className={`border rounded-lg p-1 ${
                  selectedImage === item.ImageUrl
                    ? "border-orange-500"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(item.ImageUrl)}
              >
                <Image
                  src={item.ImageUrl}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="relative border border-gray-200 rounded-lg w-[491px] h-[556px]">
            <Image
              src={selectedImage}
              alt="Selected food"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1">
          <p className="text-sm text-orange-500 uppercase font-bold">In Stock</p>
          <h1 className="text-3xl font-bold mb-3">Yummy Chicken Chup</h1>
          <p className="text-gray-500 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum. Uma,
            urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>
          <div className="flex items-center mb-5">
            <p className="text-2xl font-bold text-gray-800 mr-5">$54.00</p>
            <div className="flex items-center text-yellow-500">
              <span className="text-sm font-bold">5.0</span>
              <span className="ml-1">★</span>
              <span className="text-sm text-gray-500 ml-2">(22 Review)</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button className="px-3 py-2 text-gray-500 hover:text-gray-800">
                -
              </button>
              <input
                type="number"
                className="w-12 text-center border-none focus:ring-0"
                defaultValue={1}
                min={1}
              />
              <button className="px-3 py-2 text-gray-500 hover:text-gray-800">
                +
              </button>
            </div>
            <Link href="/shoppingcart">
            <button className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
            </Link>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <button className="text-gray-600 hover:text-orange-500 flex items-center gap-1">
              <FaHeart/> <span className="text-gray-600"> Add to Wishlist</span>
            </button>
            <button className="text-gray-600 hover:text-orange-500 flex items-center gap-1">
              ⇄ <span className="text-gray-600"> Compare</span>
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              <span className="font-semibold">Category:</span> Pizza
            </p>
            <p>
              <span className="font-semibold">Tag:</span> Our Shop
            </p>
          </div>
          {/* Share Icons */}
          <div className="flex gap-3 mt-5">
            <Link
              href="#"
              className="text-gray-500 hover:text-orange-500 text-xl"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-orange-500 text-xl"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-orange-500 text-xl"
            >
              <FaPinterestP />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-orange-500 text-xl"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-orange-500 text-xl"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <ProductAdditionalInfo/>
    </div>
    </>
  );
};

export default ProductDetail;
