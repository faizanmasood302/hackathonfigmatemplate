import { Great_Vibes } from 'next/font/google'
import Image from 'next/image'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
})

const OurChefs = () => {
  const chefs = [
    {
      name: "D. Scoriesh",
      role: "Assistant Chef",
      image: "/chef.png", // Replace with actual image path
    },
    {
      name: "A. Brown",
      role: "Head Chef",
      image: "/chef1.png", // Replace with actual image path
    },
    {
      name: "M. Smith",
      role: "Pastry Chef",
      image: "/chef2.png", // Replace with actual image path
    },
    {
      name: "J. Doe",
      role: "Sous Chef",
      image: "/chef3.png", // Replace with actual image path
    },
  ]

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 bg-black">
      {/* Headings */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold text-orange-500 ${greatVibes.className}`}>
          Our Chef
        </h2>
        <p className="text-base sm:text-lg mt-2">
          <span className="text-white">Meet </span>
          <span className="text-orange-400">Our Chefs</span>
        </p>
      </div>

      {/* Chef Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
              <Image
                src={chef.image}
                alt={chef.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">{chef.name}</h3>
              <p className="text-sm text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurChefs
