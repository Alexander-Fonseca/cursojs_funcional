/* 1- Functors são objetos que implementam a função MAP 
2- ou também é um 'wrapper* de um valor
3 - Array é um exemplo de Fanctors*/

const nums = [1, 2, 3, 4, 5, 6]
const novosNums = nums
    .map(el => el + 10)
    .map(el => el * 2)
console.log(nums, novosNums)


//crinado o nosso próprio Fanctors

function tipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) {

                return tipoSeguro(null)
            } else {

                const novoValor = fn(this.valor)
                return tipoSeguro(novoValor)
            }
        },
        flatMap(fn) {
         return this.map(fn).valor
        },
    }
}
const original ='este é um texto'
const alterado = tipoSeguro(original)
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .flatMap(t => t.split('').join(' '))

console.log(original, alterado)