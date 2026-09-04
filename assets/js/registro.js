const formulario = document.querySelector("#formulario-registro");
function procesarRegistro(evento) {
evento.preventDefault();
console.log("Intento de registro controlado");
}
formulario.addEventListener("submit", procesarRegistro);