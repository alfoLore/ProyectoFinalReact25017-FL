/*const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 text-black text-xs rounded-lg">Electonics</span>
                <img src="https://images.pexels.com/photos/5726030/pexels-photo-5726030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="celulares" />
                <div className="absolute top-0 right-0 flex justify-center items-center rounded-full">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
              <span className="text-sm font-light">Title</span>
              <span className="text-lg font-medium">Price</span>   
            </p>
        </div>
    )
}

export default Card*/
/*
const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-64">
      <figure className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <img
          src="https://images.pexels.com/photos/5726030/pexels-photo-5726030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="celulares"
          className="object-cover w-full h-full"
        />
        <span className="absolute top-2 left-2 bg-white/80 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
          Electronics
        </span>
        <button className="absolute top-2 right-2 w-8 h-8 bg-black text-white text-xl rounded-full flex items-center justify-center hover:bg-gray-800 transition">
          +
        </button>
      </figure>
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-sm text-gray-700 font-semibold truncate">Wireless Headphones</h3>
        <p className="text-lg text-black font-bold">$129.99</p>
      </div>
    </div>
  );
};

export default Card;*/

/*const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer w-64">
      <figure className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <img
          src="https://images.pexels.com/photos/5726030/pexels-photo-5726030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Celulares"
          className="object-cover w-full h-full"
        />
        {/* Etiqueta de categoría */
        /*<span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs uppercase font-semibold px-3 py-1 rounded-full shadow">
          Electronics
        </span>
      </figure>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-base text-gray-800 font-semibold truncate">Wireless Headphones</h3>
        <p className="text-lg text-black font-bold">$129.99</p>
        
        <button className="mt-2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Card;*/

const Card = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-64 overflow-hidden border border-[#d8f5ee]">
      <figure className="relative aspect-[4/3] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5726030/pexels-photo-5726030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Celulares"
          className="object-cover w-full h-full"
        />
        {/* Categoría */}
        <span className="absolute top-3 left-3 bg-[#a0eacf] text-gray-800 text-[11px] font-semibold px-3 py-[2px] rounded-full shadow-sm">
          Electronics
        </span>
      </figure>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-base text-gray-700 font-medium truncate">Wireless Headphones</h3>

        {/* Precio separado visualmente */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-semibold text-[#3a6d66]">$129.99</span>
          <button className="bg-[#a0eacf] text-sm text-gray-800 font-medium px-4 py-1.5 rounded-xl hover:bg-[#8ed7bb] transition">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;


