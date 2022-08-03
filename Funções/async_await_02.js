function getarNumerosEntre(min, max, numerosProibidos){

    if(min>max){
        [max, min] = [min, max]  
    
    }
        return new Promise((resolve, reject) =>{
            const fator = max - min + 1
                const aleatorio = parseInt(Math.random() * fator) + min
                if(numerosProibidos.includes(aleatorio)){

                    reject('Numero repetido!')
                }else{

                    resolve(aleatorio)

                }
                
        })
}

async function gerarMegasena(qtdeNumeros, tentativas =1){

    try{
        const numeros = []
        for(let_ of Array(qtdeNumeros).fill()){

           numeros.push(await getarNumerosEntre(1,60,numeros))
        }
            return numeros
    }catch(e){
        if(tentativas>10){

            throw 'Não deu certo'
        }else{
          return gerarMegasena(qtdeNumeros, tentativas + 1) 
        }
        
    }
        
}

gerarMegasena(15)
.then(console.log)
.catch(console.log)