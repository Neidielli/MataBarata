 
var altura = 0
var largura = 0 

function ajustaPalco() {     
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaPalco()

function posicaoRandom() {

    // remove a barata anterior caso exista
    if(document.getElementById('barata')) {
        document.getElementById('barata').remove()
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // ajusta a probabilidade de posições negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criar o elementos html
    var barata = document.createElement('img')
    barata.src = 'imagens/Barata.png'
    barata.className = tamanhoBarataAleatorio() + ' ' + LadoBarataAleatorio() // valor gerado pela função será atribuido a classe
    barata.style.left = posicaoX + 'px'
    barata.style.top = posicaoY + 'px'
    barata.style.position = 'absolute'
    barata.id = 'barata'

    document.body.appendChild(barata)

    tamanhoBarataAleatorio()
}

function tamanhoBarataAleatorio() {
     var classe = Math.floor(Math.random() * 3)

     switch(classe) {
        case 0:
            return 'barata1'
        case 1:
            return 'barata2'
        case 2 :
            return 'barata3'
     }
}

function LadoBarataAleatorio() {
    var classe = Math.floor(Math.random() * 2)

     switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
     }
}
