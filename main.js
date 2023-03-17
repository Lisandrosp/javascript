function respuestas (critica){
    switch (critica){
        case "No":
            alert ("usted sabe de futbol");
            break;

        case "Si":
            let nacionalidad = prompt ("Ingrese su nacionalidad: ");
            switch (nacionalidad){
                case "Francia":
                    alert ("usted no puede criticar a messi, perdio la final");
                    break;
    
                case "Mexico":
                    alert ("usted es hijo de messi, no critique");
                    break;
    
                case "Chile":
                    alert ("no existis");
                    break;
    
                case "Argentina":
                    alert ("traidor a la patria");
                    break;
    
                default:
                    alert ("anda palla boboo");
                    break
            }
    }
}

let edad = parseInt(prompt ("sitio solo para mayores de 18 años, ingrese su edad"));
const mayordeedad = 18

while (!(edad >= mayordeedad)){
    console.log (edad);
    edad=parseInt(prompt("sitio solo para mayores de 18 años, ingrese su edad"));
} if (edad >= mayordeedad){
    alert ("bienvenidos futboleros!")
} 

let critica = prompt ("¿Usted critica a Messi?");

while (!(critica === "Si" || critica === "No")){
    console.log (critica);
    critica = prompt ("¿Usted critica a Messi?");
}

respuestas (critica);

const arrayProductos = ["1) Remera Argentina", "2) Remera PSG", "3) Remera Barcelona"];

class Producto {
    constructor (nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const remeraArg = new Producto ("Remera  Argentina", 16000)
const remeraPSG = new Producto ("Remera PSG", 12500)
const remeraBarcelona = new Producto ("Remera Barcelona", 10000)

const Array22 = [remeraArg, remeraPSG, remeraBarcelona];

let remeras;

do{
    remeras = prompt ("Que items desea comprar? Ingrese 1, 2 o 3\n 1) Remera Argentina\n 2) Remera PSG\n 3) Remera Barcelona");
}while (remeras>Array22.length || remeras < 1)   

alert ("Usted seleccionó la opción:" , Array22 [(remeras-1)]);
alert ("El precio es: $", Array22 [(remeras-1).precio]); 

let tipoDePago;
do{
    tipoDePago = prompt ("Desdea abonar en efectivo?\n Tiene 10% de descuento")
} while (!(["Si", "No"].includes(tipoDePago)))

const ArrayPrecios = Array22.map((producto) => {
    if(tipoDePago === "Si"){
        return{
            nombre: producto.nombre,
            precio: (producto.precio*.9)
        }
    }else{
        return{
            nombre: producto.nombre,
            precio: (producto.precio)
        }
    }
    
})

alert ("El precio en efectivo es: $", ArrayPrecios[remeras-1].precio); 





