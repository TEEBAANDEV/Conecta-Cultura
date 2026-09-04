const formulario = document.querySelector("#formulario-registro");
function procesarRegistro(evento) {
    evento.preventDefault();
    
    const valorRut = rut.value.trim();
    const valorNombre = nombre.value.trim();
    const valorCorreo = correo.value.trim().toLowerCase();
    const valorFecha = fechaNacimiento.value;
    const valorContrasena = contrasena.value;
    
console.log("Intento de registro controlado");
}
formulario.addEventListener("submit", procesarRegistro);

const rut = document.querySelector("#rut");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const fechaNacimiento = document.querySelector("#fecha-nacimiento");
const contrasena = document.querySelector("#contrasena");
const mensajeExito = document.querySelector("#mensaje-exito");