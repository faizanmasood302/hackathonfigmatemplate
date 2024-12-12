import { Great_Vibes } from 'next/font/google';
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin']
})
const OurChefs = () => {
  const chefs = [
    {
      name: "D. Scoriesh",
      role: "Assistant Chef",
      image: "/chef card.png", // Replace with actual image path
    },
    {
      name: "A. Brown",
      role: "Head Chef",
      image: "/card 2.png", // Replace with actual image path
    },
    {
      name: "M. Smith",
      role: "Pastry Chef",
      image: "/card 3.png", // Replace with actual image path
    },
    {
      name: "J. Doe",
      role: "Sous Chef",
      image: "/card 4.png", // Replace with actual image path
    },
  ];

  return (
    <section className="px-20 py-20 bg-black">
      {/* Headings */}
      <div className="text-center mb-8">
        <h2 className={`text-4xl font-bold text-orange-500 ${greatVibes.className}`}>Our Chef</h2>
        <p className="text-lg mt-2">
          <span className="text-white">Meet </span>
          <span className="text-orange-400">Our Chefs</span>
        </p>
      </div>

      {/* Chef Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">{chef.name}</h3>
              <p className="text-sm text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurChefs;
