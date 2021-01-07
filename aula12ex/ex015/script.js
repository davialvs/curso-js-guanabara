function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
       var fsexo = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca-homem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'menino-homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                img.setAttribute('src', 'idoso-homem.png')
            }
       } else if (fsexo[1].checked) {
           genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca-mulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'menina-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                img.setAttribute('src', 'idosa-mulher.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}