import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => { 


    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('../json/products.json') //.. por estar en una ruta mas en profundidad de mi aplicacion
            .then(response => response.json())
            .then(productos => {
                const prod = productos.find(prod => prod.id === parseInt(id))
                setItem(prod)
            })

    }, [])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;
