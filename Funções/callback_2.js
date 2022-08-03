const fs = require('fs')  //fs biblioteca file system
const path = require('path') //pegar caminho do  arquivo

const caminho = path.join(__dirname, 'dados.txt') //dirname pega o diretorio atual onde estou rodando

function exibirConteudo (err, dados){
      
    console.log(dados.toString())
}

fs.readFile(caminho, {}, exibirConteudo) // redfile é a função apra ler o arquivo
fs.readFileSync(caminho) //segunda forma de fazer
