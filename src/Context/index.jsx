// src/Context/index.jsx
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Product Detail - Quantity product
  const [count, setCount] = useState(0)

  //Product Detail - Open product
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true) 
  const closeProductDetail = () => setIsProductDetailOpen(false) 

  //Checkout side menu 
  const [isCheckouSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true) 
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false) 


  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({})
  
  //Shopping Cart - Add  products to Carts
  const [cartProducts, setCartProducts] = useState([])
  

  return (
    <ShoppingCartContext.Provider value={{
       count, 
       setCount,
       openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckouSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu
      }}>
       {children}
    </ShoppingCartContext.Provider>
  );
};
