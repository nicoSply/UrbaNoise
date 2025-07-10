(function () {
  // Selecciona el formulario dentro de este ámbito privado
  const form1 = document.querySelector('form[name="frmp"]');

  // Valida el email (función privada, no contaminará el ámbito global)
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
    return re.test(String(email).toLowerCase());
  }

  // Si el formulario existe, añade el event listener
  if (form1) {
    form1.addEventListener("submit", (event) => {
      // Obtiene los valores de los campos
      const fnamep = form1.elements["nombrep"].value;
      const fusuario = form1.elements["nombreu"].value;
      const fubicacion = form1.elements["ubicacion"].value;
      const femailp = form1.elements["emailp"].value;

      // Validación de campos vacíos
      if (!fnamep || !fusuario || !fubicacion || !femailp) {
        event.preventDefault();
        alert("Por favor, complete todos los campos del formulario");
        return; // Detiene la ejecución si hay campos vacíos
      }

      // Validación de email
      if (!validateEmail(femailp)) {
        event.preventDefault();
        alert("Por favor, ingrese un correo válido");
        return; // Detiene la ejecución si el email no es válido
      }

      // Confirmación antes de enviar
      const confirmation = confirm(
        "Está a punto de guardar cambios, ¿Desea continuar?"
      );

      if (!confirmation) {
        event.preventDefault();
      }
    });
  }
})();
