const formulario = document.querySelector("#formulario-registro");
function procesarRegistro(evento) {
    evento.preventDefault();

     const rut = document.querySelector("#rut");
    const nombre = document.querySelector("#nombre");
    const correo = document.querySelector("#correo");
    const fechaNacimiento = document.querySelector("#fecha-nacimiento");
    const contrasena = document.querySelector("#contrasena");
    const mensajeExito = document.querySelector("#mensaje-exito");

    const valorRut = rut.value.trim();
    const valorNombre = nombre.value.trim();
    const valorCorreo = correo.value.trim().toLowerCase();
    const valorFecha = fechaNacimiento.value;
    const valorContrasena = contrasena.value;
    
console.log("Intento de registro controlado");
}

function mostrarError(control, idError, mensaje) {
const salida = document.querySelector(`#${idError}`);
salida.textContent = mensaje;
control.classList.add("campo-invalido");
control.setAttribute("aria-invalid", "true");
}
function limpiarError(control, idError) {
const salida = document.querySelector(`#${idError}`);
salida.textContent = "";
control.classList.remove("campo-invalido");
control.removeAttribute("aria-invalid");
}

formulario.addEventListener("submit", procesarRegistro);

