const { Observable } = require('rxjs')


// criando um observable usando o metodo create

const obs = Observable.create(subscriber => {

    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('que problema!!!')
    }
})

/* obs.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Erro: ${erro}`),
    () => console.log('FIM!')
) */

obs.subscribe({

    next(valor) {

        console.log(`Valor: ${valor}`)
    },
    error(msg) {

        console.log(`Erro: ${msg}`)
    },
    complete() {
        console.log('FIM!')
    }

})