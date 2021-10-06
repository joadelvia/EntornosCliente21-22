let enlaces = document.querySelectorAll("a");
let numEnlaces = enlaces.length;
enlaces[0].addEventListener('click', click);
const texto = document.getElementById('texto');
texto.addEventListener('keydown',tecla);
const galeria = document.getElementById('gallery');
galeria.addEventListener('click',foto);
const enviar = document.getElementById("enviar");
enviar.addEventListener('click',enviarF);


function click(event){
    event.preventDefault();
    console.log(event);
    //let enlaces = document.querySelectorAll("a");
    //enlaces[0].click();
}

function tecla(event){
    console.log(event);
}

function foto(event){
    console.log(event.target.textContent);
}

function enviarF(event){
    event.preventDefault();
    alert("El formulario no es correcto");
}