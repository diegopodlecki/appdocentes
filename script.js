// Datos base de la aplicación para una experiencia local y simple.
const AgendaDocenteData = {
  courses: [
    {
      id: "historia-3b",
      source: "mock",
      name: "Historia - 3° B",
      section: "Escuela Normal N° 5",
      description: "Curso orientado al estudio de procesos políticos y sociales latinoamericanos.",
      descriptionHeading: "Procesos políticos y sociales",
      schedule: ["Lunes · 08:00 - 09:20", "Miércoles · 10:00 - 11:20"],
      students: [
        { name: "Ana Suárez", email: "ana.suarez@escuela.edu" },
        { name: "Julián Pérez", email: "julian.perez@escuela.edu" },
        { name: "Mora Díaz", email: "mora.diaz@escuela.edu" }
      ],
      attendance: {
        date: "2026-03-30",
        presentCount: 2,
        absentCount: 1,
        records: [
          { student: "Ana Suárez", present: true },
          { student: "Julián Pérez", present: false },
          { student: "Mora Díaz", present: true }
        ]
      },
      assignments: [
        {
          title: "Línea de tiempo de revoluciones",
          topic: "Revoluciones atlánticas y sus impactos",
          comment: "Priorizar relaciones entre causas económicas y cambios políticos.",
          dueDate: "2026-04-07",
          status: "Pendiente de entrega"
        },
        {
          title: "Mapa conceptual",
          topic: "Procesos independentistas en América Latina",
          comment: "Se revisará claridad y uso de fuentes.",
          dueDate: "2026-03-28",
          status: "Aprobado"
        }
      ]
    },
    {
      id: "matematica-2a",
      source: "mock",
      name: "Matemática - 2° A",
      section: "Instituto del Sur",
      description: "Espacio para álgebra y funciones con seguimiento de prácticas y asistencia.",
      descriptionHeading: "Álgebra y funciones",
      schedule: ["Martes · 07:30 - 08:50", "Jueves · 07:30 - 08:50"],
      students: [
        { name: "Lara Gómez", email: "lara.gomez@colegio.edu" },
        { name: "Tomás Ruiz", email: "tomas.ruiz@colegio.edu" },
        { name: "Valen Ortiz", email: "valen.ortiz@colegio.edu" }
      ],
      attendance: {
        date: "2026-03-31",
        presentCount: 3,
        absentCount: 0,
        records: [
          { student: "Lara Gómez", present: true },
          { student: "Tomás Ruiz", present: true },
          { student: "Valen Ortiz", present: true }
        ]
      },
      assignments: [
        {
          title: "Guía de ecuaciones",
          topic: "Ecuaciones lineales con una incógnita",
          comment: "Resolver ejercicios 1 al 10 y justificar procedimiento.",
          dueDate: "2026-04-05",
          status: "En proceso"
        },
        {
          title: "Trabajo práctico",
          topic: "Representación gráfica de funciones",
          comment: "Puede entregarse en parejas.",
          dueDate: "2026-04-10",
          status: "Pendiente de entrega"
        }
      ]
    },
    {
      id: "literatura-5c",
      source: "mock",
      name: "Literatura - 5° C",
      section: "Colegio del Centro",
      description: "Lectura, debate y escritura crítica con evaluaciones y calendario de entregas.",
      descriptionHeading: "Narrativa latinoamericana",
      schedule: ["Lunes · 13:00 - 14:20", "Viernes · 11:00 - 12:20"],
      students: [
        { name: "Camila Rojas", email: "camila.rojas@centro.edu" },
        { name: "Nicolás Soto", email: "nicolas.soto@centro.edu" },
        { name: "Zoe Medina", email: "zoe.medina@centro.edu" }
      ],
      attendance: {
        date: "2026-03-28",
        presentCount: 2,
        absentCount: 1,
        records: [
          { student: "Camila Rojas", present: true },
          { student: "Nicolás Soto", present: true },
          { student: "Zoe Medina", present: false }
        ]
      },
      assignments: [
        {
          title: "Reseña crítica",
          topic: "Narrativa latinoamericana contemporánea",
          comment: "Se espera una postura argumentada con citas breves.",
          dueDate: "2026-04-11",
          status: "Pendiente de entrega"
        },
        {
          title: "Foro de lectura",
          topic: "Análisis de voz narrativa",
          comment: "Registrar participación y comentar al menos dos intervenciones.",
          dueDate: "2026-04-02",
          status: "En proceso"
        }
      ]
    }
  ],
  events: [
    {
      title: "Entrega de guía de ecuaciones",
      description: "Cierre de recepción y devolución inicial.",
      date: "2026-04-05",
      type: "Entrega",
      courseName: "Matemática - 2° A"
    },
    {
      title: "Evaluación parcial",
      description: "Instancia escrita sobre revoluciones e independencia.",
      date: "2026-04-08",
      type: "Evaluación",
      courseName: "Historia - 3° B"
    },
    {
      title: "Reunión con familias",
      description: "Encuentro institucional para seguimiento pedagógico.",
      date: "2026-04-09",
      type: "Reunión",
      courseName: "General"
    },
    {
      title: "Entrega de reseña crítica",
      description: "Último día para subir archivo o registrar entrega manual.",
      date: "2026-04-11",
      type: "Entrega",
      courseName: "Literatura - 5° C"
    },
    {
      title: "Feriado nacional",
      description: "Día no laborable con suspensión de clases.",
      date: "2026-04-17",
      type: "Feriado",
      courseName: "General"
    }
  ]
};

const statusClass = {
  "Pendiente de entrega": "badge-warning",
  "En proceso": "badge-info",
  Aprobado: "badge-approved"
};

const courseHeaderThemes = [
  "linear-gradient(135deg, #1a73e8, #4285f4)",
  "linear-gradient(135deg, #188038, #34a853)",
  "linear-gradient(135deg, #c26401, #fbbc04)",
  "linear-gradient(135deg, #9334e6, #7baaf7)"
];

const appState = {
  courses: [...AgendaDocenteData.courses],
  currentCourse: AgendaDocenteData.courses[0]
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getCourseTheme(index) {
  return courseHeaderThemes[index % courseHeaderThemes.length];
}

function getCourseCardStatuses(course) {
  const hasDueToday = course.assignments.some((assignment) => assignment.dueDate === "2026-04-01");
  const hasPending = course.assignments.some((assignment) => assignment.status === "Pendiente de entrega");

  return [
    { label: "Activo", className: "status-active" },
    ...(hasPending ? [{ label: "Pendientes", className: "status-pending" }] : []),
    ...(hasDueToday ? [{ label: "Vence hoy", className: "status-due" }] : [])
  ];
}

function updateSidebarActiveLink(hash = window.location.hash || "#inicio") {
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    const isActive = link.getAttribute("href") === hash;
    link.classList.toggle("sidebar-link-active", isActive);
  });
}

function renderStats() {
  const pendingTasks = AgendaDocenteData.courses.flatMap((course) => course.assignments).filter(
    (assignment) => assignment.status === "Pendiente de entrega"
  ).length;

  const stats = [
    {
      label: "Cursos activos",
      value: String(appState.courses.length),
      hint: "Cursos listos para gestionar"
    },
    {
      label: "Pendientes",
      value: String(pendingTasks),
      hint: "Tareas docentes con seguimiento"
    },
    {
      label: "Eventos",
      value: String(AgendaDocenteData.events.length),
      hint: "Calendario académico y recordatorios"
    }
  ];

  document.getElementById("stats").innerHTML = stats
    .map(
      (item) => `
        <article class="stat-card">
          <span class="section-kicker">${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
          <p>${escapeHtml(item.hint)}</p>
        </article>
      `
    )
    .join("");
}

function renderCourses() {
  document.getElementById("course-grid").innerHTML = appState.courses
    .map((course, index) => {
      const statuses = getCourseCardStatuses(course);

      return `
        <article class="course-card">
          <div class="course-card-header" style="background:${getCourseTheme(index)}">
            <h3>${escapeHtml(course.name)}</h3>
            <p>${escapeHtml(course.section || "")}</p>
          </div>
          <div class="course-card-body">
            <p class="course-description">${escapeHtml(course.descriptionHeading || course.description || "Sin descripción")}</p>
            <div class="chip-row">
              ${statuses
                .map(
                  (status) =>
                    `<span class="status-chip ${escapeHtml(status.className)}">${escapeHtml(status.label)}</span>`
                )
                .join("")}
            </div>
            <div class="meta-row">
              ${(course.schedule || []).map((slot) => `<span class="chip">${escapeHtml(slot)}</span>`).join("")}
            </div>
            <div class="course-actions">
              <button class="link-button" type="button" data-course-id="${escapeHtml(course.id)}">Abrir curso</button>
              <span class="course-meta-label">Local</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-course-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCourse = appState.courses.find((course) => course.id === button.dataset.courseId);
      if (!selectedCourse) {
        return;
      }

      appState.currentCourse = selectedCourse;
      renderCourseDetail();
      document.getElementById("curso-detalle").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderCourseDetail() {
  const course = appState.currentCourse;
  const attendanceRecords = course.attendance.records || [];
  const assignments = course.assignments || [];

  document.getElementById("course-detail").innerHTML = `
    <article class="detail-card">
      <div class="panel-header">
        <div>
          <span class="section-kicker">${escapeHtml(course.section || "Curso")}</span>
          <h3>${escapeHtml(course.name)}</h3>
        </div>
      </div>
      <p class="section-copy">${escapeHtml(course.description || "Sin descripción disponible.")}</p>
      <div class="meta-row">
        ${(course.schedule || []).map((slot) => `<span class="chip">${escapeHtml(slot)}</span>`).join("")}
      </div>
      <div class="tab-row">
        <span class="tab-chip">Novedades</span>
        <span class="tab-chip">Asistencia</span>
        <span class="tab-chip">Tareas</span>
        <span class="tab-chip">Calendario</span>
        <span class="tab-chip">Alumnos</span>
      </div>
    </article>

    <article class="detail-card">
      <div class="panel-header">
        <div>
          <span class="section-kicker">Asistencia</span>
          <h3>Último registro</h3>
        </div>
      </div>
      ${
        attendanceRecords.length
          ? `
            <div class="attendance-summary">
              <div>Fecha: ${escapeHtml(course.attendance.date)}</div>
              <div>${escapeHtml(course.attendance.presentCount)} presentes · ${escapeHtml(course.attendance.absentCount)} ausentes</div>
            </div>
            <div class="attendance-list">
              ${attendanceRecords
                .map(
                  (record) => `
                    <div class="attendance-row">
                      <span>${escapeHtml(record.student)}</span>
                      <span class="badge ${record.present ? "badge-success" : "badge-muted"}">
                        ${record.present ? "Presente" : "Ausente"}
                      </span>
                    </div>
                  `
                )
                .join("")}
            </div>
          `
          : `<p class="empty-state">Todavía no hay asistencias registradas para este curso.</p>`
      }
    </article>

    <article class="detail-card">
      <div class="panel-header">
        <div>
          <span class="section-kicker">Alumnos</span>
          <h3>Comisión</h3>
        </div>
      </div>
      ${
        course.students.length
          ? `
            <div class="student-list">
              ${course.students
                .map(
                  (student) => `
                    <div class="student-row">
                      <strong>${escapeHtml(student.name)}</strong>
                      <small>${escapeHtml(student.email)}</small>
                    </div>
                  `
                )
                 .join("")}
             </div>
           `
          : `<p class="empty-state">Todavía no hay alumnos cargados para este curso.</p>`
      }
    </article>
  `;

  renderTaskOverview(assignments);
}

function renderTaskOverview(currentAssignments = appState.currentCourse.assignments || []) {
  const tasksMarkup = currentAssignments.length
    ? currentAssignments
        .map(
          (assignment) => `
            <article class="task-card">
              <span class="badge ${statusClass[assignment.status] || "badge-muted"}">${escapeHtml(assignment.status)}</span>
              <h3>${escapeHtml(assignment.title)}</h3>
              <p>${escapeHtml(assignment.topic)}</p>
              <div class="task-meta">
                <small>Entrega: ${escapeHtml(assignment.dueDate)}</small>
                <small>Comentario: ${escapeHtml(assignment.comment)}</small>
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="task-card"><p class="empty-state">No hay tareas disponibles para este curso todavía.</p></article>`;

  document.getElementById("task-overview").innerHTML = tasksMarkup;
}

function renderEvents() {
  document.getElementById("event-list").innerHTML = AgendaDocenteData.events
    .map(
      (event) => `
        <article class="event-row">
          <div>
            <strong>${escapeHtml(event.title)}</strong>
            <p>${escapeHtml(event.description)}</p>
          </div>
          <div class="event-meta">
            <div>${escapeHtml(event.date)}</div>
            <small>${escapeHtml(event.courseName)}</small>
          </div>
        </article>
      `
    )
    .join("");
}

document.querySelectorAll(".sidebar-nav .sidebar-link").forEach((link) => {
  link.addEventListener("click", () => updateSidebarActiveLink(link.getAttribute("href")));
});

window.addEventListener("hashchange", () => updateSidebarActiveLink());

renderStats();
renderCourses();
renderCourseDetail();
renderTaskOverview();
renderEvents();
updateSidebarActiveLink();
