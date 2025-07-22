import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);

  // Cargar productos
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error cargando promos', err));
  }, []);

  // Autoavance cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  if (products.length === 0) return null;

  const product = products[current];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#fdfdfd] flex items-center justify-center">
      {/* Fondo desenfocado */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md opacity-20 scale-110"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl w-full px-6 text-center flex flex-col items-center gap-6">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain bg-white rounded-xl p-4 border border-gray-200 shadow-md"
          />
          <span className="absolute top-2 left-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded shadow">
            SALE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 max-w-xl line-clamp-3">{product.description}</p>
        <p className="text-xl font-bold text-[#3a6d66]">${product.price}</p>
      </div>

      {/* Flechas */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-700" />
      </button>
    </section>
  );
};

export default Carousel
