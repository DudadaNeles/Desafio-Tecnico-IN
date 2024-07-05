function multiplica_matriz(m1, m2){
    var num_de_lin = m1.length
    var num_de_col = m2[0].length
    var resp = []
    for (let i = 0; i < num_de_lin; i++) {
        resp[i] = [];
        for (let j = 0; j < num_de_col; j++) {
            resp[i][j] = 0;
        }
    }

    for (let i = 0; i < num_de_lin; i++) {
        for (let j = 0; j < num_de_col; j++) {
            for (let k = 0; k < m2.length; k++){
                resp[i][j] += m1[i][k] * m2[k][j]
            }
        }
    }
    return resp
}

function verifica_se_multiplica(m1, m2){
    if (m1[0].lenght == m2.lenght){console.log(multiplica_matriz(m1, m2))}
    else{console.log("Nao foi possivel fazer a conta")}
}

//Caso teste 1: 
var A = [ [ [2],[-1] ], [ [2],[0] ] ]
var B = [ [2,3],[-2,1] ]
verifica_se_multiplica(A, B)
//Resp = [ [6,5], [4,6] ]

//Caso teste 2:
A = [ [4,0], [-1,-1] ]
B = [ [-1,3], [2,7] ] 
verifica_se_multiplica(A, B)
//Resp = [ [-4,12], [-1,-10] ]

