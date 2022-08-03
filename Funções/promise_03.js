function getarNumerosEntre(min, max){

    if(min>max){
        [max, min] = [min, max]  //invertendo valor das variaveis
    
    }
        return new Promise(resolve =>{
            const fator = max - min + 1
                const aleatorio = parseInt(Math.random() * fator) + min
                resolve(aleatorio)
        })
}
getarNumerosEntre(10,30)
.then(num => num*10)
.then(numx10 => `O numero gerado foi ${numx10}`)
.then(console.log)