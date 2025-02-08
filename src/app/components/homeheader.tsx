'use client';
import React, { useState } from 'react';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function HomeHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-20">
      <div className="flex justify-center items-center space-x-1 mt-4">
        <h1 className="font-bold text-orange-500">Food</h1>
        <h1 className="font-bold text-white">tuck</h1>
      </div>
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-20 py-4">
        {/* Hamburger Menu for Mobile */}
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white md:hidden" />
          </SheetTrigger>
          <SheetContent side="left" className="p-4 bg-black text-white">
            <SheetHeader>
              <SheetTitle> <div className="flex justify-center items-center space-x-1 mt-4">
               <h1 className="font-bold text-orange-500">Food</h1>
               <h1 className="font-bold text-white">tuck</h1>
              </div></SheetTitle>
            </SheetHeader>
            <nav className="mt-4 space-y-4">
              <Link href="/home" className="block">Home</Link>
              <Link href="/menu" className="block">Menu</Link>
              <Link href="/blog" className="block">Blog</Link>
              <Link href="/pages" className="block">Pages</Link>
              <div>
                <button
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                  className="flex items-center space-x-2 w-full text-left"
                >
                  <span>About Us</span>
                  <i className="fa fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 pl-4">
                    <Link href="/our-team" className="block">Our Team</Link>
                    <Link href="/mission" className="block">Our Mission</Link>
                    <Link href="/history" className="block">History</Link>
                  </div>
                )}
              </div>
              <Link href="/shop" className="block">Shop</Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Full Menu for Larger Screens */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/home" className="text-white">Home</Link>
          <Link href="/menu" className="text-white">Menu</Link>
          <Link href="/blog" className="text-white">Blog</Link>
          <Link href="/pages" className="text-white">Pages</Link>
          <Link href="/about-us" className="text-white">About us</Link>
          <Link href="/shop" className="text-white">Shop</Link>
        </nav>

        {/* Search Bar and Cart Icon */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-4 py-2 rounded-full outline-none bg-gray-800 text-white focus:ring-2 focus:ring-orange-500"
          />
       <Link href="/shoppingcart">   <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button></Link>
        </div>
      </div>
    </header>
  );
}
