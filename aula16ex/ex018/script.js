let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// "n" é o numero digitado no primeiro input html

function isNumero(n) { //função recebendo um numero como parametro
    if(Number(n) >= 1 && Number(n) <= 100) {   // se o numero atribuido a "n" for maior ou igual a 1 e o numero atribuido a "n" for menor que 100
        return true // retorna verdadeiro
    } else {
        return false // retorna falso
    }
}

function inLista(n, l) { // função recebendo um número e uma lista como parametro
    if (l.indexOf(Number(n)) != -1) { //se na lista o número não existir (-1 = não encontrado)
        return true // retorna verdadeiro
    } else {
        return false // retorna falso
    }
}

function adicionar () {
    if (isNumero(num.value) && !inLista (num.value, valores)) { // função adicionara se o valor dentro da função for um numero
                                                                // e o numero dentro do array não existir
        valores.push(Number(num.value))
        let item = document.createElement('option') //criando um elemento option
        item.text = `Valor ${num.value} adicionado.` //item tem valor text
        lista.appendChild(item) // adicionando item na lista
        res.innerHTML = '' // depois que adicionar um valor ele limpa o res
    }   else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // limpa o input
    num.focus() // coloca o foto do cursor no input
}

function finalizar() {
    if (valores.length == 0) { // se o tamanho do array for 0
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // variavel recebendo a quantidade de elementos dentro do array
        let maior = valores [0] // o primeiro valor do array (se houver somente ele) é o maior
        let menor = valores [0] // o primeiro valor do array (se houver somente ele) é o menor também
        let soma = 0
        let media = 0
        for (let pos in valores) { // para cada posição em valores farei um teste
            soma += valores[pos] // soma o valor atual mais cada valor(posição) do array
            if (valores[pos] > maior) //se o valores na posição pos for maior que o valor maior
                maior = valores [pos] // o maior valor passa a ser o valores[pos]
            if (valores[pos] < menor) // se o valores na posição pos for menor que o valor menor
                menor = valores[pos] // o menor valor passa a ser o valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}