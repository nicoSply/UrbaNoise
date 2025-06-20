function adjustLayout() {
  const width = window.innerWidth;

  // Ajuste del menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const menuVertical = document.querySelector('.menu-horizontal'); // Cambiado a menuVertical en la lógica
  if (width <= 768) {
    menuToggle.style.display = 'block';
    menuVertical.style.display = 'none';
    menuToggle.addEventListener('click', () => {
      menuVertical.style.display = menuVertical.style.display === 'none' ? 'block' : 'none';
      menuVertical.style.flexDirection = 'column'; // Vertical en móvil
    });
  } else {
    menuToggle.style.display = 'none';
    menuVertical.style.display = 'flex';
    menuVertical.style.flexDirection = 'row'; // Horizontal en desktop
  }

  // Ajuste de secciones para responsividad
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (width <= 768) {
      section.style.flexDirection = 'column';
    } else {
      section.style.flexDirection = 'row';
    }
  });
}

// Llamar a la función al cargar y redimensionar la ventana
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);