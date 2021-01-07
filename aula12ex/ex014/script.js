function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var texto = document.getElementById('paragrafo')
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {   
        img.src = './imgs/fotomanha.png'
        texto.innerHTML = 'Bom dia!'
        document.body.style.background = '#ffdb65'
    } else if (hora >= 12 && hora < 18) {
        img.src = './imgs/fototarde.png'
        texto.innerHTML = 'Boa tarde!'
        document.body.style.background = '#7d5e6e'
    } else {
        img.src = './imgs/fotonoite.png'
        texto.innerHTML = 'Boa noite!'
        document.body.style.background = '#171b26'
    }
}
