let ancho = parseInt(window.innerWidth / 2)
let alto = parseInt(window.innerHeight / 2);
console.log(window.height)
alert("Se creará una ventana de " + ancho + " x " + alto);

window.open('html/window.html', 'Ventana', `width=${ancho}, height=${alto}`);