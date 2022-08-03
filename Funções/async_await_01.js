function esperarpor(tempo =2000){

    return new Promise(function(resolve){

        setTimeout(() => resolve(), tempo)

    })
}
/* esperarpor(2000)
.then(()=> console.log('executando uma promise 1...'))
.then(esperarpor)
.then(()=> console.log('executando uma promise 2...'))
.then(esperarpor)
.then(()=> console.log('executando uma promise 3...')) */

function retornarValor(){

    return new Promise(resolve=> {

        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido(){

    return 20
    
}

async function executar(){   //marcar a função como assincrona
    let valor = await retornarValorRapido()

   await esperarpor(1500)
   console.log(`Valor ${valor}...`)
   await esperarpor(1500)
   console.log(`Valor ${valor + 1}...`)
   await esperarpor(1500)
   console.log(`Valor ${valor + 2}...`)

    return valor + 3
}

async function executarVerdade(){

    const valor = await executar()
    console.log(valor)

}
executarVerdade()