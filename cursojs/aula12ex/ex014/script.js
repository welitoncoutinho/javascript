function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var bo = window.document.getElementById('b')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#fdba8f'
        bo.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#fa5503'
        bo.innerHTML = 'Boa Tarde!'
    } else {
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#001f42'
        bo.innerHTML = 'Boa Noite!'
    }
}

