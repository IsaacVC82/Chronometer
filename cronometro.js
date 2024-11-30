// Contenedor principal
const container = document.getElementById('container');

// Crear los números alrededor del reloj
const numbers = ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
numbers.forEach((number, index) => {
    const div = document.createElement('div');
    div.classList.add('number');
    div.innerText = number;

    const angle = (index * 30) * (Math.PI / 180); // Convertir a radianes
    const radius = 200; 
    const x = 250 + radius * Math.sin(angle); // Coordenada X
    const y = 250 - radius * Math.cos(angle); // Coordenada Y

    div.style.left = `${x}px`;
    div.style.top = `${y}px`;

    container.appendChild(div);
});

// Control del cronómetro
const manecilla = document.getElementById('manecilla');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let angle = 0; // Ángulo inicial de la manecilla
let interval = null;

// Actualización dinámica de la rotación
function updateManecilla() {
    manecilla.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
}

// Función para iniciar el cronómetro
startButton.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            angle += 6; // Incrementa 6 grados por segundo
            updateManecilla(); // Actualiza la posición
        }, 1000);
    }
});

// Función para detener el cronómetro
stopButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

// Función para reiniciar el cronómetro
resetButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    angle = 0; // Reinicia el ángulo a 0
    updateManecilla(); // Reinicia la posición
});

// Configura la posición inicial
updateManecilla();
