// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Manejo del formulario de contacto
    const formulario = document.querySelector('#contactForm');
    
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue
            
            // Obtener valores
            const nombre = document.querySelector('#nombre').value;
            const email = document.querySelector('#email').value;
            
            // Validación simple
            if (nombre === "" || email === "") {
                alert("Por favor, completa todos los campos.");
            } else {
                // Mostrar mensaje de éxito manipulando el DOM
                const mensaje = document.createElement('div');
                mensaje.className = 'alert alert-success mt-3';
                mensaje.textContent = `Gracias, ${nombre}. Hemos recibido tu solicitud. Te contactaremos pronto.`;
                
                formulario.appendChild(mensaje);
                
                // Limpiar formulario
                formulario.reset();
            }
        });
    }

    // 2. Función interactiva: Cambiar color de fondo del encabezado al hacer clic
    const header = document.querySelector('header');
    header.addEventListener('mouseover', () => {
        header.style.backgroundColor = '#28a745'; // Cambia a verde al pasar el mouse
        header.style.transition = '0.5s';
    });

    header.addEventListener('mouseout', () => {
        header.style.backgroundColor = '#0d6efd'; // Regresa al azul original
    });
});