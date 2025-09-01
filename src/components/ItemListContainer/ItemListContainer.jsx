import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import products from '../../assets/data/products';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  const { brand } = useParams();

  useEffect(() => {
    setLoading(true);

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = brand
          ? products.filter(p => p.brand.toLowerCase() === brand.toLowerCase())
          : products;
        resolve(filteredProducts);
      }, 1000);
  });

  getProducts.then((data) => {
    setProductos(data);
  }).finally(() => {
    setLoading(false);
  });

}, [brand]);

if (loading) {
  return <h1>Cargando equipos...</h1>;
}
return (
  <main className='main'>
    <section className='main__section'>
      <h2 className='main__title'>Catálogo de equipos</h2>
      <div className='main__products'>
        {productos.length > 0 ? (
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                <article className="product">
                  <h3>{producto.brand}</h3>
                  <img src={producto.image} alt={producto.name} />
                  <h4>{producto.name}</h4>
                  <p>Precio: ${producto.price}</p>
                  <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando equipos...</p>
        )}
      </div>
    </section>
  </main>
);
};

export default ItemListContainer;