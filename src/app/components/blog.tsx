import React from "react";
import Image from "next/image"
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

function BlogSection () {
  return (
    <div className="bg-black text-white  px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-orange-400 text-lg font-semibold mb-2">Blog Post</h2>
        <h3 className="text-4xl font-bold mb-10">
          <span className="text-orange-500">Latest</span> News & Blog
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={391}
                height={315}
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h4 className="text-lg font-semibold mb-4">{post.title}</h4>
                <a
                  href={post.link}
                  className="text-orange-500 font-medium flex items-center hover:underline"
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
};

export default BlogSection;
