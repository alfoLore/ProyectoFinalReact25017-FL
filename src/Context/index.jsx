// src/Context/index.jsx
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Product Detail - Quantity product
  const [count, setCount] = useState(0)

  //Product Detail - Open product
  const [isProductDetailOpen, setProductDetailOpen] = useState(false)
  const openProductDetail = () => setProductDetailOpen(true) 
  const closeProductDetail = () => setProductDetailOpen(false) 

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({})
  
  //Shopping Cart - Add  product to Carts
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
       count, 
       setCount,
       openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow
      }}>
       {children}
    </ShoppingCartContext.Provider>
  );
};
