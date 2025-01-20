import Header from ".././components/header";
import { FaPlus } from "react-icons/fa"; // Import the plus icon

export default function Faq() {
  return (
    <>
      {/* Header Section */}
      <Header>
        <div className='absolute inset-0 flex flex-col gap-6 items-center justify-center text-center'>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">FAQ</h1>
          <p className="text-white text-xl md:text-2xl font-semibold">
            <span className="text-orange-500">Home</span> &gt; FAQ
          </p>
        </div>
      </Header>

      {/* Question Section */}
      <div className="flex flex-col items-center justify-center mt-12 px-4 md:mt-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Questions Look Here
        </h1>
        <p className="text-center text-sm md:text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, vero
          quis, <br className="hidden md:block" /> suscipit necessitatibus veniam.
        </p>
      </div>

      {/* FAQ Cards Section */}
      <div className="flex items-center justify-center py-10 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-12 max-w-7xl">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex justify-between items-center w-full mb-2">
              <h1 className="text-lg md:text-xl font-semibold">
                How We Serve Food
              </h1>
              <span>
                <FaPlus className="text-orange-500 text-xl" />
              </span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Modi doloribus sint maxime, eveniet dolorem repellat. <br />
              Ex dolor aliquid temporibus ratione quibusdam.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex justify-between items-center w-full mb-2">
              <h1 className="text-lg md:text-xl font-semibold">
                How We Serve Food
              </h1>
              <span>
                <FaPlus className="text-orange-500 text-xl" />
              </span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Modi doloribus sint maxime, eveniet dolorem repellat. <br />
              Ex dolor aliquid temporibus ratione quibusdam.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex justify-between items-center w-full mb-2">
              <h1 className="text-lg md:text-xl font-semibold">
                How We Serve Food
              </h1>
              <span>
                <FaPlus className="text-orange-500 text-xl" />
              </span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Modi doloribus sint maxime, eveniet dolorem repellat. <br />
              Ex dolor aliquid temporibus ratione quibusdam.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex justify-between items-center w-full mb-2">
              <h1 className="text-lg md:text-xl font-semibold">
                How We Serve Food
              </h1>
              <span>
                <FaPlus className="text-orange-500 text-xl" />
              </span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Modi doloribus sint maxime, eveniet dolorem repellat. <br />
              Ex dolor aliquid temporibus ratione quibusdam.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex justify-between items-center w-full mb-2">
              <h1 className="text-lg md:text-xl font-semibold">
                How We Serve Food
              </h1>
              <span>
                <FaPlus className="text-orange-500 text-xl" />
              </span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Modi doloribus sint maxime, eveniet dolorem repellat. <br />
              Ex dolor aliquid temporibus ratione quibusdam.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex justify-between items-center w-full mb-2">
              <h1 className="text-lg md:text-xl font-semibold">
                How We Serve Food
              </h1>
              <span>
                <FaPlus className="text-orange-500 text-xl" />
              </span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Modi doloribus sint maxime, eveniet dolorem repellat. <br />
              Ex dolor aliquid temporibus ratione quibusdam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
