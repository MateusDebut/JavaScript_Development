const QUANTIDADE_CLASSES_MOSQUITO = 3

var altura = window.innerHeight
var largura = window.innerWidth
var ordemCoracao = 3
var tempoRestante = 10

var cronometro = setInterval(function(){
    tempoRestante--
    if(tempoRestante >= 0){
        document.getElementById('cronometro').innerHTML = tempoRestante
    }else{
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"
    }
}, 1000)



function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
}

function geraMosquitoPosicaoAleatoria(){
    if(document.getElementById('mosquito')){
        if(ordemCoracao <= 1){
            window.location.href = "fim_de_jogo.html"
        }
        document.getElementById('mosquito').remove()
        document.getElementById('coracao' + ordemCoracao).src = 'imagens/coracao_vazio.png'
        ordemCoracao--
    }

    var coordenadaX = Math.floor(Math.random() * largura - 100)
    var coordenadaY = Math.floor(Math.random() * altura - 100)

    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosquito.png"
    mosquito.classList.add(sorteiaTamanhoMosquito())
    mosquito.classList.add(sorteiaLadoMosquito())
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.style.position = "absolute"
    mosquito.style.top = (coordenadaY < 0) ? 0 + "px" : coordenadaY + "px"
    mosquito.style.left = (coordenadaX < 0) ? 0 + "px" : coordenadaX+ "px"
    mosquito.onclick = function(){
        const music = new Audio('./audio/slap.mp3');
        music.play();
        music.loop =false;
        music.playbackRate = 2;
        this.remove()   
    }
    
}

function sorteiaTamanhoMosquito(){
    var classe = Math.floor(Math.random() * QUANTIDADE_CLASSES_MOSQUITO)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }
}

function sorteiaLadoMosquito(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'esquerda'
        case 1:
            return 'direita'
    }
}