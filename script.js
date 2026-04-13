const STORAGE_KEY = "agenda-docente-local-state-v2";

const AgendaDocenteSeed = {
  courses: [
    {
      id: "historia-3b",
      name: "Historia - 3° B",
      section: "Escuela Normal N° 5",
      description: "Curso orientado al estudio de procesos políticos y sociales latinoamericanos.",
      descriptionHeading: "Procesos políticos y sociales",
      schedule: ["Lunes · 08:00 - 09:20", "Miércoles · 10:00 - 11:20"],
      students: [
        { id: "stu-hist-1", name: "Ana Suárez", email: "ana.suarez@escuela.edu" },
        { id: "stu-hist-2", name: "Julián Pérez", email: "julian.perez@escuela.edu" },
        { id: "stu-hist-3", name: "Mora Díaz", email: "mora.diaz@escuela.edu" }
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
          id: "asg-hist-1",
          title: "Línea de tiempo de revoluciones",
          topic: "Revoluciones atlánticas y sus impactos",
          comment: "Priorizar relaciones entre causas económicas y cambios políticos.",
          dueDate: "2026-04-07",
          status: "Pendiente de entrega"
        },
        {
          id: "asg-hist-2",
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
      name: "Matemática - 2° A",
      section: "Instituto del Sur",
      description: "Espacio para álgebra y funciones con seguimiento de prácticas y asistencia.",
      descriptionHeading: "Álgebra y funciones",
      schedule: ["Martes · 07:30 - 08:50", "Jueves · 07:30 - 08:50"],
      students: [
        { id: "stu-mat-1", name: "Lara Gómez", email: "lara.gomez@colegio.edu" },
        { id: "stu-mat-2", name: "Tomás Ruiz", email: "tomas.ruiz@colegio.edu" },
        { id: "stu-mat-3", name: "Valen Ortiz", email: "valen.ortiz@colegio.edu" }
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
          id: "asg-mat-1",
          title: "Guía de ecuaciones",
          topic: "Ecuaciones lineales con una incógnita",
          comment: "Resolver ejercicios 1 al 10 y justificar procedimiento.",
          dueDate: "2026-04-05",
          status: "En proceso"
        },
        {
          id: "asg-mat-2",
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
      name: "Literatura - 5° C",
      section: "Colegio del Centro",
      description: "Lectura, debate y escritura crítica con evaluaciones y calendario de entregas.",
      descriptionHeading: "Narrativa latinoamericana",
      schedule: ["Lunes · 13:00 - 14:20", "Viernes · 11:00 - 12:20"],
      students: [
        { id: "stu-lit-1", name: "Camila Rojas", email: "camila.rojas@centro.edu" },
        { id: "stu-lit-2", name: "Nicolás Soto", email: "nicolas.soto@centro.edu" },
        { id: "stu-lit-3", name: "Zoe Medina", email: "zoe.medina@centro.edu" }
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
          id: "asg-lit-1",
          title: "Reseña crítica",
          topic: "Narrativa latinoamericana contemporánea",
          comment: "Se espera una postura argumentada con citas breves.",
          dueDate: "2026-04-11",
          status: "Pendiente de entrega"
        },
        {
          id: "asg-lit-2",
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
      id: "evt-1",
      title: "Entrega de guía de ecuaciones",
      description: "Cierre de recepción y devolución inicial.",
      date: "2026-04-05",
      type: "Entrega",
      courseName: "Matemática - 2° A"
    },
    {
      id: "evt-2",
      title: "Evaluación parcial",
      description: "Instancia escrita sobre revoluciones e independencia.",
      date: "2026-04-08",
      type: "Evaluación",
      courseName: "Historia - 3° B"
    }
  ]
};

const statusClass = {
  "Pendiente de entrega": "badge-warning",
  "En proceso": "badge-info",
  Aprobado: "badge-approved"
};

const courseHeaderThemes = [
  "linear-gradient(135deg, #14532d, #22c55e)",
  "linear-gradient(135deg, #0f172a, #2563eb)",
  "linear-gradient(135deg, #7c2d12, #f97316)",
  "linear-gradient(135deg, #5b21b6, #a855f7)"
];

const appState = {
  data: loadState(),
  selectedCourseId: null,
  searchQuery: "",
  editingCourseId: null,
  editingTaskId: null,
  editingEventId: null,
  flashTimeoutId: null
};

appState.selectedCourseId = appState.data.courses[0]?.id ?? null;

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function normalizeCourse(course) {
  return {
    id: course.id || createId("course"),
    name: course.name || "Curso sin nombre",
    section: course.section || "Sin sección",
    description: course.description || "",
    descriptionHeading: course.descriptionHeading || course.description || "Sin resumen",
    schedule: Array.isArray(course.schedule) ? course.schedule.filter(Boolean) : [],
    students: (course.students || []).map((student) => ({
      id: student.id || createId("student"),
      name: student.name || "Alumno sin nombre",
      email: student.email || ""
    })),
    attendance: {
      date: course.attendance?.date || "Sin datos",
      presentCount: Number(course.attendance?.presentCount || 0),
      absentCount: Number(course.attendance?.absentCount || 0),
      records: Array.isArray(course.attendance?.records) ? course.attendance.records : []
    },
    assignments: (course.assignments || []).map((assignment) => ({
      id: assignment.id || createId("task"),
      title: assignment.title || "Actividad sin título",
      topic: assignment.topic || "",
      comment: assignment.comment || "",
      dueDate: assignment.dueDate || "",
      status: assignment.status || "Pendiente de entrega"
    }))
  };
}

function normalizeEvent(event) {
  return {
    id: event.id || createId("event"),
    title: event.title || "Evento sin título",
    description: event.description || "",
    date: event.date || "",
    type: event.type || "General",
    courseName: event.courseName || "General"
  };
}

function normalizeState(rawState) {
  return {
    courses: (rawState?.courses || AgendaDocenteSeed.courses).map(normalizeCourse),
    events: (rawState?.events || AgendaDocenteSeed.events).map(normalizeEvent)
  };
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? normalizeState(JSON.parse(stored)) : normalizeState(AgendaDocenteSeed);
  } catch {
    return normalizeState(AgendaDocenteSeed);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.data));
}

function getCurrentCourse() {
  const currentCourse = appState.data.courses.find((course) => course.id === appState.selectedCourseId);
  return currentCourse || appState.data.courses[0] || null;
}

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
  const hasPending = course.assignments.some((assignment) => assignment.status === "Pendiente de entrega");
  const hasInProgress = course.assignments.some((assignment) => assignment.status === "En proceso");

  return [
    { label: `${course.students.length} alumnos`, className: "status-active" },
    ...(hasPending ? [{ label: "Pendientes", className: "status-pending" }] : []),
    ...(hasInProgress ? [{ label: "En curso", className: "status-due" }] : [])
  ];
}

function updateSidebarActiveLink(hash = window.location.hash || "#inicio") {
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.classList.toggle("sidebar-link-active", link.getAttribute("href") === hash);
  });
}

function setFlashMessage(message, type = "success") {
  const flashNode = document.getElementById("flash-message");
  flashNode.textContent = message;
  flashNode.className = `flash-message flash-${type}`;

  if (appState.flashTimeoutId) {
    window.clearTimeout(appState.flashTimeoutId);
  }

  appState.flashTimeoutId = window.setTimeout(() => {
    flashNode.className = "flash-message hidden";
    flashNode.textContent = "";
  }, 2600);
}

function matchesSearch(textParts) {
  if (!appState.searchQuery.trim()) {
    return true;
  }

  const fullText = textParts.join(" ").toLowerCase();
  return fullText.includes(appState.searchQuery.trim().toLowerCase());
}

function renderStats() {
  const currentCourse = getCurrentCourse();
  const pendingTasks = appState.data.courses.flatMap((course) => course.assignments).filter(
    (assignment) => assignment.status === "Pendiente de entrega"
  ).length;
  const totalStudents = appState.data.courses.reduce((sum, course) => sum + course.students.length, 0);

  const stats = [
    {
      label: "Cursos activos",
      value: String(appState.data.courses.length),
      hint: "Comisiones listas para gestionar"
    },
    {
      label: "Estudiantes",
      value: String(totalStudents),
      hint: currentCourse ? `Curso activo: ${currentCourse.name}` : "Todavía no hay curso seleccionado"
    },
    {
      label: "Pendientes",
      value: String(pendingTasks),
      hint: "Actividades por revisar o entregar"
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

function renderSelectedCourseSummary() {
  const currentCourse = getCurrentCourse();
  const summaryNode = document.getElementById("selected-course-summary");

  if (!currentCourse) {
    summaryNode.innerHTML = `<p class="empty-state">Creá tu primer curso para empezar a cargar información.</p>`;
    return;
  }

  summaryNode.innerHTML = `
    <h4>${escapeHtml(currentCourse.name)}</h4>
    <p>${escapeHtml(currentCourse.section)}</p>
    <div class="summary-chip-grid">
      <span class="chip">${escapeHtml(currentCourse.students.length)} alumnos</span>
      <span class="chip">${escapeHtml(currentCourse.assignments.length)} actividades</span>
      <span class="chip">${escapeHtml(currentCourse.schedule.length)} horarios</span>
    </div>
    <p class="summary-copy">${escapeHtml(currentCourse.description)}</p>
  `;
}

function renderCourses() {
  const filteredCourses = appState.data.courses.filter((course) =>
    matchesSearch([course.name, course.section, course.description, ...(course.schedule || [])])
  );

  document.getElementById("course-grid").innerHTML = filteredCourses.length
    ? filteredCourses
        .map((course, index) => {
          const statuses = getCourseCardStatuses(course);

          return `
            <article class="course-card ${course.id === appState.selectedCourseId ? "course-card-selected" : ""}">
              <div class="course-card-header" style="background:${getCourseTheme(index)}">
                <h3>${escapeHtml(course.name)}</h3>
                <p>${escapeHtml(course.section)}</p>
              </div>
              <div class="course-card-body">
                <p class="course-description">${escapeHtml(course.descriptionHeading)}</p>
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
                  <button class="link-button" type="button" data-course-open="${escapeHtml(course.id)}">Abrir</button>
                  <button class="link-button" type="button" data-course-edit="${escapeHtml(course.id)}">Editar</button>
                  <button class="danger-button" type="button" data-course-delete="${escapeHtml(course.id)}">Borrar</button>
                </div>
              </div>
            </article>
          `;
        })
        .join("")
    : `<article class="panel-card empty-card"><p class="empty-state">No encontramos cursos para esa búsqueda.</p></article>`;

  document.querySelectorAll("[data-course-open]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedCourseId = button.dataset.courseOpen;
      renderAll();
      document.getElementById("curso-detalle").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-course-edit]").forEach((button) => {
    button.addEventListener("click", () => startCourseEdit(button.dataset.courseEdit));
  });

  document.querySelectorAll("[data-course-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteCourse(button.dataset.courseDelete));
  });
}

function renderCourseForm() {
  const editingCourse = appState.data.courses.find((course) => course.id === appState.editingCourseId);
  document.getElementById("course-form-title").textContent = editingCourse ? "Editar curso" : "Nuevo curso";
  document.getElementById("course-form-cancel").classList.toggle("hidden", !editingCourse);

  document.getElementById("course-id").value = editingCourse?.id || "";
  document.getElementById("course-name").value = editingCourse?.name || "";
  document.getElementById("course-section").value = editingCourse?.section || "";
  document.getElementById("course-heading").value = editingCourse?.descriptionHeading || "";
  document.getElementById("course-description").value = editingCourse?.description || "";
  document.getElementById("course-schedule").value = editingCourse?.schedule?.join(" | ") || "";
}

function renderCourseDetail() {
  const course = getCurrentCourse();
  const detailNode = document.getElementById("course-detail");

  if (!course) {
    detailNode.innerHTML = `
      <article class="detail-card">
        <p class="empty-state">Todavía no hay cursos cargados. Usá el editor de arriba para crear el primero.</p>
      </article>
    `;
    return;
  }

  const attendanceRecords = course.attendance.records || [];

  detailNode.innerHTML = `
    <article class="detail-card">
      <div class="panel-header">
        <div>
          <span class="section-kicker">${escapeHtml(course.section)}</span>
          <h3>${escapeHtml(course.name)}</h3>
        </div>
      </div>
      <p class="section-copy">${escapeHtml(course.description)}</p>
      <div class="meta-row">
        ${(course.schedule || []).map((slot) => `<span class="chip">${escapeHtml(slot)}</span>`).join("")}
      </div>
      <div class="tab-row">
        <span class="tab-chip">Resumen</span>
        <span class="tab-chip">${escapeHtml(course.students.length)} alumnos</span>
        <span class="tab-chip">${escapeHtml(course.assignments.length)} actividades</span>
      </div>
    </article>

    <article class="detail-card">
      <div class="panel-header">
        <div>
          <span class="section-kicker">Estudiantes</span>
          <h3>Comisión</h3>
        </div>
      </div>
      <form id="student-form" class="mini-form">
        <label class="field">
          <span>Nombre del estudiante</span>
          <input id="student-name" type="text" placeholder="Ej. Florencia Paredes" required />
        </label>
        <label class="field">
          <span>Email</span>
          <input id="student-email" type="email" placeholder="ejemplo@escuela.edu" required />
        </label>
        <button class="primary-button" type="submit">Agregar estudiante</button>
      </form>
      ${
        course.students.length
          ? `
            <div class="student-list">
              ${course.students
                .map(
                  (student) => `
                    <div class="student-row">
                      <div>
                        <strong>${escapeHtml(student.name)}</strong>
                        <small>${escapeHtml(student.email)}</small>
                      </div>
                      <button class="danger-button" type="button" data-student-delete="${escapeHtml(student.id)}">Quitar</button>
                    </div>
                  `
                )
                .join("")}
            </div>
          `
          : `<p class="empty-state">Todavía no hay estudiantes cargados para este curso.</p>`
      }
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
              <div>${escapeHtml(course.attendance.presentCount)} presentes · ${escapeHtml(
                course.attendance.absentCount
              )} ausentes</div>
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
  `;

  document.getElementById("student-form")?.addEventListener("submit", handleStudentSubmit);
  document.querySelectorAll("[data-student-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteStudent(button.dataset.studentDelete));
  });
}

function renderTaskOverview() {
  const currentCourse = getCurrentCourse();
  const taskNode = document.getElementById("task-overview");

  if (!currentCourse) {
    taskNode.innerHTML = `<article class="task-card"><p class="empty-state">Creá un curso para empezar con las actividades.</p></article>`;
    return;
  }

  const visibleAssignments = currentCourse.assignments.filter((assignment) =>
    matchesSearch([assignment.title, assignment.topic, assignment.comment, assignment.dueDate])
  );

  taskNode.innerHTML = visibleAssignments.length
    ? visibleAssignments
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
              <div class="task-actions">
                <button class="link-button" type="button" data-task-edit="${escapeHtml(assignment.id)}">Editar</button>
                <button class="danger-button" type="button" data-task-delete="${escapeHtml(assignment.id)}">Borrar</button>
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="task-card"><p class="empty-state">No hay actividades para mostrar con ese filtro.</p></article>`;

  document.querySelectorAll("[data-task-edit]").forEach((button) => {
    button.addEventListener("click", () => startTaskEdit(button.dataset.taskEdit));
  });

  document.querySelectorAll("[data-task-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteTask(button.dataset.taskDelete));
  });
}

function renderTaskForm() {
  const currentCourse = getCurrentCourse();
  const editingTask = currentCourse?.assignments.find((assignment) => assignment.id === appState.editingTaskId);

  document.getElementById("task-form-title").textContent = editingTask ? "Editar actividad" : "Nueva actividad";
  document.getElementById("task-form-cancel").classList.toggle("hidden", !editingTask);

  document.getElementById("task-id").value = editingTask?.id || "";
  document.getElementById("task-title").value = editingTask?.title || "";
  document.getElementById("task-topic").value = editingTask?.topic || "";
  document.getElementById("task-date").value = editingTask?.dueDate || "";
  document.getElementById("task-status").value = editingTask?.status || "Pendiente de entrega";
  document.getElementById("task-comment").value = editingTask?.comment || "";

  document.querySelector("#task-form button[type='submit']").disabled = !currentCourse;
}

function renderEvents() {
  const visibleEvents = appState.data.events
    .filter((event) => matchesSearch([event.title, event.description, event.date, event.type, event.courseName]))
    .sort((left, right) => left.date.localeCompare(right.date));

  document.getElementById("event-list").innerHTML = visibleEvents.length
    ? visibleEvents
        .map(
          (event) => `
            <article class="event-row">
              <div>
                <div class="event-label-row">
                  <strong>${escapeHtml(event.title)}</strong>
                  <span class="chip">${escapeHtml(event.type)}</span>
                </div>
                <p>${escapeHtml(event.description)}</p>
              </div>
              <div class="event-meta">
                <div>${escapeHtml(event.date)}</div>
                <small>${escapeHtml(event.courseName)}</small>
                <div class="event-actions">
                  <button class="link-button" type="button" data-event-edit="${escapeHtml(event.id)}">Editar</button>
                  <button class="danger-button" type="button" data-event-delete="${escapeHtml(event.id)}">Borrar</button>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="panel-card empty-card"><p class="empty-state">No hay eventos que coincidan con tu búsqueda.</p></article>`;

  document.querySelectorAll("[data-event-edit]").forEach((button) => {
    button.addEventListener("click", () => startEventEdit(button.dataset.eventEdit));
  });

  document.querySelectorAll("[data-event-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteEvent(button.dataset.eventDelete));
  });
}

function renderEventForm() {
  const editingEvent = appState.data.events.find((event) => event.id === appState.editingEventId);

  document.getElementById("event-form-title").textContent = editingEvent ? "Editar evento" : "Nuevo evento";
  document.getElementById("event-form-cancel").classList.toggle("hidden", !editingEvent);

  document.getElementById("event-id").value = editingEvent?.id || "";
  document.getElementById("event-title").value = editingEvent?.title || "";
  document.getElementById("event-description").value = editingEvent?.description || "";
  document.getElementById("event-date").value = editingEvent?.date || "";
  document.getElementById("event-type").value = editingEvent?.type || "";
  document.getElementById("event-course-name").value = editingEvent?.courseName || "";
}

function renderAll() {
  if (!getCurrentCourse() && appState.data.courses[0]) {
    appState.selectedCourseId = appState.data.courses[0].id;
  }

  renderStats();
  renderSelectedCourseSummary();
  renderCourses();
  renderCourseForm();
  renderCourseDetail();
  renderTaskOverview();
  renderTaskForm();
  renderEvents();
  renderEventForm();
  updateSidebarActiveLink();
}

function startCourseEdit(courseId) {
  appState.editingCourseId = courseId;
  renderCourseForm();
  document.getElementById("course-name").focus();
  document.getElementById("course-form").scrollIntoView({ behavior: "smooth", block: "center" });
}

function startTaskEdit(taskId) {
  appState.editingTaskId = taskId;
  renderTaskForm();
  document.getElementById("task-title").focus();
  document.getElementById("task-form").scrollIntoView({ behavior: "smooth", block: "center" });
}

function startEventEdit(eventId) {
  appState.editingEventId = eventId;
  renderEventForm();
  document.getElementById("event-title").focus();
  document.getElementById("event-form").scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetCourseFormState() {
  appState.editingCourseId = null;
  renderCourseForm();
}

function resetTaskFormState() {
  appState.editingTaskId = null;
  renderTaskForm();
}

function resetEventFormState() {
  appState.editingEventId = null;
  renderEventForm();
}

function handleCourseSubmit(event) {
  event.preventDefault();

  const draft = {
    id: document.getElementById("course-id").value || createId("course"),
    name: document.getElementById("course-name").value.trim(),
    section: document.getElementById("course-section").value.trim(),
    descriptionHeading: document.getElementById("course-heading").value.trim(),
    description: document.getElementById("course-description").value.trim(),
    schedule: document
      .getElementById("course-schedule")
      .value.split("|")
      .map((item) => item.trim())
      .filter(Boolean),
    students: [],
    attendance: {
      date: "Sin datos",
      presentCount: 0,
      absentCount: 0,
      records: []
    },
    assignments: []
  };

  if (appState.editingCourseId) {
    appState.data.courses = appState.data.courses.map((course) =>
      course.id === appState.editingCourseId
        ? {
            ...course,
            name: draft.name,
            section: draft.section,
            descriptionHeading: draft.descriptionHeading,
            description: draft.description,
            schedule: draft.schedule
          }
        : course
    );
    setFlashMessage("Curso actualizado.");
  } else {
    appState.data.courses = [normalizeCourse(draft), ...appState.data.courses];
    appState.selectedCourseId = draft.id;
    setFlashMessage("Curso creado.");
  }

  saveState();
  appState.editingCourseId = null;
  renderAll();
}

function handleStudentSubmit(event) {
  event.preventDefault();

  const currentCourse = getCurrentCourse();
  if (!currentCourse) {
    return;
  }

  const student = {
    id: createId("student"),
    name: document.getElementById("student-name").value.trim(),
    email: document.getElementById("student-email").value.trim()
  };

  appState.data.courses = appState.data.courses.map((course) =>
    course.id === currentCourse.id ? { ...course, students: [...course.students, student] } : course
  );

  saveState();
  renderAll();
  setFlashMessage("Estudiante agregado.");
}

function handleTaskSubmit(event) {
  event.preventDefault();

  const currentCourse = getCurrentCourse();
  if (!currentCourse) {
    setFlashMessage("Primero creá o seleccioná un curso.", "warning");
    return;
  }

  const draft = {
    id: document.getElementById("task-id").value || createId("task"),
    title: document.getElementById("task-title").value.trim(),
    topic: document.getElementById("task-topic").value.trim(),
    dueDate: document.getElementById("task-date").value,
    status: document.getElementById("task-status").value,
    comment: document.getElementById("task-comment").value.trim()
  };

  appState.data.courses = appState.data.courses.map((course) => {
    if (course.id !== currentCourse.id) {
      return course;
    }

    if (appState.editingTaskId) {
      return {
        ...course,
        assignments: course.assignments.map((assignment) =>
          assignment.id === appState.editingTaskId ? draft : assignment
        )
      };
    }

    return {
      ...course,
      assignments: [draft, ...course.assignments]
    };
  });

  saveState();
  const wasEditing = Boolean(appState.editingTaskId);
  appState.editingTaskId = null;
  renderAll();
  setFlashMessage(wasEditing ? "Actividad actualizada." : "Actividad creada.");
}

function handleEventSubmit(event) {
  event.preventDefault();

  const draft = {
    id: document.getElementById("event-id").value || createId("event"),
    title: document.getElementById("event-title").value.trim(),
    description: document.getElementById("event-description").value.trim(),
    date: document.getElementById("event-date").value,
    type: document.getElementById("event-type").value.trim(),
    courseName: document.getElementById("event-course-name").value.trim()
  };

  if (appState.editingEventId) {
    appState.data.events = appState.data.events.map((item) => (item.id === appState.editingEventId ? draft : item));
  } else {
    appState.data.events = [draft, ...appState.data.events];
  }

  saveState();
  const wasEditing = Boolean(appState.editingEventId);
  appState.editingEventId = null;
  renderAll();
  setFlashMessage(wasEditing ? "Evento actualizado." : "Evento creado.");
}

function deleteCourse(courseId) {
  const course = appState.data.courses.find((item) => item.id === courseId);
  if (!course || !window.confirm(`¿Querés borrar el curso "${course.name}"?`)) {
    return;
  }

  appState.data.courses = appState.data.courses.filter((item) => item.id !== courseId);
  if (appState.selectedCourseId === courseId) {
    appState.selectedCourseId = appState.data.courses[0]?.id || null;
  }
  if (appState.editingCourseId === courseId) {
    appState.editingCourseId = null;
  }

  saveState();
  renderAll();
  setFlashMessage("Curso eliminado.", "warning");
}

function deleteStudent(studentId) {
  const currentCourse = getCurrentCourse();
  if (!currentCourse) {
    return;
  }

  appState.data.courses = appState.data.courses.map((course) =>
    course.id === currentCourse.id
      ? { ...course, students: course.students.filter((student) => student.id !== studentId) }
      : course
  );

  saveState();
  renderAll();
  setFlashMessage("Estudiante eliminado.", "warning");
}

function deleteTask(taskId) {
  const currentCourse = getCurrentCourse();
  if (!currentCourse) {
    return;
  }

  appState.data.courses = appState.data.courses.map((course) =>
    course.id === currentCourse.id
      ? { ...course, assignments: course.assignments.filter((assignment) => assignment.id !== taskId) }
      : course
  );

  if (appState.editingTaskId === taskId) {
    appState.editingTaskId = null;
  }

  saveState();
  renderAll();
  setFlashMessage("Actividad eliminada.", "warning");
}

function deleteEvent(eventId) {
  appState.data.events = appState.data.events.filter((event) => event.id !== eventId);

  if (appState.editingEventId === eventId) {
    appState.editingEventId = null;
  }

  saveState();
  renderAll();
  setFlashMessage("Evento eliminado.", "warning");
}

function resetDemoState() {
  if (!window.confirm("¿Querés restaurar los datos demo? Se perderán los cambios guardados en este navegador.")) {
    return;
  }

  appState.data = normalizeState(deepClone(AgendaDocenteSeed));
  appState.selectedCourseId = appState.data.courses[0]?.id || null;
  appState.editingCourseId = null;
  appState.editingTaskId = null;
  appState.editingEventId = null;
  saveState();
  renderAll();
  setFlashMessage("Datos demo restaurados.");
}

document.querySelectorAll(".sidebar-nav .sidebar-link").forEach((link) => {
  link.addEventListener("click", () => updateSidebarActiveLink(link.getAttribute("href")));
});

window.addEventListener("hashchange", () => updateSidebarActiveLink());
document.getElementById("search-input").addEventListener("input", (event) => {
  appState.searchQuery = event.target.value;
  renderCourses();
  renderTaskOverview();
  renderEvents();
});
document.getElementById("course-form").addEventListener("submit", handleCourseSubmit);
document.getElementById("task-form").addEventListener("submit", handleTaskSubmit);
document.getElementById("event-form").addEventListener("submit", handleEventSubmit);
document.getElementById("course-form-cancel").addEventListener("click", resetCourseFormState);
document.getElementById("task-form-cancel").addEventListener("click", resetTaskFormState);
document.getElementById("event-form-cancel").addEventListener("click", resetEventFormState);
document.getElementById("new-course-button").addEventListener("click", () => {
  resetCourseFormState();
  document.getElementById("course-form").scrollIntoView({ behavior: "smooth", block: "center" });
  document.getElementById("course-name").focus();
});
document.getElementById("new-task-button").addEventListener("click", () => {
  resetTaskFormState();
  document.getElementById("task-form").scrollIntoView({ behavior: "smooth", block: "center" });
  document.getElementById("task-title").focus();
});
document.getElementById("new-event-button").addEventListener("click", () => {
  resetEventFormState();
  document.getElementById("event-form").scrollIntoView({ behavior: "smooth", block: "center" });
  document.getElementById("event-title").focus();
});
document.getElementById("focus-course-form").addEventListener("click", () => {
  document.getElementById("new-course-button").click();
});
document.getElementById("focus-event-form").addEventListener("click", () => {
  document.getElementById("new-event-button").click();
});
document.getElementById("fab-task-button").addEventListener("click", () => {
  document.getElementById("new-task-button").click();
});
document.getElementById("reset-demo-button").addEventListener("click", resetDemoState);

renderAll();
