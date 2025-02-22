import type { Metadata } from "next";
import localFont from "next/font/local";
 // import HeaderSelector from "./components/headerselector";
// import Header from "./components/header";

import Footer from "./components/footer";
// Import the client component
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elite Food Restuarant",
  description: "Elite Food Restuarant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        {children}
        <Footer/>
      </body>
  </html>
  
  );
}
