// CartContext.js
'use client'
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (detail, quantity) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === detail.name);

    if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += quantity;
        setCartItems(updatedCartItems);
    } else {
        setCartItems([...cartItems, { ...detail, quantity: quantity }]);
    }
};


  const removeFromCart = (index) => {
   const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.sales;
    }, 0);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,decreaseQuantity,increaseQuantity ,calculateTotal}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
