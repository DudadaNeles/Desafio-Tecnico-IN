//Questão 1
console.log("Q1)");
for (let i = 0; i < gods.length; i++) {console.log(`${gods[i].name} ${gods[i].features.length}`)}
console.log("\n");

//Questão 2
console.log("Q2)");
for (let i = 0; i < gods.length; i++){
    if (gods[i].roles.includes("Mid")) {
        console.log(gods[i])
    }
}
console.log("\n"); 

//Questao 3
console.log("Q3)");
for (let i = 1; i < gods.length; i++){
    let panteao = gods[i].pantheon;
    let j = i - 1;
    while (j > -1 && panteao <= gods[j].pantheon){
        let temp = gods[j+1];
        gods[j+1] = gods[j];
        gods[j] = temp;
        j--;
    }
}
console.log(gods);
console.log("\n");

//Questão 4
console.log("Q4)");
var god_class = []
for (let i = 0; i < gods.length; i++){
    god_class.push(`${gods[i].name} (${gods[i].class})`)
}
console.log(god_class);
