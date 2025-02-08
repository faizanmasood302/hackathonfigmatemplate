import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight:'400',
  subsets: ['latin']
})
function About() {
  return (
    <>
      <Header>
        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Us</h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
            <span className="text-orange-500">Home</span> &gt; About Us
          </p>
        </div>
      </Header>

      {/* About Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-8 p-6 md:p-8 bg-white">
        {/* Left Side: Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-1/2">
          <Image
            src="/tacos.png"
            alt="Tacos"
            width={336}
            height={556}
            layout="responsive"
            className="rounded-md"
          />
          <div className="flex flex-col gap-4">
            <Image
              src="/chicken.png"
              alt="Fried Chicken"
              width={309}
              height={271}
              layout="responsive"
              className="rounded-md"
            />
            <Image
              src="/pasta.png"
              alt="Salad and Orange Juice"
              width={309}
              height={382}
              layout="responsive"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 px-4">
          <p className={`text-orange-500 text-2xl font-semibold ${greatVibes.className}`}>About us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Food is an important <br /> part of a balanced diet
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {[
            { src: "/student.png", title: "Best Chef" },
            { src: "/Coffee (1).png", title: "120 Item Food" },
            { src: "/Person.png", title: "Clean Environment" },
          ].map(({ src, title }, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <Image src={src} alt={title} width={80} height={80} className="rounded-md" />
              <h3 className="text-lg font-semibold mt-4">{title}</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full">
        <div className="relative">
          <Image src="/bg.png" alt="Background" layout="responsive" width={2650} height={625} />
          <div className="absolute inset-0 bg-orange-500 opacity-80 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-4xl font-bold">Team Member</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10 justify-center">
          {[
            { src: "/ourchefs1.png", name: "Mark Henry", role: "Owner" },
            { src: "/ourchefs2.png", name: "Lucky Helen", role: "Chef" },
            { src: "/ourchefs3.png", name: "Moon Henry", role: "Founder" },
            { src: "/ourchefs4.png", name: "Tom Monrow", role: "Specialist" },
          ].map(({ src, name, role }, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={src} alt={name} width={250} height={300} layout="responsive" className="rounded-t-lg" />
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-800">{name}</h3>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">Our Food Menu</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-6 text-gray-500">
          {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-black px-2 py-1">
              {item}
            </Link>
          ))}
        </div>

        {/* Food Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-bold text-gray-800">Alder Grilled Chinook Salmon</h3>
                  <p className="text-gray-500 text-sm">French bread with romaine & cheddar</p>
                  <p className="text-gray-400 text-xs">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold text-lg">$32</span>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default About;
