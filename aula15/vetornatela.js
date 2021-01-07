let valores = [8, 1, 7, 4, 2, 9]

// console.log(valores) 

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* percurso para exibição do vetor (tradicional)
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}
*/

// para cada posição em valores // mostra a posição de valores // só funciona para arrays e objetos
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


