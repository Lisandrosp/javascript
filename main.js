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

while  (edad < mayordeedad){
    console.log (edad);
    edad=parseInt(prompt("sitio solo para mayores de 18 años, ingrese su edad"));
}   if (edad > mayordeedad){
        alert ("bienvenidos futboleros!")
}

let critica = prompt ("¿Usted critica a Messi?");

while (!(critica === "Si" || critica === "No")){
    console.log (critica);
    critica = prompt ("¿Usted critica a Messi?");
}

respuestas (critica);
