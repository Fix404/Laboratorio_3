import { Button, Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from "react";

interface IPropsFormProduct{
    handleAddProducts: Function;
}

export const FormProduct : FC<IPropsFormProduct> = ({handleAddProducts}) => {
    const {handleChangeForm, values, resetForm} = useForm({
        nombre:'',
        imagen:'',
        precio:0
    });

    const handleSubmitForm= () => {
        handleAddProducts(values);
        resetForm();
    }

  return (
    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" placeholder="Ingrese un nombre" value={values.nombre}
            onChange={handleChangeForm}/>

        </Form.Group>
        <Form.Group controlId="formImagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="text" name="imagen" placeholder="Ingrese una imagen" value={values.imagen}
            onChange={handleChangeForm}/>

        </Form.Group>
        <Form.Group controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" name="precio" placeholder="Ingrese un precio" value={values.precio}
            onChange={handleChangeForm}/>

        </Form.Group>

        <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSubmitForm} variant="primary">Enviar Productos</Button>
        </div>
      
    </Form>
  )
}

