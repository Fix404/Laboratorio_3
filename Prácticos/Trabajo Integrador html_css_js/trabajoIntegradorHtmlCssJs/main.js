import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import "./style.css";

// Categorías
renderCategories();
//

// Productos
const buttonAdd=document.getElementById("addElementButton");

buttonAdd.addEventListener("click", () => {
  openModal();
});
//

// Popup

const buttonCancel=document.getElementById("cancelButton");
buttonCancel.addEventListener("click", () => {
  handleCancelButton();
});

const handleCancelButton= () => {
  closeModal();
}

const openModal= () => {
  const modal=document.getElementById("modalPopup");
  modal.style.display="flex";

};

const closeModal= () => {
  const modal=document.getElementById("modalPopup");
  modal.style.display="none";

};

//

// Guardar valores

const acceptButton=document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaveModifElement();
});

const handleSaveModifElement= () => {
  const nombre=document.getElementById("name").value,
  imagen=document.getElementById("img").value,
  precio=document.getElementById("price").value,
  categoria=document.getElementById("categoria").value;

  let object={
    id:new Date().toISOString(),
    nombre,
    imagen,
    precio,
    categoria
  }

  setInLocalStorage(object);

  //closeModal();
};

