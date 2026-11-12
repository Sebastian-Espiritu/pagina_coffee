// Boton Hamburguesa
const botonHamburguesa = document.querySelector(".navegacion-toggle");


// Barra de menú 
const menu = document.querySelector(".navegacion");

//Interceptar el evento click del boton hamburguesa
botonHamburguesa.addEventListener("click", function(){
    menu.classList.toggle("active");
});
