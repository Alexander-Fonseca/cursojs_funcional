/* 
setTimeout(function(){

    console.log('Executando callback...')

        setTimeout(function(){

            console.log('Executando callback...')

            setTimeout(function(){

                console.log('Executando callback...')
    
            }, 3000)
        }, 3000)
}, 3000) */

//exetudando codigo acima usando promise, e dimunindo bem o código, onde eu chamo 3 vzs a mesma função

function esperarpor(tempo =2000){

        return new Promise(function(resolve){

            setTimeout(function(){
                console.log('executando uma promise...')
                resolve()
            }, tempo)

        })
}
esperarpor()
.then(()=> esperarpor())
.then(esperarpor)