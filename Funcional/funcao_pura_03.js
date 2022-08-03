// Pura

let qtdeExecucao = 0

function somar (a , b){
qtdeExecucao ++  //efeitos colaterais observáveis 
    return a + b
}

console.log(qtdeExecucao)
console.log(somar(2,3))
console.log(somar(2,3))
console.log(somar(2,3))
console.log(somar(2,3))
console.log(qtdeExecucao)