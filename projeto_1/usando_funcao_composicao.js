function composicao(...fns) {
    return function (valor) {
        return fns.reduce(async(acc, fn) => {
            if(Promise.resolve(acc)===acc){
                return fn(await acc)
            }else{
                return fn(acc)
            }  
        }, valor)
    }
}

const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [

    '.', '?', '-', '"', '♪', '',
    '_', '<i>', '</i>', '\r', '[',
    ']', '(', ')', ','
]

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
        fn.lerArquivos,
        fn.mesclarElementos,
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio,
        fn.removerElementosSeIncluir('-->'),
        fn.removerElementosApenasNumero,
        fn.removerSimbolos(simbolos),
        fn.mesclarElementos,
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio,
        fn.removerElementosApenasNumero,
        fn.agruparElementos,
        fn.ordenarPorAtributoNumerico('qtde', 'desc'),
)
palavrasMaisUsadas(caminho)
.then(console.log)

  
