let fecha1 = document.getElementById('fecha1');
let mes2 = document.querySelector('#mes2');
let fecha3 = document.querySelector('#fecha3');
let ejercicio4 = document.querySelector('#ejercicio4');
let horaActual = document.querySelector('#hora');
let now = new Date();
function minutos(minuts){
    if (minuts>10){
        minuts = '0'+minuts;
    }
    return minuts;
}
horaActual.textContent = `${now.getHours()}:${minutos(now.getMinutes())}`
let diasSemana = [
    'domingo','lunes','martes','miércoles','jueves','viernes','sábado'
];
let meses = [
    'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre',
    'octubre','nomviembre','diciembre'
];

fecha1.addEventListener('change', (e)=>{
    console.log(e.target);
    let date = new Date(e.target.value);
    let parrafo1 = document.getElementById('muestraFecha1');
    let minutes = date.getMinutes();
    minutes = minutos(minutes);
    let formatedDate = `Hoy es ${diasSemana[date.getDay()]}, ${date.getDay()} de ${meses[date.getMonth()]} de ${date.getFullYear()} 
    y son las ${date.getHours()}:${minutes} horas.`
    parrafo1.textContent = formatedDate;

});

mes2.addEventListener('change', (e)=>{
    let fecha2 = new Date(e.target.value);
    let mes2 = fecha2.getMonth();
    let calendario = document.getElementById('calendario');
    calendario.textContent = "Hola";
    //calendario.textContent = `${meses[fecha2.getMonth()]} de ${fecha2.getFullYear()}`
    while(fecha2.getMonth()==mes2){
        calendario.textContent += `${fecha2.getDate()}`

        fecha2.setDate(fecha2.getDate()+1);
    }
});