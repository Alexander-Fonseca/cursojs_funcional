// diz se que uma liguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra variável.

const x = 3
const y = function(text){

    return `Esse é o texto ${text}`
}
const z = () => console.log('zzzzzzzzz')
console.log(x)
z()
console.log(y('Olá'))