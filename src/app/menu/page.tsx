
import Image from 'next/image';
import { FaHamburger, FaPizzaSlice, FaUserTie, FaUtensils } from 'react-icons/fa';

export default function Menu() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-12">
      {/* Starter Menu Section 1 */}
      <div className="flex w-3/4">
        {/* Image on Left */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/menuimg.png" // Replace with the first image's path
            alt="Starter Menu Dish"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        {/* Description on Right */}
        <div className="w-1/2 px-8">
          <h1 className="text-4xl font-bold mb-6 flex items-center">
            <span className="mr-2">Starter Menu</span>
            <Image
              src="/Coffee.png" // Replace with the cup icon's path
              alt="Cup Icon"
              width={24}
              height={24}
            />
          </h1>
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Alder Grilled Chinook Salmon</h2>
                <span className="text-orange-500 text-lg">32$</span>
              </div>
              <p className="text-gray-400">Toasted French bread topped with romano, cheddar</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>
                {/* Menu Item */}
                <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Alder Grilled Chinook Salmon</h2>
                <span className="text-orange-500 text-lg">32$</span>
              </div>
              <p className="text-gray-400">Toasted French bread topped with romano, cheddar</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>

            {/* Menu Item */}
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-orange-500">Berries and creme tart</h2>
                <span className="text-orange-500 text-lg">43$</span>
              </div>
              <p className="text-gray-400">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-gray-500 text-sm mt-2">700 CAL</p>
            </div>

            {/* Menu Item */}
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Tormentoso Bush Pizza Pintoage</h2>
                <span className="text-orange-500 text-lg">14$</span>
              </div>
              <p className="text-gray-400">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-gray-500 text-sm mt-2">1000 CAL</p>
            </div>

            {/* Menu Item */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Spicy Vegan Potato Curry</h2>
                <span className="text-orange-500 text-lg">35$</span>
              </div>
              <p className="text-gray-400">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>
          </div>
        </div>
      </div>

      {/* Starter Menu Section 2 */}
      <div className="flex w-3/4 flex-row-reverse">
        {/* Image on Right */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/menuimg2.png" // Replace with the second image's path
            alt="Starter Menu Dish 2"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        {/* Description on Left */}
        <div className="w-1/2 px-8">
          <h1 className="text-4xl font-bold mb-6 flex items-center">
            <span className="mr-2">Starter Menu 2</span>
            <Image
              src="/coffee.png" // Replace with the cup icon's path
              alt="Cup Icon"
              width={24}
              height={24}
            />
          </h1>
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Berries and creme tart</h2>
                <span className="text-orange-500 text-lg">43$</span>
              </div>
              <p className="text-gray-400">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-gray-500 text-sm mt-2">700 CAL</p>
            </div>
          </div>
              {/* Menu Item */}
              <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Alder Grilled Chinook Salmon</h2>
                <span className="text-orange-500 text-lg">32$</span>
              </div>
              <p className="text-gray-400">Toasted French bread topped with romano, cheddar</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>

            {/* Menu Item */}
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-orange-500">Berries and creme tart</h2>
                <span className="text-orange-500 text-lg">43$</span>
              </div>
              <p className="text-gray-400">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-gray-500 text-sm mt-2">700 CAL</p>
            </div>

            {/* Menu Item */}
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Tormentoso Bush Pizza Pintoage</h2>
                <span className="text-orange-500 text-lg">14$</span>
              </div>
              <p className="text-gray-400">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-gray-500 text-sm mt-2">1000 CAL</p>
            </div>

            {/* Menu Item */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Spicy Vegan Potato Curry</h2>
                <span className="text-orange-500 text-lg">35$</span>
              </div>
              <p className="text-gray-400">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>
        </div>
      </div>
      <div className="relative w-screen mx-auto">
                {/* Image Container */}
                <div className="relative">
                    <div>
                        <Image
                            src="/bg.png" // Replace with the correct image path
                            alt="Food"
                            layout="responsive"
                            width={2560} // Increased width for larger display
                            height={625} // Adjusted height to maintain aspect ratio
                            className=""
                        />
                        <div className="absolute inset-0 bg-black opacity-90" />

                    </div>
                    {/* Overlay Icons */}
                    <div className="absolute inset-0 flex items-center justify-evenly">
                        {/* Chef Icon */}
                        <div className="text-center text-white">
                            <FaUserTie className="text-4xl mx-auto mb-2 text-orange-500" />
                            <h3 className="font-bold">Professional Chef</h3>
                            <p>420</p>
                        </div>

                        {/* Burger Icon */}
                        <div className="text-center text-white">
                            <FaHamburger className="text-4xl mx-auto mb-2 text-orange-500" />
                            <h3 className="font-bold">Items of Food</h3>
                            <p>320</p>
                        </div>

                        {/* Fork and Spoon Icon */}
                        <div className="text-center text-white">
                            <FaUtensils className="text-4xl mx-auto mb-2 text-orange-500" />
                            <h3 className="font-bold">Years of Experience</h3>
                            <p>30+</p>
                        </div>

                        {/* Pizza Slice Icon */}
                        <div className="text-center text-white">
                            <FaPizzaSlice className="text-4xl mx-auto mb-2 text-orange-500" />
                            <h3 className="font-bold">Happy Customers</h3>
                            <p>220</p>
                        </div>
                    </div>
                </div>
            </div>

      {/* Starter Menu Section 3 */}
      <div className="flex w-3/4">
        {/* Image on Left */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/menuimg3.png" // Replace with the third image's path
            alt="Starter Menu Dish 3"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        {/* Description on Right */}
        <div className="w-1/2 px-8">
          <h1 className="text-4xl font-bold mb-6 flex items-center">
            <span className="mr-2">Starter Menu 3</span>
            <Image
              src="/coffee.png" // Replace with the cup icon's path
              alt="Cup Icon"
              width={24}
              height={24}
            />
          </h1>
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Tormentoso Bush Pizza Pintoage</h2>
                <span className="text-orange-500 text-lg">14$</span>
              </div>
              <p className="text-gray-400">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-gray-500 text-sm mt-2">1000 CAL</p>
            </div>
                {/* Menu Item */}
                <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Alder Grilled Chinook Salmon</h2>
                <span className="text-orange-500 text-lg">32$</span>
              </div>
              <p className="text-gray-400">Toasted French bread topped with romano, cheddar</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>

            {/* Menu Item */}
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-orange-500">Berries and creme tart</h2>
                <span className="text-orange-500 text-lg">43$</span>
              </div>
              <p className="text-gray-400">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-gray-500 text-sm mt-2">700 CAL</p>
            </div>

            {/* Menu Item */}
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Tormentoso Bush Pizza Pintoage</h2>
                <span className="text-orange-500 text-lg">14$</span>
              </div>
              <p className="text-gray-400">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-gray-500 text-sm mt-2">1000 CAL</p>
            </div>

            {/* Menu Item */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Spicy Vegan Potato Curry</h2>
                <span className="text-orange-500 text-lg">35$</span>
              </div>
              <p className="text-gray-400">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>
          </div>
        </div>
      </div>

      {/* Starter Menu Section 4 */}
      <div className="flex w-3/4 flex-row-reverse">
        {/* Image on Right */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/menuimg4.png" // Replace with the fourth image's path
            alt="Starter Menu Dish 4"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        {/* Description on Left */}
        <div className="w-1/2 px-8">
          <h1 className="text-4xl font-bold mb-6 flex items-center">
            <span className="mr-2">Starter Menu 4</span>
            <Image
              src="/coffee.png" // Replace with the cup icon's path
              alt="Cup Icon"
              width={24}
              height={24}
            />
          </h1>
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Spicy Vegan Potato Curry</h2>
                <span className="text-orange-500 text-lg">35$</span>
              </div>
              <p className="text-gray-400">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>
                {/* Menu Item */}
                <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Alder Grilled Chinook Salmon</h2>
                <span className="text-orange-500 text-lg">32$</span>
              </div>
              <p className="text-gray-400">Toasted French bread topped with romano, cheddar</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>

            {/* Menu Item */}
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-orange-500">Berries and creme tart</h2>
                <span className="text-orange-500 text-lg">43$</span>
              </div>
              <p className="text-gray-400">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-gray-500 text-sm mt-2">700 CAL</p>
            </div>

            {/* Menu Item */}
            <div className="border-b border-gray-700 pb-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Tormentoso Bush Pizza Pintoage</h2>
                <span className="text-orange-500 text-lg">14$</span>
              </div>
              <p className="text-gray-400">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-gray-500 text-sm mt-2">1000 CAL</p>
            </div>

            {/* Menu Item */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Spicy Vegan Potato Curry</h2>
                <span className="text-orange-500 text-lg">35$</span>
              </div>
              <p className="text-gray-400">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-gray-500 text-sm mt-2">560 CAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
