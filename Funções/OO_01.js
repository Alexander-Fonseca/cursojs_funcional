// OO  função construtora

function produto(nome, preco, desconto = 0.15){
  
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function(){

            return this.preco * (1 -this.desconto)

    }
}

const p1 = new produto ('caneta', 10)
console.log(p1.nome)
const p2 = new produto ('geladeira', 3000 )
console.log(p2.preco)
console.log(p2.precoFinal())