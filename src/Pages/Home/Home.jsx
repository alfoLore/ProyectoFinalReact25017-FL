import { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout.jsx"
import Card from "../../components/Card/Card.jsx"

function Home() {
  const [items, setItems] = useState(null)
  useEffect (() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])
  return (
    <Layout>
      Home
      <div className="grid gap-4 w-full">
      {
        items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      }
     </div>
    </Layout>
  )
}

export default Home