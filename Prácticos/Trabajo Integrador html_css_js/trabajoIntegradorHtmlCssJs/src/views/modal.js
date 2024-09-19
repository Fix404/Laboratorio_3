// Modal // 

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

const buttonCancel=document.getElementById("cancelButton");
buttonCancel.addEventListener("click", () => {
  handleCancelButton();
});

const handleCancelButton= () => {
  closeModal();
}

export const openModal= () => {
    const modal=document.getElementById("modalPopup");
    modal.style.display="flex";
    const buttonDelete=document.getElementById("deleteButton");

    if(productoActivo){
      buttonDelete.style.display="block";
    }else{
      buttonDelete.style.display="none";
    }
    if(productoActivo){
      const nombre=document.getElementById("name"),
    imagen=document.getElementById("img"),
    precio=document.getElementById("price"),
    categoria=document.getElementById("categoria");
    nombre.value=productoActivo.nombre;
    imagen.value=productoActivo.imagen;
    precio.value=productoActivo.precio;
    categoria.value=productoActivo.categoria;
    }
  
  };
  
  export const closeModal= () => {
    const modal=document.getElementById("modalPopup");
    modal.style.display="none";
    setProductoActivo(null);
    resetModal();
  };
  
  const resetModal= () => {
    const nombre=document.getElementById("name"),
    imagen=document.getElementById("img"),
    precio=document.getElementById("price"),
    categoria=document.getElementById("categoria");
    nombre.value="";
    imagen.value="";
    precio.value=0;
    categoria.value="Seleccione una categoría";
  }

  const deleteButton=document.getElementById("deleteButton");
  deleteButton.addEventListener("click", () => {
    handleButtonDelete();
  })

  const handleButtonDelete=() => {
    handleDeleteProduct();
  }
  //