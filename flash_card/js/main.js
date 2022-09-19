

function virarCard(){
    var cardEscolhido = this.id
    var card = document.querySelectorAll(".card")
    var inputCard = document.querySelectorAll(".input-card")
    var inpuValorFrente = document.querySelectorAll(".input-frente")
    var inpuValorFundo = document.querySelectorAll(".input-fundo")

    for(i=0; i<card.length; i++){
        if(cardEscolhido == i){
            if(card[i].classList == "card"){
                card[i].classList.add("card-fundo")
                inputCard[i].classList.remove("fundo")
                inputCard[i].classList.add("frente")
                inputCard[i].value = inpuValorFrente[i].value
            }else{
                card[i].classList.remove("card-fundo")
                inputCard[i].classList.remove("frente")
                inputCard[i].classList.add("fundo")
                inputCard[i].value = inpuValorFundo[i].value
            }
        }
    }
}

var card = document.querySelectorAll(".card")
for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', virarCard)
}


function pegarPergunta(){
    // var inputFrente = document.querySelector(".input-frente").value
    // var inputFundo = document.querySelector(".input-fundo").value

    // var inputCard = document.querySelectorAll(".input-card")
    

    //  if(inputCard[0].classList = "input-card frente"){
    
    //      inputCard[0].value= inputFrente
    //  }else{
    //      inputCard[0].value= inputFundo
    //  }

    var inputFrente = document.querySelectorAll(".input-frente")
    var inputFundo = document.querySelectorAll(".input-fundo")
    var card = document.querySelectorAll(".card")
    var inputCard = document.querySelectorAll(".input-card")

    for(i=0; i<=card.length; i++){
        if(card[i].id == inputFrente[i].id){
            if(inputCard[i].classList = "input-card frente"){
                inputCard[i].value= inputFrente[i].value
            }else{
                inputCard[i].value= inputFundo[i].value
            }
        }
    }
}