
const primeiroElemento = string => string[0]
const primeiraletra = string => string[0]

const letraMinuscula = letra =>  letra.toLowerCase()

new Promise(function(resolve){

    resolve(['Leco', 'Fran', 'Gael'])
}).then(primeiroElemento)
.then(primeiraletra)
.then(letraMinuscula)
.then(console.log)