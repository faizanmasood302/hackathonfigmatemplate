'use client'
import Header from ".././components/header";
import React, { useState } from 'react';
import Image from "next/image"; // Use this if using Next.js, otherwise use <img>

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  { id: 1, name: 'Burger', price: 35.0, image: '/burger.png', quantity: 1 },
  { id: 2, name: 'pasta', price: 26.0, image: '/pasta.png', quantity: 1 },
  { id: 3, name: 'doritoplatter', price: 15.0, image: '/doritoplatter.png', quantity: 1 },
  { id: 4, name: 'cheese burger', price: 45.0, image: '/burger2.png', quantity: 1 },
  { id: 5, name: 'meatball', price: 15.0, image: '/meatball.png', quantity: 1 },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
    <Header>
        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">FAQ</h1>
          <p className="text-white text-xl md:text-2xl font-semibold">
            <span className="text-orange-500">Home</span> &gt; FAQ
          </p>
        </div>
      </Header>
    <div className="container mx-auto px-4 py-8">
      {/* Table Section */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-left">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4 flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <span className="font-semibold">{item.name}</span>
                </td>
                <td className="p-4 text-center">${item.price.toFixed(2)}</td>
                <td className="p-4 text-center">
                  <div className="inline-flex items-center border rounded">
                    <button
                      className="px-2 py-1 border-r"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 border-l"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 text-center font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td
                  className="p-4 text-center text-red-500 cursor-pointer"
                  onClick={() => removeItem(item.id)}
                >
                  &times;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Coupon and Summary Section */}
      <div className="flex flex-col md:flex-row justify-between mt-8">
        {/* Coupon Code */}
        <div className="md:w-1/2 w-full p-4">
          <h2 className="font-semibold mb-4">Coupon Code</h2>
          <div className="flex items-center border rounded">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full p-2 border-none focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2">Apply</button>
          </div>
        </div>

        {/* Total Bill */}
        <div className="md:w-1/3 w-full p-4">
          <h2 className="font-semibold mb-4">Total Bill</h2>
          <div className="border p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span>Cart Subtotal</span>
              <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Charge</span>
              <span className="font-semibold">$00.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total Amount</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShoppingCart;
