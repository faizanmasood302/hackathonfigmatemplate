// import Header from ".././components/header"
// import Image from 'next/image'

// import React from "react";

// export default function Checkout() {
//   return (
//     <>
// <Header>
//         {/* Text Positioned Absolutely */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <p className="text-white text-2xl md:text-3xl font-semibold">
//             Home &gt; Menu
//           </p>
//         </div>
//       </Header>    <div className="bg-white min-h-screen  flex gap-8 p-20">
//       {/* Shipping Section */}
//       <div className="w-2/3 p-20 border border-gray-300">
//         <h2 className="text-2xl font-semibold ">Shipping Address</h2>
//         <form className="grid grid-cols-2 gap-6">
//           <input
//             type="text"
//             placeholder="First name"
//             className="p-3 border border-gray-300 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Last name"
//             className="p-3 border border-gray-300 rounded"
//           />
//           <input
//             type="email"
//             placeholder="Email address"
//             className="p-3 border border-gray-300 rounded col-span-1"
//           />
//           <input
//             type="text"
//             placeholder="Phone number"
//             className="p-3 border border-gray-300 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Company"
//             className="p-3 border border-gray-300 rounded"
//           />
//           <select className="p-3 border border-gray-300 rounded">
//             <option>Choose country</option>
//           </select>
//           <select className="p-3 border border-gray-300 rounded">
//             <option>Choose city</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Zip code"
//             className="p-3 border border-gray-300 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Address 1"
//             className="p-3 border border-gray-300 rounded col-span-2"
//           />
//           <input
//             type="text"
//             placeholder="Address 2"
//             className="p-3 border border-gray-300 rounded col-span-2"
//           />
//         </form>
//         <div className="flex flex-col mt-4 ">
//             <h1 className="text-4xl">shipping address</h1>
//         <div className="flex items-center gap-2 mt-2">
//           <input type="checkbox" id="billing" />
//           <label htmlFor="billing" className="text-gray-700">
//             Same as shipping address
//           </label>
//         </div>
//         </div>

//         <div className="flex justify-between mt-8">
//           <button className="px-6 py-2 text-orange-600 border rounded">
//             &lt; Back to cart
//           </button>
//           <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
//             Proceed to shipping &gt;
//           </button>
//         </div>
//       </div>

//       {/* Summary Section */}
//       <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-300">
//         <div className="space-y-4">
//           <div className="flex items-center gap-4">
//             <Image
//               src="/burger2.png"
//               alt="Chicken Tikka Kabab"
//               width={82}
//               height={88}
//               className="rounded"
//             />
//             <div>
//               <h3 className="font-semibold text-gray-700">Chicken Tikka Kabab</h3>
//               <p className="text-sm text-gray-500">150 gm net</p>
//               <p className="text-sm font-semibold">$50</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <Image
//               src="/pasta.png"
//               alt="Chicken Tikka Kabab"
//               width={82}
//               height={88}
//               className="rounded"
//             />
//             <div>
//               <h3 className="font-semibold text-gray-700">Chicken Tikka Kabab</h3>
//               <p className="text-sm text-gray-500">150 gm net</p>
//               <p className="text-sm font-semibold">$50</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <Image
//               src="/burger.png"
//               alt="Chicken Tikka Kabab"
//               width={82}
//               height={88}
//               className="rounded"
//             />
//             <div>
//               <h3 className="font-semibold text-gray-700">Chicken Tikka Kabab</h3>
//               <p className="text-sm text-gray-500">150 gm net</p>
//               <p className="text-sm font-semibold">$50</p>
//             </div>
//           </div>
//           <hr />
//           <div className="flex justify-between text-gray-700">
//             <span>Sub-total</span>
//             <span>$130</span>
//           </div>
//           <div className="flex justify-between text-gray-700">
//             <span>Shipping</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between text-gray-700">
//             <span>Discount</span>
//             <span>25%</span>
//           </div>
//           <div className="flex justify-between text-gray-700">
//             <span>Tax</span>
//             <span>$54.76</span>
//           </div>
//           <hr />
//           <div className="flex justify-between text-gray-900 font-bold">
//             <span>Total</span>
//             <span>$432.65</span>
//           </div>
//           <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
//             Place an order &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/header";

interface CartItem {
  _key: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  total: number;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        setCartItems(JSON.parse(cartData));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const discount = subtotal * 0.1;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal - discount + tax;

  return (
    <>
      <Header>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Home &gt; Checkout
          </p>
        </div>
      </Header>

      <div className="bg-white min-h-screen flex flex-col lg:flex-row gap-8 p-4 md:p-10">
        {/* Shipping Address */}
        <div className="w-full lg:w-2/3 p-6 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="p-3 border rounded w-full" />
            <input type="text" placeholder="Last name" className="p-3 border rounded w-full" />
            <input type="email" placeholder="Email address" className="p-3 border rounded w-full" />
            <input type="text" placeholder="Phone number" className="p-3 border rounded w-full" />
            <input type="text" placeholder="Address 1" className="p-3 border rounded w-full col-span-2" />
            <input type="text" placeholder="Address 2" className="p-3 border rounded w-full col-span-2" />
            <input type="text" placeholder="Zip code" className="p-3 border rounded w-full" />

          </form>
          
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={item._key || item.productId || index} className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
                <div>
                  <h3 className="font-semibold text-gray-700">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.quantity} units</p>
                  <p className="text-sm font-semibold">${item.total.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-gray-700">
            <span>Sub-total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Discount (10%)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-gray-900 font-bold">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-orange-500 text-white py-2 rounded mt-4"
            onClick={() => alert("Order placed")}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
