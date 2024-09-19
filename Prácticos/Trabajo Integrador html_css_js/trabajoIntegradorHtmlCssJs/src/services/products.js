// --------- Productos ------------ //

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal, openModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderlist } from "../views/store";

const buttonAdd=document.getElementById("addElementButton");

buttonAdd.addEventListener("click", () => {
  openModal();
});
//
const acceptButton=document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaveModifElement();
});

const handleSaveModifElement= () => {
  const nombre=document.getElementById("name").value,
  imagen=document.getElementById("img").value,
  precio=document.getElementById("price").value,
  categoria=document.getElementById("categoria").value;

  let object=null;
  if(productoActivo){
    object={
      ... productoActivo,
      nombre,
      imagen,
      precio,
      categoria
    }

  }else{
    object={
      id:new Date().toISOString(),
      nombre,
      imagen,
      precio,
      categoria
    }
  }

  Swal.fire({
    title: "¡Bien!",
    text: "El producto se cargó exitosamente",
    icon: "success"
  });

  setInLocalStorage(object);
  handleGetProductsToStore();

  closeModal();
}

// Eliminar elemento:
export const handleDeleteProduct=() => {
  Swal.fire({
    title: "¿Realmente quieres borrar el producto?",
    text: "¡No se podrá recuperar!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, borrarlo",
    cancelButtonText:"Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      const products=handleGetProductLocalStorage();
  const result=products.filter((el) => el.id !== productoActivo.id)
  localStorage.setItem("products", JSON.stringify(result));
  const newProducts=handleGetProductLocalStorage();
  handleRenderlist(newProducts);
  closeModal();
    }else{
      closeModal();
    }
  });
}