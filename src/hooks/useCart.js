import { useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const addItem = (product) => {
    // setCartItems([...cartItems, item]);
    const isExitingItem = cartItems.find((item) => item.id === product.id);
    if (isExitingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  const updateQuantity = (productId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
    clearCart,
  };
};
