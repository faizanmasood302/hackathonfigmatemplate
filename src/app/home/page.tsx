'use client';
import picture from '/public/img1.png';
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter, FaHamburger, FaCookie, FaGlassWhiskey } from 'react-icons/fa';
import { Great_Vibes } from 'next/font/google';
import { FaUtensils, FaPizzaSlice, FaUserTie } from "react-icons/fa";
import MenuGallery from '../components/items';
import OurChefs from '../components/ourchef';
import Testimonial from '../components/testimonial'
import BlogSection from '../components/blog'
import HomeHeader from "../components/homeheader"
import Link from 'next/link';
import { motion } from 'framer-motion';

const greatVibes = Great_Vibes({
    weight: '400',
    subsets: ['latin'],
});

function Home() {
    const socialIcons = [
        { Icon: FaFacebook, href: "#" },
        { Icon: FaInstagram, href: "#" },
        { Icon: FaTwitter, href: "#" }
    ];

    return (
        <>
            <HomeHeader />

            {/* Hero Section */}
            <div className="relative min-h-screen w-full">
                <div className="absolute inset-0">
                    <Image
                        src={picture}
                        alt="profile"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-black opacity-90" />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute px-4 md:left-20 top-1/2 transform -translate-y-1/2 text-left space-y-4 w-full md:w-auto">
                    <h1 className={`text-white text-xl md:text-2xl ${greatVibes.className}`}>Its quick & amusing</h1>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl">Welcome to Foodtuck</h2>
                    <p className="text-white max-w-lg text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        <br className="hidden md:block" />
                        Tempore modi assumenda ducimus,.
                    </p>
                    <button className="bg-orange-500 text-white rounded-full px-4 md:px-6 py-2 hover:bg-orange-600 transition-colors text-sm md:text-base">
                        See Menu
                    </button>
                </motion.div>

                <div className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 flex-col items-center z-20">
                    <div className="w-px h-20 bg-white" />
                    <div className="flex flex-col space-y-6 my-6">
                        {socialIcons.map(({ Icon, href }) => (
                            <Link key={Icon.name} href={href}>
                                <Icon className="text-white text-xl md:text-2xl cursor-pointer hover:text-orange-500 transition-colors" />
                            </Link>
                        ))}
                    </div>
                    <div className="w-px h-20 bg-white" />
                </div>
                <div className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
                        <Image
                            src="/Image.png"
                            alt="featured image"
                            width={500}
                            height={500}
                            priority
                            className="object-contain transition-transform duration-700 ease-in-out hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>

            {/* About Us Section */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black min-h-screen w-full relative py-12 md:py-0">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4 text-center lg:text-left">
                            <h1 className={`text-orange-500 text-xl md:text-2xl ${greatVibes.className}`}>About Us</h1>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl">
                                <span className="text-orange-500">WE</span>
                                <span className="text-white"> Create the best</span>
                                <br />
                                <span className="text-white">foody product</span>
                            </h1>
                            <p className="text-white text-sm md:text-base">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                <br className="hidden md:block" />
                                Nam accusamus architecto repellat eum ducimus itaque perspiciatis
                                <br className="hidden md:block" />
                                ad quis quam, aliquam sapiente aliquid? Numquam excepturi nihil
                            </p>
                            <div className="space-y-2 text-white text-sm md:text-base">
                                <p>✓ Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <p>✓ Expedita, perferendis. Alias autem quis nesciunt in corrupti</p>
                                <p>✓ dicta aliquam dolores nemo sequi sapiente eligendi voluptates,</p>
                            </div>
                            <button className="bg-orange-500 text-white rounded-full px-6 py-2 hover:bg-orange-600 transition-colors mt-4">
                                Read more
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                <Image
                                    src="/img2.png"
                                    alt="featured image"
                                    width={500}
                                    height={500}
                                    priority
                                    className="object-contain w-full transition-transform duration-700 ease-in-out"
                                />
                            </motion.div>
                            <div className="space-y-4">
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Image
                                        src="/img3.png"
                                        alt="featured image"
                                        width={242}
                                        height={242}
                                        priority
                                        className="object-contain w-full transition-transform duration-700 ease-in-out"
                                    />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Image
                                        src="/img4.png"
                                        alt="featured image"
                                        width={242}
                                        height={242}
                                        priority
                                        className="object-contain w-full transition-transform duration-700 ease-in-out"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Food Category Section */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black min-h-screen w-full relative py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className={`text-white text-3xl md:text-4xl ${greatVibes.className}`}>Food Category</h1>
                        <h2 className='text-3xl md:text-4xl text-white mt-4'>
                            <span className='text-orange-500'>Choose</span> Food Items
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[5, 6, 7, 8].map((num) => (
                            <motion.div 
                                key={num} 
                                whileHover={{ scale: 1.05 }} 
                                transition={{ duration: 0.3 }}
                                className="flex justify-center">
                                <Image 
                                    src={`/img${num}.png`} 
                                    alt="img" 
                                    width={250} 
                                    height={250} 
                                    className="w-full max-w-[250px] transition-transform duration-700 ease-in-out" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-black text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Images Section */}
                        <div className="border border-orange-500 p-4 rounded-lg">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Image
                                        src="/tacos.png"
                                        alt="Tacos"
                                        width={362}
                                        height={356}
                                        className="rounded-lg w-full transition-transform duration-700 ease-in-out"
                                    />
                                </motion.div>
                                <div className="pt-14">
                                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                        <Image
                                            src="/burger.png"
                                            alt="Burger"
                                            width={281}
                                            height={201}
                                            className="rounded-lg w-full transition-transform duration-700 ease-in-out"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Image
                                        src="/chicken.png"
                                        alt="Fried Chicken"
                                        width={200}
                                        height={200}
                                        className="rounded-lg w-full transition-transform duration-700 ease-in-out"
                                    />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <Image
                                        src="/burger3.png"
                                        alt="burger3"
                                        width={200}
                                        height={200}
                                        className="rounded-lg w-full transition-transform duration-700 ease-in-out"
                                    />
                                </motion.div>
                                <div className="space-y-4">
                                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                        <Image
                                            src="/burger2.png"
                                            alt="burger2"
                                            width={200}
                                            height={200}
                                            className="rounded-lg w-full transition-transform duration-700 ease-in-out"
                                        />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                        <Image
                                            src="/pasta.png"
                                            alt="Pasta"
                                            width={200}
                                            height={200}
                                            className="rounded-lg w-full transition-transform duration-700 ease-in-out"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="space-y-6">
                            <h3 className={`text-orange-500 text-xl md:text-2xl ${greatVibes.className}`}>
                                Why Choose Us
                            </h3>
                            <h1 className="text-3xl md:text-4xl font-bold">
                                <span className="text-orange-500">Extra</span> ordinary taste
                                <br />
                                And Experienced
                            </h1>
                            <p className="text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                                Ultrices mattis sed vitae mus risus.
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { Icon: FaHamburger, text: "Fast Food" },
                                    { Icon: FaCookie, text: "Lunch" },
                                    { Icon: FaGlassWhiskey, text: "Dinner" }
                                ].map(({ Icon, text }) => (
                                    <div key={text} className="text-center">
                                        <div className="bg-orange-500 p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center transition-transform duration-300 hover:scale-105">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <p className="mt-2 text-sm md:text-base">{text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-flex items-center rounded-lg space-x-4 bg-white p-4">
                                <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 rounded-l-lg"></div>
                                <div className="text-black text-3xl md:text-4xl font-bold">30+</div>
                                <div>
                                    <p className="text-black font-medium">Years of</p>
                                    <p className="text-orange-500 font-bold">Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <div className="relative w-full">
                <div className="relative">
                    <Image
                        src="/bg.png"
                        alt="Food"
                        width={2560}
                        height={625}
                        className="w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-90" />
                </div>

                <div className="absolute inset-0">
                    <div className="container mx-auto h-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 h-full items-center px-4">
                            {[
                                { Icon: FaUserTie, title: "Professional Chef", count: "420" },
                                { Icon: FaHamburger, title: "Items of Food", count: "320" },
                                { Icon: FaUtensils, title: "Years of Experience", count: "30+" },
                                { Icon: FaPizzaSlice, title: "Happy Customers", count: "220" }
                            ].map(({ Icon, title, count }) => (
                                <div key={title} className="text-center text-white">
                                    <Icon className="text-3xl md:text-4xl mx-auto mb-2 text-orange-500" />
                                    <h3 className="font-bold text-sm md:text-base">{title}</h3>
                                    <p className="text-sm md:text-base">{count}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Sections */}
            <div>
                <MenuGallery />
                <OurChefs />
                <Testimonial />
                <BlogSection />
            </div>
        </>
    );
}

export default Home;