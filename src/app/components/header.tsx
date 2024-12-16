import Link from 'next/link';
import Image from 'next/image'
interface HeaderProps {
  children?: React.ReactNode; // Allow child elements
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Food</span>
          <span className="text-orange-500">luck</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/home"  className="hover:text-orange-500">Home</Link>
          <Link href="/menu" className="hover:text-orange-500">Menu</Link>
          <Link href="/blog"  className="hover:text-orange-500">Blog</Link>
          <Link href="/pages" className="hover:text-orange-500">Pages </Link>
          <Link href="/about-us" className="hover:text-orange-500">About </Link>
          <Link href="/shoppingcart"  className="hover:text-orange-500">Shop </Link>
          <Link href="/contact" className="hover:text-orange-500">Contact </Link>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          <button aria-label="Search" className="hover:text-orange-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <Link href="/signin" className="hover:text-orange-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A7.968 7.968 0 0112 15a7.968 7.968 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
          </Link>
          <Link href="/shippingcart" className="hover:text-orange-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7c-.1.2-.15.4-.15.6a1 1 0 001 1h12a1 1 0 001-1c0-.2-.05-.4-.15-.6L17 13M7 13H3m10 8a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            </Link>
         </div>
      </div>
      <div className="relative">
      <Image src="/header.png" alt="header"  width={1960} height={325}  />
      {children}
      
      </div>
      
      {/* Hero Section */}
    
      
    </header>
  );
};
