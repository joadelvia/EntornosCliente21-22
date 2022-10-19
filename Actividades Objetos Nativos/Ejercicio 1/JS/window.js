document.querySelector('#aumentar').addEventListener('click', aumentarVentana);
document.querySelector('#decrementar').addEventListener('click', decrementarVentana);
document.querySelector('#mover').addEventListener('click', moverVentana);

function decrementarVentana() {
    window.resizeTo(window.innerWidth / 2, window.innerHeight / 2);
}

function aumentarVentana() {
    window.resizeTo(window.innerWidth * 2, window.innerHeight * 2);
}

function moverVentana() {
    window.moveTo(0,0);
}