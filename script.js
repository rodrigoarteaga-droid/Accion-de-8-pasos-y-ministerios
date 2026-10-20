/* =========================================
   PERÚ EN ACCIÓN
   FUNCIONES INTERACTIVAS
========================================= */

const ministries = [
    {
        name: "Ministerio de Relaciones Exteriores",
        titular: "Alfonso Carlos Espá y Garcés-Alvear",
        category: "Estado",
        icon: "◎",
        summary: "Conduce la política exterior y representa al Perú ante otros países.",
        functions: [
            "Representar al Perú mediante las relaciones diplomáticas y consulares.",
            "Negociar acuerdos internacionales y promover la cooperación.",
            "Proteger y asistir a los peruanos en el extranjero."
        ],
        members: "Despacho ministerial, viceministerios, embajadas, consulados, misiones diplomáticas y órganos especializados."
    },
    {
        name: "Ministerio de Defensa",
        titular: "Rafael Jorge Belaúnde Llosa",
        category: "Estado",
        icon: "⬡",
        summary: "Dirige las políticas relacionadas con la defensa nacional.",
        functions: [
            "Formular las políticas de defensa nacional dentro de sus competencias.",
            "Coordinar la gestión del sector Defensa.",
            "Supervisar la preparación y las capacidades de las Fuerzas Armadas."
        ],
        members: "Despacho ministerial, órganos de asesoramiento, administración, organismos del sector y coordinación con el Ejército, la Marina de Guerra y la Fuerza Aérea."
    },
    {
        name: "Ministerio de Economía y Finanzas",
        titular: "Elmer Rafael Cuba Bustinza",
        category: "Economía",
        icon: "↗",
        summary: "Conduce las políticas económicas, fiscales y financieras del Estado.",
        functions: [
            "Formular la política macroeconómica y fiscal.",
            "Coordinar el presupuesto público y la gestión de las finanzas estatales.",
            "Promover el uso responsable de los recursos públicos."
        ],
        members: "Despacho ministerial, órganos de presupuesto, tesorería, contabilidad, política económica, inversión pública y organismos especializados."
    },
    {
        name: "Ministerio del Interior",
        titular: "César Augusto Astudillo Salcedo",
        category: "Estado",
        icon: "◈",
        summary: "Conduce políticas de orden interno, seguridad ciudadana y migraciones.",
        functions: [
            "Formular políticas de seguridad ciudadana y orden interno.",
            "Dirigir y supervisar el sector Interior de acuerdo con la ley.",
            "Coordinar acciones de prevención del delito y gestión migratoria."
        ],
        members: "Despacho ministerial, órganos de seguridad y gestión administrativa, Policía Nacional del Perú y entidades vinculadas al sector."
    },
    {
        name: "Ministerio de Justicia y Derechos Humanos",
        titular: "Ernesto Julio Álvarez Miranda",
        category: "Estado",
        icon: "⚖",
        summary: "Promueve el acceso a la justicia y la protección de los derechos humanos.",
        functions: [
            "Promover políticas de derechos humanos y acceso a la justicia.",
            "Coordinar la defensa jurídica del Estado.",
            "Impulsar los servicios de defensa pública y las políticas penitenciarias."
        ],
        members: "Despacho ministerial, órganos de derechos humanos, defensa pública, asesoría jurídica, asuntos penitenciarios y organismos del sector."
    },
    {
        name: "Ministerio de Educación",
        titular: "José Antonio Chang Escobedo",
        category: "Social",
        icon: "▤",
        summary: "Dirige las políticas educativas para mejorar la enseñanza y el aprendizaje.",
        functions: [
            "Diseñar políticas y lineamientos del sistema educativo.",
            "Promover la calidad educativa, la inclusión y la formación docente.",
            "Coordinar la gestión educativa con los gobiernos regionales."
        ],
        members: "Despacho ministerial, viceministerios, direcciones educativas, órganos de gestión pedagógica y programas del sector."
    },
    {
        name: "Ministerio de Salud",
        titular: "Luis Williams Dyer Fernández",
        category: "Social",
        icon: "✚",
        summary: "Conduce las políticas de salud pública, prevención y atención sanitaria.",
        functions: [
            "Establecer políticas y normas de salud pública.",
            "Promover la prevención de enfermedades y la vigilancia sanitaria.",
            "Coordinar la calidad y organización de los servicios de salud."
        ],
        members: "Despacho ministerial, órganos de salud pública, aseguramiento, prestación de servicios, medicamentos, institutos y organismos sanitarios."
    },
    {
        name: "Ministerio de Desarrollo Agrario y Riego",
        titular: "Marco Antonio Vinelli Ruiz",
        category: "Territorio",
        icon: "❋",
        summary: "Promueve la agricultura, el desarrollo rural y el uso eficiente del agua.",
        functions: [
            "Impulsar la productividad y competitividad agraria.",
            "Promover infraestructura de riego y una gestión sostenible del agua.",
            "Fortalecer la agricultura familiar y el desarrollo rural."
        ],
        members: "Despacho ministerial, órganos de políticas agrarias, agricultura familiar, infraestructura de riego, sanidad agraria y entidades técnicas."
    },
    {
        name: "Ministerio de Trabajo y Promoción del Empleo",
        titular: "Juan Manuel Kosme Sheput Moore",
        category: "Social",
        icon: "↔",
        summary: "Promueve el empleo digno, los derechos laborales y la formación profesional.",
        functions: [
            "Formular políticas de empleo y capacitación laboral.",
            "Promover el cumplimiento de las normas laborales.",
            "Facilitar el diálogo entre trabajadores y empleadores."
        ],
        members: "Despacho ministerial, órganos de trabajo y empleo, programas laborales, áreas de diálogo social y entidades adscritas."
    },
    {
        name: "Ministerio de la Producción",
        titular: "Juan Carlos Requejo Alemán",
        category: "Economía",
        icon: "⚙",
        summary: "Promueve la industria, las MYPE, la pesca y la acuicultura.",
        functions: [
            "Impulsar la productividad industrial y el desarrollo empresarial.",
            "Promover el desarrollo sostenible de la pesca y la acuicultura.",
            "Favorecer la innovación, la formalización y la competitividad."
        ],
        members: "Despacho ministerial, órganos de industria, MYPE, pesca, acuicultura, innovación y organismos técnicos."
    },
    {
        name: "Ministerio de Comercio Exterior y Turismo",
        titular: "Rogers Martín Valencia Espinoza",
        category: "Economía",
        icon: "✈",
        summary: "Impulsa el comercio internacional y el turismo sostenible.",
        functions: [
            "Formular y ejecutar políticas de comercio exterior.",
            "Promover las exportaciones y el acceso a mercados internacionales.",
            "Desarrollar destinos turísticos y mejorar sus servicios."
        ],
        members: "Despacho ministerial, órganos de comercio exterior, negociaciones comerciales, turismo, artesanía y entidades especializadas."
    },
    {
        name: "Ministerio de Energía y Minas",
        titular: "Guillermo Shinno Huamaní",
        category: "Territorio",
        icon: "ϟ",
        summary: "Formula políticas para el desarrollo de la energía y la minería.",
        functions: [
            "Promover el acceso seguro y sostenible a la energía.",
            "Impulsar el desarrollo responsable de la actividad minera.",
            "Promover la eficiencia energética y la inversión dentro de la ley."
        ],
        members: "Despacho ministerial, órganos de electricidad, hidrocarburos, minería y asuntos ambientales y sociales."
    },
    {
        name: "Ministerio de Transportes y Comunicaciones",
        titular: "Rafael Rey Rey",
        category: "Territorio",
        icon: "⌁",
        summary: "Promueve la conectividad, el transporte y las telecomunicaciones.",
        functions: [
            "Planificar políticas de transporte e infraestructura vial.",
            "Promover las telecomunicaciones y la conectividad digital.",
            "Establecer normas técnicas y de seguridad en sus competencias."
        ],
        members: "Despacho ministerial, órganos de transporte terrestre, aéreo y acuático, comunicaciones e infraestructura."
    },
    {
        name: "Ministerio de Vivienda, Construcción y Saneamiento",
        titular: "Mauricio Fernando Arnillas González",
        category: "Territorio",
        icon: "⌂",
        summary: "Promueve viviendas adecuadas, desarrollo urbano y acceso al saneamiento.",
        functions: [
            "Impulsar programas de vivienda y mejoramiento urbano.",
            "Promover el acceso al agua potable y al saneamiento.",
            "Formular políticas de construcción y desarrollo urbano."
        ],
        members: "Despacho ministerial, órganos de vivienda, urbanismo, construcción, saneamiento, programas de inversión y entidades técnicas."
    },
    {
        name: "Ministerio de la Mujer y Poblaciones Vulnerables",
        titular: "María Magdalena Seminario Marón",
        category: "Social",
        icon: "♡",
        summary: "Promueve la igualdad y protege a las personas en situación de vulnerabilidad.",
        functions: [
            "Promover la igualdad de oportunidades y prevenir la violencia.",
            "Proteger los derechos de niñas, niños, adolescentes y personas mayores.",
            "Coordinar servicios para personas y familias vulnerables."
        ],
        members: "Despacho ministerial, órganos de igualdad de género, protección familiar, niñez, personas mayores, discapacidad y programas especializados."
    },
    {
        name: "Ministerio del Ambiente",
        titular: "Vladimiro Huaroc Portocarrero",
        category: "Territorio",
        icon: "♧",
        summary: "Promueve la conservación ambiental y la protección de la biodiversidad.",
        functions: [
            "Formular políticas de protección ambiental y gestión de residuos.",
            "Promover la conservación de los ecosistemas y la biodiversidad.",
            "Coordinar medidas frente al cambio climático y la contaminación."
        ],
        members: "Despacho ministerial, órganos de calidad ambiental, biodiversidad, cambio climático y entidades técnicas especializadas."
    },
    {
        name: "Ministerio de Cultura",
        titular: "Alberto Ismael Beingolea Delgado",
        category: "Social",
        icon: "◉",
        summary: "Protege el patrimonio cultural y promueve la diversidad cultural peruana.",
        functions: [
            "Proteger el patrimonio arqueológico, histórico e inmaterial.",
            "Promover las artes, las lenguas indígenas y la diversidad cultural.",
            "Favorecer el acceso de la población a las expresiones culturales."
        ],
        members: "Despacho ministerial, órganos de patrimonio cultural, industrias culturales, interculturalidad, lenguas indígenas y museos."
    },
    {
        name: "Ministerio de Desarrollo e Inclusión Social",
        titular: "Maritza Ivonne Canales Martínez",
        category: "Social",
        icon: "✳",
        summary: "Coordina políticas para reducir la pobreza y la exclusión social.",
        functions: [
            "Diseñar políticas de desarrollo e inclusión social.",
            "Coordinar programas para hogares en situación de pobreza y vulnerabilidad.",
            "Evaluar resultados para mejorar oportunidades y servicios básicos."
        ],
        members: "Despacho ministerial, órganos de políticas sociales, focalización, seguimiento y evaluación, y programas nacionales de inclusión."
    }
];


/* =========================================
   BUSCADOR Y TARJETAS
========================================= */

const ministryGrid = document.getElementById("ministry-grid");
const searchInput = document.getElementById("search-ministry");
const filterButtons = document.querySelectorAll(".filter-btn");

const ministryDialog = document.getElementById("ministry-dialog");
const dialogContent = document.getElementById("dialog-content");
const dialogClose = document.getElementById("dialog-close");

let activeFilter = "Todos";


function renderMinistries() {
    const query = searchInput.value.trim().toLocaleLowerCase("es");

    const filtered = ministries.filter((ministry) => {
        const matchesCategory =
            activeFilter === "Todos" ||
            ministry.category === activeFilter;

        const searchableText = [
            ministry.name,
            ministry.titular,
            ministry.category,
            ministry.summary,
            ...ministry.functions,
            ministry.members
        ].join(" ").toLocaleLowerCase("es");

        return matchesCategory && searchableText.includes(query);
    });

    ministryGrid.innerHTML = "";

    if (filtered.length === 0) {
        ministryGrid.innerHTML = `
            <div class="empty-state">
                No encontramos resultados.
                Prueba con otro nombre o palabra.
            </div>
        `;
        return;
    }

    filtered.forEach((ministry, index) => {
        const originalIndex = ministries.indexOf(ministry);

        const card = document.createElement("article");
        card.className = "ministry-card";
        card.style.animationDelay = `${Math.min(index * 35, 350)}ms`;

        card.innerHTML = `
            <div class="ministry-card-top">
                <span class="ministry-icon">${ministry.icon}</span>
                <span class="ministry-number">
                    ${String(originalIndex + 1).padStart(2, "0")} / 18
                </span>
            </div>

            <h3>${ministry.name}</h3>

            <p class="minister-name">
                Titular indicado: ${ministry.titular}
            </p>

            <p class="ministry-summary">
                ${ministry.summary}
            </p>

            <div class="card-bottom">
                <span class="category-label">${ministry.category}</span>

                <button
                    class="more-link"
                    type="button"
                    data-index="${originalIndex}"
                >
                    Ver funciones ↗
                </button>
            </div>
        `;

        ministryGrid.appendChild(card);
    });
}


/* =========================================
   DETALLES DE CADA MINISTERIO
========================================= */

ministryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");

    if (!button) return;

    const ministry = ministries[Number(button.dataset.index)];

    dialogContent.innerHTML = `
        <span class="dialog-category">
            ${ministry.category.toUpperCase()} · MINISTERIO
        </span>

        <h2>${ministry.name}</h2>

        <p class="dialog-minister">
            Titular indicado: ${ministry.titular}
        </p>

        <p>${ministry.summary}</p>

        <h3>Funciones principales</h3>

        <ul>
            ${ministry.functions.map((item) => `<li>${item}</li>`).join("")}
        </ul>

        <h3>¿Quiénes lo conforman?</h3>

        <p>${ministry.members}</p>

        <p class="dialog-source">
            La estructura interna exacta puede variar.
            Consulta el portal institucional para comprobar
            el organigrama y los funcionarios vigentes.
        </p>

        <a
            class="btn btn-primary"
            href="https://www.gob.pe/pcm/ministros"
            target="_blank"
            rel="noopener"
        >
            Consultar directorio oficial ↗
        </a>
    `;

    ministryDialog.showModal();
});


/* Cerrar ventana */

dialogClose.addEventListener("click", () => {
    ministryDialog.close();
});

ministryDialog.addEventListener("click", (event) => {
    if (event.target === ministryDialog) {
        ministryDialog.close();
    }
});


/* =========================================
   FILTROS
========================================= */

searchInput.addEventListener("input", renderMinistries);

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;

        filterButtons.forEach((item) => {
            item.classList.toggle("active", item === button);
        });

        renderMinistries();
    });
});


/* =========================================
   MENÚ PARA MÓVILES
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


/* =========================================
   BARRA DE PROGRESO
========================================= */

const progressBar = document.getElementById("progress-bar");

function updateProgress() {
    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const percentage = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    progressBar.style.width = `${percentage}%`;
}

window.addEventListener("scroll", updateProgress, {
    passive: true
});


/* =========================================
   ANIMACIONES AL DESPLAZARSE
========================================= */

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
    });
} else {
    document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("visible");
    });
}


/* =========================================
   INICIALIZACIÓN
========================================= */

renderMinistries();
updateProgress();

console.log("Perú en Acción: página inicializada correctamente.");