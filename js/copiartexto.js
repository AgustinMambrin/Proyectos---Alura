function copiarTexto (){
    let texto = document.querySelector("#mostrar-texto");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado en el portapapeles.")
}