function calc_Mult_rec(x,n){
    if (n == 1) return x;
    return x + calc_Mult_rec(x, --n);
}
var x = parseInt(prompt("Escreva o primeiro operando da multiplicação "));
var n = parseInt(prompt("Escreva o segundo operando da multiplicação "));
console.log(calc_Mult_rec(x, n));