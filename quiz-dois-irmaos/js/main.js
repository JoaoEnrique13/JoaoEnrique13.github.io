perguntas = document.querySelectorAll(".pergunta");//div das perguntas
respostaUsuario = [] // valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final

//contar questoes certas e erradas
questCerto = 0;
questErrado = 0;
for(var i=0; i<perguntas.length; i++){//selecionar todas as divs
    perguntas[i].style.display = "none"//tirar todas as perguntas da tela, menos a primeira
}

document.querySelector(".status").style.display = "none"//esconder barra de status


document.querySelector(".timer").style.display = "none"//esconder timer até o usuario escolher a opcao com timer
a = 0//contador das perguntas
function proximo(){
    perguntas = document.querySelectorAll(".pergunta");
    
    // for para tirar todas as perguntas da tela
    for(var i=0; i<perguntas.length; i++){
        perguntas[i].style.display = "none"
    }

     // for para tirar todas as perguntas da tela
     for(var i=0; i<perguntas.length; i++){
        perguntas[i].style.display = "none"
    }

    perguntas[a].style.display = "block"//mostrar a proxima pergunta

    //primeira pergunta
    if(a == 0){
        resoposta = document.querySelector('input[name=nome_irmao]:checked')//valor que o usuario escolheu
        respostaUsuario[a] = document.querySelector('input[name=nome_irmao]:checked').id//valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final

        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            console.log("Certo")
            certo();
            questCerto = 1;// contar questões certas
            questErrado = 0;// contar questões erradas
        }
        else{
            errado();
            questCerto = 0;// contar questões certas
            questErrado = 1;// contar questões erradas
        }
    }

    //segunda pergunta
    else if(a == 1){
        //desativar botao ate o usuario escolher uma opcao
        for(var i=0; i<button.length; i++){
            button[i].disabled = true
         }

        document.querySelector(".porcentagem").style.width = "10%"//aumentar porcentagem da barra de status

        resoposta = document.querySelector('input[name=local]:checked')//valor que o usuario escolheu
        respostaUsuario[a] = document.querySelector('input[name=local]:checked').id//valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final
        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            certo();
            questCerto += 1;// contar questões certas
            questErrado += 0;// contar questões erradas
        }
        else{
            errado();
            questCerto += 0;// contar questões certas
            questErrado += 1;// contar questões erradas
        }

    //terceira pergunta
    }else if(a == 2){
        //desativar botao ate o usuario escolher uma opcao
        for(var i=0; i<button.length; i++){
            button[i].disabled = true
         }

        document.querySelector(".porcentagem").style.width = "20%"//aumentar porcentagem da barra de status


        resoposta = document.querySelector('input[name=mae]:checked')//valor que o usuario escolheu
        respostaUsuario[a] = document.querySelector('input[name=mae]:checked').id//valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final
        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            certo();
            questCerto += 1;// contar questões certas
            questErrado += 0;// contar questões erradas
        }
        else{
            errado();
            questCerto += 0;// contar questões certas
            questErrado += 1;// contar questões erradas
        }
    }else if(a == 3){
        //desativar botao ate o usuario escolher uma opcao
        for(var i=0; i<button.length; i++){
            button[i].disabled = true
         }

        document.querySelector(".porcentagem").style.width = "30%"//aumentar porcentagem da barra de status


        resoposta = document.querySelector('input[name=genero]:checked')//valor que o usuario escolheu
        respostaUsuario[a] = document.querySelector('input[name=genero]:checked').id//valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final
        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            certo();
            questCerto += 1;// contar questões certas
            questErrado += 0;// contar questões erradas
        }
        else{
            errado();
            questCerto += 0;// contar questões certas
            questErrado += 1;// contar questões erradas
        }
    }else if(a == 4){
        //desativar botao ate o usuario escolher uma opcao
        for(var i=0; i<button.length; i++){
            button[i].disabled = true
         }

        document.querySelector(".porcentagem").style.width = "40%"//aumentar porcentagem da barra de status

        resoposta = document.querySelector('input[name=titulo]:checked')//valor que o usuario escolheu
        respostaUsuario[a] = document.querySelector('input[name=titulo]:checked').id//valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final
        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            certo();
            questCerto += 1;// contar questões certas
            questErrado += 0;// contar questões erradas
        }
        else{
            errado();
            questCerto += 0;// contar questões certas
            questErrado += 1;// contar questões erradas
        }
    }else if(a == 5){
        //desativar botao ate o usuario escolher uma opcao
        for(var i=0; i<button.length; i++){
            button[i].disabled = true
         }

        document.querySelector(".porcentagem").style.width = "50%"//aumentar porcentagem da barra de status

        resoposta = document.querySelector('input[name=premio]:checked')//valor que o usuario escolheu
        respostaUsuario[a] = document.querySelector('input[name=premio]:checked').id//valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final
        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            certo();
            questCerto += 1;// contar questões certas
            questErrado += 0;// contar questões erradas
        }
        else{
            errado();
            questCerto += 0;// contar questões certas
            questErrado += 1;// contar questões erradas
        }
    }else if(a == 6){
        //desativar botao ate o usuario escolher uma opcao
        for(var i=0; i<button.length; i++){
            button[i].disabled = true
         }

        document.querySelector(".porcentagem").style.width = "60%"//aumentar porcentagem da barra de status

        resoposta = document.querySelector('input[name=autor]:checked')//valor que o usuario escolheu
        respostaUsuario[a] = document.querySelector('input[name=autor]:checked').id//valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final
        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            certo();
            questCerto += 1;// contar questões certas
            questErrado += 0;// contar questões erradas
        }
        else{
            errado();
            questCerto += 0;// contar questões certas
            questErrado += 1;// contar questões erradas
        }
    }else if(a == 7){
        //desativar botao ate o usuario escolher uma opcao
        for(var i=0; i<button.length; i++){
            button[i].disabled = true
         }

        document.querySelector(".porcentagem").style.width = "90%"//aumentar porcentagem da barra de status

        resoposta = document.querySelector('input[name=tema]:checked')//valor que o usuario escolheu
        respostaUsuario[a] = document.querySelector('input[name=tema]:checked').id//valor que o usuario escolheu pra comparar com a resposta certa e mostrar se esta certo ou errada no final
        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            certo();
            questCerto += 1;// contar questões certas
            questErrado += 0;// contar questões erradas
            var tempo = setTimeout(final, 1000);//esperar um tempo e chamar a função proximo novamente
        }
        else{
            errado();
            questCerto += 0;// contar questões certas
            questErrado += 1;// contar questões erradas
            var tempo = setTimeout(final, 1000);//esperar um tempo e chamar a função proximo novamente
        }
    }

    //contador para a proxima pergunta
    a += 1
    
}

//mudar cor do fundo se a resposta estiver certa
function certo(){
    perguntas = document.querySelectorAll(".pergunta");//div da pergunta
    perguntas[a].style.background = "rgb(0, 100, 0, 0.315)";//mudar cor
    const tempo = setTimeout(proximo, 1000)//esperar um tempo e chamar a função proximo novamente
}

//mudar cor do fundo se a resposta estiver errada
function errado(){
    perguntas = document.querySelectorAll(".pergunta");//div da pergunta
    perguntas[a].style.background = "rgb(255, 0, 0, 0.315)";//mudar cor
    const tempo = setTimeout(proximo, 1000);//esperar um tempo e chamar a função proximo novamente
}

function fim(){
    document.querySelector(".porcentagem").style.width = "100%"//aumentar porcentagem da barra de status

        resoposta = document.querySelector('input[name=tema]:checked')//valor que o usuario escolheu
        if(resoposta.classList.contains("correta")){//Ccompara o id da resposta do usuario com a resposta certa
            certo();
            var tempo = setTimeout(final, 1000);//esperar um tempo e chamar a função proximo novamente
        }
        else{
            errado();
            var tempo = setTimeout(final, 1000);//esperar um tempo e chamar a função proximo novamente
        }
}

function final(){
    document.querySelector(".porcentagem").style.width = "100%"//aumentar porcentagem da barra de status
    perguntas = document.querySelectorAll(".pergunta")//divs perguntas

    console.log(respostaUsuario)

    total = questCerto + questErrado

    document.querySelector(".final").style.display = "block"
    if(questCerto > questErrado){
        document.querySelector(".parabens h1").innerHTML = "Parabéns! :)";
        document.querySelector(".parabens h2").innerHTML = "Você Acertou " + questCerto + " questões de " + total + ".<br>";
    }
    else{
        document.querySelector(".parabens h1").innerHTML = "Que Pena ;-;";
        document.querySelector(".parabens h2").innerHTML = "Você Acertou " + questCerto + " questões de " + total + ".<br> Continue Treinando";
    }

    buttons = document.querySelectorAll(".btn-proximo")
    for(var i=0; i<buttons.length; i++){
        buttons[i].style.display = "none"
    }

    input = document.querySelectorAll('input[type=radio')
    for(var i=0; i<input.length; i++){
        input[i].disabled = true
    }

    corretas = document.querySelectorAll(".correta")
    for(var i=0; i<perguntas.length; i++){
        perguntas[i].style.display = "block"
        perguntas[i].style.marginTop = "20px"
        corretas[i].style.background = "green"
    }

    label = document.querySelectorAll("input[type=radio]:checked + label")
    respostas = ['espaco', '1915', 'hidrogenio', 'statusTermico', 'agitacaoAtomos', '9.807', 'estrelaMorta', 'acaoReacao', 'razaoTrabalhoTempo', 'candela']
    for(i=0; i<label.length; i++){
        if(respostas[i] == respostaUsuario[i]){
            label[i].style.transform = "scale(1.0)"
            label[i].style.background = "green"
        }else{
            label[i].style.transform = "scale(1.0)"
            label[i].style.background = "red"
        }
    }
    //document.querySelector(".timer").style.display = "none"// tirar timer
    setInterval(timer, 1000000)//chamar funcao a cada segundo
}


function recomecar(){
    location. reload();
}

var button = document.querySelectorAll(".btn-proximo")//pegar valor de todos os botoes

// desativar todos os botoes até o usuario escolher uma opcao
for(var i=0; i<button.length; i++){
    button[i].disabled = true
 }

//ativar o botao sem o usuario escolher uma opcao
var input = document.querySelectorAll('input')//valor dos inputs (opcoes de resposta)
for(i=0; i<input.length; i++){
    input[i].addEventListener("click", function () {//chamar funcao ao clicar em uma opcao
        //pegar o valor dos botoes
        for(i=0; i<button.length; i++){
            button[i].disabled = false//ativar botoes
        }
 });
}

var btnComecar = document.querySelector(".btn-comecar")//botao para comecar

//aparecer perguntas
btnComecar.addEventListener("click", function () {//chamar funcao ao clicar em uma opcao
    var header = document.querySelector("header")//pegar valor do header
    header.style.display = "none"//tirar header da tela

    var main = document.querySelector("main")//pegar valor do main
    main.style.minHeight = "100vh"//deixar main com a altura da tela

    document.querySelector(".status").style.display = "block"//mostra barra de status

    perguntas[0].style.display = "block"//mostra primeira pergunta
});





var btnComecarTempo = document.querySelector(".btn-comecar-tempo")//pegar valor do botao com tempo

btnComecarTempo.addEventListener("click", function(){//adicionar a funcao ao clicar no botao com o tempo
    var header = document.querySelector("header")//pegar valor do header
    header.style.display = "none"//tirar header da tela

    var main = document.querySelector("main")//pegar valor do main
    main.style.minHeight = "100vh"//deixar main com a altura da tela

    document.querySelector(".status").style.display = "block"//mostra barra de status

    perguntas[0].style.display = "block"//mostra primeira pergunta

    document.querySelector(".timer").style.display = "block"//mostrar timer

    s= 0; //contador para os segundos
    m=5 //contador para os minutos, comecar com 5 e ir até o 0 

    function timer(){
        //deixar com o padrao 00:00 se o numero for menor que 10 e nao ficar 0:0
        if(m<=9){//minutos
            document.querySelector(".minutos").innerHTML = "0" + m
        }else{
            document.querySelector(".minutos").innerHTML = m
        }

        if(s<=9){//segundos
            document.querySelector(".segundos").innerHTML = "0" + s
        }else{
            document.querySelector(".segundos").innerHTML = s
        }

        if(s==0){//quando o segundo for 0
            s=59 //voltar para 59
            m-=1 //diminuir um minuto
        }else{//se o segundo for maior que 0
            s-=1 //diminuir um segundo
        }

        if(m ==0 && s==0){
            tempoEsgotado()
        }
    }
    setInterval(timer, 1000)//chamar funcao a cada segundo
})

function tempoEsgotado(){
    document.querySelector(".status").style.display = "none"//tirar barra de status

    var header = document.querySelector("header")//pegar valor do header
    header.style.display = "none"//tirar header da tela

    var main = document.querySelector("main")//pegar valor do main
    main.style.minHeight = "100vh"//deixar main com a altura da tela

    document.querySelector(".acertos").innerHTML = questCerto//mostrar acertos

    document.querySelector(".tempo-esgotado").style.display = "block" //mostrar tempo esgotado

    for(var i=0; i<perguntas.length; i++){//selecionar todas as divs
        perguntas[i].style.display = "none"//tirar todas as perguntas da tela

        document.querySelector(".timer").style.display = "none"// tirar timer
    }
}