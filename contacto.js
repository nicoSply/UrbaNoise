const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", (event) => {
  const fname = form.elements["nombre"].value;
  const fapellido = form.elements["apellido"].value;
  const femail = form.elements["email"].value;
  const ftelefono = form.elements["telefono"].value;
  const fmensaje = form.elements["mensaje"].value;

  if (!fname || !fapellido || !femail || !ftelefono || !fmensaje) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo válido");
  } else {
    const confirmation = confirm(
      "Está a punto de enviar el formulario, ¿Desea continuar?"
    );

    if (!confirmation) {
      event.preventDefault();
    }
  }
});

function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}
