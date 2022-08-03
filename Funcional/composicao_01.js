
function composicao(...fns) {
    return function (valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}
function enfatizar(texto) {
    return `${texto}!!!`
}
function tornarLento(texto) {
    return texto.split('').join(' ')
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)
const result1 = exagerado('PARA')
const result2 = exagerado('CUIDADO COM O BURACO')
console.log(result1)
console.log(result2)