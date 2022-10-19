document.querySelector('input[type="button"]').addEventListener('click', mostrarInfo);

function mostrarInfo () {
    alert(`Número de formularios: ${document.forms.length}`);
    alert(`Número de imágenes: ${document.images.length}`);
    alert(`Número de links: ${document.links.length}`);
    alert(`Número de anclas: ${document.anchors.length}`);
}