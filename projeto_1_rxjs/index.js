const path = require('path')
const fn = require('./funcoes')
const _ = require('lodash')
const {toArray, map} = require('rxjs/operators')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [

    '.', '?', '-', '"', '♪', '',
    '_', '<i>', '</i>', '\r', '[',
    ']', '(', ')', ',', '!'
]

fn.lerDiretorio(caminho)
.pipe(
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivo(),
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio(),
    fn.removerSimbolos(simbolos),
    fn.removerElementosApenasNumero(),
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio(),
    fn.removerElementosApenasNumero(),
    toArray(),
    fn.agruparElementos(),
    map(array => _.sortBy(array, el => -el.qtde)),


)
.subscribe(console.log)
/* fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerElementosApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosApenasNumero)
    .then(fn.agruparElementos)
    .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
    .then(console.log) */
