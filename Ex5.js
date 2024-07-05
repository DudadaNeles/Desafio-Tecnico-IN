for (let i = 0; i < 5; i++){
    var n = parseInt(prompt("Escreva um numero "))
    if (n % 3 == 0 && n % 5 == 0){console.log("fizzbuzz")}
    else{
        if (n % 3 == 0){console.log("fizz")}
        if (n % 5 == 0){console.log("buzz")}    
    }
}