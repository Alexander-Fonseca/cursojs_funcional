// função somar 3 valores
function somar (a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
const somarAB = somar(3)(5)
console.log(somarAB(7))
console.log(somar(3)(5)(7))

//função calcular (3) (7) (fn)

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x, y)
        }
    }
}
function subtrair(a, b){
    return a - b
}
function multiplicar(a, b){
    return a * b
}
const r1 = calcular (20) (10) (subtrair)
const r2 = calcular (10) (20) (multiplicar)
console.log(r1)
console.log(r2)