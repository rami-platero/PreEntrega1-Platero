import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const {itemsCount = 0, total = 0} = cart.reduce((acc, item)=>{
    acc.itemsCount += item.quantity
    acc.total += item.quantity * item.product.price;
    return acc
  }, {itemsCount: 0, total: 0})    

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  const addItemToCart = (product, quantity) => {
    const updatedCart = [...cart, { quantity, product }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter((item) => {
      return item.product.id !== id;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  return (
    <cartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, itemsCount, total, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};
