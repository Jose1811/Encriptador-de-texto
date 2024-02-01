function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje1 = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if(texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje1.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/encriptado.jpg";
    }else{
        muñeco.src = "./imagenes/muñeco.png";
        tituloMensaje1.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes de ingresar el texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje1 = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    if(texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje1.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/desencriptado.jpg";
    }else{
        muñeco.src = "./imagenes/muñeco.png";
        tituloMensaje1.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes de ingresar el texto");
    }
}