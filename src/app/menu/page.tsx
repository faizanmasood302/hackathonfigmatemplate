import Header from '.././components/header';
import Image from 'next/image';
import { FaHamburger, FaPizzaSlice, FaUserTie, FaUtensils } from 'react-icons/fa';

export default function Menu() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
      <Header>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Home &gt; Menu
          </p>
        </div>
      </Header>

      {/* Starter Menu Section 1 */}
      <div className="flex flex-col lg:flex-row w-full px-4 md:w-11/12 lg:w-3/4 mt-12">
        {/* Image on Left */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <Image
            src="/menuimg.png"
            alt="Starter Menu Dish"
            width={400}
            height={400}
            className="rounded-lg w-full max-w-md object-cover"
          />
        </div>
        {/* Description on Right */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 flex items-center">
            <span className="mr-2">Starter Menu</span>
            <Image
              src="/Coffee.png"
              alt="Cup Icon"
              width={24}
              height={24}
            />
          </h1>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "Alder Grilled Chinook Salmon",
                price: "32$",
                desc: "Toasted French bread topped with romano, cheddar",
                cal: "560 CAL"
              },
              {
                title: "Alder Grilled Chinook Salmon",
                price: "32$",
                desc: "Toasted French bread topped with romano, cheddar",
                cal: "560 CAL"
              },
              {
                title: "Berries and creme tart",
                price: "43$",
                desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                cal: "700 CAL",
                highlight: true
              },
              {
                title: "Tormentoso Bush Pizza Pintoage",
                price: "14$",
                desc: "Ground cumin, avocados, peeled and cubed",
                cal: "1000 CAL"
              },
              {
                title: "Spicy Vegan Potato Curry",
                price: "35$",
                desc: "Spreadable cream cheese, crumbled blue cheese",
                cal: "560 CAL"
              }
            ].map((item, index, arr) => (
              <div key={index} className={index !== arr.length - 1 ? "border-b border-gray-700 pb-4" : ""}>
                <div className="flex justify-between">
                  <h2 className={`text-lg md:text-xl font-semibold ${item.highlight ? 'text-orange-500' : ''}`}>
                    {item.title}
                  </h2>
                  <span className="text-orange-500 text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-2">{item.cal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Starter Menu Section 2 */}
      <div className="flex flex-col lg:flex-row-reverse w-full px-4 md:w-11/12 lg:w-3/4 mt-12">
        {/* Image on Right */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <Image
            src="/menuimg2.png"
            alt="Starter Menu Dish 2"
            width={400}
            height={400}
            className="rounded-lg w-full max-w-md object-cover"
          />
        </div>
        {/* Description on Left */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 flex items-center">
            <span className="mr-2">Starter Menu 2</span>
            <Image
              src="/coffee.png"
              alt="Cup Icon"
              width={24}
              height={24}
            />
          </h1>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "Berries and creme tart",
                price: "43$",
                desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                cal: "700 CAL"
              },
              {
                title: "Alder Grilled Chinook Salmon",
                price: "32$",
                desc: "Toasted French bread topped with romano, cheddar",
                cal: "560 CAL"
              },
              {
                title: "Berries and creme tart",
                price: "43$",
                desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                cal: "700 CAL",
                highlight: true
              },
              {
                title: "Tormentoso Bush Pizza Pintoage",
                price: "14$",
                desc: "Ground cumin, avocados, peeled and cubed",
                cal: "1000 CAL"
              },
              {
                title: "Spicy Vegan Potato Curry",
                price: "35$",
                desc: "Spreadable cream cheese, crumbled blue cheese",
                cal: "560 CAL"
              }
            ].map((item, index, arr) => (
              <div key={index} className={index !== arr.length - 1 ? "border-b border-gray-700 pb-4" : ""}>
                <div className="flex justify-between">
                  <h2 className={`text-lg md:text-xl font-semibold ${item.highlight ? 'text-orange-500' : ''}`}>
                    {item.title}
                  </h2>
                  <span className="text-orange-500 text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-2">{item.cal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative w-full mt-12">
        <div className="relative">
          <Image
            src="/bg.png"
            alt="Food"
            width={2560}
            height={625}
            className="w-full object-cover h-[300px] md:h-[400px] lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-black opacity-90" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 w-full max-w-7xl">
            {[
              { Icon: FaUserTie, title: "Professional Chef", count: "420" },
              { Icon: FaHamburger, title: "Items of Food", count: "320" },
              { Icon: FaUtensils, title: "Years of Experience", count: "30+" },
              { Icon: FaPizzaSlice, title: "Happy Customers", count: "220" }
            ].map(({ Icon, title, count }) => (
              <div key={title} className="text-center text-white">
                <Icon className="text-3xl md:text-4xl mx-auto mb-2 text-orange-500" />
                <h3 className="font-bold text-sm md:text-base lg:text-lg">{title}</h3>
                <p className="text-sm md:text-base lg:text-lg">{count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Starter Menu Section 3 */}
      <div className="flex flex-col lg:flex-row w-full px-4 md:w-11/12 lg:w-3/4 mt-12">
        {/* Image on Left */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <Image
            src="/menuimg3.png"
            alt="Starter Menu Dish 3"
            width={400}
            height={400}
            className="rounded-lg w-full max-w-md object-cover"
          />
        </div>
        {/* Description on Right */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 flex items-center">
            <span className="mr-2">Starter Menu 3</span>
            <Image
              src="/coffee.png"
              alt="Cup Icon"
              width={24}
              height={24}
            />
          </h1>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "Tormentoso Bush Pizza Pintoage",
                price: "14$",
                desc: "Ground cumin, avocados, peeled and cubed",
                cal: "1000 CAL"
              },
              {
                title: "Alder Grilled Chinook Salmon",
                price: "32$",
                desc: "Toasted French bread topped with romano, cheddar",
                cal: "560 CAL"
              },
              {
                title: "Berries and creme tart",
                price: "43$",
                desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                cal: "700 CAL",
                highlight: true
              },
              {
                title: "Tormentoso Bush Pizza Pintoage",
                price: "14$",
                desc: "Ground cumin, avocados, peeled and cubed",
                cal: "1000 CAL"
              },
              {
                title: "Spicy Vegan Potato Curry",
                price: "35$",
                desc: "Spreadable cream cheese, crumbled blue cheese",
                cal: "560 CAL"
              }
            ].map((item, index, arr) => (
              <div key={index} className={index !== arr.length - 1 ? "border-b border-gray-700 pb-4" : ""}>
                <div className="flex justify-between">
                  <h2 className={`text-lg md:text-xl font-semibold ${item.highlight ? 'text-orange-500' : ''}`}>
                    {item.title}
                  </h2>
                  <span className="text-orange-500 text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-2">{item.cal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Starter Menu Section 4 */}
      <div className="flex flex-col lg:flex-row-reverse w-full px-4 md:w-11/12 lg:w-3/4 mt-12 mb-12">
        {/* Image on Right */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <Image
            src="/menuimg4.png"
            alt="Starter Menu Dish 4"
            width={400}
            height={400}
            className="rounded-lg w-full max-w-md object-cover"
          />
        </div>
        {/* Description on Left */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 flex items-center">
            <span className="mr-2">Starter Menu 4</span>
            <Image
              src="/coffee.png"
              alt="Cup Icon"
              width={24}
              height={24}
            />
          </h1>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "Spicy Vegan Potato Curry",
                price: "35$",
                desc: "Spreadable cream cheese, crumbled blue cheese",
                cal: "560 CAL"
              },
              {
                title: "Alder Grilled Chinook Salmon",
                price: "32$",
                desc: "Toasted French bread topped with romano, cheddar",
                cal: "560 CAL"
              },
              {
                title: "Berries and creme tart",
                price: "43$",
                desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                cal: "700 CAL",
                highlight: true
              },
              {
                title: "Tormentoso Bush Pizza Pintoage",
                price: "14$",
                desc: "Ground cumin, avocados, peeled and cubed",
                cal: "1000 CAL"
              },
              {
                title: "Spicy Vegan Potato Curry",
                price: "35$",
                desc: "Spreadable cream cheese, crumbled blue cheese",
                cal: "560 CAL"
              }
            ].map((item, index, arr) => (
              <div key={index} className={index !== arr.length - 1 ? "border-b border-gray-700 pb-4" : ""}>
                <div className="flex justify-between">
                  <h2 className={`text-lg md:text-xl font-semibold ${item.highlight ? 'text-orange-500' : ''}`}>
                    {item.title}
                  </h2>
                  <span className="text-orange-500 text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-2">{item.cal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-full px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-gray-400 text-sm md:text-base uppercase tracking-wider">partners and clients</h3>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">work with the best people</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {[
              'menuicon.png',
              'menuicon1.png',
              'menuicon2.png',
              'menuicon3.png',
              'menuicon4.png',
              'menuicon5.png'
            ].map((icon, index) => (
              <Image
                key={index}
                src={`/${icon}`}
                alt={`Partner ${index + 1}`}
                width={130}
                height={130}
                className="w-24 md:w-32"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
