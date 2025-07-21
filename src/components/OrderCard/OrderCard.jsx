import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const {title, image, price} = props
    return(
        <div className="flex justify-between items-center border-b border-gray-200 py-4 px-6">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}
                </p>
            </div>    
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${Number(price).toFixed(2)}</p>
                <XMarkIcon className='size-6 text-black cursor-pointer' ></XMarkIcon>  
             </div>
        </div>
    )
}

export default OrderCard