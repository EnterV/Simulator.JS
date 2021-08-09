let solicitarPrestamo = true;
const interes = 1.25;
const si = "si";
const no = "no";
let simulaciones = [];
const title = document.getElementById('title')
const campoNombre = $('#nombre')
const campoApellido = $('#apellido')
const campoMonto = $('#monto')
const campoMes = $('#meses')
const botonCalcular = document.getElementById('botonCalcular')
/* let display = document.getElementById('resultado') = calculoPrestamo */

function datosPersonales () {   
    let nombre = $('#nombre').val();
    let apellido = $('#apellido').val();
    alert('Bienvenido! ' + nombre + ' ' + apellido);
}

function datosPrestamo () {
    let monto = $('#monto').val();
    let cuotas = $('#meses').val();
    alert('Estas solicitando: $' + monto + ' a pagar en ' + cuotas + ' cuotas');
}

function calculoPrestamo () {
    let capital = $('#monto').val() * interes;
    let total = capital / $('#meses').val();

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







/* class simulacion {
    constructor() {
        this.monto = campoMonto.value ;
        this.cuotas = campoMes.value ;
        this.costoConInteres = costoConInteres;
        this.costoPorCuota = costoPorCuota;
    }
}


    const monto = obtenerMonto();
    const cuotas = obtenerCuotas();
    const costoConInteres = calcularCostoMasInteres(monto);
    const costoPorCuota = calcularCostoPorCuota(costoConInteres, cuotas);
    const s = new simulacion(monto, cuotas, costoConInteres, costoPorCuota);
    simulaciones.push(s);
    simulaciones = simulaciones.sort(function (a, b){
        return a.monto - b.monto;
    });
    console.log(simulaciones);
    localStorage.setItem('simulaciones', JSON.stringify(simulaciones));
    mostrarResultadoPrestamo(costoConInteres, costoPorCuota); */
    
  