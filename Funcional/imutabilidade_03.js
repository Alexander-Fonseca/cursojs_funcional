const pessoa = Object.freeze= {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: Object.freeze   ( {
        rua: 'Feliz'
    })
}

// atribuição por referencia
const outraPessoa = pessoa

// Passagem por referencia (função impura)
function alterapessoa(pessoa) {
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC'
    return novaPessoa
}
const novaPessoa = alterapessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

// passagem por valor

let a  = 3
let b = a //atribuição por valor (!cópia)

a++
b--

console.log(a,b)