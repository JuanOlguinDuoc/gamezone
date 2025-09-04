
const backgroundImages = [
    '../images/fondo.png',
    '../images/fondo2.png',
    '../images/fondo3.png',
    '../images/fondo4.png'
];

let currentImageIndex = 0;
const body = document.body;

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    
    body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
}

setInterval(changeBackground, 3000);


// Función para alternar la visibilidad de los formularios de login y registro.
function toggleForm(form) {
    const registerDiv = document.getElementById("register");
    const loginDiv = document.getElementById("login");

    if (form === "register") {
        registerDiv.style.display = "block";
        loginDiv.style.display = "none";
    } else if (form === "login") {
        loginDiv.style.display = "block";
        registerDiv.style.display = "none";
    }
}

// Función para mostrar mensajes de error en los elementos <span> correspondientes.
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }
}

// Función para limpiar los mensajes de error.
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

// Escucha el evento 'DOMContentLoaded' para asegurar que el DOM está listo.
document.addEventListener('DOMContentLoaded', () => {
    // Establece la primera imagen de fondo al cargar la página.
    body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    
    // Lógica para el formulario de registro.
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            // ... (rest of your validation logic) ...
            if (isValid) {
                alert('¡Formulario de registro validado correctamente!');
            }
        });
    }

    // Lógica para el formulario de login.
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            
            if (username === 'admin' && password === 'admin') {
                alert('Inicio de sesión exitoso!');
                clearError('login-error');
            } else {
                showError('login-error', 'Nombre de usuario o contraseña incorrectos.');
            }
        });
    }
});