import Header from '../components/header';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";

// Define the interface for food items
interface Shopdet {
    id: number;
    name: string;
    price: string;
    ImageUrl: string;
}

// Array of food items
const food: Shopdet[] = [
    { id: 1, name:'burger', price: "$10.00", ImageUrl: "/shop1.png" },
    { id: 2, name: "cheese burger", price: "$10.00", ImageUrl: "/shop2.png" },
    { id: 3, name: "beef burger", price: "$10.00", ImageUrl: "/shop3.png" },
    { id: 4, name: "mass Burger", price: "$10.00", ImageUrl: "/shop4.png" },
    { id: 5, name: "coffee", price: "$10.00", ImageUrl: "/shop5.png" },
    { id: 6, name: "club sandwich", price: "$10.00", ImageUrl: "/shop6.png" },
    { id: 7, name: "coffee", price: "$10.00", ImageUrl: "/shop7.png" },
    { id: 8, name: "chicken", price: "$10.00", ImageUrl: "/shop8.png" },
    { id: 9, name: "dorito", price: "$10.00", ImageUrl: "/shop9.png" },
    { id: 10, name: "meatball", price: "$10.00", ImageUrl: "/shop10.png" },
    { id: 11, name: "steak", price: "$10.00", ImageUrl: "/shop11.png" },
    { id: 12, name: "pasta", price: "$10.00", ImageUrl: "/shop12.png" },
    { id: 13, name: "tacos", price: "$10.00", ImageUrl: "/shop13.png" },
    { id: 14, name: "strawberry", price: "$10.00", ImageUrl: "/shop14.png" },
    { id: 15, name: "strawberry", price: "$10.00", ImageUrl: "/shop14.png" }
];

export default function Shop() {
    return (
        <>
            <Header>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-2xl font-semibold">
                        Home &gt; Our Shop
                    </p>
                </div>
            </Header>

            <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
                <main className="col-span-3">
                    {/* Sort and Show Options */}
                    <div className="flex flex-wrap justify-between items-center mb-8">
                        <div className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                                <label htmlFor="sortby" className="text-sm">Sort By:</label>
                                <select id="sortby" className="text-gray-600">
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="recent">Recent</option>
                                </select>
                            </div>
                            <div className="flex items-center space-x-2">
                                <label htmlFor="show" className="text-sm">Show:</label>
                                <select id="show" className="text-gray-600">
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Food Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {food.map((item) => (
                            <div key={item.id} className="border p-4 rounded-md shadow hover:shadow-lg">
                                <div className="relative w-full h-[200px]">
                                    <Link href="/shopdetail">
                                        <Image
                                            src={item.ImageUrl}
                                            alt={item.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-md"
                                        />
                                    </Link>
                                </div>
                                <h2 className="text-lg font-semibold mt-4">{item.name}</h2>
                                <p className="text-gray-700">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </main>
                {/* Sidebar */}
                <div className="col-span-1 space-y-8 order-1 lg:order-none">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center p-3 text-white bg-orange-500">
                            <FaSearch />
                        </div>
                    </div>
                    {/* Category List */}
                    <div>
                        <h1 className='text-2xl mb-4'>Category</h1>
                        <ul>
                            {food.slice(0, 10).map((item) => (
                                <li key={item.id} className="flex items-center space-x-2 mb-2">
                                    <input type="checkbox" id={`${item.id}`} />
                                    <label htmlFor={`${item.id}`}>{item.name}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Promo Image */}
                    <div className="relative w-full h-[300px]">
                        <Image src="/sideimage.png" alt="Sample Image" layout="fill" className="object-cover rounded-md" />
                        <div className="absolute inset-0 flex flex-col justify-center text-white p-6">
                            <h1 className="text-lg font-bold">Classic Restaurant</h1>
                            <p className="text-orange-500">$45.00</p>
                            <button className="mt-4 bg-orange-500 px-4 py-2 rounded">Shop Now</button>
                        </div>
                    </div>
                    {/* Latest Products */}
                    <div>
                        <h1 className='text-2xl mb-4'>Latest Products</h1>
                        {food.slice(0, 4).map((item) => (
                            <div key={item.id} className="flex items-center gap-4 border p-2 rounded-md">
                                <Image
                                    src={item.ImageUrl}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                    className="rounded-md"
                                />
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Product Tags */}
                    <div>
                        <h1 className='text-2xl mb-4'>Product Tags</h1>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-2 bg-gray-200 rounded">Pizza</span>
                            <span className="px-4 py-2 bg-gray-200 rounded">Burger</span>
                            <span className="px-4 py-2 bg-gray-200 rounded">Juice</span>
                            <span className="px-4 py-2 bg-gray-200 rounded">Sandwich</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}

            </div>
        </>
    );
}
