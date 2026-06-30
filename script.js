document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ENRUTADOR INTERACTIVO (Cambio de Apartados Completo) ---
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Cambiar estado activo en el menú de navegación
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Ocultar todas las secciones y activar la seleccionada
            const targetSectionId = `section-${this.getAttribute("data-section")}`;
            sections.forEach(section => {
                section.classList.remove("active-section");
                if (section.id === targetSectionId) {
                    section.classList.add("active-section");
                }
            });
        });
    });

    // Enlace interno del Inicio que te lleva al apartado de Servicios
    const dynamicBtnGo = document.querySelector(".dynamic-btn-go");
    if (dynamicBtnGo) {
        dynamicBtnGo.addEventListener("click", function() {
            const serviceLink = document.querySelector('[data-section="servicios"]');
            if (serviceLink) serviceLink.click();
        });
    }

    // --- 2. APARTADO COMPLETO PARA ARTÍCULOS (Modal Interactivo) ---
    const modal = document.getElementById("article-modal");
    const modalBody = document.getElementById("modal-dynamic-body");
    const closeModal = document.querySelector(".close-modal");
    const leerMasButtons = document.querySelectorAll(".btn-leer-mas");

    const articulosContenido = {
        gestion: `
            <div class="modal-body-content">
                <h2 style="color:#091a2b; margin-bottom:15px;">¿Por qué es importante una buena gestión administrativa?</h2>
                <p style="color:#607d8b; margin-bottom:15px;">Una adecuada gestión administrativa permite organizar procesos, controlar recursos y mejorar el rendimiento de una empresa. Aspectos como el manejo de caja, control de ventas, administración de inventarios y seguimiento de gastos son fundamentales para alcanzar estabilidad y crecimiento.</p>
                <h3 style="color:#091a2b; margin:20px 0 10px 0;">Una empresa organizada puede:</h3>
                <ul style="padding-left:20px; color:#2c3e50;">
                    <li style="margin-bottom:8px;">✔️ Mejorar la productividad</li>
                    <li style="margin-bottom:8px;">✔️ Reducir errores administrativos</li>
                    <li style="margin-bottom:8px;">✔️ Optimizar recursos</li>
                    <li style="margin-bottom:8px;">✔️ Facilitar la toma de decisiones</li>
                    <li style="margin-bottom:8px;">✔️ Incrementar la eficiencia empresarial</li>
                </ul>
            </div>
        `,
        consejos: `
            <div class="modal-body-content">
                <h2 style="color:#091a2b; margin-bottom:15px;">Consejos para emprendedores y pequeños negocios</h2>
                <p style="color:#607d8b; margin-bottom:15px;">Para mantener la salud financiera y la estabilidad operativa de tu MIPYME, te sugerimos seguir rigurosamente las siguientes pautas organizacionales de Ordexa:</p>
                <ul style="padding-left:20px; color:#2c3e50;">
                    <li style="margin-bottom:10px;">📌 Mantener un control constante de ingresos y gastos.</li>
                    <li style="margin-bottom:10px;">📌 Organizar inventarios de manera periódica.</li>
                    <li style="margin-bottom:10px;">📌 Llevar registro de ventas y clientes.</li>
                    <li style="margin-bottom:10px;">📌 Implementar herramientas digitales de apoyo.</li>
                    <li style="margin-bottom:10px;">📌 Planificar objetivos empresariales medibles.</li>
                </ul>
            </div>
        `
    };

    leerMasButtons.forEach(button => {
        button.addEventListener("click", function() {
            const artículoKey = this.getAttribute("data-articulo");
            if (articulosContenido[artículoKey]) {
                modalBody.innerHTML = articulosContenido[artículoKey];
                modal.classList.add("show");
            }
        });
    });

    closeModal.addEventListener("click", () => modal.classList.remove("show"));
    window.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("show"); });

    // --- 3. CLIPS DE ALERTA PARA CONTACTO Y CATEGORÍAS ---
    const categorias = document.querySelectorAll(".category-item");
    categorias.forEach(item => {
        item.addEventListener("click", function() {
            alert(`Filtrando por la categoría: "${this.getAttribute("data-cat")}"`);
        });
    });

    document.getElementById("nav-contacto").addEventListener("click", (e) => {
        e.preventDefault();
        alert("Canal de atención Ordexa S.A.S.\n📞 Teléfono: 3004584139\n📧 Correo: ordexasas@gmail.com");
    });

    // Formulario de suscripción interactivo
    const form = document.getElementById("form-suscripcion");
    const successMsg = document.getElementById("success-message");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            successMsg.style.display = "block";
            form.reset();
            setTimeout(() => { successMsg.style.display = "none"; }, 4000);
        });
    }
});