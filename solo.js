const prompt = require("prompt-sync")({ sigint: true })
const universal = [1, 2, 3, 4, 5, 6, 7]
const conjuntoA = [1, 2, 7, 6];
const conjuntoB = [2, 3, 4, 7];
const conjuntoC = [4, 5, 6, 7];

function selecConjunto(opcion) {
    let conjuntoSelec;
    switch (opcion) {
        case 'A':
            conjuntoSelec = conjuntoA;
            break;
        case 'B':
            conjuntoSelec = conjuntoB;
            break;
        case 'C':
            conjuntoSelec = conjuntoC;
            break;
        default:
            console.log("Opción no válida");
            return [];
    }
    console.log("El conjunto ", opcion, " contiene estos elementos: ", conjuntoSelec);
    return conjuntoSelec;
}


function union(setA, setB) {
    return [...new Set([...setA, ...setB])];
}

function interseccion(setA, setB) {
    return setA.filter(value => setB.includes(value));
}

function diferencia(setA, setB) {
    return setA.filter(value => !setB.includes(value))
}

function menu() {
    console.log("1: Union");
    console.log("2: Interseccion");
    console.log("3: Coplemento");
    let operacion = prompt("Selecciona una operacion ")

    console.log("A = Conjunto A");
    console.log("B = Conjunto B");
    console.log("C = Conjunyo C");
    let conjunto1 = prompt("Selecciona el primer conjunto ")
    let conjunto2 = prompt("Selecciona el segundo conjunto ")

    let seleccion1 = selecConjunto(conjunto1);
    let seleccion2 = selecConjunto(conjunto2);

    switch (operacion) {
        case '1':
            let unionConjunto = union(seleccion1, seleccion2);
            console.log("Unión de ", conjunto1, " y ", conjunto2, ": ", unionConjunto);
            break;
        case '2':
            let interConjunto = interseccion(seleccion1, seleccion2);
            console.log("Intersección de ", conjunto1, " y ", conjunto2, ": ", interConjunto);
            break;
        case '3':
            console.log("Necesita colocar 2 veces el conjunto que desea conocer");
            if (conjunto1 !== conjunto2) {
                console.log("Para el complemento, por favor selecciona el mismo conjunto dos veces.");
                break
            }
            let compleConjunto = diferencia(universal, seleccion1);
            console.log(conjunto1, " su complemento es: ", compleConjunto);
            break;
        default:
            console.log("Operación no válida");
            break;
    }
}

menu()
