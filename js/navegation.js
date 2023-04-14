/**
 * Con esta funcion aparece un mensaje en pantalla al darle al boton deseado para indicar que todo ha fincionado correctamente
 */

function hola(){
  swal("Gracias jefe!", "Te responderé en cuanto pueda", "success");
}


/**
 * Declaración de constantes para hacer los menus
 */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

/**
 * Funcion para desplegar el menu
 */
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

/**
 * Funcion para cerrar el menu
 */
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})