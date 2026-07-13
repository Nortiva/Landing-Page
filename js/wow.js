const messages = [

"> ACCESS GRANTED",

"> Bem-vindo ao núcleo da Nortiva.",

"> Inicializando módulos...",

"> Verificando integridade...",

"> Todos os sistemas operacionais.",

"> Obrigado por explorar."

];

let i = 0;

let j = 0;

const terminal = document.getElementById("typing");

function type(){

    if(i >= messages.length) return;

    if(j < messages[i].length){

        terminal.innerHTML += messages[i][j];

        j++;

        setTimeout(type,40);

    }else{

        terminal.innerHTML += "<br>";

        i++;

        j=0;

        setTimeout(type,600);

    }

}

type();

function updateClock(){

    const now=new Date();

    document.getElementById("clock").textContent=
    now.toLocaleTimeString("pt-BR");

}

setInterval(updateClock,1000);

updateClock();

const bg=document.querySelector(".background");

const images=[

"assets/bg1.jpg",
"assets/bg2.jpg",
"assets/bg3.jpg",
"assets/bg4.jpg"

];

let current=0;

setInterval(()=>{

current++;

if(current>=images.length)
current=0;

bg.style.backgroundImage=`url(${images[current]})`;

},7000);
