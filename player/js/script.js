

     

//!Faroste Cabloco
function playFaroeste() {
    //declarar variaveis e pegar valor da musica
    faroeste = document.getElementById("faroeste");
    sugar = document.getElementById("sugar");
    believer = document.getElementById("believer");
    play = document.querySelector('.play');
    pause = document.querySelector('.pause');

    //mudar imagem do icone de tocar e tocar musica
    play.style.display = 'none';
    pause.style.display = 'block';
    faroeste.play();

    //pausar musica anterior
    believer.pause();
    sugar.pause();
}

function pauseFaroeste() {
    //mudar imagem do icone de tocar e parar musica
    play.style.display = 'block';
    pause.style.display = 'none';
    faroeste.pause();
}


//!Sugar
function playSugar() {
    //pegar valor dos botoes de tocar
    play = document.querySelector(".play2");
    pause = document.querySelector('.pause2');

    //mudar imagem do icone de tocar e tocar musica
    play.style.display = 'none';
    pause.style.display = 'block';
    sugar.play();

    //pausar musica anterior
    faroeste.pause();
    believer.pause();
}
function pauseSugar() { 
    //mudar imagem do icone de tocar e parar musica
    play.style.display = 'block';
    pause.style.display = 'none';
    sugar.pause();
}


//!Believer
function playBeliever() {
    //pegar valor dos botoes de tocar
    play = document.querySelector(".play3");
    pause = document.querySelector('.pause3');

    //mudar imagem do icone de tocar e tocar musica
    play.style.display = 'none';
    pause.style.display = 'block';
    believer.play();

    //pausar musica anterior
    sugar.pause();
    faroeste.pause();
}
function pauseBeliever() { 
    //mudar imagem do icone de tocar e parar musica
    play.style.display = 'block';
    pause.style.display = 'none';
    believer.pause();
}