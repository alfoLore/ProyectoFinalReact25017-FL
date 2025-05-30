import { useEffect, useState } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";


const Card = ({ data }) => {

  const context = useContext(ShoppingCartContext)
  
  return (
    <div className="bg-white border border-[#d8f5ee] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <figure className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
        <img
          src={data.image}
          alt={data.title}
          className="object-contain w-full h-full p-4 bg-[#f9f9f9]"
        />
        <span className="absolute top-2 left-2 bg-[#a0eacf] text-gray-800 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
          {data.category}
        </span>
      </figure>
      <div className="p-4 flex flex-col justify-between gap-2">
        <h3 className="text-sm text-gray-800 font-semibold line-clamp-2">{data.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#3a6d66]">${data.price}</span>
          <button className="bg-[#a0eacf] text-gray-800 text-sm font-medium px-4 py-1.5 rounded-xl hover:bg-[#8ed7bb] transition"
          onClick ={() => context.setCount(context.count + 1)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card



