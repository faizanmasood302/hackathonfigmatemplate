// cart.ts
export const getCartItems = (): any[] => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('cart')
      return cart ? JSON.parse(cart) : []
    }
    return []
  }
  
  export const saveCartItems = (cartItems: any[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }
  
  export const addToCart = (product: any) => {
    const cartItems = getCartItems()
    const existingProductIndex = cartItems.findIndex(item => item._id === product._id)
  
    if (existingProductIndex !== -1) {
      cartItems[existingProductIndex].quantity += 1
    } else {
      cartItems.push({ ...product, quantity: 1 })
    }
  
    saveCartItems(cartItems)
  }
  
  export const removeFromCart = (productId: string) => {
    const cartItems = getCartItems()
    const updatedCartItems = cartItems.filter(item => item._id !== productId)
    saveCartItems(updatedCartItems)
  }
  
  export const clearCart = () => {
    saveCartItems([])
  }
  