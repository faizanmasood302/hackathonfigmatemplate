import React from "react";
import Image from "next/image";

type BlogPost = {
  image: string;
  date: string;
  title: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    image: '/blog.png',
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    link: "#",
  },
  {
    image: "/blog2.png",
    date: "10 February 2022",
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    link: "#",
  },
  {
    image: "/blog3.png",
    date: "10 February 2022",
    title: "Curabitur rutrum velit ac congue malesuada",
    link: "#",
  },
];

function BlogSection() {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-orange-400 text-lg font-semibold mb-2">Blog Post</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-10">
          <span className="text-orange-500">Latest</span> News & Blog
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full h-0 pb-[80%]">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h4 className="text-lg font-semibold mb-4">{post.title}</h4>
                <a
                  href={post.link}
                  className="mt-auto text-orange-500 font-medium flex items-center justify-center hover:underline"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
