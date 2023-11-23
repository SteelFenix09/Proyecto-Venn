from collections import deque

universal = [1, 2, 3, 4, 5, 6, 7]
conjuntoA = [1, 2, 7, 6]
conjuntoB = [2, 3, 4, 7]
conjuntoC = [4, 5, 6, 7]

def union(setA, setB):
    return list(set(setA).union(set(setB)))

def interseccion(setA, setB):
    return list(set(setA).intersection(set(setB)))

def diferencia(setA, setB):
    return list(set(setA).difference(set(setB)))

def complemento(setA):
    return list(set(universal) - set(setA))



def simetrica(setA, setB):
    return list(set(setA).symmetric_difference(set(setB)))

def evaluar(expresion, ):
    global document
    conjuntos = {
        'A': conjuntoA,
        'B': conjuntoB,
        'C': conjuntoC
    }

    operaciones = {
        'U': union,
        'I': interseccion,
        'D': diferencia,
        '#': simetrica,
        '$': complemento
    }

    pila = deque()
    ops = deque()

    i = 0
    while i < len(expresion):
        if expresion[i] == '(':
            ops.append(expresion[i])
        elif expresion[i] == ')':
            while ops[-1] != '(':
                operacion = ops.pop()
                conjunto1 = pila.pop()
                conjunto2 = pila.pop()
                resultado = operaciones[operacion]
                pila.append(resultado(conjunto1, conjunto2))
            ops.pop()  # Eliminar el '('
        elif expresion[i] in conjuntos:
            pila.append(conjuntos[expresion[i]])
        elif expresion[i] in operaciones:
            while (len(ops) != 0 and ops[-1] != '(' and operaciones[ops[-1]] != diferencia):
                operacion = ops.pop()
                conjunto1 = pila.pop()
                conjunto2 = pila.pop()
                resultado = operaciones[operacion]
                pila.append(resultado(conjunto1, conjunto2))
            ops.append(expresion[i])
        else:
            print("Expresion no valida")
            return []
        i += 1

    while len(ops) > 0:
        operacion = ops.pop()
        conjunto1 = pila.pop()
        conjunto2 = pila.pop()
        resultado = operaciones[operacion]
        pila.append(resultado(conjunto1, conjunto2))

    if len(pila) == 1:
        return pila.pop()
    else:
        print("Expresion no valida")
        return []


def marcar(resultado,color):
    for elemento in resultado:
        if elemento in "A":
            document.getElementById("circle1").styles.fill = color
        elif elemento in "B":
            document.getElementById("circle2").styles.fill = color
        else:
            document.getElementById("circle3").styles.fill = color
            

