let num = [5, 8, 2, 9, 3]

// adiciona um elemento no final do array
num.push(1)

// coloca o vetor de maneira ordenada
num.sort()

console.log(num)

// mostrar quantas posições tem um vetor
console.log(`O vetor tem ${num.length} posições`)

//mostra posição específica
console.log(`A primeira posição é: ${num[0]}`)

// Procura o valor dentro de um array
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

let pos1 = num.indexOf(4)
if (pos1 == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos1}`)
}

num.push(4)
num.sort()
console.log(num)