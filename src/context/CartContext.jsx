import {  createContext, useState } from "react";

export const wraper = createContext(null);

function CartContext(props) {

  const [Cart, setCart] = useState([]);

  //add Product
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <wraper.Provider value={{ Cart, setCart, addToCart }}>
      {props.children}
    </wraper.Provider>
  );
}

export default CartContext;
