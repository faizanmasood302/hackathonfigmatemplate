import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Image from "next/image";
import Header from "../components/header";

export default async function OurChefsPage() {
  const chefs = await client.fetch(`*[_type == "chef"] {
    image,
    chefName,
    designation
  }`);
  return (
    <>
      <Header>
      <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Home &gt; Ourchefs
          </p>
        </div>
      </Header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          Our Chefs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {chefs.map((chef: { image: any; chefName: string; designation: string; _id?: string }, index: number) => (
        <div key={chef._id || index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80">
            <Image
          src={urlFor(chef.image)} // Use urlFor to generate the image URL
          alt={chef.chefName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
          priority={index <= 3} // Prioritize the first 4 images
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold mt-2 text-center">
          {chef.chefName}
            </h2>
            <p className="text-center text-gray-600 text-sm md:text-base">
          {chef.designation}
            </p>
          </div>
        </div>
          ))}
        </div>
      </div>
    </>
  );
}