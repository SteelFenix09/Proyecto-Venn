const prompt = require("prompt-sync")({ sigint: true })
const universal = [1, 2, 3, 4, 5, 6, 7]
const conjuntoA = [1, 2, 7, 6]
const conjuntoB = [2, 3, 4, 7]
const conjuntoC = [4, 5, 6, 7]

function union(setA, setB) {
    return [...new Set([...setA, ...setB])]
}

function interseccion(setA, setB) {
    return setA.filter(value => setB.includes(value))
}

function diferencia(setA, setB) {
    return setA.filter(value => !setB.includes(value))
}

function simetrica(setA, setB){
    let unionConjunto = union(setA, setB)
    let interConjunto = interseccion(setA, setB)
    return diferencia(unionConjunto, interConjunto)
}

function evaluar(expresion){
    let conjunts = {
        'A': conjuntoA,
        'B': conjuntoB,
        'C': conjuntoC
    }


let operaciones = {
    'U': union,
    'I': interseccion,
    'D': diferencia,
    '#': simetrica
}

let pila = []
let ops = []

for (let i = 0; i < expresion.length; i++) {
    if (conjunts[expresion[i]]){
        pila.push(conjunts[expresion[i]])
    } else if (operaciones[expresion[i]]){
        ops.push(operaciones[expresion[i]])
    } else {
        console.log("Expresion no valida");
        return []
    }

    
}
while (ops.length > 0){
    if (pila.length < 2){
        console.log("Expresion no valida ");
        return []
    }
    let conjunto1 = pila.pop()
    let conjunto2 = pila.pop()
    let operacion = ops.shift()
    pila.push(operacion(conjunto1,conjunto2))
}


if (pila.length === 1){
    return pila.pop()
} else {
    console.log("Expresion no valida");
    return []
}
}

let expresion = prompt("Ingresa la expresion a validar ")
console.log("El resultado es :",evaluar(expresion) );

//const intrerseccion=style{background:red};

//console.log(AudioDestinationNode.find(inter)?"intersecion":"Otro color"); //
