function bomdia(){

    console.log('bom dia')
}

const boatarde = function(){

    console.log('boa tarde')
}


// 1) passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn){

    if(typeof fn=== 'function'){
    fn()

    }
}
executarQualquerCoisa(3)
executarQualquerCoisa(bomdia)
executarQualquerCoisa(boatarde)

// 2) retornar uma função a partir de outra função

function potencia(base, exp){

    return Math.pow(base, exp)
}
const bits8 = potencia(2,8)
console.log(bits8)


function potencia(base){

    return function(exp){
return Math.pow(base, exp)
    }
}
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))


