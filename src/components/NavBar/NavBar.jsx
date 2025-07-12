import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";

import { ShoppingBagIcon } from "lucide-react";



const NavBar = () => {
const context = useContext(ShoppingCartContext)
     return(    
        <nav className="flex justify-between items-center fixed top-0 z-20 w-full py-6 px-10 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
            <ul className="flex items-center gap-6 text-gray-700 font-medium">
                 <li className="hover:text-blue-500 transition-colors">
                    <NavLink to="/">La Tiendita</NavLink>
                </li>
                <li className="hover:text-blue-500 transition-colors">
                  <NavLink 
                    to="/clothes"
                    className={({ isActive }) =>
                       isActive
                       ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                       : "hover:text-blue-500 transition-colors"
                    }>
                    Clothes
                  </NavLink>
                </li>
                <li className="hover:text-blue-500 transition-colors">
                <NavLink
                 to="/electronics"
                 className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-500 transition-colors"
                    }>
                    ELectronics
                </NavLink>
                </li>
                <li className="hover:text-blue-500 transition-colors">
                <NavLink
                 to="/deco"
                 className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-500 transition-colors"
                    }>
                 Deco
                 </NavLink>
                </li>
                <li className="hover:text-blue-500 transition-colors">
                <NavLink to="/accesories"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-500 transition-colors"
                    }>
                    Accesories</NavLink>
                </li>
             </ul>
             <ul className="flex items-center gap-6 text-gray-700 font-medium">
                <li>
                micuenta@gmail.com
                </li>
                <li>
                <NavLink to="/my-orders"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-500 transition-colors"
                    }>
                        My Orders
                        </NavLink>
                </li>
                <li>
                <NavLink to="/my-account"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-500 transition-colors"
                    }>
                        My Account
                        </NavLink>
                </li>
                <li>
                <NavLink to="/sign-in"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-500 transition-colors"
                    }>
                        Sign In
                        </NavLink>
                </li>
                
                <li className="flex items-center">
                 <button className="btn capitalize flex items-center gap-2">
                    <ShoppingBagIcon className='size-6 text-black' />
                        <div>{context.count}</div> 
                 </button>
                </li>
            </ul>
            
        </nav>        
    )}
    
    
    export default NavBar