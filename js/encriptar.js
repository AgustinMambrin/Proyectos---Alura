/*Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.*/


var entradaTexto = document.querySelector("#area-texto");
var salidaTexto = document.querySelector("#mostrar-texto");

var botonEncriptar = document.querySelector("#encriptar");
botonEncriptar.addEventListener("click", function (stringParaEncriptar){
    
    let llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
    let pantalla = document.querySelector("#mostrar-texto");
    stringParaEncriptar = entradaTexto.value;
    stringParaEncriptar = stringParaEncriptar.toLowerCase();

    if(entradaTexto.value.length > 0){
        for(let i = 0; i < llaves.length; i++){                 
            if(stringParaEncriptar.includes(llaves[i][0])){
                stringParaEncriptar = stringParaEncriptar.replaceAll(llaves[i][0],llaves[i][1]);
                mostrarTextarea();
                pantalla.textContent = stringParaEncriptar;
            }
        }
        return stringParaEncriptar;
    }
    else{
        alert("Ingrese texto para Encriptar.");
    }
});




function ocultarTextarea (){
    if(salidaTexto.value.length === 0){
        let pantalla = document.querySelector("#textarea-boton");
        pantalla.classList.add("ocultar-textarea");
    }else{
        mostrarTextarea();
    }
}
ocultarTextarea();

function mostrarTextarea (){
    if(salidaTexto.value.length > 0){
        let objets = document.querySelector("#frame-5");
        let pantalla = document.querySelector("#textarea-boton");
        pantalla.classList.remove("ocultar-textarea");
        objets.classList.add("mostrar-textarea");
    }else{
        ocultarTextarea();
    }
}


