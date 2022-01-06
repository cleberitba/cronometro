const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

document.addEventListener('click',function(e){
    const elemento= e.target;

    if(elemento.classList.contains('zerar')){
       clearInterval(timer);
       relogio.classList.remove('pausado');
       relogio.innerHTML='00:00:00';
       segundos=0;
    }

    if(elemento.classList.contains('pausar')){
    relogio.classList.add('pausado');
    clearInterval(timer)
    }

    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
});

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}



