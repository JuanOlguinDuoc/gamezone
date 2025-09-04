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

            if (isValid) {
                alert('¡Formulario de registro validado correctamente!');
            }
        });
    }

});
