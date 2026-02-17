import { createContext, useState } from "react";

// The difference between CartContext and CartProvider is that CartContext is the context object itself,
// while CartProvider is a component that provides the context value to its children.
// The CartContext is created using createContext and contains the default values for the cart,
// while the CartProvider component manages the state of the cart and provides it to any components
// that consume the context.

const CART_SKELETON = {
  items: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
};

// Create the CartContext with the skeleton as the default value

export const CartContext = createContext(CART_SKELETON);

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTotalAmount((prevAmount) => prevAmount + item.price);
  };

  const cart = {
    items: cartItems,
    totalAmount,
    addItemToCart,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
