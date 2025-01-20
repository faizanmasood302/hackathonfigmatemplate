import React from "react";
import Image from "next/image";
import Header from "../components/header";

interface Chef {
  id: number;
  name: string;
  imageUrl: string;
}

const chefs: Chef[] = [
  { id: 1, name: "Chef John", imageUrl: "/ourchefs1.png" },
  { id: 2, name: "Chef Alice", imageUrl: "/ourchefs2.png" },
  { id: 3, name: "Chef Marco", imageUrl: "/ourchefs3.png" },
  { id: 4, name: "Chef Maria", imageUrl: "/ourchefs4.png" },
  { id: 5, name: "Chef Kevin", imageUrl: "/ourchefs5.png" },
  { id: 6, name: "Chef Susan", imageUrl: "/ourchefs6.png" },
  { id: 7, name: "Chef Alex", imageUrl: "/ourchefs7.png" },
  { id: 8, name: "Chef Tina", imageUrl: "/ourchefs8.png" },
  { id: 9, name: "Chef Michael", imageUrl: "/ourchefs9.png" },
  { id: 10, name: "Chef Linda", imageUrl: "/ourchefs10.png" },
  { id: 11, name: "Chef James", imageUrl: "/ourchefs11.png" },
  { id: 12, name: "Chef Emma", imageUrl: "/ourchefs12.png" },
];

const OurChefPage: React.FC = () => {
  return (
    <>
      <Header>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Home &gt; Menu
          </p>
        </div>
      </Header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12">Our Chefs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {chefs.map((chef) => (
            <div key={chef.id}>
              <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 mb-4">
                <Image
                  src={chef.imageUrl}
                  alt={chef.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="rounded-lg object-cover"
                  priority={chef.id <= 4}
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold mt-2 text-center">
                {chef.name}
              </h2>
              <p className="text-center text-gray-600 text-sm md:text-base">Chef</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurChefPage;
