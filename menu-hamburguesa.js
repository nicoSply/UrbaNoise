document.addEventListener("DOMContentLoaded", function () {
  // 1. Seleccionar elementos del DOM
  const menuToggle = document.querySelector(".menu-toggle");
  const menuHorizontal = document.querySelector(".menu-horizontal");

  // 2. Función para alternar (abrir/cerrar) el menú
  function toggleMenu() {
    menuHorizontal.classList.toggle("active");
    // Si tienes una clase para el icono hamburguesa:
    // menuToggle.classList.toggle("open");
  }

  // 3. Función para cerrar el menú al seleccionar opción (solo móvil)
  function closeMenuOnClick(e) {
    // Verifica si:
    // - Estamos en móvil (<= 768px)
    // - El clic fue en un enlace del menú
    // - El menú está actualmente abierto
    if (
      window.innerWidth <= 768 &&
      e.target.closest(".menu-horizontal a") &&
      menuHorizontal.classList.contains("active")
    ) {
      menuHorizontal.classList.remove("active");
      // menuToggle.classList.remove("open");
    }
  }

  // 4. Event listeners
  if (menuToggle && menuHorizontal) {
    // Abrir/cerrar al hacer clic en el botón hamburguesa
    menuToggle.addEventListener("click", toggleMenu);

    // Cerrar al seleccionar opción (usando delegación de eventos)
    menuHorizontal.addEventListener("click", closeMenuOnClick);

    // (Opcional) Cerrar al hacer scroll en móvil
    window.addEventListener("scroll", function () {
      if (
        window.innerWidth <= 768 &&
        menuHorizontal.classList.contains("active")
      ) {
        menuHorizontal.classList.remove("active");
        // menuToggle.classList.remove("open");
      }
    });
  }
});
