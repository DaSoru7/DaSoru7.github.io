const $days = document.getElementById('dias');
$hours = document.getElementById('horas');
$minutes = document.getElementById('minutos');
$seconds = document.getElementById('segundos');
$finalmessage = document.querySelector('mensajeFinal');

const countdownDate = new Date('Jun 07 2025 16:00:00').getTime();

let interval = setInterval(function(){
    const now =new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance/(1000* 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000*60*60) /(1000*60));
    let seconds = Math.floor(distance % (1000*60) /(1000));

    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    if(distance < 0){
        clearInterval(interval);
        $finalmessage.style.transform = 'traslateY(0)';
    }
}, 1000)

const params = new URLSearchParams(window.location.search);

// Número de mesa
const mesa = params.get('mesa');
document.getElementById('numeroMesa').textContent = mesa || "No asignada";

// Cantidad de personas
const cantPersonas = params.get('long');
document.getElementById('cantPersonas').textContent = cantPersonas || "No asignado";
