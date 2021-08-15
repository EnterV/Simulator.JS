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

function datosPersonales () {   
    let nombre = $('#nombre').val();
    let apellido = $('#apellido').val();
    /* alert('Bienvenido! ' + nombre + ' ' + apellido); */
}

function datosPrestamo () {
    let monto = $('#monto').val();
    let cuotas = $('#meses').val();
}

function calculoPrestamo () {
    let capital = $('#monto').val() * interes;
    let total = capital / $('#meses').val();

    $('#resultadoTotal').val('$'+ capital.toFixed(0))

    $('#cuota').val('$'+ total.toFixed(0))

    storage(capital, total);
}

function storage (capital, total) {
    localStorage.setItem('Total prestamo', capital )
    localStorage.setItem('Total cuota', total.toFixed(0))
}

botonCalcular.addEventListener('click', datosPersonales)

botonCalcular.addEventListener('click', datosPrestamo)

botonCalcular.addEventListener('click', calculoPrestamo)


/* class simulacion {
    constructor(a) {
        this.monto = a ;
        this.cuotas = campoMes.value ;
        this.costoConInteres = costoConInteres;
        this.costoPorCuota = costoPorCuota;
    }
}

    const monto = obtenerMonto();
    const cuotas = obtenerCuotas();
    const costoConInteres = calcularCostoMasInteres(monto);
    const costoPorCuota = calcularCostoPorCuota(costoConInteres, cuotas);
    const s = new simulacion(5);
    simulaciones.push(s);
    simulaciones = simulaciones.sort(function (a, b){
        return a.monto - b.monto;
    });

    console.log(simulaciones);
    localStorage.setItem('simulaciones', JSON.stringify(simulaciones));
    mostrarResultadoPrestamo(costoConInteres, costoPorCuota);
     */