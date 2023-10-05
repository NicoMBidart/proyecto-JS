


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
 