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
