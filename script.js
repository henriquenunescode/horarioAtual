// Exibe uma saudação (Bom dia, Boa tarde ou Boa noite) com base na hora atual,
// trocando a imagem e a cor de fundo da página de acordo com o período do dia.

function carregar() {
    // Seleciona o elemento que exibirá a mensagem de texto
    const divMsg = document.querySelector('div#msg')

    // Seleciona a imagem que será trocada conforme o período do dia
    const imgFoto = document.querySelector('img#fotoImg')

    // Obtém a hora atual (0 a 23)
    let data = new Date()
    let hora = data.getHours()

    // Exibe a hora atual na div de mensagem
    divMsg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Manhã: das 00h às 11h
        divMsg.innerHTML += ' Bom dia!'
        imgFoto.src = 'imgs/manha.jpg'
        document.body.style.backgroundColor = '#cff7ff' // azul claro

    } else if (hora < 18) {
        // Tarde: das 12h às 17h
        divMsg.innerHTML += ' Boa tarde!'
        imgFoto.src = 'imgs/tarde.jpg'
        document.body.style.backgroundColor = '#b9846f' // laranja terroso

    } else if (hora < 24) {
        // Noite: das 18h às 23h
        divMsg.innerHTML += ' Boa noite!'
        imgFoto.src = 'imgs/noite.jpg'
        document.body.style.backgroundColor = '#515154' // cinza escuro

    } else {
        // Caso a hora esteja fora do intervalo esperado (não deve ocorrer normalmente)
        divMsg.innerHTML += ' Hora inválida!'
    }
}

// Chama a função assim que o script é carregado
carregar()