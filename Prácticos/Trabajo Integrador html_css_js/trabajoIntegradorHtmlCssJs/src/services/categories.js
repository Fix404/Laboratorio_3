// CATEGORIAS //

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderlist } from "../views/store";

const handleFilterProductsByCategory= (categoryIn) => {
    const products=handleGetProductLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderlist(products);
            break;
        case "Todos":
            handleRenderlist(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result=products.filter((el) => el.categoria=== categoryIn);
            handleRenderlist(result);
            break;
        case "Caro":
            const resultPrecioMayor=products.sort((a,b) => b.precio - a.precio);
            handleRenderlist(resultPrecioMayor);
            break;
        case "Barato":
            const resultPrecioMenor=products.sort((a,b) => a.precio - b.precio);
            handleRenderlist(resultPrecioMenor);
            break;
        default:
            break;
    }
};

// Render de la vista categorías //

export const renderCategories= () => {
    const ulList=document.getElementById("listFilter");
    ulList.innerHTML=`
    <li id="Todos">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="Caro">Mayor precio</li>
    <li id="Barato">Menor precio</li>
    `;
    const liElements=ulList.querySelectorAll("li");
    liElements.forEach((el) => {
        el.addEventListener("click", () => {
            handleClick(el);
        });
    });

    const handleClick= (element) => {
        handleFilterProductsByCategory(element.id);
        liElements.forEach((el) => {
            if(el.classList.contains('liActive')){
                el.classList.remove("liActive");
            }else{
                if(element===el){
                    el.classList.add("liActive");
                }
            }
        })
    }
};
