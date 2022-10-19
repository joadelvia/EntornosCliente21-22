document.querySelectorAll('input')[0].addEventListener('click', atras);
document.querySelectorAll('input')[1].addEventListener('click', adelante);
document.querySelectorAll('input')[2].addEventListener('click', irA);

function adelante() {
    history.forward();
}

function atras() {
    history.back();
}

function irA() {
    history.go(parseInt(prompt('Inserte un número para navegar entre páginas')));
}