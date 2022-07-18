//Atribuit os valore das letras em morse
var morse = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    ' ': ' '
}

//funcao que converte de texto para morse
function converter(texto) {
    var texto = document.querySelector(".texto").value.toLowerCase();//pegar texto do usuario
    var texto_morse = '';//resultado em morse
    
    for (var i = 0; i < texto.length; i++) {//pegar cada letra até o tamanho da frase
        texto_morse += morse[texto[i]] + ' ';//formar texto em morse
        
        document.querySelector(".result").innerHTML = texto_morse//mudar campo do resultado
    }
    return texto_morse;
    
}

//funcao que converte de morse para texto
function converterInverso(texto_morse) {
    var texto = '';//resultado em texto
    var texto_morse = document.querySelector(".result").value;//pegar texto em morse do usuario
    texto_morse = texto_morse.split(' ')//remover espaco
    for (var i = 0; i < texto_morse.length; i++) {//pegar cada letra até o tamanho da frase
        for (var letra in morse) {
            if (morse [letra] == texto_morse[i]) {//se a letra em morse for igual ao texto fazer...
                texto += letra;//atribuir a proxima letra a frase

                document.querySelector(".texto").innerHTML = texto//mudar campo do resultadp
            }
        }
    }
    return texto;
}

function limpar(){
    //esvazia os campos
    document.querySelector(".result").innerHTML = ""
    document.querySelector(".texto").innerHTML = ""
    document.querySelector(".texto").value = ""
}

function limparInverso(){
    //esvazia os campos
    document.querySelector(".result").innerHTML = ""
    document.querySelector(".texto").innerHTML = ""
    document.querySelector(".result").value = ""
}

function morseTexto(){
    //mudar a conversao de morse para texto
    document.querySelector(".converter").style.display = "none"//tirar botao conversao de texto para morse
    document.querySelector(".converter-inverso").style.display = "inline"//colocar botao conversao de morse para texto

    document.querySelector(".limpar").style.display = "none"//tirar botao limpar de texto para morse
    document.querySelector(".limpar-inverso").style.display = "inline"//coloca botao limpar de morse para texto

    /*
        alterar classes do campo para a conversao
        tira a classe result e coloca no texto, tira a classe texto e coloca no result
    */
    document.querySelector("#result").classList.remove('result');
    document.querySelector("#result").classList.add('texto');
    document.querySelector("#texto").classList.remove('texto');
    document.querySelector("#texto").classList.add('result');
    document.querySelector(".text-morse").classList.remove('active');
    document.querySelector(".morse-texto").classList.add('active');

    //mudar tamanho do texto dos campos
    document.querySelector("#texto").style.fontSize = "30px";
    document.querySelector("#result").style.fontSize = "20px";

    //mudar placeholder dos campo
    document.querySelector("#texto").placeholder = ".-. . ... ..- .-.. - .- -.. ---"
    document.querySelector("#result").placeholder = "Resultado"

    //chama funcao pra limpar os campo
    limparInverso()
}

function textMorse(){
    //mudar a conversao de morse para texto
    document.querySelector(".converter").style.display = "inline"//coloca botao conversao de morse para texto
    document.querySelector(".converter-inverso").style.display = "none"//tira botao conversao de texto para morse

    document.querySelector(".limpar").style.display = "inline"//coloca botao limpar de morse para texto
    document.querySelector(".limpar-inverso").style.display = "none"//tirar botao limpar de texto para morse

    /*
        alterar classes do campo para a conversao
        tira a classe result e coloca no texto, tira a classe texto e coloca no result
    */
    document.querySelector("#result").classList.remove('texto');
    document.querySelector("#result").classList.add('result');
    document.querySelector("#texto").classList.remove('result');
    document.querySelector("#texto").classList.add('texto');
    document.querySelector(".text-morse").classList.add('active');
    document.querySelector(".morse-texto").classList.remove('active');

    //mudar tamanho do texto dos campos
    document.querySelector("#texto").style.fontSize = "20px";
    document.querySelector("#result").style.fontSize = "30px";

    //mudar placeholder dos campo
    document.querySelector("#texto").placeholder = "Digite um Texto"
    document.querySelector("#result").placeholder = ".-. . ... ..- .-.. - .- -.. ---"

    //chama funcao pra limpar os campo
    limpar()
}

function tocar(){
    var texto = document.querySelector(".texto").value.toLowerCase();

    var texto_morse = texto_morse.split(' ');
    for (var i = 0; i < texto_morse.length; i++) {
        for (var letra in morse) {
            if (morse [letra] == texto_morse[i]) {
                tabela_in.src = "/soundwork/number/6.mp3";
                tabela_in.load()
                tabela_in.play();
            }
        }
    }
    return texto;
}

//funcao pra copiar resultado
function copiar(){
    var textArea = document.getElementById('result');//pegar resultado
    navigator.clipboard.writeText(textArea.value);//copiar resultado

    document.querySelector(".div-copiar").classList.add('animacao')//animacao que aparece copiado
}

//funcao para tirar o campo de ajuda quando clica no botao copiar
function sumirCopiar(){
    document.querySelector(".div-copiar").classList.remove('animacao')
}
setInterval(sumirCopiar, 1500)


//funcoes para tocar o morses
function playA(){
    playMorse = document.querySelector("#a")
    setTimeout(() => {  playMorse.play();  }, 5000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 5000);
}
function playB(){
    playMorse = document.querySelector("#b")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playC(){
    playMorse = document.querySelector("#c")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playD(){
    playMorse = document.querySelector("#d")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playE(){
    playMorse = document.querySelector("#e")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playF(){
    playMorse = document.querySelector("#f")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playG(){
    playMorse = document.querySelector("#g")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playH(){
    playMorse = document.querySelector("#h")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playI(){
    playMorse = document.querySelector("#i")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playJ(){
    playMorse = document.querySelector("#j")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playK(){
    playMorse = document.querySelector("#k")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playL(){
    playMorse = document.querySelector("#l")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playM(){
    playMorse = document.querySelector("#m")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playN(){
    playMorse = document.querySelector("#n")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playO(){
    playMorse = document.querySelector("#o")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playP(){
    playMorse = document.querySelector("#p")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playQ(){
    playMorse = document.querySelector("#q")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playR(){
    playMorse = document.querySelector("#r")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playS(){
    playMorse = document.querySelector("#s")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playT(){
    playMorse = document.querySelector("#t")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playU(){
    playMorse = document.querySelector("#u")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playV(){
    playMorse = document.querySelector("#v")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playW(){
    playMorse = document.querySelector("#w")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playX(){
    playMorse = document.querySelector("#x")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playY(){
    playMorse = document.querySelector("#y")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function playZ(){
    playMorse = document.querySelector("#z")
    setTimeout(() => {  playMorse.play() }, 1000);
    setTimeout(() => {  playMorse.currentTime = 0  }, 2000);
}
function play0(){

}
function play1(){

}
function play2(){

}
function play3(){

}
function play4(){

}
function play5(){

}
function play6(){

}
function play7(){

}
function play8(){

}
function play9(){

}

function tocarMorse(){
    var str = document.querySelector(".texto").value;
    var arr = str.toLowerCase().split('')

    for(i=0; i<arr.length; i++){
        if(arr[i] == "a"){
            playA();
        }else 
        if(arr[i] == "b"){
            playB();
        }else 
        if(arr[i] == "c"){
            playC();
        }else 
        if(arr[i] == "d"){
            playD();
        }else 
        if(arr[i] == "e"){
            playE();
        }else 
        if(arr[i] == "f"){
            playF();
        }else 
        if(arr[i] == "g"){
            playG();
        }else 
        if(arr[i] == "h"){
            playH();
        }else 
        if(arr[i] == "i"){
            playI();
        }else 
        if(arr[i] == "j"){
            playJ();
        }else 
        if(arr[i] == "k"){
            playK();
        }else 
        if(arr[i] == "l"){
            playL();
        }else 
        if(arr[i] == "m"){
            playM();
        }else 
        if(arr[i] == "n"){
            playN();
        }else 
        if(arr[i] == "o"){
            playO();
        }else 
        if(arr[i] == "p"){
            playP();
        }else 
        if(arr[i] == "q"){
            playQ();
        }else 
        if(arr[i] == "r"){
            playR();
        }else 
        if(arr[i] == "s"){
            playS();
        }else 
        if(arr[i] == "t"){
            playT();
        }else 
        if(arr[i] == "u"){
            playU();
        }else 
        if(arr[i] == "v"){
            playV();
        }else 
        if(arr[i] == "w"){
            playW();
        }else 
        if(arr[i] == "x"){
            playX();
        }else 
        if(arr[i] == "y"){
            playY();
        }else 
        if(arr[i] == "z"){
            playZ();
        }
    }
}