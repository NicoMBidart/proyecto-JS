
alert ("Bienvenidos a Fuera de Juego!");
console.log ("Primera PreEntrega")

let respuesta = prompt ("Cuanto tenes para gastar?");
if (respuesta > 20000){
    alert ("Bien ahí, tenemos varias pilchas para vos");
}else if (respuesta < 1000){
    alert ("Tu presupuesto es bajo, vamos a ver que encontramos");
}else {
    alert ("opción no identificada");
}


let ingreseNumero = parseInt (prompt("Ingrese un número"));
 for (let i= 1; i <=10; i++) {
    let resultado = ingreseNumero * i;
    alert (ingreseNumero+ " x "+ i + " = " + resultado);
 }


 
 let cuotas = parseInt(prompt("Esta pilcha vale $60.000. ¿En cuántas cuotas deseas pagarlo?"));

 if (cuotas > 0) {
   let montoCuota = 60000 / cuotas;
   alert("Te quedarían cuotas de $" + montoCuota + " cada una.");
 } else {
   alert("La cantidad de cuotas ingresada no es válida. Debe ser mayor que 0.");
 }
 //segunda pre Entrega//

 function aviso(){
  console.log("Esta es mi segunda PreEntrega");
}

aviso();

function pedirDato(direccion, saludo){
  console.log(`${saludo} ${direccion}`);
}

pedirDato ("Calle siempre viva 123","Su pedido será enviado a : ");
pedirDato ("Calle Falsa 2345","Perfecto! tu pedido se va a enviar a: ");

function buscar(prenda){
  return `Tenemos tu prenda ${prenda} lista`;
  
}

function empaquetado(paqueteria){
  return `${paqueteria} para ser enviada a la dirección que nos indicaste `;

}

function envioDePaquete(destino){
  console.log(`${destino} Y listo para salir , que lo disfrutes!`);

}

let armadoPaquete = buscar ("Campe Chelsea");
let empaquetar = empaquetado (armadoPaquete);
envioDePaquete(empaquetar);

//funciones para calcular iva//
const suma = (a , b) => a + b;
const resta = (a,b) => a - b;


const iva = (precio) => precio * 0.21;
let precioProducto = 60000;
let descuento = 1000;

let precioFinal = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(precioFinal);
