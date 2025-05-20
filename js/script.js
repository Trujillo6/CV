document.addEventListener("DOMContentLoaded", function () {
  const contenidos = {
    inicio: `
      <div class="content-section" id="inicio-content">
      <h1 class="inicio-2">Soy <br> Alejandro Trujillo Buendia </h1>
      <h2 class="inicio-1">Bienvenido a mi Portafolio</h2>
      <h3 class="inicio-3">Un gusto que estes aquí !!</h3>

        
      </div>
    `,
    sobremi: `
      <div class="content-section" id="sobremi-content">
        <h2>Sobre Mí</h2>
        <p>Profesional apasionado por la tecnología con experiencia en diversos proyectos y herramientas.</p>
        <div class="info-section">
          <h3>Experiencia Profesional</h3>
          <ul>
            <li><strong>COINTIC</strong> - Desarrollador ERP (2024-Actualidad)</li>
            <li><strong>Freelance</strong> - Proyectos Android y Web (2019-2023)</li>
          </ul>
        </div>
        <div class="info-section">
          <h3>Educación</h3>
          <ul>
            <li><strong>Universidad Tecnológica</strong> - Ingeniería en TIC (2018-2022)</li>
            <li><strong>Certificaciones</strong> - Desarrollo Web, Android, UI/UX</li>
          </ul>
        </div>
      </div>
    `,
    cursos: `
      <div class="content-section" id="cursos-content">
        <h2>Mis Cursos y Certificaciones</h2>
        <p>Formación continua para mantenerme actualizado en las últimas tecnologías.</p>
        <div class="course-grid">
          <div class="course-card">
            <h3>Curso de Desarrollo Web</h3>
            <p>Platzi - 2022</p>
            <p>Habilidades: HTML, CSS, JavaScript</p>
          </div>
          <div class="course-card">
            <h3>Certificación en UX/UI</h3>
            <p>Google UX Design - 2023</p>
            <p>Diseño centrado en el usuario</p>
          </div>
        </div>
      </div>
    `,
    contacto: `
      <div class="content-section" id="contacto-content">
        <h2>Contacto</h2>
        <p>¡Estoy disponible para oportunidades y colaboraciones!</p>
        <div class="contact-info">
          <p><strong>Email:</strong> alejandrotb@ejemplo.com</p>
          <p><strong>Teléfono:</strong> +52 123 456 7890</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/alejandrotb</p>
        </div>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    `,
  };

  const dynamicContent = document.getElementById("dynamic-content");
  const navLinks = document.querySelectorAll(".nav-link");

  function loadContent(contentKey) {
    if (contenidos[contentKey]) {
      dynamicContent.innerHTML = contenidos[contentKey];

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-content") === contentKey) {
          link.classList.add("active");
        }
      });
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const contentKey = this.getAttribute("data-content");
      loadContent(contentKey);
      history.pushState({ content: contentKey }, "", `#${contentKey}`);
    });
  });

  window.addEventListener("popstate", function (e) {
    if (e.state && e.state.content) {
      loadContent(e.state.content);
    }
  });

  const initialContent = window.location.hash.substring(1) || "inicio";
  loadContent(initialContent);
});
