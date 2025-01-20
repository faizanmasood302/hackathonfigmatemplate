import Image from 'next/image';
import Header from '.././components/header'
import Link from 'next/link';
import { FaCalendar, FaComment, FaUser } from "react-icons/fa";

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
                        <span className='hover:text-orange-400'> <FaCalendar className="w-3 sm:w-4 h-3 sm:h-4" /> </span>Feb 14, 2022
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
            </>
                );

    }
    