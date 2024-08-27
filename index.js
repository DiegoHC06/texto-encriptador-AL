function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo"); 

  let textoCifrado = texto
      .replace(/e/gi, "oei3")
      .replace(/i/gi, "ripdm")
      .replace(/a/gi, "tagi")
      .replace(/o/gi, "joil")
      .replace(/u/gi, "duck");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = ""; 
  } else { 
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"; 
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo"); 

  let textoCifrado = texto
      .replace(/oei3/gi, "e")
      .replace(/ripdm/gi, "i")
      .replace(/tagi/gi, "a")
      .replace(/joil/gi, "o")
      .replace(/duck/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = ""; 
    } else { 
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"; 
    }
}

