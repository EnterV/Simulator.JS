let solicitarPrestamo = true;
const interes = 1.25;
const si = "si";
const no = "no";
let simulaciones = [];


function obtenerNombre() {
    return prompt("Por favor, escriba su nombre:");
}

function obtenerApellido() {
    return prompt("Por favor, escriba su apellido:");
}

function obtenerMonto () {
    return parseInt(prompt("Por favor, ingresa el monto a solicitar"));
}

function obtenerCuotas () {
    return parseInt(prompt("Por último, el tiempo de devolución (expresado en meses)"));
}

function calcularCostoMasInteres (monto) {
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
    /*     if(a.monto > b.monto){
            return 1;  
        }
        if(a.monto < b.monto){
            return -1;   
        }
        return 0 */
    });
    console.log(simulaciones);
    localStorage.setItem('simulaciones', JSON.stringify(simulaciones));
    mostrarResultadoPrestamo(costoConInteres, costoPorCuota);
    consultarNuevoPrestamo();
}   



