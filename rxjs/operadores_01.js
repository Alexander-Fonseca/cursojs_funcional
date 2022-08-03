// os dois tipos
// 1. Operadores de criação
const { of } = require('rxjs')
const { observeNotification } = require('rxjs/internal/Notification')

// 2. Operadores encadeáveis (Pipeable Op)
const { last, map } = require('rxjs/operators')


of (1, 2,'ana', false, 'ultimo')
// pipe chama o last
.pipe(
    last(),
map(v => v[0]),
map(v => (`A letra encontrada foi: ${v}`))
)
.subscribe(function(valor){
    console.log(`${valor}`)
})