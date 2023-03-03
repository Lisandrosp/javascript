
let edad = parseInt(prompt ("ingrese su edad"));

if (edad < 18){
    alert ("No puedes ingresar, eres menor de edad");
} else {
    alert ("Hola futboleros!")

let critica = prompt ("¿Usted critica a Messi?");

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


function sumar (){
    console.log (1 + 1 + 1)
}

sumar ()
