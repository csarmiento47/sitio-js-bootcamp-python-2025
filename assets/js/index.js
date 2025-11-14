//Comentario de una línea

/*
Comentarios 
múltiples 
líneas
*/
console.log("Hola mundo desde un archivo externo...!!!");
let nombre = "Chistian";
console.log("Hola " + nombre);

function mostrarFechaActualizable(){
    let fecha = new Date();
    document.getElementById("fecha").innerHTML = "Hola, hoy es " + fecha;

    let tiempo = setTimeout(function() {
        mostrarFechaActualizable();
    },1000);
}


