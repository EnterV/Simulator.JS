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

function DatosPersonales () {
    let nombre = campoNombre.value
    let apellido = campoApellido.value

}


/* DOM - PRUEBA */

/* let parrafo = document.createElement('h1');

parrafo.innerHTML = '<h1>Simulador de Prestamos</h1>';

document.body.appendChild(parrafo); */



function calcularCostoMasInteres () {
    let capital = campoMonto.value * interes
    console.log(capital)
    //return capital   
}

function calcularCostoMasInteres () {
    let capital = campoMonto.value * interes
    return capital 
}

calcularCostoMasInteres();


botonCalcular.addEventListener('click', calcularCostoMasInteres)

/* console.log(calcularCostoMasInteres()); */

/* console.log(calcularCostoMasInteres(capital)); */


/* botonCalcular.addEventListener('click', () => {
    alert(calcularCostoMasInteres)
}) */



/* function calcularCostoMasInteres (monto) {
    return monto * interes;   
}

function calcularCostoPorCuota (costoConInteres, cuotas) {
    return costoConInteres / cuotas;   
}

function saludar(nombre, apellido) {
    alert("Hola, " + nombre + " " + apellido + "!");
}

function datosIniciales () {
    const nombre = obtenerNombre();
    const apellido = obtenerApellido();
    saludar(nombre, apellido);
}

datosIniciales();

function consultarNuevoPrestamo () {
    const respuestaUsuario = prompt("Desea solicitar una nueva cotizacion? 'Si-No'");
    solicitarPrestamo = respuestaUsuario.toLowerCase() === si
    if (respuestaUsuario.toLowerCase() != si && respuestaUsuario.toLowerCase() != no){
        alert("Por favor, ingresa una respuesta correcta");
        consultarNuevoPrestamo();
    }
}

function mostrarResultadoPrestamo (costoConInteres, costoPorCuota) {
    alert("El monto total a pagar será: $" + costoConInteres);
    alert("Y el valor mensual de la cuota será: $" + costoPorCuota);
}

class simulacion {
    constructor(monto, cuotas, costoConInteres, costoPorCuota) {
        this.monto = monto ;
        this.cuotas = cuotas ;
        this.costoConInteres = costoConInteres;
        this.costoPorCuota = costoPorCuota;
    }
}

while(solicitarPrestamo) {
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
    mostrarResultadoPrestamo(costoConInteres, costoPorCuota);
    consultarNuevoPrestamo();
}     */
