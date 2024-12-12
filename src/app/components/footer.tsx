import React from "react";
import Image from "next/image"
import Link from "next/link";
const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-black text-white px-20">
                {/* Newsletter Section */}
                <div className="flex justify-between container mx-auto py-10 border-b border-gray-700">
                    <div className="text-left">
                    <h2 className="text-2xl font-bold">
    <span className="text-yellow-500">Still</span> You Need Our Support?
</h2>
<p className="text-gray-400 mt-2">
    Don&apos;t wait; make a smart logical quote here. It&apos;s pretty easy.
</p>

                    </div>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-yellow-500 focus:outline-none"
                        />
                        <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-r-lg hover:bg-yellow-600">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us.</h3>
                        <p className="text-gray-400 mb-6">
                            Corporate clients and leisure travelers have been relying on
                            Groundlink for dependable, safe, and professional chauffeured car
                            service in major cities across the world.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="bg-yellow-500 p-4 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m7-6a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold">Opening Hours</p>
                                <p className="text-gray-400">Mon - Sat (8.00 - 6.00)</p>
                                <p className="text-gray-400">Sunday - Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>About</li>
                            <li>News</li>
                            <li>Partners</li>
                            <li>Team</li>
                            <li>Menu</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Help?</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>FAQ</li>
                            <li>Terms & Conditions</li>
                            <li>Reporting</li>
                            <li>Documentation</li>
                            <li>Support Policy</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
                        <ul className="space-y-4">
                            {[
                                {
                                    image: "/img1.png",
                                    date: "20 Feb 2022",
                                    title: "Post Title One",
                                },
                                {
                                    image: "/img2.png",
                                    date: "21 Feb 2022",
                                    title: "Post Title Two",
                                },
                                {
                                    image: "/img3.png",
                                    date: "22 Feb 2022",
                                    title: "Post Title Three",
                                },
                            ].map((post, index) => (
                                <li key={index} className="flex space-x-4">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={64}
                                        height={64}
                                        className="rounded-lg object-cover"
                                    />
                                    <div>
                                        <p className="text-gray-400 text-sm">{post.date}</p>
                                        <p className="text-white">{post.title}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
            </footer>
            <div className="bg-gray-900 py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500">
                        Copyright © 2022 by faizan masood. All Rights Reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#">
                            <Image src="/facebook_icon.png" alt="Facebook" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src="/twitter_icon.png" alt="Twitter" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src="/instagram_icon.png" alt="Instagram" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src="/youtube_icon.png" alt="YouTube" width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
