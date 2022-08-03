

const x = 3

function fora() {

    function somarXMais3() {
        const x = 97
        return x + 3
    }
    return somarXMais3
}


module.exports = fora()