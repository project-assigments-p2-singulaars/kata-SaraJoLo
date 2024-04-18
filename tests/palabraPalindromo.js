export function palabraPalidromo(cadena){
  
    let array = cadena.split("");
   let reverse = array.reverse();

    
   return cadena == reverse.join("") ? "Siiii" : "No0o0o0"
}


console.log(palabraPalidromo("rama a amar"))

document.write();