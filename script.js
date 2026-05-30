fetch('datos.json')
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('cuerpo-tabla');
        data.forEach(p => {
            tbody.innerHTML += `<tr><td>${p.nombre}</td><td>${p.tickets}</td><td>${p.numeros.join(', ')}</td></tr>`;
        });
    });

function sortear() {
    // Aquí deberías definir el número máximo del sorteo
    let max = 800; 
    let ganador = Math.floor(Math.random() * max) + 1;
    document.getElementById('resultado').innerHTML = `<h3>¡El ganador es el número ${ganador}!</h3>`;
}