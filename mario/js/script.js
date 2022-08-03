const mario = document.querySelector(".mario")//mario
const piper = document.querySelector(".pipe")//cano
const clouds = document.querySelector(".clouds")
const clouds1 = document.querySelector(".clouds1")

//funcao para pular
const jump = () =>{
    mario.classList.add("jump")//adcionar classe jump
    mario.src = "img/jump.png"
    //remover classe jump depois de um tempo
    setTimeout(()=>{
        mario.classList.remove("jump")
        mario.src = "img/joao.gif"
    },500)
}

const loop = setInterval(()=>{
    const piperPosition = piper.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = + window.getComputedStyle(clouds).right.replace('px', '')
    const cloudsPosition1 = + window.getComputedStyle(clouds1).right.replace('px', '')
    
    if(piperPosition < 120 && marioPosition <= 80 && piperPosition >0){
        piper.style.animation = "none"
        piper.style.left = `${piperPosition}px`

        mario.src = "img/game-over.png"
        mario.style.marginLeft = "50px"
        mario.classList.add("game-over")
        mario.style.bottom ="-250px"

        clouds.style.animation = "none"
        clouds1.style.animation = "none"
        
        clouds.style.right = `${cloudsPosition}px`
        clouds1.style.right = `${cloudsPosition1}px`
        

        const tempo = setInterval(gameOver, 1000)

        clearInterval(loop)
        clearInterval(timer)
    }

}, 10)

m=0
s=1
const timer = setInterval(() =>{
    if(s<=9){
        s = "0" + s
    }
    
    if(s >= 59){
        s=0;
        m = m + 1
    }

    if(m <=9){
        m = "0" + m
    }
    document.querySelector(".segundo").innerHTML = s
    document.querySelector(".minuto").innerHTML =  m

    if(m <=0){
        document.querySelector(".recorde-segundos").innerHTML = s
    }
    else{
        document.querySelector(".recorde-segundos").innerHTML = s
        document.querySelector(".recorde-minutos").innerHTML =  m + " minutos e "
    }
    
    s ++
    m = +m + 0
}, 1000)

buttonRecomecar = document.querySelector("button")
buttonRecomecar.addEventListener("click", ()=>{
    location. reload();
})

function gameOver(){
    document.querySelector(".tela-game-over").style.display = "block"
        const fundo = document.querySelector(".game-board")
        const chao = document.querySelector(".chao")
        const pipe = document.querySelector(".pipe")

        fundo.classList.add("fundo-game-over")
        chao.classList.add("fundo-game-over")
        pipe.classList.add("fundo-game-over")
        clouds.classList.add("fundo-game-over-nuvem")
        clouds1.classList.add("fundo-game-over-nuvem")
}

//ativar funcao pular ao clicar em qualquer tecla
document.addEventListener("keydown", jump)

body = document.querySelector("body")
body.addEventListener("click", jump)