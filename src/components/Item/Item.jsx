import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img1} alt={`Imagen de ${item.name}`}  />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.price}
                </Card.Text>
                <Card.Text>
                    {item.ages}
                </Card.Text>
                <Card.Text>
                    {item.pieces}
                </Card.Text>
                <Link className='nav-link' to={`/product/${item.id}`}><Button variant="primary">Ver Producto</Button></Link>
                
            </Card.Body>
        </Card>
    );
}


export default Item;

