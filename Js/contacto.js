const form = document.getElementById('formulario-contacto');
const estado = document.getElementById('estado-envio');
const btn = document.getElementById('btn-enviar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    btn.textContent = 'Enviando...';
    btn.disabled = true;
    estado.style.display = 'none';

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
        console.log("Respuesta de FormSubmit:", data);

        if (data.success === "false" || data.message?.includes("activate")) {
            estado.textContent = "Por favor revisa 'juridicoa695@gmail.com' (incluyendo Spam) y dale clic a 'Activate Form'.";
            estado.style.color = "yellow";
        } else {
            estado.textContent = "¡Mensaje enviado con éxito!";
            estado.style.color = "#00ffcc";
            form.reset();
        }
        estado.style.display = "block";
        btn.textContent = 'Enviar Mensaje';
        btn.disabled = false;
    })
    .catch(error => {
        console.error("Error:", error);
        estado.textContent = "Ocurrió un error al enviar el mensaje.";
        estado.style.color = "red";
        estado.style.display = "block";
        btn.textContent = 'Enviar Mensaje';
        btn.disabled = false;
    });
});
