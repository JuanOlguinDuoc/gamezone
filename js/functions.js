/* Archivo JavaScript para la lógica de la aplicación */

// Función para mostrar/ocultar los formularios de inicio de sesión y registro
function toggleForm(form) {
    const registerDiv = document.getElementById("register");
    const loginDiv = document.getElementById("login");

    if (form === "register") {
        if (registerDiv.style.display === "block") {
            registerDiv.style.display = "none";
        } else {
            registerDiv.style.display = "block";
            loginDiv.style.display = "none";
        }
    } else if (form === "login") {
        if (loginDiv.style.display === "block") {
            loginDiv.style.display = "none";
        } else {
            loginDiv.style.display = "block";
            registerDiv.style.display = "none";
        }
    }
}

// Función para mostrar mensajes de error en un elemento específico
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red'; // Estilo para resaltar el error
}

// Función para limpiar los mensajes de error
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}

// Evento que se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Referencia al formulario de registro
    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        // Escucha el evento 'submit' del formulario de registro
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue al enviar el formulario
            let isValid = true; // Bandera para controlar la validez del formulario

            // 1. Validación del Nombre Completo
            const fullname = document.getElementById("fullname").value.trim();
            const fullnameRegex = /^[a-zA-Z\s]{1,100}$/;
            if (!fullnameRegex.test(fullname)) {
                showError('fullname-error', 'El nombre solo debe contener letras y espacios y tener un máximo de 100 caracteres.');
                isValid = false;
            } else {
                clearError('fullname-error');
            }

            // 2. Validación del Correo Electrónico
            const email = document.getElementById("email").value.trim();
            const emailRegex = /^[^\s@]+@duoc\.cl$/;
            if (!emailRegex.test(email)) {
                showError('email-error', 'Debe ser un correo válido con el dominio @duoc.cl.');
                isValid = false;
            } else {
                clearError('email-error');
            }

            // 3. Validación de la Contraseña
            const password = document.getElementById("password").value;
            // Expresión regular para la complejidad de la contraseña
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{10,}$/;
            if (!passwordRegex.test(password)) {
                showError('password-error', 'La contraseña debe tener al menos 10 caracteres, incluyendo mayúsculas, minúsculas, un número y un carácter especial.');
                isValid = false;
            } else {
                clearError('password-error');
            }

            // 4. Validación de la Confirmación de Contraseña
            const confirmPassword = document.getElementById("confirm-password").value;
            if (password !== confirmPassword) {
                showError('confirm-password-error', 'Las contraseñas no coinciden.');
                isValid = false;
            } else {
                clearError('confirm-password-error');
            }

            // 5. Validación del Teléfono (opcional)
            const celular = document.getElementById("celular").value.trim();
            const celularRegex = /^\d{9}$/; // Valida que solo sean 9 dígitos
            if (celular && !celularRegex.test(celular)) {
                showError('celular-error', 'El número de teléfono debe contener exactamente 9 dígitos.');
                isValid = false;
            } else {
                clearError('celular-error');
            }

            // 6. Validación de Géneros favoritos
            // Se usa querySelector para verificar si hay un botón de radio seleccionado
            const generos = document.querySelector('input[name="generos"]:checked');
            if (!generos) {
                showError('generos-error', 'Debe seleccionar al menos un género.');
                isValid = false;
            } else {
                clearError('generos-error');
            }

            // Si todas las validaciones son exitosas, muestra una alerta y permite el envío (en un entorno real)
            if (isValid) {
               // alert('¡Formulario de registro validado correctamente!');

                const formulario = document.getElementById("register-form");
                const formData = new FormData(formulario);
                const url =  new URLSearchParams(formData);
                const queryString = url.toString();
                alert(queryString);
            }
        });
    }

    // Referencia al formulario de login
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        // Escucha el evento 'submit' del formulario de login
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            const loginError = document.getElementById("login-error");

            // Lógica de validación simulada para el login
            if (username === 'admin' && password === 'admin') {
                alert('Inicio de sesión exitoso!');
                loginError.textContent = '';
            } else {
                showError('login-error', 'Nombre de usuario o contraseña incorrectos.');
            }
        });
    }
});