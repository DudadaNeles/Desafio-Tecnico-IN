function nota_NumParaLetra (n){
    if (n >= 90) return "A";
    if (n < 90 && n >= 80 ) return "B";
    if (n < 80 && n >= 70 ) return "C";
    if (n < 70 && n >= 60 ) return "D";
    if (n < 60) return "F";
}

console.log(nota_NumParaLetra(parseInt(prompt("Escreva uma nota para ser convertida: "))));