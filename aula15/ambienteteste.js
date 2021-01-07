let num = [5, 8, 2, 9, 3]

let pos1 = num.indexOf(3)
let p = num[pos1]
if (pos1 == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor ${p} está na posição ${pos1}`)
}