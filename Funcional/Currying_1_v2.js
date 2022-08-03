function textoComTamanhoEntre(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                // lazy evaluation
                const tamanho = (texto || '').trim().length

                if (tamanho < min || tamanho > max) {

                    throw erro
                }
            }
        }
    }
}
const forcarTamanhopadrao = textoComTamanhoEntre(4)(255)
const forcaNomeProdutoValido = forcarTamanhopadrao ('Nome produto inválido')
const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
forcaNomeProdutoValido(p1.nome)
