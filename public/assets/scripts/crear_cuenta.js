document.getElementById("registro-form").addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();
    const termsAccepted = document.getElementById("terminos").checked;

    if (!nombre || !apellido || !email || !fechaNacimiento || !password || !confirmPassword) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (!termsAccepted) {
        alert("Debes aceptar los términos y condiciones.");
        return;
    }

    alert("Cuenta creada exitosamente.");
    window.location.href = "/public/iniciar_sesion.html";
}