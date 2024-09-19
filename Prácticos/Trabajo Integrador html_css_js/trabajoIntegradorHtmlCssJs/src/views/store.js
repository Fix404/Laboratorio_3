// STORE //

import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage"
import { openModal } from "./modal";

// Función que trae los elementos, se llama desde el main
export const handleGetProductsToStore= () => {
    const products= handleGetProductLocalStorage();
    handleRenderlist(products);
};
//

// Filtra y renderiza las secciones
export const handleRenderlist= (productosIn) => {
    const burgers=productosIn.filter((el) => 
        el.categoria === "Hamburguesas");
    const fries=productosIn.filter((el) => 
        el.categoria === "Papas");
    const sodas=productosIn.filter((el) => 
        el.categoria === "Gaseosas");

    // Renderiza los elementos de la sección
    const renderProductGroup= (products, title) => {
        if(products.length > 0){
            const productsHTML=products.map((producto, index) => {
                return `<div class="containerTargetItem"
                id='product-${producto.categoria}-${index}'>
                <div>
                <img src="${producto.imagen}"/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class="targetProps">
                <p><b>Precio:</b> $${producto.precio}</p>
                </div>
                </div>
                </div>`;
            });
            return `
            <section class="sectionStore">
            <div class="containerTitleSection">
            <h3>${title}</h3>
            </div>
            <div class="containerProductStore">
            ${productsHTML.join("")}
            </div>
            
            </section>
            `;
        }else{
            return "";
        }
    };

    // Renderizador:
    const appContainer=document.getElementById("storeContainer");
    appContainer.innerHTML=`${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(fries, "Papas")}
    ${renderProductGroup(sodas, "Gaseosas")}`;

    // Eventos dinámicos
    const addEvents= (productsIn) => {
        productsIn.forEach((element, index) => {
            const productContainer=document.getElementById(`product-${element.categoria}-${index}`);
            productContainer.addEventListener('click', () =>{
                setProductoActivo(element);
                openModal();
            });
        });
    };

    addEvents(burgers);
    addEvents(fries);
    addEvents(sodas);
};