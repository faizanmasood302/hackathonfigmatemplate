import Image from 'next/image';
import Header from '.././components/header'
import Link from 'next/link';
import { FaCalendar, FaComment, FaUser, FaSearch, FaStar, FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function BlogCard() {
    return (
    <>
            <Header>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-base sm:text-xl md:text-2xl font-semibold">
                        Home &gt; Blog
                    </p>
                </div>
            </Header>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden gap-4 mt-4 sm:mt-6 md:mt-10 px-4 sm:px-6 lg:px-8">
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px]">
                            <Image
                                src="/shop1.png"
                                alt="Tacos with vegetables"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-sm">
                                <span className="block text-base sm:text-lg font-semibold">14</span>
                                <span className="block text-xs sm:text-sm">Feb</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                            <div className="flex items-center text-xs sm:text-sm md:text-sm text-gray-500 flex-wrap">
                                <span className='hover:text-orange-500'> <FaCalendar className="w-3 sm:w-4 h-3 sm:h-4" /> </span>Feb 14, 2022
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaComment className="w-3 sm:w-4 h-3 sm:h-4" /></span>3
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaUser className="w-3 sm:w-4 h-3 sm:h-4" /></span> Admin
                            </div>
                            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
                                10 Reasons To Do A Digital Detox Challenge
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-gray-600">
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <div className="mt-3 sm:mt-4">
                                <Link
                                    href="#"
                                    className="text-orange-500 hover:underline flex items-center"
                                >
                                    <button className="border-2 sm:border-3 md:border-4 border-orange-500 rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base">
                                        Read More
                                        <span className="ml-1 sm:ml-2">&rarr;</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px]">
                            <Image
                                src="/shop1.png"
                                alt="Tacos with vegetables"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-sm">
                                <span className="block text-base sm:text-lg font-semibold">14</span>
                                <span className="block text-xs sm:text-sm">Feb</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                            <div className="flex items-center text-xs sm:text-sm md:text-sm text-gray-500 flex-wrap">
                                <span className='hover:text-orange-500'> <FaCalendar className="w-3 sm:w-4 h-3 sm:h-4" /> </span>Feb 14, 2022
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaComment className="w-3 sm:w-4 h-3 sm:h-4" /></span>3
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaUser className="w-3 sm:w-4 h-3 sm:h-4" /></span> Admin
                            </div>
                            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
                                10 Reasons To Do A Digital Detox Challenge
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-gray-600">
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <div className="mt-3 sm:mt-4">
                                <Link
                                    href="#"
                                    className="text-orange-500 hover:underline flex items-center"
                                >
                                    <button className="border-2 sm:border-3 md:border-4 border-orange-500 rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base">
                                        Read More
                                        <span className="ml-1 sm:ml-2">&rarr;</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px]">
                            <Image
                                src="/shop1.png"
                                alt="Tacos with vegetables"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-sm">
                                <span className="block text-base sm:text-lg font-semibold">14</span>
                                <span className="block text-xs sm:text-sm">Feb</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                            <div className="flex items-center text-xs sm:text-sm md:text-sm text-gray-500 flex-wrap">
                                <span className='hover:text-orange-500'> <FaCalendar className="w-3 sm:w-4 h-3 sm:h-4" /> </span>Feb 14, 2022
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaComment className="w-3 sm:w-4 h-3 sm:h-4" /></span>3
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaUser className="w-3 sm:w-4 h-3 sm:h-4" /></span> Admin
                            </div>
                            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
                                10 Reasons To Do A Digital Detox Challenge
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-gray-600">
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <div className="mt-3 sm:mt-4">
                                <Link
                                    href="#"
                                    className="text-orange-500 hover:underline flex items-center"
                                >
                                    <button className="border-2 sm:border-3 md:border-4 border-orange-500 rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base">
                                        Read More
                                        <span className="ml-1 sm:ml-2">&rarr;</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px]">
                            <Image
                                src="/shop1.png"
                                alt="Tacos with vegetables"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-sm">
                                <span className="block text-base sm:text-lg font-semibold">14</span>
                                <span className="block text-xs sm:text-sm">Feb</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                            <div className="flex items-center text-xs sm:text-sm md:text-sm text-gray-500 flex-wrap">
                                <span className='hover:text-orange-500'> <FaCalendar className="w-3 sm:w-4 h-3 sm:h-4" /> </span>Feb 14, 2022
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaComment className="w-3 sm:w-4 h-3 sm:h-4" /></span>3
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaUser className="w-3 sm:w-4 h-3 sm:h-4" /></span> Admin
                            </div>
                            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
                                10 Reasons To Do A Digital Detox Challenge
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-gray-600">
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <div className="mt-3 sm:mt-4">
                                <Link
                                    href="#"
                                    className="text-orange-500 hover:underline flex items-center"
                                >
                                    <button className="border-2 sm:border-3 md:border-4 border-orange-500 rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base">
                                        Read More
                                        <span className="ml-1 sm:ml-2">&rarr;</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px]">
                            <Image
                                src="/shop1.png"
                                alt="Tacos with vegetables"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-sm">
                                <span className="block text-base sm:text-lg font-semibold">14</span>
                                <span className="block text-xs sm:text-sm">Feb</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                            <div className="flex items-center text-xs sm:text-sm md:text-sm text-gray-500 flex-wrap">
                                <span className='hover:text-orange-500'> <FaCalendar className="w-3 sm:w-4 h-3 sm:h-4" /> </span>Feb 14, 2022
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaComment className="w-3 sm:w-4 h-3 sm:h-4" /></span>3
                                <span className="mx-1 sm:mx-2">|</span>
                                <span className='hover:text-orange-500'><FaUser className="w-3 sm:w-4 h-3 sm:h-4" /></span> Admin
                            </div>
                            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
                                10 Reasons To Do A Digital Detox Challenge
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-gray-600">
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <div className="mt-3 sm:mt-4">
                                <Link
                                    href="#"
                                    className="text-orange-500 hover:underline flex items-center"
                                >
                                    <button className="border-2 sm:border-3 md:border-4 border-orange-500 rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base">
                                        Read More
                                        <span className="ml-1 sm:ml-2">&rarr;</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Updated Sidebar with White Theme */}
                    <div className="lg:w-1/3 space-y-8">
                        {/* Search Bar */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search Your Keyword.."
                                    className="w-full bg-white text-gray-800 border-none focus:outline-none"
                                />
                                <button className="bg-orange-500 p-2 rounded">
                                    <FaSearch className="text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Author Profile */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Prince Miyako"
                                        width={96}
                                        height={96}
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-gray-800 text-lg font-medium mb-1">Prince Miyako</h3>
                                <p className="text-gray-600 text-sm mb-2">Blogger/Photographer</p>
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar key={star} className="text-orange-500 text-sm" />
                                    ))}
                                    <span className="text-gray-600 text-sm">(1 Review)</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibula distinctio.
                                </p>
                            </div>
                        </div>

                        {/* Recent Post */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-gray-800 text-lg font-medium mb-4">Recent Post</h3>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((post) => (
                                    <div key={post} className="flex gap-4">
                                        <div className="w-20 h-20 relative flex-shrink-0">
                                            <Image
                                                src={`/recent${post}.jpg`}
                                                alt="Recent post"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">June 22, 2020</p>
                                            <p className="text-gray-700">Lorem ipsum dolor sit cing elit, sed do.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Filter By Menu */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-gray-800 text-lg font-medium mb-4">Filter By Menu</h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'Chicken Fry', price: '26' },
                                    { name: 'Burger Food', price: '45' },
                                    { name: 'Pizza', price: '15' },
                                    { name: 'Fresh Fruits', price: '35' },
                                    { name: 'Vegetables', price: '15' }
                                ].map((item) => (
                                    <div key={item.name} className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-12 h-12 relative">
                                                <Image
                                                    src={`/menu/${item.name.toLowerCase().replace(' ', '-')}.jpg`}
                                                    alt={item.name}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded"
                                                />
                                            </div>
                                            <span className="text-gray-700">{item.name}</span>
                                        </div>
                                        <span className="text-gray-600">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-gray-800 text-lg font-medium mb-4">Popular Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Sandwich', 'Fish', 'BBQ', 'Restaurant', 'Chicken Sharma', 
                                  'Health', 'Fastfood', 'Food', 'Pizza', 'Burger', 'Chicken'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 border border-gray-200 rounded text-gray-600 text-sm hover:border-orange-500 cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Photo Gallery */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-gray-800 text-lg font-medium mb-4">Photo Gallery</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {[1, 2, 3, 4, 5, 6].map((photo) => (
                                    <div key={photo} className="relative aspect-square">
                                        <Image
                                            src={`/gallery${photo}.jpg`}
                                            alt={`Gallery image ${photo}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Follow Us */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-gray-800 text-lg font-medium mb-4">Follow Us</h3>
                            <div className="flex gap-4 justify-center">
                                {[
                                    { Icon: FaTwitter, bg: 'bg-white' },
                                    { Icon: FaYoutube, bg: 'bg-white' },
                                    { Icon: FaPinterest, bg: 'bg-orange-500' },
                                    { Icon: FaInstagram, bg: 'bg-white' },
                                    { Icon: FaFacebookF, bg: 'bg-white' }
                                ].map(({ Icon, bg }, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`${bg} p-2 rounded text-gray-600 border border-gray-200 hover:border-orange-500`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
                );

    }
    