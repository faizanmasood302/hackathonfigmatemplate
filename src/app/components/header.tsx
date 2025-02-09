// 'use client'

// import { useMemo, useEffect, useState, useCallback } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Menu } from 'lucide-react'

// // Types
// interface HeaderProps {
//   children?: React.ReactNode
// }

// interface NavLinkProps {
//   href: string
//   label: string
//   className?: string
// }

// // Constants
// const HEADER_LINKS = [
//   { href: '/home', label: 'Home' },
//   { href: '/menu', label: 'Menu' },
//   { href: '/blog', label: 'Blog' },
//   { href: '/pages', label: 'Pages' },
//   { href: '/about-us', label: 'About' },
//   { href: '/shop', label: 'Shop' },
//   { href: '/contact', label: 'Contact' },
// ] as const

// // Components
// const NavLink = ({ href, label, className = '' }: NavLinkProps) => (
//   <Link href={href} className={`hover:text-orange-500 ${className}`}>
//     {label}
//   </Link>
// )

// const SearchIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
//           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//   </svg>
// )

// const UserIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
//           d="M5.121 17.804A7.968 7.968 0 0112 15a7.968 7.968 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// )

// const CartIcon = ({ cartCount }: { cartCount: number }) => (
//   <div className="relative">
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
//             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7c-.1.2-.15.4-.15.6a1 1 0 001 1h12a1 1 0 001-1c0-.2-.05-.4-.15-.6L17 13M7 13H3m10 8a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
//     </svg>
//     {cartCount > 0 && (
//       <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
//         {cartCount}
//       </span>
//     )}
//   </div>
// )

// export default function Header({ children }: HeaderProps) {
//   const [searchVisible, setSearchVisible] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [cartCount, setCartCount] = useState(0)

//   const toggleSearch = useCallback(() => {
//     setSearchVisible(prev => !prev)
//   }, [])

//   const filteredLinks = useMemo(() => 
//     HEADER_LINKS.filter(link =>
//       link.label.toLowerCase().includes(searchQuery.toLowerCase())
//     ),
//     [searchQuery]
//   )

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await fetch("/api/cart")
//         if (!response.ok) {
//           throw new Error("Failed to fetch cart items.")
//         }
//         const data = await response.json()
//         setCartCount(data.cart.length)
//       } catch (error) {
//         console.error("Error fetching cart items:", error)
//       }
//     }
//     fetchCart()
//   }, [])

//   return (
//     <header className="bg-black text-white">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <span className="text-white">Food</span>
//           <span className="text-orange-500">luck</span>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           {HEADER_LINKS.map(link => (
//             <NavLink key={link.href} {...link} />
//           ))}
//         </nav>

//         {/* Actions */}
//         <div className="flex space-x-4 items-center">
//           <button
//             aria-label="Toggle search"
//             className="hover:text-orange-500"
//             onClick={toggleSearch}
//           >
//             <SearchIcon />
//           </button>
          
//           <Link href="/signin" aria-label="Sign in" className="hover:text-orange-500">
//             <UserIcon />
//           </Link>
          
//           <Link href="/shoppingcart" aria-label="Shopping cart" className="hover:text-orange-500">
//             <CartIcon cartCount={cartCount} />
//           </Link>
//         </div>
        
//         <Menu className="md:hidden" aria-label="Menu" />
//       </div>

//       {/* Search Panel */}
//       {searchVisible && (
//         <div className="container mx-auto py-4 px-6">
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded text-black"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             aria-label="Search"
//           />
//           <div className="mt-2">
//             {filteredLinks.map(link => (
//               <NavLink key={link.href} {...link} className="block" />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Hero Image */}
//       <div className="relative">
//         <Image 
//           src="/header.png" 
//           alt="header" 
//           width={1960} 
//           height={325} 
//           className="self-center"
//           priority
//         />
//         {children}
//       </div>
//     </header>
//   )
// }
// "use client";

// import { useMemo, useEffect, useState, useCallback } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu } from "lucide-react";
// import { getCookie } from "cookies-next";
// import Logout from "@/app/logout/page";

// // Types
// interface HeaderProps {
//   children?: React.ReactNode;
// }

// interface NavLinkProps {
//   href: string;
//   label: string;
//   className?: string;
// }

// // Constants
// const HEADER_LINKS = [
//   { href: "/home", label: "Home" },
//   { href: "/menu", label: "Menu" },
//   { href: "/blog", label: "Blog" },
//   { href: "/pages", label: "Pages" },
//   { href: "/about-us", label: "About" },
//   { href: "/shop", label: "Shop" },
//   { href: "/contact", label: "Contact" },
// ] as const;

// // Components
// const NavLink = ({ href, label, className = "" }: NavLinkProps) => (
//   <Link href={href} className={`hover:text-orange-500 ${className}`}>
//     {label}
//   </Link>
// );

// const SearchIcon = () => (
//   <svg
//     className="w-5 h-5"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//     />
//   </svg>
// );

// const UserIcon = () => (
//   <svg
//     className="w-5 h-5"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M5.121 17.804A7.968 7.968 0 0112 15a7.968 7.968 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//     />
//   </svg>
// );

// const CartIcon = ({ cartCount }: { cartCount: number }) => (
//   <div className="relative">
//     <svg
//       className="w-5 h-5"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7c-.1.2-.15.4-.15.6a1 1 0 001 1h12a1 1 0 001-1c0-.2-.05-.4-.15-.6L17 13M7 13H3m10 8a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z"
//       />
//     </svg>
//     {cartCount > 0 && (
//       <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
//         {cartCount}
//       </span>
//     )}
//   </div>
// );

// export default function Header({ children }: HeaderProps) {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cartCount, setCartCount] = useState(0);
//   const isLoggedIn = !!getCookie("auth_token"); // Check if user is logged in

//   const toggleSearch = useCallback(() => {
//     setSearchVisible((prev) => !prev);
//   }, []);

//   const filteredLinks = useMemo(
//     () =>
//       HEADER_LINKS.filter((link) =>
//         link.label.toLowerCase().includes(searchQuery.toLowerCase())
//       ),
//     [searchQuery]
//   );

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await fetch("/api/cart");
//         if (!response.ok) {
//           throw new Error("Failed to fetch cart items.");
//         }
//         const data = await response.json();
//         setCartCount(data.cart.length);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };
//     fetchCart();
//   }, []);

//   return (
//     <header className="bg-black text-white">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <span className="text-white">Food</span>
//           <span className="text-orange-500">luck</span>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           {HEADER_LINKS.map((link) => (
//             <NavLink key={link.href} {...link} />
//           ))}
//         </nav>

//         {/* Actions */}
//         <div className="flex space-x-4 items-center">
//           <button
//             aria-label="Toggle search"
//             className="hover:text-orange-500"
//             onClick={toggleSearch}
//           >
//             <SearchIcon />
//           </button>

//           {/* Conditionally Render Login or Logout */}
//           {isLoggedIn ? (
//             <Logout />
//           ) : (
//             <Link href="/signin" aria-label="Sign in" className="hover:text-orange-500">
//               <UserIcon />
//             </Link>
//           )}

//           <Link href="/shoppingcart" aria-label="Shopping cart" className="hover:text-orange-500">
//             <CartIcon cartCount={cartCount} />
//           </Link>
//         </div>

//         <Menu className="md:hidden" aria-label="Menu" />
//       </div>

//       {/* Search Panel */}
//       {searchVisible && (
//         <div className="container mx-auto py-4 px-6">
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded text-black"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             aria-label="Search"
//           />
//           <div className="mt-2">
//             {filteredLinks.map((link) => (
//               <NavLink key={link.href} {...link} className="block" />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Hero Image */}
//       <div className="relative">
//         <Image
//           src="/header.png"
//           alt="header"
//           width={1960}
//           height={325}
//           className="self-center"
//           priority
//         />
//         {children}
//       </div>
//     </header>
//   );
// }
"use client";

import { useMemo, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { getCookie } from "cookies-next";
import Logout from "@/app/logout/page";

// Types
interface HeaderProps {
  children?: React.ReactNode;
}

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

// Constants
const HEADER_LINKS: readonly NavLinkProps[] = [
  { href: "/home", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/blog", label: "Blog" },
  { href: "/pages", label: "Pages" },
  { href: "/about-us", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

// Components
const NavLink = ({ href, label, className = "" }: NavLinkProps) => (
  <Link href={href} className={`hover:text-orange-500 ${className}`}>
    {label}
  </Link>
);

const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.121 17.804A7.968 7.968 0 0112 15a7.968 7.968 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CartIcon = ({ cartCount }: { cartCount: number }) => (
  <div className="relative">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7c-.1.2-.15.4-.15.6a1 1 0 001 1h12a1 1 0 001-1c0-.2-.05-.4-.15-.6L17 13M7 13H3m10 8a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
    {cartCount > 0 && (
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-orange-500 rounded-full">
        {cartCount}
      </span>
    )}
  </div>
);

export default function Header({ children }: HeaderProps) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getCookie("auth_token")); // Ensure it's in useEffect to avoid hydration mismatch

    const fetchCart = async () => {
      try {
        const response = await fetch("/api/cart", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to fetch cart items.");
        }
        const data = await response.json();
        setCartCount(data.cart.length);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCart();
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchVisible((prev) => !prev);
  }, []);

  const filteredLinks = useMemo(
    () =>
      HEADER_LINKS.filter((link) =>
        link.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Food</span>
          <span className="text-orange-500">Tuck</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {HEADER_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        {/* Actions */}
        <div className="flex space-x-4 items-center">
          <button
            aria-label="Toggle search"
            className="hover:text-orange-500"
            onClick={toggleSearch}
          >
            <SearchIcon />
          </button>

          {/* Conditionally Render Login or Logout */}
          {isLoggedIn ? (
            <Logout />
          ) : (
            <Link href="/signin" aria-label="Sign in" className="hover:text-orange-500">
              <UserIcon />
            </Link>
          )}

          <Link href="/shoppingcart" aria-label="Shopping cart" className="hover:text-orange-500">
            <CartIcon cartCount={cartCount} />
          </Link>
        </div>

        <Menu className="md:hidden" aria-label="Menu" />
      </div>

      {/* Search Panel */}
      {searchVisible && (
        <div className="container mx-auto py-4 px-6">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search"
          />
          <div className="mt-2">
            {filteredLinks.map((link) => (
              <NavLink key={link.href} {...link} className="block" />
            ))}
          </div>
        </div>
      )}

      {/* Hero Image */}
      <div className="relative">
        <Image
          src="/header.png"
          alt="header"
          width={1960}
          height={325}
          className="self-center"
          priority
        />
        {children}
      </div>
    </header>
  );
}
