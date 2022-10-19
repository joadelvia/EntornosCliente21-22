document.querySelectorAll('input')[2].addEventListener('click', mostrarInfoLocation);
document.querySelectorAll('input')[3].addEventListener('click', recargar);
document.querySelectorAll('input')[0].addEventListener('click', assign);
document.querySelectorAll('input')[1].addEventListener('click', replace);


function mostrarInfoLocation() {
    alert(`Host: ${location.host}`);
    alert(`Hostname: ${location.hostname}`);
    alert(`Hash: ${location.hash}`);
    alert(`Dirección: ${location.href}`);
    alert(`Origin: ${location.origin}`);
    alert(`Nombre de ruta: ${location.pathname}`);
    alert(`Puerto: ${location.port}`);
    alert(`Protocolo: ${location.protocol}`);
}

function recargar() {
    location.reload();
}

function assign() {
    location.assign("https://www.google.es");
}

function replace() {
    location.replace("https://www.google.es")
}