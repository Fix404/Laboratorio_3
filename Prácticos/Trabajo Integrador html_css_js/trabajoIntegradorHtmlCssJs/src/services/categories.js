// Render de la vista categorías //

export const renderCategories= () => {
    const ulList=document.getElementById("listFilter");
    ulList.innerHTML=`
    <li id="all">Todos los productos</li>
    <li id="burguers">Hamburguesas</li>
    <li id="fries">Papas</li>
    <li id="sodas">Gaseosas</li>
    <li id="expensive">Mayor precio</li>
    <li id="cheapest">Menor precio</li>
    `;
    const liElements=ulList.querySelectorAll("li");
    liElements.forEach((el) => {
        el.addEventListener("click", () => {
            handleClick(el);
        });
    });

    const handleClick= (element) => {
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
