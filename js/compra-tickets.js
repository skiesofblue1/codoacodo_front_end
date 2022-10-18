/*
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputCcorreo = document.getElementById("inputCorreo");
*/
const tipoUsuario = document.getElementById("tipoUsuario");
const inputCantidad = document.getElementById("inputCantidad");
const resumen = document.getElementById("resumen");
const reset = document.getElementById("reset");
let precioTicket = 200;
const PRECIO_ESTUDIANTE = 0.2;
const PRECIO_TRAINEE = 0.5;
const PRECIO_JUNIOR = 0.85;
const precioNeto = document.getElementById("precioNeto");

function precioTotal (e) {
    e.preventDefault();
    if (tipoUsuario.value == `1`) {
        precioTicket = precioTicket * PRECIO_ESTUDIANTE;
    } else if (tipoUsuario.value == `2`) {
        precioTicket = precioTicket * PRECIO_TRAINEE;
    } else {
        precioTicket = precioTicket * PRECIO_JUNIOR;
    }
    precioNeto.innerHTML = `Total a Pagar: $ ${precioTicket * inputCantidad.value}`;
    precioTicket = 200
}

function borrarP () {
    precioNeto.innerHTML = "Total a Pagar: $"
}

resumen.onclick = precioTotal;
reset.onclick = borrarP;

