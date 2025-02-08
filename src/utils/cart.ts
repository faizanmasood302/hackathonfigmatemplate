// Define a proper cart item interface
interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Get cart items from localStorage
export const getCartItems = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  return [];
};

// Save cart items to localStorage
export const saveCartItems = (cartItems: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
};

// Add product to cart
export const addToCart = (product: CartItem) => {
  const cartItems = getCartItems();
  const existingProductIndex = cartItems.findIndex(
    (item) => item._id === product._id
  );

  if (existingProductIndex !== -1) {
    cartItems[existingProductIndex].quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  saveCartItems(cartItems);
};

// Remove product from cart by ID
export const removeFromCart = (productId: string) => {
  const cartItems = getCartItems();
  const updatedCartItems = cartItems.filter((item) => item._id !== productId);
  saveCartItems(updatedCartItems);
};

// Clear cart
export const clearCart = () => {
  saveCartItems([]);
};
