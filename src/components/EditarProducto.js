import React from 'react';
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";


const EditarProducto = () => {

    const cambioCategoria = (e)=> {
        // setCategoria(e.target.value);
    }

    const handleSubmit = ()=>{

    };
    
    return (
        <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <h1 className="text-center my-5">Agregar nuevo producto</h1>
        <Form.Group>
          <Form.Label>Nombre de producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Te"
          
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
           
          ></Form.Control>
        </Form.Group>
        <h3 className="text-center my-4">Categoria</h3>
        <div className="text-center">
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Bedida Caliente"
            value="caliente"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Bedida Fria"
            value="fria"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Dulce"
            value="dulce"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Salado"
            value="salado"
            onChange={cambioCategoria}
          ></Form.Check>
        </div>
        <Button variant="danger" type="submit" className="w-100 my-5">
          Guardar
        </Button>
        {/* {error === true ? ( */}
          {/* <Alert variant="warning">Todos los campos son obligatorios</Alert> */}
        {/* ) : null} */}
      </Form>
    </Container>
    );
};

export default EditarProducto;

