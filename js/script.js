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
          <h2 class="titulo-s">Sobre Mi</h2>
          <div class="info-section-1">
            <h3>Extracto</h3>
            <hr />
            <p>
              Soy un estudiante de ingeniería en sistemas computacionales en el
              TESCHA, donde me destaco por mi capacidad para aprender
              rápidamente y mi habilidad para trabajar de manera efectiva en
              equipo. Poseo sólidos conocimientos en lenguajes de programación
              como Python, Java y HTML, así como en bases de datos MySQL.
            </p>
          </div>
          <div class="info-section-2">
            <h3>Educación</h3>
            <hr />
            <ul>
              <li>
                <strong>Escuela Preparatoria Oficial 161</strong> - (2016-2019)
              </li>
              <li>
                <strong>Tecnológico de Estudios Superiores de Chalco</strong> -
                Grado en Ingeniería, Desarrollo de sistemas para la industria
                4.0 (2020 - 2025)
              </li>
            </ul>
          </div>
          <div class="info-section-3">
            <h3>Experiencia Laboral</h3>
            <hr />
            <ul>
              <li>
                <strong>DIXI PROJECT</strong> - DESARROLLADOR DE APLICACIONES
                MÓVILES Agosto del 2023 – Enero del 2024
              </li>
              <li>
                <strong>SYSTEMKW</strong> - DESARROLLADOR DE PAGINAS WEB Enero
                del 2024 – Julio del 2024
              </li>
            </ul>
          </div>
          <div class="info-section-4">
            <h3>Habilidades de Gestión y Metodologías</h3>
            <hr />
            <ul>
              <li><strong>Metodologías Ágiles: </strong> Scrum, Kanban</li>
              <li>
                <strong>Documentación Técnica: </strong> UML, diagramas de
                flujo, casos de uso.
              </li>
            </ul>
          </div>
          <div class="info-section-5">
            <h3>Habilidades Blandas</h3>
            <hr />
            <ul>
              <li>Resolución de problemas y pensamiento crítico.</li>
              <li>Trabajo en equipo y colaboración.</li>
              <li>Comunicación efectiva (técnica y no técnica).</li>
              <li>Adaptabilidad y aprendizaje continuo.</li>
              <li>Gestión del tiempo y organización.</li>
            </ul>
          </div>
          <div class="info-section-6">
            <h3>Currículum Vitae</h3>
            <hr />
            <p>
              Puedes descargar mi currículum en formato PDF dando clic en el
              siguiente botón:
            </p>
            <a
              href="/archivos/CURRICULUM TRUJILLO_2.pdf"
              download
              class="cv-button"
              >Descargar CV</a
            >
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
