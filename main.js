// function respuestas (critica){
//     switch (critica){
//         case "No":
//             alert ("usted sabe de futbol");
//             break;

//         case "Si":
//             let nacionalidad = prompt ("Ingrese su nacionalidad: ");
//             switch (nacionalidad){
//                 case "Francia":
//                     alert ("usted no puede criticar a messi, perdio la final");
//                     break;
    
//                 case "Mexico":
//                     alert ("usted es hijo de messi, no critique");
//                     break;
    
//                 case "Chile":
//                     alert ("no existis");
//                     break;
    
//                 case "Argentina":
//                     alert ("traidor a la patria");
//                     break;
    
//                 default:
//                     alert ("anda palla boboo");
//                     break
//             }
//     }
// }

// let edad = parseInt(prompt ("sitio solo para mayores de 18 años, ingrese su edad"));
// const mayordeedad = 18

// while (!(edad >= mayordeedad)){
//     console.log (edad);
//     edad=parseInt(prompt("sitio solo para mayores de 18 años, ingrese su edad"));
// } if (edad >= mayordeedad){
//     alert ("bienvenidos futboleros!")
// } 

// let critica = prompt ("¿Usted critica a Messi?");

// while (!(critica === "Si" || critica === "No")){
//     console.log (critica);
//     critica = prompt ("¿Usted critica a Messi?");
// }

// respuestas (critica);

// const arrayProductos = ["1) Remera Argentina", "2) Remera PSG", "3) Remera Barcelona"];

// class Producto {
//     constructor (nombre, precio){
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const remeraArg = new Producto ("Remera  Argentina", 16000)
// const remeraPSG = new Producto ("Remera PSG", 12500)
// const remeraBarcelona = new Producto ("Remera Barcelona", 10000)

// const Array22 = [remeraArg, remeraPSG, remeraBarcelona];

// let remeras;
// do{
//     remeras = parseInt (prompt ("Que items desea comprar? Ingrese 1, 2 o 3\n 1) Remera Argentina\n 2) Remera PSG\n 3) Remera Barcelona"));
// }while (remeras>Array22.length || remeras < 1)   

// alert (`Usted seleccionó la opción: ${Array22[(remeras-1)].nombre}`);
// alert (`El precio es: $${Array22[(remeras-1)].precio}`) 

// let tipoDePago;
// do{
//     tipoDePago = prompt ("Desdea abonar en efectivo?\n Tiene 10% de descuento")
// } while (!(["Si", "No"].includes(tipoDePago)))

// const ArrayPrecios = Array22.map((producto) => {
//     if(tipoDePago === "Si"){
//         return{
//             nombre: producto.nombre,
//             precio: (producto.precio*.9)
//         }
//     }else{
//         return{
//             nombre: producto.nombre,
//             precio: (producto.precio)
//         }
//     }
    
// })

// alert (`El precio final es: $${ArrayPrecios[remeras-1].precio}`); 



let items = [
    {
        nombre: "Remera Argentina",
        precio: 16000,
        id: 1,
        img: "./img/messi.jpg"
    },
    {
        nombre: "Remera PSG",
        precio: 14500,
        id: 2,
        img: "./img/remerapsg"
    }
];

let main = document.querySelector(".main-box")
items.forEach((prod) => {
main.innerHTML += `<div class="card">
                    <div class="img-box">
                        <img src="${prod.img}"></img>
                    <div>
                    <p>$${prod.precio}</p>
                    <button id="book-${prod.id}">Agregar</button>
                    </div>`;
});

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let cart = document.querySelector('.carrito')

function agrergarAlCarrito(prod){
    let existe = carrito.some(products => products.id == prod.id)
    
    if (existe === false){
        prod.cantidad = 1;
        carrito.push(prod)
    } else {
        let miProd = carrito.find((products)=> products.id == prod.id);
        miProd.cantidad++;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito ();
    }

function mostrarCarrito(){
    cart.innerHTML = '';
    carrito.forEach((prod) => {
        cart.innerHTML += `<div class="card">
                            <span>$${prod.precio}</span>
                            <p>CANTIDAD: ${prod.cantidad}
                            </p>
                            </div>`;
    })
}
mostrarCarrito();

items.forEach((prod) => {
    document.getElementById(`book-${prod.id}`).addEventListener("click", ()=> {
        agrergarAlCarrito(prod)})
})





