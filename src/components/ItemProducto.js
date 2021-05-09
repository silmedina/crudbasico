import React from 'react';
import {ListGroup,Button, Badge} from "react-bootstrap";

const ItemProducto = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <p>
                 nombre del producto $200 <Badge variant="success">$200</Badge>
            </p>
           <div>
           <Button variant='warning' className="mr-3">Editar</Button>
            <Button variant='danger'>Borrar</Button>
           </div>
        </ListGroup.Item>
    );
};

export default ItemProducto;