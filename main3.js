let solicitarPrestamo = true;
const interes = 1.25;
const si = "si";
const no = "no";
let simulaciones = [];
const title = document.getElementById('title')
const campoNombre = document.getElementById("nombre")
const campoApellido = document.getElementById('apellido')
const campoMonto = document.getElementById('monto')
const campoMes = document.getElementById('meses')
const botonCalcular = document.getElementById('botonCalcular')

function datosPersonales () {
    let nombre = campoNombre.value;
    let apellido = campoApellido.value;
    alert('Bienvenido! ' + nombre + ' ' + apellido);
}

function datosPrestamo () {
    let monto = campoMonto.value;
    let cuotas = campoMes.value;
    alert('Estas solicitando: $' + monto + ' a pagar en ' + cuotas + ' cuotas');
}

function calculoPrestamo () {
    let capital = campoMonto.value * interes;
    let total = capital / campoMes.value;

    alert('El total a pagar de tu prestamo es de: $' + capital + ' y el valor cuota será $' + total);
}

function nuevoPrestamo () {
    let consulta = prompt('Desea solicitar una nueva cotización? SI/NO')

    if (consulta.toLowerCase() === 'si') {
        alert('ingresá tus datos para recibir una nueva cotización!')
        
    } else alert('Gracias por tu visita!')
}


botonCalcular.addEventListener('click', datosPersonales)

botonCalcular.addEventListener('click', datosPrestamo)

botonCalcular.addEventListener('click', calculoPrestamo)

botonCalcular.addEventListener('click', nuevoPrestamo)
