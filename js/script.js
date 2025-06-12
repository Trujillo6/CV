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
              Soy ingeniero de la carrera de  ingeniería en sistemas computacionales en el
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
      <div class="content-section" id="sobremi-content">
          <h2 class="titulo-C">Habilidades Técnicas</h2>
          <div class="info-curso-1">
            <h3>Lenguajes de Programación</h3>
            <hr />
            <div class="lenguajes">
              <img src="media/Java.png" alt="" />
              <img src="media/Python.png" alt="" />
              <img src="media/C++.png" alt="" />
              <img src="media/c-sharp.png" alt="" />
              <img src="media/JavaScript-logo.png" alt="" />
              <img src="media/PHP.png" alt="" />
            </div>
          </div>
          <div class="info-curso-2">
            <h3>Desarrollo Web</h3>
            <hr />
            <div class="lenguajes">
              <img src="media/HTML5.png" alt="" />
              <img src="media/CSS3.png" alt="" />
              <img src="media/JavaScript-logo.png" alt="" />
              <img src="media/React.png" alt="" />
              <img src="media/Angular.png" alt="" />
              <img src="media/nodejs.png" alt="" />
              <img src="media/Django-Logo.png" alt="" />
              <img src="media/flask.png" alt="" />
            </div>
          </div>
          <div class="info-curso-3">
            <h3>Bases de Datos</h3>
            <hr />
            <div class="lenguajes">
              <img src="media/MySQL.png" alt="" />
              <img src="media/postgresql.png" alt="" />
              <img src="media/MongoDB_Logo.svg.png" alt="" />
              <img src="media/firebase.png" alt="" />
            </div>
          </div>
          <div class="info-curso-4">
            <h3>Desarrollo Móvil</h3>
            <hr />
            <div class="lenguajes">
              <img src="media/android_w_java.png" alt="" />
            </div>
          </div>
          <div class="info-curso-5">
            <h3>Sistemas Operativos</h3>
            <hr />
            <div class="lenguajes">
              <img src="media/Windows_11_logo.svg.png" alt="" />
              <img src="media/ubuntu-logo-vector.svg" alt="" />
              <img src="media/Fedora_logo.svg.png" alt="" />
            </div>
          </div>
          <div class="info-curso-6">
            <h3>Herramientas de Desarrollo</h3>
            <hr />
            <div class="lenguajes">
              <img src="media/git.png" alt="" />
              <img src="media/github.png" alt="" />
              <img src="media/jira.png" alt="" />
              <img src="media/Visual_Studio_Code_1.35_icon.svg.png" alt="" />
              <img src="media/eclipse.png" alt="" />
              <img src="media/netbeans.png" alt="" />
              <img src="media/postman.png" alt="" />
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
