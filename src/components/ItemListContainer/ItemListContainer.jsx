import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { category } = useParams()


    useEffect(() => {
      if (category) { 
        fetch('../json/products.json')
          .then(response => response.json())
          .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.categoryId === parseInt(category))
            setProductos(productosFiltrados)
  
          })
      } else {
        fetch('./json/products.json')
          .then(response => response.json())
          .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0)
            setProductos(productosFiltrados)
  
          })
      }
  
    }, [category])

    return (
        <div className='row'>
           {<ItemList productos={productos} />} 
        </div>
    );
}

export default ItemListContainer;
