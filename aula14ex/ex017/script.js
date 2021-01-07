function gerarTabuada() {
    let num = document.getElementById('txtn1')
    let tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}