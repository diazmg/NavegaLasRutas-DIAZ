import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../assets/data/products';

export function ItemDetailsContainer() {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(false);

        const findProducto = new Promise((resolve, reject) => {
            setTimeout(() => {
                const foundProducto = products.find(p => p.id === Number(id));
                if (foundProducto) {
                    resolve(foundProducto);
                } else {
                    reject(new Error("Producto no encontrado"));
                }
            }, 1000);
        });

        findProducto
            .then(item => {
                setProducto(item);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                setProducto(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <h1>Cargando detalles...</h1>;
    }

    if (error || !producto) {
        return <h1>Lo sentimos, el producto no pudo ser encontrado.</h1>;
    }

    return (
        <div className="item-details-container">
            <h2>{producto.brand}</h2>
            <img src={producto.image} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>Capacidad: {producto.capacity} GB</p>
            <p>Red: {producto.mobileNetwork}</p>
            <p>Precio: ${producto.price}</p>
            <p>Descripción: {producto.description}</p>
        </div>
    );
}

export default ItemDetailsContainer;