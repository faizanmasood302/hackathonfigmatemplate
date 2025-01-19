import picture from '/public/img1.png';
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter, FaHamburger, FaCookie,FaGlassWhiskey } from 'react-icons/fa';
import { Great_Vibes } from 'next/font/google';
import { FaUtensils, FaPizzaSlice, FaUserTie } from "react-icons/fa";
import MenuGallery from '../components/items';
import OurChefs from '../components/ourchef';
import Testimonial from '../components/testimonial'
import BlogSection from '../components/blog'
import HomeHeader from "../components/homeheader"


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
        <HomeHeader/>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0">
                    <Image
                        src={picture}
                        alt="profile"
                        fill
                        priority
                        className="object-cover"
                    />
                    <span className="absolute inset-0 bg-black opacity-90" />
                </div>
                <div className="absolute left-20 top-1/2 transform -translate-y-1/2 text-left space-y-4">
                    <h1 className={`text-white text-2xl ${greatVibes.className}`}>Its quick & amusing</h1>
                    <h2 className="text-white text-4xl">Welcome to Foodtuck</h2>
                    <p className="text-white max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        <br />
                        Tempore modi assumenda ducimus,.
                    </p>
                    <button className="bg-orange-500 text-white rounded-full px-6 py-2 hover:bg-orange-600 transition-colors">
                        See Menu
                    </button>
                </div>

                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-20">
                    <div className="w-px h-20 bg-white" />
                    <div className="flex flex-col space-y-6 my-6">
                        {socialIcons.map(({ Icon, href }) => (
                            <a key={Icon.name} href={href}>
                                <Icon className="text-white text-2xl cursor-pointer hover:text-orange-500 transition-colors" />
                            </a>
                        ))}
                    </div>
                    <div className="w-px h-20 bg-white" />
                </div>
                <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
                    <Image
                        src="/Image.png"
                        alt="featured image"
                        width={500}
                        height={500}
                        priority
                        className="object-contain"
                    />
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-black h-screen w-full relative">
                <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
                    <Image
                        src="/img2.png"
                        alt="featured image"
                        width={500}
                        height={500}
                        priority
                        className="object-contain"
                    />
                    <div className="flex mt-4 justify-between">
                        <Image
                            src="/img3.png"
                            alt="featured image"
                            width={242}
                            height={242}
                            priority
                            className="object-contain"
                        />
                        <Image
                            src="/img4.png"
                            alt="featured image"
                            width={242}
                            height={242}
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="absolute left-20 top-1/2 transform -translate-y-1/2 space-y-4">
                    <h1 className={`text-orange-500 text-2xl ${greatVibes.className}`}>About Us</h1>
                    <h1 className="text-4xl">
                        <span className="text-orange-500">WE</span><span className="text-white"> Create the best</span><br /><span className="text-white">foody product</span></h1>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                        Nam accusamus architecto repellat eum ducimus itaque perspiciatis <br />
                        ad quis quam, aliquam sapiente aliquid? Numquam excepturi nihil </p>
                    <p className="text-white">✓ Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p className="text-white">✓ Expedita, perferendis. Alias autem quis nesciunt in corrupti </p>
                    <p className="text-white">✓ dicta aliquam dolores nemo sequi sapiente eligendi voluptates, </p>
                    <button className="bg-orange-500 text-white rounded-full px-6 py-2 hover:bg-orange-600 transition-colors mt-4">
                        Read more
                    </button>
                </div>
            </div>
            <div className="bg-black h-screen w-full relative">
                <div className="flex flex-col items-center justify-center">
                    <h1 className={`text-white text-4xl ${greatVibes.className}`}>Food Category</h1>
                    <h2 className='text-4xl text-white'><span className='text-orange-500'>Choose</span> Food Items</h2>
                </div>
                <div className="flex justify-between absolute left-20 right-20 top-1/2 transform -translate-y-1/2">
                    {[5, 6, 7, 8].map((num) => (
                        <Image key={num} src={`/img${num}.png`} alt="img" width={250} height={250} />
                    ))}
                </div>
            </div>


            <div className="bg-black text-white p-10 left-20 right-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
                    {/* Left: Images Section */}
                    <div className="border border-orange-500 p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-1 items-end">
                            <Image
                                src="/tacos.png"
                                alt="Tacos"
                                width={362}
                                height={356}
                                className="rounded-lg"
                            />
                            <Image
                                src="/burger.png"
                                alt="Burger"
                                width={281}
                                height={201}
                                className="rounded-lg pt-14"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {/* Middle Row */}
                            <Image
                                src="/chicken.png"
                                alt="Fried Chicken"
                                width={200}
                                height={200}
                                className="rounded-lg"
                            />

                            <Image
                                src="/burger3.png"
                                alt="burger3"
                                width={200}
                                height={200}
                                className="rounded-lg"
                            />

                            <div className="space-y-3">
                                <Image
                                    src="/burger2.png"
                                    alt="burger2"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <Image
                                    src="/pasta.png"
                                    alt="Pasta"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content Section */}
                    <div>
                        <h3 className={`text-orange-500 text-2xl ${greatVibes.className}`}>
                            Why Choose Us
                        </h3>
                        <h1 className="text-4xl font-bold">
                            <span className="text-orange-500">Extra</span> ordinary taste <br />
                            And Experienced
                        </h1>
                        <p className="text-gray-400 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            diam pellentesque bibendum non dui volutpat fringilla bibendum.
                            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                            Ultrices mattis sed vitae mus risus.
                        </p>

                        {/* Features */}
                        <div className="flex space-x-6 mt-8">
                            <div className="text-center">
                                <div className="bg-orange-500 p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                                    <FaHamburger className="w-8 h-8 text-white" />
                                </div>
                                <p className="mt-2">Fast Food</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-500 p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                                    <FaCookie className="w-8 h-8 text-white" />
                                </div>
                                <p className="mt-2">Lunch</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-500 p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                                    <FaGlassWhiskey className="w-8 h-8 text-white" />
                                </div>
                                <p className="mt-2">Dinner</p>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="mt-8 flex items-center rounded-lg space-x-4 bg-white relative p-4 w-64">
                            {/* Small orange accent */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 rounded-l-lg"></div>

                            <div className="text-black text-4xl font-bold">30+</div>
                            <div>
                                <p className="text-black font-medium">Years of</p>
                                <p className="text-orange-500 font-bold">Experience</p>
                            </div>
                        </div>
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