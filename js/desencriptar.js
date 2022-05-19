var botonDesencriptar = document.querySelector("#desencriptar");
botonDesencriptar.addEventListener("click", function(textoDesencriptado){
    let llavesInversas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let pantalla = document.querySelector("#mostrar-texto");
    
    

    textoDesencriptado = entradaTexto.value;
    textoDesencriptado = textoDesencriptado.toLowerCase();

    if(entradaTexto.value.length > 0){
        for(let i = 0; i < llavesInversas.length; i++){                 
            if(textoDesencriptado.includes(llavesInversas[i][0])){
                textoDesencriptado = textoDesencriptado.replaceAll(llavesInversas[i][1],llavesInversas[i][0]);
                mostrarTextarea();
                pantalla.textContent = textoDesencriptado;
            }
        }
        return textoDesencriptado;
    }
    else{
        alert("Ingrese texto para Desencriptar.");
    }
})