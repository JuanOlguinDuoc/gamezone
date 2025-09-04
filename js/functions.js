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

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const fullname = document.getElementById("fullname").value.trim();
            const fullnameRegex = /^[a-zA-Z\s]{1,100}$/;
            if (!fullnameRegex.test(fullname)) {
                showError('fullname-error', 'El nombre solo debe contener letras y espacios y tener un máximo de 100 caracteres.');
                isValid = false;
            } else {
                clearError('fullname-error');
            }

            const email = document.getElementById("email").value.trim();
            const emailRegex = /^[^\s@]+@duoc\.cl$/;
            if (!emailRegex.test(email)) {
                showError('email-error', 'Debe ser un correo válido con el dominio @duoc.cl.');
                isValid = false;
            } else {
                clearError('email-error');
            }

            const password = document.getElementById("password").value;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{10,}$/;
            if (!passwordRegex.test(password)) {
                showError('password-error', 'La contraseña debe tener al menos 10 caracteres, incluyendo mayúsculas, minúsculas, un número y un carácter especial.');
                isValid = false;
            } else {
                clearError('password-error');
            }

            const confirmPassword = document.getElementById("confirm-password").value;
            if (password !== confirmPassword) {
                showError('confirm-password-error', 'Las contraseñas no coinciden.');
                isValid = false;
            } else {
                clearError('confirm-password-error');
            }

            const celular = document.getElementById("celular").value.trim();
            const celularRegex = /^\d{9}$/;
            if (celular && !celularRegex.test(celular)) {
                showError('celular-error', 'El número de teléfono debe contener exactamente 9 dígitos.');
                isValid = false;
            } else {
                clearError('celular-error');
            }

            const generos = document.querySelector('input[name="generos"]:checked');
            if (!generos) {
                showError('generos-error', 'Debe seleccionar al menos un género.');
                isValid = false;
            } else {
                clearError('generos-error');
            }

            if (isValid) {
                alert('¡Formulario de registro validado correctamente!');
            }
        });
    }

    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            const loginError = document.getElementById("login-error");

            if (username === 'admin' && password === 'admin') {
                alert('Inicio de sesión exitoso!');
                loginError.textContent = '';
            } else {
                showError('login-error', 'Nombre de usuario o contraseña incorrectos.');
            }
        });
    }
});
