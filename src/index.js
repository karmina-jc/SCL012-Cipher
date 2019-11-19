const buttomCifrado = document.getElementById("cifrar");
const buttomDescifrar = document.getElementById("descifrar");
const output = document.getElementById("textExit")
const buttomLimpiar = document.getElementById("botonLimpiar");
const botonCopiar = document.getElementById("botonCopiar");

//Boton cifrado

buttomCifrado.addEventListener("click", function(){
    let offset = document.getElementById("offSet").value;
    let str = document.getElementById("textIn").value;
    //let str = strIn.toUpperCase();
    output.innerHTML = window.cipher.encode(str, offset);
    
  }
);

//Boton para descifrar

buttomDescifrar.addEventListener("click", function(){
    let offset = document.getElementById("offSet").value;
    let str = document.getElementById("textIn").value;
    //let str = strIn.toUpperCase();
    output.innerHTML = window.cipher.decode(str, offset);    
  }
);

//Boton Copiar

botonCopiar.addEventListener("click", function copiar() {
  let textOut = document.getElementById("textExit");
  textOut.select();
  document.execCommand("copy");
});

//Boton Limpiar 

buttomLimpiar.addEventListener("click", function(){
  let textIn = document.getElementById("textIn");
  let textOut = document.getElementById("textExit");
  let offset = document.getElementById("offSet");
  
  textIn.value = "";
  textOut.innerHTML = "";
  offset.value = "";
});

