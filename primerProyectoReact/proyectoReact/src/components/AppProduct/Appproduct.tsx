import { useState } from "react"
import { FormProduct } from "./FormProduct/FormProduct"
import { Header } from "./Header/Header"
import { ListProducts } from "./ListProduct/ListProducts";

interface IItemProducts{
    precio:number;
    nombre:string;
    imagen:string;
}

export const Appproduct = () => {

    const [products, setProducts]=useState<IItemProducts[]>([]);


    const handleAddProducts=(newItem:IItemProducts) => {
        setProducts((prev) => [...prev, newItem]);
    };
  return (
    <div>
      <Header />
      <h2 className="text-center">Formulario de nuevo producto:</h2>
      <FormProduct handleAddProducts={handleAddProducts}/>
      <h2 className="text-center">Productos:</h2>
      {
        products.length > 0 ? (<ListProducts arrItems={products} />) : (<h3 className="text-center">No hay productos</h3>) 
      }
    </div>
  );
};
