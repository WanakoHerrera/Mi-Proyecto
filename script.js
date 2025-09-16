
const imgBurger = document.querySelector(".img-burger");
const burgerMenu = document.querySelector(".burger-menu");
const x = document.querySelector(".x");

imgBurger.addEventListener("click",abrir);
x.addEventListener("click",cerrar)

function abrir(){
    burgerMenu.classList.add("burger-menu-true");
}

function cerrar(){
    burgerMenu.classList.remove("burger-menu-true");
}