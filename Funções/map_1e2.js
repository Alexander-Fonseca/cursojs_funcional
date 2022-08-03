const nums = [1, 2, 3, 4, 5]
const dobro = n => n*2
console.log(nums.map(dobro))

const nomes = ['leco', 'fran', 'gabi','fafa', 'deia']
const primeiraletra = texto => texto[0]
const letras = nomes.map(primeiraletra)
console.log(nomes.map(primeiraletra))
console.log(nomes, letras)