/* closure é quando uma função lembra
seu escopo lexico, mesmo quando a função
é executada fora do escopo lexico */

const somarXMais3 = require('./closure_escopo')

const x = 1000

console.log(somarXMais3(x))