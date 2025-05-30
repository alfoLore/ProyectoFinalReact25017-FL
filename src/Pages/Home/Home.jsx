import { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout.jsx"
import Card from "../../components/Card/Card.jsx"
import ProductDetail from "../../components/ProductDetail/ProductDetail.jsx";

function Home() {
  //const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    fetch('https://fakestoreapi.com/products')
       .then(res => res.json())
       .then(data => {
            setProducts(data);
            setLoading(false);
    })
    .catch(err => {
      console.log("error de carga de API", err);
      setLoading(false);
    })
    }, [])
    return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {products.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
      <ProductDetail />
    </Layout>
  )
}


export default Home