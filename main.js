/* INGRESO DE DATOS PERSONALES Y SALUDO DE BIENVENIDA */

function obtenerNombre() {
    
    var obtenerN = prompt("Por favor, escriba su nombre:");
    return obtenerN;
  }

  function obtenerApellido() {
    
    var obtenerA = prompt("Por favor, escriba su apellido:");
    return obtenerA;
  }

  let nombre = obtenerNombre();

  let apellido = obtenerApellido();

function saludar() {

    alert ("Hola, " + nombre + " " + apellido + "!");
}

if (nombre == null || nombre == '') {
    alert("Por favor, introducí un nombre válido.");
}

if (apellido == null || apellido == '') {
    alert("Por favor, introducí un apellido válido.");
}else

saludar();

/* SOLICITUD DE PRESTAMO */

let monto = parseInt(prompt("Por favor, ingresa el monto a solicitar"));

let tiempo = parseInt(prompt("Por último, el tiempo de devolución (expresado en meses)"));

const numero2 = 1.25

function solicitudPrestamo (monto, tiempo){

    do{
    monto;

    tiempo;
    
}while(monto == null || monto == "" || isNaN(monto) || tiempo == null || tiempo == ""|| isNaN(tiempo)); 
}

/* CALCULO DE TASA Y AMORTIZACION */

function ingresoDeDatos (monto) {
  
    let resultado = monto * numero2;
      
    return resultado       
}

let resultadoMultiplicacion = ingresoDeDatos(monto, numero2)

function cuotaPrestamo (resultadoMultiplicacion) {

    cuota = resultadoMultiplicacion / tiempo;

    return cuota
}

let totalMensual = cuotaPrestamo();

/* OUTPUT */

alert("El monto total a pagar será: $" + ingresoDeDatos(monto, numero2));

alert("Y el valor mensual de la cuota será: $" + cuotaPrestamo(resultadoMultiplicacion));

/* ARRAYS */

class simulador {
    constructor(nombre, apellido, resultadoMultiplicacion, totalMensual ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.montoTotal = resultadoMultiplicacion;
        this.totalCuota = totalMensual;
 
    }
}

let solicitarNuevoCredito;
  
    const arraysolicitantes= [];

    function nuevoPrestamo(PrestamoAsolicitar) {
    arraysolicitantes.push(PrestamoAsolicitar)
}

function final () {


    solicitarNuevoCredito = prompt("Desea solicitar una nueva cotizacion? 'Si-No'");

    if (solicitarNuevoCredito.toUpperCase === "SI") {
        let credito = new solicitante (this.nombre, this.apellido, this.montoTotal, this.totalCuota)
        nuevoPrestamo (credito)

    }else {
        alert("Muchas gracias por su consulta, hasta pronto!")
    }
}

final ();

while(solicitarNuevoCredito.toUpperCase === "SI") {
    obtenerNombre();
    obtenerApellido();
    
    
}

function historialPrestamos () {

    arraysolicitantes.forEach(credito => console.log(credito.nombre + "" + credito.apellido + ", total $" + montoTotal + " en cuotas de: $" + totalCuota));
}