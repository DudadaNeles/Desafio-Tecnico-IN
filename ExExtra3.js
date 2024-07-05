var l = [];
var l_sorted = [];

for (let i = 0; i < 5; i++){
    let n = parseInt(prompt("Escreva um numero para a sequencia: "));
    l.push(n);
    l_sorted.push(n);
}

console.log(l_sorted.sort());
console.log("\n");
console.log(l);