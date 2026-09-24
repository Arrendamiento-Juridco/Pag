const form = document.getElementById('formulario-contacto');
const estado = document.getElementById('estado-envio');
const btn = document.getElementById('btn-enviar');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página o dé error 405

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Lee los valores que escribió el usuario
    const datos = {
        Email: document.getElementById('email').value,
        Asunto: document.getElementById('asunto').value,
        Mensaje: document.getElementById('mensaje').value
    };

    fetch("https://formsubmit.co/ajax/juridicoa695@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        estado.textContent = "¡Mensaje enviado con éxito!";
        estado.style.color = "#00ffcc";
        estado.style.display = "block";
        form.reset(); // Limpia los campos
        btn.textContent = 'Enviar Mensaje';
        btn.disabled = false;
    })
    .catch(error => {
        estado.textContent = "Ocurrió un error al enviar el mensaje.";
        estado.style.color = "red";
        estado.style.display = "block";
        btn.textContent = 'Enviar Mensaje';
        btn.disabled = false;
    });
});
