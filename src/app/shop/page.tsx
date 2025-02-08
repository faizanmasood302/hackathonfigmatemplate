'use client'

// Import necessary dependencies
import { useEffect, useState } from 'react'
import Header from '../components/header'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa"
import { client } from '@/sanity/lib/client'
import { useRouter } from 'next/navigation';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
// Define TypeScript interfaces for data structures
interface Category {
    _id: string
    title: string
    description: string
}

interface Product {
    _id: string
    name: string
    image: string
    price: number
    currency:string,
    rating: number
    slug: {
        current: string
    }
    category: {
        _id: string
        title: string
        description: string
    }
    createdAt: string
    updatedAt: string
    _createdAt: string  // Sanity's built-in timestamp
    _updatedAt: string  // Sanity's built-in timestamp
}

export default function Shop() {
    // State management for products, filters, and pagination
    const [products, setProducts] = useState<Product[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(8000)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState('default')
    const [sortOption, setSortOption] = useState('default')

    // Calculate pagination values
    const getProductsPerPage = () => {
        return productsPerPage === 'default' ? 15 : Number(productsPerPage)
    }
    const indexOfLastProduct = currentPage * getProductsPerPage()
    const indexOfFirstProduct = indexOfLastProduct - getProductsPerPage()
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(products.length / getProductsPerPage())

    // Handle page navigation
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Handle product sorting
    const handleSort = (option: string) => {
        setSortOption(option)
        let sortedProducts = [...products]

        switch (option) {
            case 'default':
                // Reset to original order from Sanity
                sortedProducts = [...allProducts]
                break
            case 'newest':
                sortedProducts.sort((a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime())
                break
            case 'oldest':
                sortedProducts.sort((a, b) => new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime())
                break
            case 'recent':
                sortedProducts.sort((a, b) => new Date(b._updatedAt).getTime() - new Date(a._updatedAt).getTime())
                break
            default:
                break
        }

        setProducts(sortedProducts)
        setCurrentPage(1)
    }

    // Handle products per page change
    const handleProductsPerPage = (value: string) => {
        setProductsPerPage(value)
        setCurrentPage(1)
    }

    // Fetch initial data from Sanity
    useEffect(() => {
        const fetchData = async () => {
            const productsQuery = `*[_type == "product"]{ 
                _id,
                name,
                "image": image.asset->url,
                price,
                slug,
                rating,
                currency,
                _createdAt,
                _updatedAt,
                "category": category->{
                    _id,
                    title,
                    description
                }
            }`

            const categoriesQuery = `*[_type == "category"]{
                _id,
                title,
                description
            }`

            const [productsData, categoriesData] = await Promise.all([
                client.fetch(productsQuery),
                client.fetch(categoriesQuery)
            ])

            setProducts(productsData)
            setAllProducts(productsData)
            setCategories(categoriesData)
        }

        fetchData()
    }, [])

    // Handle category filter changes
    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories(prev => {
            const newCategories = prev.includes(categoryId)
                ? prev.filter(cat => cat !== categoryId)
                : [...prev, categoryId]

            if (newCategories.length === 0) {
                setProducts(allProducts)
            } else {
                setProducts(allProducts.filter(product =>
                    newCategories.includes(product.category._id)
                ))
            }

            return newCategories
        })
    }

    // Handle price filter
    const handlePriceFilter = () => {
        if (selectedCategories.length === 0) {
            setProducts(allProducts.filter(product =>
                product.price >= minPrice && product.price <= maxPrice
            ))
        } else {
            setProducts(allProducts.filter(product =>
                selectedCategories.includes(product.category._id) &&
                product.price >= minPrice &&
                product.price <= maxPrice
            ))
        }
    }

    // Handle search functionality
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase()
        setSearchQuery(query)

        let filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(query)
        )

        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedCategories.includes(product.category._id)
            )
        }

        filteredProducts = filteredProducts.filter(product =>
            product.price >= minPrice && product.price <= maxPrice
        )

        setProducts(filteredProducts)
    }

    return (
        <>
            {/* Header Section */}
            <Header>
            <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Home &gt; Our Shop
                    </p>
                </div>
            </Header>

            <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Product Grid Section */}
                <main className="col-span-3">
                    {/* Sort and Filter Controls */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <label className="text-gray-600">Sort by:</label>
                                <select 
                                    value={sortOption}
                                    onChange={(e) => handleSort(e.target.value)}
                                    className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    <option value="default">Default</option>
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="recent">Recent</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-gray-600">Show:</label>
                                <select 
                                    value={productsPerPage}
                                    onChange={(e) => handleProductsPerPage(e.target.value)}
                                    className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    <option value="default">Default</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-gray-600">
                            Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} products
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {currentProducts.map((product) => (
                            <div key={product._id} className="border p-4 rounded-md shadow hover:shadow-lg">
                                <div className="relative w-full h-[200px]">
                                    <Link href={`/shopdetail/${product.slug.current}`}>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="rounded-md"
                                        />
                                    </Link>
                                </div>
                                <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                                <p className="text-gray-700">{product.currency === 'USD' ? '$' : product.currency === 'EUR' ? '€' : '£'}{product.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Sidebar Section */}
                <div className="col-span-1 space-y-8 order-1 lg:order-none">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center p-3 text-white bg-orange-500">
                            <FaSearch />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                        <h1 className='text-2xl mb-4'>Category</h1>
                        <ul>
                            {categories.map((category) => (
                                <li key={category._id} className="flex items-center space-x-2 mb-2">
                                    <input
                                        type="checkbox"
                                        id={category._id}
                                        checked={selectedCategories.includes(category._id)}
                                        onChange={() => handleCategoryChange(category._id)}
                                    />
                                    <label htmlFor={category._id}>{category.title}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Filter By Price</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <label className="text-sm">From</label>
                                <input
                                    type="number"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(Number(e.target.value))}
                                    className="w-24 p-2 border rounded"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <label className="text-sm">To</label>
                                <input
                                    type="number"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-24 p-2 border rounded"
                                />
                            </div>
                            <button
                                onClick={handlePriceFilter}
                                className="w-full bg-orange-500 text-white p-2 rounded"
                            >
                                Filter
                            </button>
                        </div>
                    </div>

                    {/* Featured Product Banner */}
                    <div className="relative w-full h-[300px] mb-8">
                        <Image src="/sideimage.png" alt="Sample Image" layout="fill" className="object-cover rounded-md" />
                        <div className="absolute inset-0 flex flex-col justify-center text-white p-6">
                            <h1 className="text-lg font-bold">Classic Restaurant</h1>
                            <p className="text-orange-500">$45.00</p>
                            <button className="mt-4 bg-orange-500 px-4 py-2 rounded">Shop Now</button>
                        </div>
                    </div>

                    {/* Latest Products Section */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className='text-2xl mb-4'>Latest Products</h1>
                        <div className='space-y-4'>
                            {products.slice(0, 4).map((item) => (
                                <div key={item._id} className="flex items-center gap-4 border p-2 rounded-md">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        className="rounded-md"
                                    />
                                    <div>
                                        <h2>{item.name}</h2>
                                        <p>${item.price.toFixed(2)}</p>
                                        <div className="flex">
                                            {[...Array(Math.min(5, Math.max(0, item.rating || 0)))].map((_, index) => (
                                                <span key={index} className="text-yellow-400">★</span>
                                            ))}
                                            {[...Array(5 - Math.min(5, Math.max(0, item.rating || 0)))].map((_, index) => (
                                                <span key={index} className="text-gray-300">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Tags Section */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className='text-2xl mb-4'>Product Tags</h1>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-2 bg-gray-200 rounded">Pizza</span>
                            <span className="px-4 py-2 bg-gray-200 rounded">Burger</span>
                            <span className="px-4 py-2 bg-gray-200 rounded">Juice</span>
                            <span className="px-4 py-2 bg-gray-200 rounded">Sandwich</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Section */}
            <div className="mt-8 mb-16">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious 
                                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                        
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1
                            if (
                                pageNumber === 1 ||
                                pageNumber === totalPages ||
                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                                return (
                                    <PaginationItem key={pageNumber}>
                                        <PaginationLink
                                            onClick={() => handlePageChange(pageNumber)}
                                            className={`cursor-pointer ${currentPage === pageNumber ? 'bg-orange-500 text-white' : ''}`}
                                        >
                                            {pageNumber}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            } else if (
                                pageNumber === currentPage - 2 ||
                                pageNumber === currentPage + 2
                            ) {
                                return (
                                    <PaginationItem key={pageNumber}>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                )
                            }
                            return null
                        })}

                        <PaginationItem>
                            <PaginationNext 
                                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </>
    )
}
