const parrafoFecha = document.querySelector(".FechaActual");
const fechaActual = new Date();
parrafoFecha.textContent = `${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

// Carrusel
const elementoCarrusel = document.querySelector(".Carrusel_elemento");
const boton = document.querySelectorAll(".Carrusel_Botones_Boton");
console.log(boton);
/* FOREACH
    Al dar click a un boton, movera el carrusel.
    Y luego actualizara el boton seleccionado.
*/
boton.forEach((cada, i) => { // Recorre todos los botones
    boton[i].addEventListener('click', () => { // Se asigna un CLICK a cada boton
        let pos = i; 
        let operacion = pos * -(100 / 3); // Cuanto se dezplazara
        elementoCarrusel.style.transform = `translateX(${operacion}%)`; // Movimiento del elemeto

        boton.forEach((cadaBoton, i) => { // Se recorre y se quita el boton activado
            boton[i].classList.remove("BotonActivo");
        });

        boton[i].classList.add("BotonActivo"); // Al boton elegido, se activa el boton de seleccionado
    });
})