const data = {
  courses: [
    {
      id: "historia-3b",
      name: "Historia - 3° B",
      school: "Escuela Normal N° 5",
      description:
        "Curso orientado al estudio de procesos politicos y sociales latinoamericanos, con seguimiento semanal de actividades y evaluaciones.",
      schedule: ["Lunes · 08:00 - 09:20", "Miercoles · 10:00 - 11:20"],
      students: [
        { name: "Ana Suarez", email: "ana.suarez@escuela.edu" },
        { name: "Julian Perez", email: "julian.perez@escuela.edu" },
        { name: "Mora Diaz", email: "mora.diaz@escuela.edu" }
      ],
      attendance: {
        date: "2026-03-30",
        presentCount: 2,
        absentCount: 1,
        records: [
          { student: "Ana Suarez", present: true },
          { student: "Julian Perez", present: false },
          { student: "Mora Diaz", present: true }
        ]
      },
      assignments: [
        {
          title: "Linea de tiempo de revoluciones",
          topic: "Revoluciones atlanticas y sus impactos",
          comment: "Priorizar relaciones entre causas economicas y cambios politicos.",
          dueDate: "2026-04-07",
          status: "Pendiente de entrega"
        },
        {
          title: "Mapa conceptual",
          topic: "Procesos independentistas en America Latina",
          comment: "Se revisara claridad y uso de fuentes.",
          dueDate: "2026-03-28",
          status: "Aprobado"
        }
      ]
    },
    {
      id: "matematica-2a",
      name: "Matematica - 2° A",
      school: "Instituto del Sur",
      description:
        "Espacio para algebra y funciones con seguimiento de practicas, asistencia y trabajo por comisiones.",
      schedule: ["Martes · 07:30 - 08:50", "Jueves · 07:30 - 08:50"],
      students: [
        { name: "Lara Gomez", email: "lara.gomez@colegio.edu" },
        { name: "Tomas Ruiz", email: "tomas.ruiz@colegio.edu" },
        { name: "Valen Ortiz", email: "valen.ortiz@colegio.edu" }
      ],
      attendance: {
        date: "2026-03-31",
        presentCount: 3,
        absentCount: 0,
        records: [
          { student: "Lara Gomez", present: true },
          { student: "Tomas Ruiz", present: true },
          { student: "Valen Ortiz", present: true }
        ]
      },
      assignments: [
        {
          title: "Guia de ecuaciones",
          topic: "Ecuaciones lineales con una incognita",
          comment: "Resolver ejercicios 1 al 10 y justificar procedimiento.",
          dueDate: "2026-04-05",
          status: "En proceso"
        },
        {
          title: "Trabajo practico",
          topic: "Representacion grafica de funciones",
          comment: "Puede entregarse en parejas.",
          dueDate: "2026-04-10",
          status: "Pendiente de entrega"
        }
      ]
    },
    {
      id: "literatura-5c",
      name: "Literatura - 5° C",
      school: "Colegio del Centro",
      description:
        "Lectura, debate y escritura critica con evaluaciones, calendario de entregas y reuniones de seguimiento.",
      schedule: ["Lunes · 13:00 - 14:20", "Viernes · 11:00 - 12:20"],
      students: [
        { name: "Camila Rojas", email: "camila.rojas@centro.edu" },
        { name: "Nicolas Soto", email: "nicolas.soto@centro.edu" },
        { name: "Zoe Medina", email: "zoe.medina@centro.edu" }
      ],
      attendance: {
        date: "2026-03-28",
        presentCount: 2,
        absentCount: 1,
        records: [
          { student: "Camila Rojas", present: true },
          { student: "Nicolas Soto", present: true },
          { student: "Zoe Medina", present: false }
        ]
      },
      assignments: [
        {
          title: "Resena critica",
          topic: "Narrativa latinoamericana contemporanea",
          comment: "Se espera una postura argumentada con citas breves.",
          dueDate: "2026-04-11",
          status: "Pendiente de entrega"
        },
        {
          title: "Foro de lectura",
          topic: "Analisis de voz narrativa",
          comment: "Registrar participacion y comentar al menos dos intervenciones.",
          dueDate: "2026-04-02",
          status: "En proceso"
        }
      ]
    }
  ],
  events: [
    {
      title: "Entrega de guia de ecuaciones",
      description: "Cierre de recepcion y devolucion inicial.",
      date: "2026-04-05",
      type: "Entrega",
      courseName: "Matematica - 2° A"
    },
    {
      title: "Evaluacion parcial",
      description: "Instancia escrita sobre revoluciones e independencia.",
      date: "2026-04-08",
      type: "Evaluacion",
      courseName: "Historia - 3° B"
    },
    {
      title: "Reunion con familias",
      description: "Encuentro institucional para seguimiento pedagogico.",
      date: "2026-04-09",
      type: "Reunion",
      courseName: "General"
    },
    {
      title: "Entrega de resena critica",
      description: "Ultimo dia para subir archivo o registrar entrega manual.",
      date: "2026-04-11",
      type: "Entrega",
      courseName: "Literatura - 5° C"
    },
    {
      title: "Feriado nacional",
      description: "Dia no laborable con suspension de clases.",
      date: "2026-04-17",
      type: "Feriado",
      courseName: "General"
    }
  ],
  notes: [
    {
      title: "OAuth 2.0 obligatorio",
      body: "La integracion con Google Classroom necesita consentimiento explicito y manejo seguro de tokens."
    },
    {
      title: "Empezar con sync unidireccional",
      body: "Conviene iniciar importando cursos y luego exportar tareas, evitando conflictos bidireccionales tempranos."
    },
    {
      title: "Operacion sin integracion",
      body: "La app debe seguir siendo util incluso en escuelas sin Google Workspace o con restricciones institucionales."
    }
  ],
  milestones: [
    {
      phase: "Fase 1",
      title: "Conexion institucional",
      body: "Configurar credenciales, OAuth y vinculacion de cuentas docentes."
    },
    {
      phase: "Fase 2",
      title: "Importacion de cursos",
      body: "Traer cursos y metadata basica para evitar doble carga administrativa."
    },
    {
      phase: "Fase 3",
      title: "Publicacion de tareas",
      body: "Enviar tareas y fechas relevantes desde la agenda docente hacia Classroom."
    }
  ]
};

const statusClass = {
  "Pendiente de entrega": "badge-warning",
  "En proceso": "badge-info",
  Aprobado: "badge-approved"
};

let currentCourse = data.courses[0];

function renderStats() {
  const stats = [
    {
      label: "Cursos activos",
      value: data.courses.length,
      hint: "Materias con vista detallada"
    },
    {
      label: "Eventos proximos",
      value: data.events.length,
      hint: "Entregas, reuniones y feriados"
    },
    {
      label: "Integracion prioritaria",
      value: "Google Classroom",
      hint: "Viable por OAuth 2.0 y API oficial"
    }
  ];

  document.getElementById("stats").innerHTML = stats
    .map(
      (item) => `
        <article class="stat-card">
          <span class="eyebrow">${item.label}</span>
          <h3>${item.value}</h3>
          <p>${item.hint}</p>
        </article>
      `
    )
    .join("");
}

function renderCourses() {
  document.getElementById("course-grid").innerHTML = data.courses
    .map(
      (course) => `
        <article class="course-card">
          <div class="course-banner">
            <span class="eyebrow">${course.school}</span>
            <h3>${course.name}</h3>
          </div>
          <div class="course-body">
            <p>${course.description}</p>
            <div class="pill-row">
              ${course.schedule.map((slot) => `<span class="schedule-pill">${slot}</span>`).join("")}
            </div>
            <button class="course-button" data-course="${course.id}">Abrir curso</button>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".course-button").forEach((button) => {
    button.addEventListener("click", () => {
      currentCourse = data.courses.find((course) => course.id === button.dataset.course) || data.courses[0];
      renderCourseDetail();
      document.getElementById("curso").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderCourseDetail() {
  document.getElementById("course-detail").innerHTML = `
    <article class="panel">
      <div class="panel-heading">
        <div>
          <span class="eyebrow">${currentCourse.school}</span>
          <h3>${currentCourse.name}</h3>
        </div>
      </div>
      <p class="section-copy">${currentCourse.description}</p>
      <div class="pill-row">
        ${currentCourse.schedule.map((slot) => `<span class="schedule-pill">${slot}</span>`).join("")}
      </div>
      <div class="tab-strip">
        <span class="tab-chip">Novedades</span>
        <span class="tab-chip">Asistencia</span>
        <span class="tab-chip">Tareas</span>
        <span class="tab-chip">Calendario</span>
        <span class="tab-chip">Alumnos</span>
      </div>
    </article>

    <article class="panel">
      <div class="panel-heading">
        <div>
          <span class="eyebrow">Asistencia</span>
          <h3>Ultimo registro</h3>
        </div>
      </div>
      <p class="section-copy">${currentCourse.attendance.date}</p>
      <p class="section-copy">${currentCourse.attendance.presentCount} presentes · ${currentCourse.attendance.absentCount} ausentes</p>
      <div class="attendance-grid">
        ${currentCourse.attendance.records
          .map(
            (record) => `
              <div class="attendance-row">
                <span>${record.student}</span>
                <span class="badge ${record.present ? "badge-success" : "badge-muted"}">
                  ${record.present ? "Presente" : "Ausente"}
                </span>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="assignment-groups">
        ${currentCourse.assignments
          .map(
            (assignment) => `
              <article class="assignment-card">
                <span class="badge ${statusClass[assignment.status]}">${assignment.status}</span>
                <h3>${assignment.title}</h3>
                <p>${assignment.topic}</p>
                <small>Entrega: ${assignment.dueDate}</small>
                <small>Comentario: ${assignment.comment}</small>
              </article>
            `
          )
          .join("")}
      </div>
    </article>

    <article class="panel">
      <div class="panel-heading">
        <div>
          <span class="eyebrow">Alumnos</span>
          <h3>Comision</h3>
        </div>
      </div>
      <div class="student-list">
        ${currentCourse.students
          .map(
            (student) => `
              <div class="student-row">
                <strong>${student.name}</strong>
                <small>${student.email}</small>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderEvents() {
  document.getElementById("event-list").innerHTML = data.events
    .map(
      (event) => `
        <article class="event-row">
          <div>
            <strong>${event.title}</strong>
            <p>${event.description}</p>
          </div>
          <div class="event-meta">
            <div>${event.date}</div>
            <small>${event.courseName}</small>
          </div>
        </article>
      `
    )
    .join("");
}

function renderIntegrations() {
  document.getElementById("integration-notes").innerHTML = data.notes
    .map(
      (note) => `
        <article class="note-card">
          <strong>${note.title}</strong>
          <p>${note.body}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("integration-milestones").innerHTML = data.milestones
    .map(
      (item) => `
        <article class="milestone-card">
          <span>${item.phase}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

renderStats();
renderCourses();
renderCourseDetail();
renderEvents();
renderIntegrations();
