function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTeclas.forEach(function(item){
    const instrumento = item.classList[1];
    const idAudio = `#som_${instrumento}`;
    item.onclick = function (){
        tocaSom(idAudio);
    }

    item.onkeydown = function(event){
        if(event.code == 'Space' || event.code == 'Enter'){
            item.classList.add("ativa");
        }
        
    }

    item.onkeyup = function(event){
        if(event.code == 'Space' || event.code == 'Enter'){
            item.classList.remove("ativa");
        }
    }
})
