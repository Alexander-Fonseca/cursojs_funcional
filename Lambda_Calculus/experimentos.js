Number.prototype.log = function(){console.log(this)}
Function.prototype.log = function(){console.log(this.toString())}

const PRI = a => _ => a
r = PRI(7)(11)


const ULT  = _ =>b => b
r = ULT(7)(11)

const TROC = f => a => b => f(b)(a)

R = TROC(ULT)(7)(11)
R.log()

R = TROC(PRI)(7)(11)
R.log()

const ULT2 = a=>b => TROC(PRI)(a)(b)
R = ULT2(5)(12)
R.log()

// BOOLEAN TRUE AND FALSE
// TRUE? <PRI> : ULT
//FALSE? PRI : <ULT>

const T = PRI
const F = ULT

T.toString =() => 'verdadeiro (PRI)'
F.toString =() => 'falso (ULT)'


// NOT
const NOT = a => a(F)(T)
r = NOT(T)
r.log()

// AND
const AND = a=> b => a(b)(F)

r = AND(T)(T)
r.log()

//OR

const OR = a => b =>a(T)(b)
r = OR(T)(F)
r.log()

const EQ = a => b =>a(b)(F)

r = EQ(T)(T)
r.log()

r = EQ(T)(F)
r.log()

r = EQ(F)(T)
r.log()

r = EQ(F)(F)
r.log()

const XOR = a => b =>NOT(EQ(a)(b))
r = XOR(T)(T)
r.log()
