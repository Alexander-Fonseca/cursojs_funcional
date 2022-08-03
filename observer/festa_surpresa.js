const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}
// Observer
function namorada() {

    console.log('N: apagar as luzes')
    console.log('N: pedir silencio')
    console.log('N: surpresa!!!')

}
// Observer
function sindico(evento) {

    console.log('S: monitorando o barulho')
    console.log(`S: evento--> ${evento.resp} `)
    console.log(`S: evento--> ${evento.data} `)


}
// Subject
async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)')

        if (resp.toLowerCase() === 's') {
            // os observadores são notificados
            (interessados || []).forEach(obs => obs({ resp, data: Date.now() }))

        } else if (resp.toLowerCase() === 'q') {
            break
        }
    }
}
/* Chamada de função -> registra os 2 observadores 
os observadores são: [namorada, sindico] 
O subject é o porteiro*/
porteiro([namorada, sindico])