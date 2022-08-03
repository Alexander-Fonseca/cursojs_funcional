const { Observable, Subscriber } = require('rxjs')

//com promise só consigo resolver uma unica vez
const promise = new Promise(resolve => {
    resolve('Promise é bom!')
})

promise.then(console.log)

//consegue gerar mutiplos dados com o observer, 
// conseguindo usar o mesmo observer gerando mais de um dado
const obs = new Observable(Subscriber => {
    Subscriber.next('Observer')
    Subscriber.next('é bem')

    setTimeout(() => {
        Subscriber.next('legal!')
        subscriber.complete()
    }, 1000)
})
obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))