import React from "react";
import Image from "next/image"
import Header from '.././components/header'
import Link from 'next/link'

function about() {
  return (
    <>
      <Header>
        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About-us</h1>
          <p className="text-white text-xl md:text-2xl font-semibold">
            <span className="text-orange-500">Home</span> &gt; About-us
          </p>
        </div>
      </Header>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8 bg-white">
        {/* Left Side: Images */}
        <div className="flex grid-cols-1 gap-4 lg:grid-cols-2 lg:w-1/2">
          {/* hrefp-Left Image */}
          <div>
            <Image
              src="/tacos.png"
              alt="Tacos"
              width={336}
              height={556}
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          {/* hrefp-Right Image */}
          <div className="mt-10 mb-10" >
            <Image
              src="/chicken.png"
              alt="Fried Chicken"
              width={309}
              height={271}
              objectFit="cover"
              className="rounded-md"
            />

            {/* Bothrefm Image */}

            <Image
              src="/pasta.png"
              alt="Salad and Orange Juice"
              width={309}
              height={382}
              objectFit="cover"
              className="rounded-md p-4"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-orange-500 italic text-sm font-semibold">About us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Food is an important <br /> part Of a balanced Diet
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
            elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>
          {/* Buthrefns */}
   
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center pb-20">
          <h1 className="text-center text-6xl mb-10">
            Why Choose Us
          </h1>
          <p className="text-cente mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis</p>
        </div>
        <div>
        <Image 
          src="/bgimg.png"
          alt="bg"
          width={1320}
          height={386}
          className="mb-20"
          />
        </div>
        {/* hrefp Section: Features */}
        <div className="bg-white w-full p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl text-gray-700 mb-4">
                {/* Chef Icon */}
                <Image
               src="/student.png"
               alt="person"
               width={80}
               height={80}
              objectFit="cover"
               className="rounded-t-lg"/>              
               </div>
              <h3 className="text-lg font-semibold mb-2">Best Chef</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl text-gray-700 mb-4">
                {/* Food Icon */}
                <Image
               src="/Coffee (1).png"
               alt="person"
               width={80}
               height={80}
              objectFit="cover"
               className="rounded-t-lg"/>
              </div>
              <h3 className="text-lg font-semibold mb-2">120 Item food</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl text-gray-700 mb-4">
                {/* Environment Icon */}
                <Image
               src="/Person.png"
               alt="person"
               width={80}
               height={80}
              objectFit="cover"
               className="rounded-t-lg"/>
              </div>
              <h3 className="text-lg font-semibold mb-2">Clean Environment</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
          </div>
        </div>

        {/* Bothrefm Section: Team Members */}
    
<div className="relative w-full">
      {/* Background Image Section */}
      <div className="relative w-full mx-auto">
        <div>
        <Image
          src="/bg.png" // Replace with your background image path
          alt="Background"
          layout="intrinsic"
          width={2650}
          height={625}
          objectFit="cover"
          className=""
          
        />
         <div className="absolute inset-0 bg-orange-500 opacity-90" />
        </div>
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl font-bold">
            Team Member
          </h2>
          <p className="text-gray-200 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque massa congue.
          </p>
        </div>
      </div>

      {/* Team Member Cards */}
      <div className="absolute w-full flex justify-center gap-6 mt-[-150px] z-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/ourchefs1.png"
            alt="Mark Henry"
            width={200}
            height={250}
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-gray-800">Mark Henry</h3>
            <p className="text-gray-500 text-sm">Owner</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
          <Image
            src="/ourchefs2.png"
            alt="Lucky Helen"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-gray-800">Lucky Helen</h3>
            <p className="text-gray-500 text-sm">Chef</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
          <Image
            src="/ourchefs3.png"
            alt="Moon Henry"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-gray-800">Moon Henry</h3>
            <p className="text-gray-500 text-sm">Founder</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/ourchefs4.png"
            alt="Tom Monrow"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-gray-800">Tom Monrow</h3>
            <p className="text-gray-500 text-sm">Specialist</p>
          </div>
        </div>
      </div>

      {/* Empty Spacer to Avoid Content Overlap */}
      <div className="h-[200px]"></div>
    </div>
      </section >
      <section className="flex justify-center items-center">
        <div className="max-w-7xl mx-auto p-6">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-2">
              OurFood Menu
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8 space-x-6 text-gray-500">
            <Link
              href="#breakfast"
              className="text-orange-500 border-b-2 border-orange-500 pb-2"
            >
              Breakfast
            </Link>
            <Link href="#lunch" className="hover:text-black">
              Lunch
            </Link>
            <Link href="#dinner" className="hover:text-black">
              Dinner
            </Link>
            <Link href="#dessert" className="hover:text-black">
              Dessert
            </Link>
            <Link href="#drink" className="hover:text-black">
              Drink
            </Link>
            <Link href="#snack" className="hover:text-black">
              Snack
            </Link>
          </div>

          {/* Food Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Repeatable Item */}
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Alder Grilled Chinook Salmon
                    </h3>
                    <p className="text-gray-500 text-sm">
                      hrefasted French bread hrefpped with romaine, cheddar
                    </p>
                    <p className="text-gray-400 text-xs">560 CAL</p>
                  </div>
                  <span className="text-orange-500 font-bold text-lg">32$</span>
                </div>
              ))}
          </div>
        </div>
      </section>

    </>

  );
};

export default about;
