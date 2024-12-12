'use client'
import React, { useState } from "react";
import Link from "next/link";
export default function HomeHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
     <header className="fixed top-0 left-0 w-full bg-transparent z-10">
   <div className="flex justify-center items-center space-x-1 mt-4">
    <h1 className="font-bold text-orange-500">Food</h1>
    <h1 className="font-bold text-white">tuck</h1>
    </div>
      <div className="flex mx-20 mb-4">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
         
            <ul className="flex space-x-6">
              <li>
                <Link href="/home" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pages" className="text-white">
                  Pages
                </Link>
              </li>
              {/* Dropdown for About Us */}
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 text-white "
                >
                  <span>About Us</span>
                  <i className="fa fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48">
                    <ul className="space-y-2 p-2">
                      <li>
                        <Link href="/our-team" className="block px-4 py-2">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/mission" className="block px-4 py-2">
                          Our Mission
                        </Link>
                      </li>
                      <li>
                        <Link href="/history" className="block px-4 py-2">
                          History
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link href="/shop" className="text-white">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Search Bar Section */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full outline outline-offset-2 outline-orange-500"
            />
          </div>
          <div className="ml-4">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </button>
          </div>
        </div>
     
    </header>
  );
}
