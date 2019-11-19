window.cipher = {
  encode: (str, offset) => {
    let n = parseInt(offset); 
    let cifrado = "";
    for (let inText=0; inText<str.length; inText++) {        
      let asciiNum = str[inText].charCodeAt();      
      if (asciiNum >= 65 && asciiNum <= 90) {
        let numCifrado = (asciiNum - 65 + n) % 26 + 65;
        cifrado += String.fromCharCode(numCifrado);
      } else if (asciiNum >= 97 && asciiNum <= 122) {
        let numCifrado = (asciiNum - 97 + n) % 26 + 97;
        cifrado += String.fromCharCode(numCifrado);
      } else if (asciiNum >= 48 && asciiNum <= 57) {
        let numCifrado = (asciiNum - 48 + n) % 10 + 48;
        cifrado += String.fromCharCode(numCifrado);
      } else {
        cifrado += str[inText];
      }
      console.log(cifrado)
    }
    return cifrado
    
  },
  decode: (str, offset) => {
    let n = parseInt(offset);
    let descifrado = "";
    for (let inText=0; inText<str.length; inText++) {          
      let asciiNum = str[inText].charCodeAt();
      if (asciiNum >= 65 && asciiNum <= 90) {
        let numCifrado = (asciiNum - 90 - n) % 26 + 90;
        descifrado += String.fromCharCode(numCifrado);
      } else if (asciiNum >= 97 && asciiNum <= 122) {
        let numCifrado = (asciiNum - 122 - n) % 26 + 122;
        descifrado += String.fromCharCode(numCifrado);
      } else if (asciiNum >= 48 && asciiNum <= 57) {
        let numCifrado = (asciiNum - 57 - n) % 10 + 57;
        descifrado += String.fromCharCode(numCifrado);
      } else {
        descifrado += str[inText];
      }
    
    }
    console.log(descifrado);
    return descifrado;
  }  
};
//test return funciones https://www.youtube.com/watch?v=EWYU_DDSdi8