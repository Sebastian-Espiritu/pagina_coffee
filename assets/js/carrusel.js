// Objeto carrusel
const diapositivas = document.querySelectorAll("#carrusel .diapositiva");

// Objetos que estan dentro del carrusel
const puntos = document.querySelectorAll("#carrusel .carrusel-punto");
const botonAnterior = document.querySelector("#carrusel-anterior");
const botonSiguiente = document.querySelector("#carrusel-siguiente");

// Indice de la diapositiva actual
let indiceActual = 0;

// Cambia la diapositiva actual según el nuevo índice
function mostrarDiapositiva(indiceNuevo) {
    // Volver al extremo opuesto al salir del rango.
    if (indiceNuevo < 0) {
        indiceNuevo = diapositivas.length - 1;
    }
    if (indiceNuevo >= diapositivas.length) {
        indiceNuevo = 0;
    }

    diapositivas[indiceActual].classList.remove("activa");
    puntos[indiceActual].classList.remove("activo");
    indiceActual = indiceNuevo;
    diapositivas[indiceActual].classList.add("activa");
    puntos[indiceActual].classList.add("activo");
}

// Evento click del botón "Anterior"
botonAnterior.addEventListener("click", function () {
    mostrarDiapositiva(indiceActual - 1);
});

// Evento click del botón "Siguiente"
botonSiguiente.addEventListener("click", function () {
    mostrarDiapositiva(indiceActual + 1);
});

//  Evento click de los botones de indicadores (puntos).
puntos.forEach(function (punto, indice) {
    punto.addEventListener("click", function () {
        mostrarDiapositiva(indice);
    });
});

// Establece el tiempo de intervalo de las diapositivas
// 5000 = 5000 ms = 5 segundos normales 
setInterval(function () {
    mostrarDiapositiva(indiceActual + 1);
}, 5000);
