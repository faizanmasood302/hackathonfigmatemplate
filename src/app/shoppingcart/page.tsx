"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/header";
import { urlFor } from "@/sanity/lib/image";
interface CartItem {
  _key: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  rating: number;
  total: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  const handleCheckout = () => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    router.push("/shippingcart");
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("/api/cart");
        if (!response.ok) {
          throw new Error("Failed to fetch cart items.");
        }
        const data = await response.json();
        setCartItems(data.cart || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCart();
  }, []);

  const handleRemoveItem = async (key: string) => {
    try {
      const response = await fetch(`/api/cart`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }

      setCartItems(cartItems.filter((item) => item._key !== key));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.total, 0);

  return (
    <>
      <Header>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Home &gt; Shopping Cart
          </p>
        </div>
      </Header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
  {cartItems.map((item) => (
    <tr key={item._key} className="border-b border-gray-300">
      <td className="p-4 flex items-center gap-4">
        <Image
          src={urlFor(item.image || "/placeholder.png")}
          alt={item.name || "Product Image"}
          width={60}
          height={60}
          className="rounded"
        />
        <div>
          <span className="font-semibold block">{item.name}</span>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-lg ${index < item.rating ? "text-yellow-500" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </td>
      <td className="p-4 text-center">${item.price.toFixed(2)}</td>
      <td className="p-4 text-center">
        <div className="flex items-center justify-center border border-gray-300 rounded w-fit mx-auto">
          <button
            onClick={() => {
              const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
              setCartItems(
                cartItems.map((cartItem) =>
                  cartItem._key === item._key
                    ? { ...cartItem, quantity: newQuantity, total: newQuantity * cartItem.price }
                    : cartItem
                )
              );
            }}
            className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-4 py-1 border-x">{item.quantity}</span>
          <button
            onClick={() => {
              const newQuantity = item.quantity + 1;
              setCartItems(
                cartItems.map((cartItem) =>
                  cartItem._key === item._key
                    ? { ...cartItem, quantity: newQuantity, total: newQuantity * cartItem.price }
                    : cartItem
                )
              );
            }}
            className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </td>
      <td className="p-4 text-center font-semibold">${item.total.toFixed(2)}</td>
      <td className="p-4 text-center">
        <button
          className="text-orange-500 hover:text-orange-600 focus:outline-none"
          onClick={() => handleRemoveItem(item._key)}
        >
          ✖
        </button>
      </td>
    </tr>
  ))}
</tbody>
        </table>

        <div className="w-full md:w-1/3 p-4 border border-gray-300 rounded">
          <h3 className="font-bold mb-2">Total Bill</h3>
          <div className="flex justify-between text-lg mb-2">
            <span>Cart Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <span>Total Amount</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} className="bg-orange-500 text-white w-full mt-4 py-2 rounded hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
