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
       var img = document.getElementById('foto')
      // img.setAttribute('id', 'foto')
       if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.src = 'crianca-homem.png'
            } else if (idade < 21) {
                img.src = 'menino-homem.png'
            } else if (idade < 50) {
                img.src = 'adulto-homem.png'
            } else {
                img.src = 'idoso-homem.png'
            }
       } else if (fsexo[1].checked) {
           genero = 'Mulher'
            if (idade >=0 && idade < 10) {
               
            } else if (idade < 21) {
               
            } else if (idade < 50) {
                
            } else {
                
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}