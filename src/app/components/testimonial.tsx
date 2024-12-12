'use client'
import React, { useState } from "react";
import Image from 'next/image'
import {Great_Vibes} from 'next/font/google' 

const greatVibes = Great_Vibes({
    weight:'400',
    subsets:['latin'],
})

type TestimonialData = {
  image: string;
  text: string;
  name: string;
  role: string;
  rating: number;
};

const testimonials: TestimonialData[] = [
  {
    image: "/man.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum.",
    name: "Alamin Hasan",
    role: "Food Specialist",
    rating: 4,
  },
  {
    image: "/man.png",
    text: "Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    name: "Sarah Johnson",
    role: "Chef",
    rating: 5,
  },
  {
    image: "/man.png",
    text: "Urna, elit augue urna, vitae feugiat pretium donec id elementum.",
    name: "John Doe",
    role: "Culinary Expert",
    rating: 4,
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className={`text-yellow-500 text-xl font-bold mb-4 ${greatVibes.className}`}>Testimonials</h2>
        <h3 className="text-4xl font-semibold mb-6">What our client are saying</h3>
        <div className="bg-white text-black p-6 rounded-lg shadow-md relative mx-auto max-w-2xl mt-8">
          <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={64}
              height={64}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
          <p className="text-center mt-6 text-gray-700">{`"${testimonials[currentIndex].text}"`}</p>
          <div className="text-yellow-500 text-3xl mt-4">&#x275D;</div>
          <div className="flex justify-center mt-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
              <span key={index} className="text-yellow-400 text-xl">&#9733;</span>
            ))}
            {[...Array(5 - testimonials[currentIndex].rating)].map((_, index) => (
              <span key={index} className="text-gray-400 text-xl">&#9734;</span>
            ))}
          </div>
          <div className="mt-4">
            <p className="font-bold">{testimonials[currentIndex].name}</p>
            <p className="text-gray-600">{testimonials[currentIndex].role}</p>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-orange-500" : "bg-orange-200"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
