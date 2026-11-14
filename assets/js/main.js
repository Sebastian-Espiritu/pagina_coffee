// Boton Hamburguesa
const botonHamburguesa = document.querySelector(".navegacion-toggle");


// Barra de menú 
const menu = document.querySelector(".navegacion");

//Interceptar el evento click del boton hamburguesa
botonHamburguesa.addEventListener("click", function(){
    menu.classList.toggle("active");
});

// semana 14
//boton scroll up
const botonArriba = document.querySelector(".scroll-up");

//Funcion para alternar la visibilidad del boton scroll up

function mostrarBotonArriba(){
    //si el scroll vertical se ha desplazado mas de 400px,
    //entonces, ocultara el boton de lo contrario, lo pone visible
    if(window.scrollY < 300){
        botonArriba.hidden = true; //oculta el boton
    } else{
        botonArriba.hidden = false; //muestra el boton
    }
}

//ejecuta la funcion al cargar la pagina
mostrarBotonArriba(); //falta ejecutar de manera correcta

//interceptar el evento scroll de la ventana
window.addEventListener("scroll", mostrarBotonArriba);

//falta corregir el boton scroll up para que funcione correctamente

// Seleccion de elemento del visor
const visor = document.querySelector('#visor-fotos');
if (visor) {
    const botonesFoto = document.querySelectorAll('.abrir-foto');
    const imagenGrande = document.querySelector('#visor-imagen');
    const tituloVisor = document.querySelector('#visor-titulo');
    for (const boton of botonesFoto) {
        boton.addEventListener('click', function () {
            const foto = boton.querySelector('img');
            const tarjeta = boton.closest('.clientes-item');
            const nombre = tarjeta.querySelector('h3').textContent;
            // Copiamos la foto elegida antes de abrir el mismo dialogo.
            imagenGrande.src = foto.src;
            tituloVisor.textContent = nombre;
            visor.showModal();
        });
    }
} //no se porque no ejecuta el visor de fotos, no se si es por el querySelector o por el showModal
