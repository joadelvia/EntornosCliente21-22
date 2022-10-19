
// Almacenamos el body para tratarlo posteriormente

    const BODY = document.querySelector('body');

// Creamos un array con los nombres de los meses 
// ordenados para después obtener sus nombres según su posición    

    const MONTHS = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

// Almacenamos los días en orden empezando por el domingo

    const DAYS = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ];

// Almacenamos en variables los elementos que vamos a usar

    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    let fecha = document.querySelector('#fecha');

    let diasDeRetraso = document.querySelector('#diasDeRetraso');
    let pagoRetrasadoResultado = document.querySelector('#pagoRetrasadoResultado');
    let fechaResultado = document.querySelector('#fechaResultado');

    let cronometro = document.querySelector('#cronometro');
    let horaActual = document.querySelector('#horaActual');

    let horaAlarma = document.querySelector('#horaAlarma');
    let alarmaSwitch = document.querySelector('#alarmaSwitch');


// Añadimos los eventos a los correspondientes botones

    document.querySelector('#campoDataTime').addEventListener('change', actualizarHora);                // Mostramos la fecha completa cada vez que se actualize
    document.querySelector('#botonCalendario').addEventListener('click', mostrarCalendario);            // Muestra el calendario al hacer click
    document.querySelector('#pagoRetrasado').addEventListener('click', calcularFechapago);              // Calculamos la fecha de pago al hacer click
    alarmaSwitch.addEventListener('click', crearAlarma);                                                // Crea una alarma al hacer click
// Funcillo sencilla para añadirle un 0 cuando los minutos sean menos de  10
function minutos(minuts){
    if (minuts<10){
        minuts = '0'+minuts;
    }
    return minuts;
}
// Esta función nos mostrará la fecha completa del día seleccionado

    function actualizarHora() {
        let nuevaFecha = new Date(document.querySelector('#campoDataTime').value);                                                                                                                                                              // Creamos una nueva fecha con el valor introducido
        fechaResultado.innerText = `Hoy es ${DAYS[nuevaFecha.getDay()]}, ${nuevaFecha.getDate()} de ${MONTHS[nuevaFecha.getMonth()]} de ${nuevaFecha.getFullYear()} y son las ${nuevaFecha.getHours()}:${minutos(nuevaFecha.getMinutes())} horas.`;      // Mostramos la fecha obteniendo cada valor
    }

// Esta función nos mostrará el calendario completo de un mes y año concreto

    function mostrarCalendario() {
        let monthIndex = MONTHS.indexOf(month.value.charAt(0).toUpperCase() + month.value.slice(1).trim().toLowerCase());   // Obtenemos la posición del mes quitándole al valor del campo los espacios, conviertiendo la primera en mayúsculas y el resto en minúsculas

    // Detectamos si el mes es incorrecto y si es correcto obtenemos los datos

        if (monthIndex == -1) {                                                         
            alert('Mes incorrecto');                                            // Indicamos que es incorrecto
        }
        else {
            let dias = new Date(year.value, monthIndex, 0).getDate();           // Obtenemos el número de días que tiene el mes pasándole por parámetros el día 0
            let nuevaFecha = new Date(year.value, monthIndex, 1);               // Creamos una nueva fecha comenzando por el primer día
            let lista = document.createElement('ul');                           // Creamos una lista desordenada

            for (let i = 1; i <= dias + 1; i++) {                                                           // Recorremos los días que tenga el mes para ir creando un elemento por cada uno
                nuevaFecha.setDate(i);                                                                      // Establecemos dicho día
                let newLi = document.createElement('li');                                                   // Creamos un li por cada día
                newLi.appendChild(document.createTextNode(`${i} (${DAYS[nuevaFecha.getDay()]})`));          // Creamos el nodo de texto y lo añadimos al nuevo li
                lista.appendChild(newLi);                                                                   // Añadimos a la lista el nuevo li
            }
            document.querySelector('#box-2').appendChild(lista);                                            // Añadimos la lista a la caja de la función
        }
    }

// Esta función calcula la fecha de pago dependiendo de la fecha y días a retrasar que se inserten

    function calcularFechapago () {
        if (diasDeRetraso.value > 0) {                                                                                                                                                      // Comprobamos si se ha introducido un día positivo
            let nuevaFecha = new Date(fecha.value);                                                                                                                                         // Creamos una fecha con el valor introducido
            nuevaFecha.setDate(nuevaFecha.getDate() + parseInt(diasDeRetraso.value));                                                                                                       // Modificamos la fecha, para ello añadimos los días que ha introducido el usuario
            pagoRetrasadoResultado.innerHTML = `El pago es el ${DAYS[nuevaFecha.getDay()]}, ${nuevaFecha.getDate()} de ${MONTHS[nuevaFecha.getMonth()]} de ${nuevaFecha.getFullYear()}`;    // Mostramos el resultado
        }
        else {
            pagoRetrasadoResultado.innerHTML = 'Inserte un número de días a retrasar correcto';                                                                                             // Si se ha introducido un valor no válido lo indicamos
        }
    }

// Intervalo reloj cronómetro

    setInterval(() => {
        // Creamos una fecha con el momento actual

            let nuevaFecha = new Date();                                                                        

        // Actualizamos los datos cada 1s

            cronometro.innerText = `Hoy es ${((nuevaFecha.getDate() < 10) ? '0':'') + nuevaFecha.getDate()}-${((nuevaFecha.getMonth() < 10) ? '0': '') + nuevaFecha.getMonth()}-${nuevaFecha.getFullYear()} y son las ${((nuevaFecha.getHours() < 10) ? '0':'') + nuevaFecha.getHours()}:${((nuevaFecha.getMinutes() < 10) ? '0':'') + nuevaFecha.getMinutes()}:${((nuevaFecha.getSeconds() < 10)? '0':'') + nuevaFecha.getSeconds()} horas.`;     
    }, 1000)

// Intervalo reloj Alarma

    setInterval(() => {
    // Creamos una fecha con el momento actual

        let nuevaFecha = new Date();

    // Actualizamos los datos cada 1s

        horaActual.innerText = `${((nuevaFecha.getHours() < 10) ? '0': '') + nuevaFecha.getHours()}:${((nuevaFecha.getMinutes() < 10) ? '0':'') + nuevaFecha.getMinutes()}:${((nuevaFecha.getSeconds() < 10) ? '0': '') + nuevaFecha.getSeconds()}`;
    }, 1000)



    // Obtenemos el audio con el sonido de la alarma

        const music = new Audio('./assets/alarma.mp3');

    // Indicamos que se reproduzca en bucle

        music.loop = true;

    // Añadimos un evento de cambio al input datatime para que al cambiar esté disponible el botón

        horaAlarma.addEventListener('change', () => {
            alarmaSwitch.disabled = false;
        });

// Función crearAlarma: Activa la alarma al introducir una fecha en el campo

    function crearAlarma() {
        let horaIntroducida = new Date(document.getElementById('horaAlarma').value);            // Crea una nueva fecha con el valor
        alarmaSwitch.disabled = true;                                                           // Deshabilitamos el botón de activar alarma
        establecerAlarma(horaIntroducida.getTime() - new Date().getTime());                     // Establecemos la alarma, para ello, el tiempo de espera será la diferencia de los milisegundos de la hora a sonar menos la hora actual
    }

// Función establecer alarma : Esta función recibe X milisegundos por parámetros y hará sonar la alarma al pasar esos segundos

    function establecerAlarma(milisegundos) {
        setTimeout(() => {
            sonarAlarma();                                                                      // Hacemos sonar la alarma
        }, milisegundos)
    }

// Función sonar alarma

    function sonarAlarma() {
        music.currentTime = 0;                                                                  // Establecemos la reproducción del sonido al segundo 0
        music.play();                                                                           // Reproducimos el sonido

        setTimeout(() => {                                                                      // Reproducimos el sonido 10 milisegundos después
            let respuesta = prompt('La alarma ha sonado (Posponer o Apagar)');                  // Preguntamos al usuario si desea posponer o apagar

            music.pause();                                                                      // Pausamos el sonido
            if (respuesta.trim().toUpperCase() == 'POSPONER') {                                 // Si la respuesta es posponer ...
                establecerAlarma(120000);                                                           // Establecemos una alarma para dentro de 2 minutos (120000 milisegundos)
            }
            else {
                alarmaSwitch.disabled = false;                                                  // Habilitamos el botón 
            }
        }, 5000);
    }