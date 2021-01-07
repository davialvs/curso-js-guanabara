function contar () {
    var inicio = document.getElementById('txtn1') // a variavel recebe o primeiro input
    var fim = document.getElementById('txtn2')  // a variavel recebe o segundo input
    var passo = document.getElementById('txtn3') // a variavel recebe o terceiro input
    var res = document.getElementById('res') // a variavel recebe a div de resultado
    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) { 
        res.innerHTML = 'Impossível contar!'
        window.alert('Faltam dados!') // se o tamanho do valor da variavel inicio, fim e passo for = a zero realiza o alert
    } else { // se nao
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value) // variavel i recebe o valor de ini e converte para tipo número
        let f = Number(fim.value) // variavel f recebe o valor de fim e converte para tipo número
        let p = Number(passo.value) // variavel p recebe o valor de passo e converte para tipo número
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c = c + p) { // laço de repetição com contador recebendo 1
                res.innerHTML += ` ${c} \u{1F449}` // se o contador for menor ou igual ao valor de f
            }                                           // contador recebe ele mesmo + passo
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
