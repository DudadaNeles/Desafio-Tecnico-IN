function f (obj, saldo){
    var num_receitas = obj.receitas.length;
    var tot_despesas = 0;
    for (let i = 0; i < obj.despesas.length; i++) tot_despesas += obj.despesas[i];
    var saldo_final = saldo - tot_despesas;
    if (saldo_final > 0) console.log(`O saldo é positvo, restou um total de ${saldo_final}R$`);
    if (saldo_final < 0) console.log(`O saldo é negativo, voce passou da margem em ${saldo_final}R$`);
    if (saldo_final == 0) console.log(`O saldo final é nulo`);
    console.log(`O numero total de receitas é ${num_receitas}`);
}

var obj = {
    receitas: [],
    despesas: []
}

//Valores para teste 

obj.receitas.push("Coxinha");
obj.receitas.push("Bolinha de queijo");
obj.receitas.push("Kibe");
obj.despesas.push(35);
obj.despesas.push(25);
obj.despesas.push(27);

f(obj, parseInt(prompt("Escreva o saldo disponível: ")));