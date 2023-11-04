

if (localStorage.getItem('mensajesMostrados') !== 'true') {
  alert("Bienvenidos a Fuera de Juego!");
  console.log("Primera PreEntrega");

  let respuesta = prompt("¿Cuánto tienes para gastar?");
  if (respuesta > 20000) {
    alert("¡Bien ahí! Tenemos varias prendas para ti.");
  } else if (respuesta < 1000) {
    alert("Tu presupuesto es bajo, vamos a ver qué encontramos.");
  } else {
    alert("Opción no identificada.");
  }

  let cuotas = parseInt(prompt("Esta prenda vale $60,000. ¿En cuántas cuotas deseas pagarlo?"));

  if (cuotas > 0) {
    let montoCuota = 60000 / cuotas;
    alert("Te quedarían cuotas de $" + montoCuota + " cada una.");
  } else {
    alert("La cantidad de cuotas ingresada no es válida. Debe ser mayor que 0.");
  }


  localStorage.setItem('mensajesMostrados', 'true');
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
let precioProducto = parseInt(prompt("Ingrese Precio "));
let descuento = parseInt(prompt("Ingrese Descuento Deseado"));


let precioFinal = resta(suma(precioProducto, iva(precioProducto)), descuento);

alert("El precio final seria de " + precioFinal);

const producto = {
  nombre: "Campe Chelsea", 
  precio: 45000,
  stock: 2,
};

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.stock);

//let usuario = prompt("Ingrese su codigo de descuento");
//if (usuario = FDJ25) {
//  alert("Perfecto! Su precio final es de 45000" );
//} else {
// alert("Lo sentimos, tu codigo no es valido :(");
//}


function Producto(info){
  this.codigo = info.codigo;
  this.precio = info.precio;
  this.stock = info.stock;
}

const producto1 = new Producto ({
codigo: "Campe-Chelsea-ING" ,
precio: 250000,
stock: 2,
});
console.log(producto1)

const producto3 = new Producto ({
  codigo: "Campe-España-ES" ,
  precio: 20000,
  stock: 2,
  });
  console.log(producto3)


  function Producto(codigo, precio, stock){
    this.codigo = codigo;
    this.precio = precio;
    this.stock = stock;
    this.hablar = function (){
      console.log(`Hola! soy ${this.codigo}`);
    };
  }

  const producto2= new Producto ("Campe España", 35000, 2);
  producto2.hablar();


  //arrays
  const listaProductos = [];
  let cantidad = 6

  do{
    let entrada = prompt ("Ingresar nombre de la prenda que desea");
    listaProductos.push(entrada.toUpperCase());
    console.log(listaProductos.length);
  }while(listaProductos.length != cantidad)

  const nuevaLista = listaProductos.concat (["Campera Adidas","Campe Seleccion Italia"]);
  alert (nuevaLista.join ("\n"));

  const camperas = [{id: 1, seleccion : "Española", precio : "35000"},
 {id: 2, seleccion : "Italiana" , precio : "25000"},
 {id: 3, seleccion : "Francesa", precio : "5000"}];

 for (const campera of camperas) {
  console.log(campera.id);
  console.log (campera.seleccion);
  console.log (campera.precio);
 }

 const buscado = camperas.find (campera => campera.id ===3)
 console.log(buscado)

 const existe = camperas.find(campera => campera.seleccion ==="Argentina")
 console.log (existe)

 const rebajas = camperas.find(campera => campera.precio <3000)
 console.log (rebajas)

 const listaCamperas = camperas.map(campera => campera.seleccion)
 console.log(listaCamperas);

 const resultado = camperas.filter((el) => el.seleccion.includes('Italiana'))
 const resultado2 = camperas.filter((el)=> el.precio <15000)

 console.log(resultado)



 class prenda{
  constructor (nombre, precio){
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumaIva(){
    this.precio = this.precio * 1.21;
  }
 }

 const prendas = [];
 prendas.push(new prenda ("Campera Manchester", "25000"));
 prendas.push(new prenda ("Chomba adidas 2005","35500"));
 prendas.push(new prenda ("Conjunto Chelsea 2006","65500"));
 prendas.push(new prenda ("Conjunto Seleccion Española 2010","60000"));

 for (const prenda of prendas)
 prenda.sumaIva();

 let productos = [ ];
fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".btn-categoria");
const tituloPrincipal= document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".addProduct");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");

        div.classList.add("producto");

        div.innerHTML = `
        <img class="img-products" src="${producto.img}" alt="${producto.titulo}">
        <div class="detail-prod">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">${producto.precio}</p>
          <button class="addProduct" id="${producto.id}" >lo quiero</button>
        </div>
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    
}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{

    boton.addEventListener("click",(e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

         if(e.currentTarget.id != "todos"){

            const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        const productosBoton = productos.filter(producto=> producto.categoria.id === e.currentTarget.id);

        cargarProductos(productosBoton);

         }else{
            tituloPrincipal.innerText = "todos los productos";
            cargarProductos(productos);
         }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".addProduct");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS){

    productosEnCarrito = JSON.parse (productosEnCarritoLS);
    actualizarNumerito();

}else{

    productosEnCarrito = [];
}
 

function agregarAlCarrito(e){
    Toastify({
        text: "Producto agregado correctamente",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, blue, orange)",
          borderRadius : "2rem",
        },
        onClick: function(){} // Callback after click
      }).showToast();

         const idBoton = e.currentTarget.id;
         const productoAdded = productos.find(producto => producto.id === idBoton);

         if (productosEnCarrito.some(producto => producto.id === idBoton)) {
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
         }else {
        productoAdded.cantidad = 1;
         productosEnCarrito.push(productoAdded);
        }
        actualizarNumerito();
       
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}