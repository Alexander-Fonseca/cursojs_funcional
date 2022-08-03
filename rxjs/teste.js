// função de nome soma
// a,b são parametros ou argumentos
// comandos que irão ter dentro da função

const { reduce } = require("rxjs/operators")

function soma(a, b) {

    return a + b
}
console.log(soma(3,6))
//______________________________________________
//Função anonima
// variavel "var soma" vai receber uma função
//vou utilizar a função chamando o nome da variavel
// nome função, os argumentos e e seguida o código

var soma = (a, b) => {

    return a + b
}

console.log(soma(2, 3))

//_____________________________________________________
// função de callback
//Trata-se de uma função ou URL que é executada quando algum evento acontece 
//ou depois que algum código chega ao estado desejado. Também conhecido como função de retorno, 
//o Callback cria regras dentro de outras funções para que sejam utilizadas no futuro.
// função myfunc e parametro de nome callback


// #1 parte Função declarada
const myFunc = callback=>{

    const value = 77

    // referenciando callback passando value como argumento, 
    //pois o valor recebido(value) é declaração de uma função
    callback(value)
}
// #2 parte Função invocada
// essa função foi atribuida para o parametro callback
myFunc(number =>{
    console.log(number)
})

//____________________________________________________________

//função MAP trabalha com array
//pegando um array e transformando em outro array
//podendo aplicar uma função de transformação para cada elemento do array

const number = [1,2,3]

const multiplicar = number.map((number)=> number*2)
const somar = number.map((number)=> number+5)

console.log(multiplicar, somar)

//___________________________________________________________
// extraindo dados (nomes) dentro de uma lista (variavel) 
const user = [
    {id: 1, nome: 'Leco'},
    {id: 2, nome: 'Luiz'},
    {id: 3, nome: 'Lenon'},
]
console.log(user.map((user) => user.nome))

//____________________________________________________________
//extraindo dados com filter
// pegando os filmes da disney com  filter
//somando total de visualizações com reduce

const melhoresFilmes =[
{titulo: 'Vingadores', numeroVisualizacao: 10070, produtor: 'Disney'},
{titulo: 'Titanic', numeroVisualizacao: 16700, produtor: 'Universal'},
{titulo: 'rei Leão', numeroVisualizacao: 38060, produtor: 'Paramount'},
{titulo: 'X men', numeroVisualizacao: 45450, produtor: 'Disney'},
{titulo: 'Homem Aranha', numeroVisualizacao: 186700, produtor: 'Disney'},
{titulo: 'Superman', numeroVisualizacao: 34760, produtor: 'Universal'}

]
console.log(
    melhoresFilmes
    .filter(({produtor})=> produtor==='Disney')
    .reduce((acumulador, {numeroVisualizacao}) => acumulador + numeroVisualizacao, 0)
)
//_________________________________________________________________________________

const pets = [
    {nome: 'Toby', idade: 8, genero: 'M', tipo: 'cachorro'},
    {nome: 'Cuca', idade: 2, genero: 'F', tipo: 'gato'},
    {nome: 'Laranja', idade: 1, genero: 'F', tipo: 'cachorro'},
    {nome: 'Pitoca', idade: 3, genero: 'F', tipo: 'gato'},
    {nome: 'Juju', idade: 4, genero: 'F', tipo: 'cachorro'},
    {nome: 'Biba', idade: 9, genero: 'M', tipo: 'gato'},
    {nome: 'Hulk', idade: 6, genero: 'M', tipo: 'cachorro'},
]

const getdogs = ({tipo}) => tipo === 'cachorro'
const idadehumana = ({nome, idade}) => ({
    nome,
    converteIdade: idade * 7

})
console.log(
    pets
    .filter(getdogs)
    .map(idadehumana)
)

//_______________________________________________________________

