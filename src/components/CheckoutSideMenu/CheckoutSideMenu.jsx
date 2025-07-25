import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context/index.jsx";
import OrderCard from '../../components/OrderCard/OrderCard.jsx'
import '../../styles/styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
   // const { cartProducts } = useContext(ShoppingCartContext)

    

    return (
        <aside
         className={`${context.isCheckouSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
             <div className='flex justify-between items-center p-6'>
                 <h2 className='font-medium text-xl'>My Order</h2>
                 <div>
                    <XMarkIcon className='size-6 text-black cursor-pointer' 
                    onClick={() =>context.closeCheckoutSideMenu()}/>
                 </div>
             </div>
             <div className="px-6 overflow-y-scroll">
             {
              context.cartProducts?.map(product => (
                 <OrderCard
                   key={product.id} 
                   title={product.title}
                   image={product.image}
                   price={product.price}
                 />
               ))
             }
             </div>
        </aside>
    )
}

export default CheckoutSideMenu 