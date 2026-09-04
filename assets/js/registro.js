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

function validarNombre(valor) {
limpiarError(nombre, "error-nombre");
if (valor === "") {
mostrarError(nombre, "error-nombre", "El nombre es obligatorio");
return false;
}
if (valor.length > 50) {
mostrarError(nombre, "error-nombre", "Máximo 50 caracteres");
return false;
}
return true;
}

function validarCorreo(valor) {
limpiarError(correo, "error-correo");
if (valor === "") {
mostrarError(correo, "error-correo", "El correo es obligatorio");
return false;
}
if (!valor.includes("@")) {
mostrarError(correo, "error-correo", "El correo debe contener @");
return false;
}
const dominioPermitido =
valor.endsWith("@duocuc.cl") ||
valor.endsWith("@profesor.duoc.cl");
if (!dominioPermitido) {
mostrarError(correo, "error-correo", "Utiliza un dominio institucional");
return false;
}
return true;
}

formulario.addEventListener("submit", procesarRegistro);

