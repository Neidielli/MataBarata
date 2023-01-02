 
var altura = 0
var largura = 0 

function ajustaPalco() {     
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaPalco()

function posicaoRandom() {
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // ajusta a probabilidade de posições negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criar o elementos html
    var barata = document.createElement('img')
    barata.src = 'imagens/Barata.png'
    barata.className = 'barata1'
    barata.style.left = posicaoX + 'px'
    barata.style.top = posicaoY + 'px'
    barata.style.position = 'absolute'

    document.body.appendChild(barata)
}

