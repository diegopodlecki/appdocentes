export type AssignmentStatus = "pending_delivery" | "in_progress" | "approved";

export type Student = {
  id: string;
  name: string;
  email: string;
};

export type AttendanceRecord = {
  student: string;
  present: boolean;
};

export type AttendanceSession = {
  date: string;
  presentCount: number;
  absentCount: number;
  records: AttendanceRecord[];
};

export type Assignment = {
  id: string;
  title: string;
  topic: string;
  comment: string;
  dueDate: string;
  status: AssignmentStatus;
};

export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  courseName?: string;
};

export type Course = {
  id: string;
  name: string;
  school: string;
  description: string;
  schedule: {
    day: string;
    time: string;
  }[];
  students: Student[];
  attendance: AttendanceSession[];
  assignments: Assignment[];
};

export const courseStatusLabel: Record<AssignmentStatus, string> = {
  pending_delivery: "Pendiente de entrega",
  in_progress: "En proceso",
  approved: "Aprobado"
};

export const courseStatusTone: Record<AssignmentStatus, string> = {
  pending_delivery: "badge-warning",
  in_progress: "badge-info",
  approved: "badge-approved"
};

export const courses: Course[] = [
  {
    id: "historia-3b",
    name: "Historia - 3° B",
    school: "Escuela Normal N° 5",
    description:
      "Curso orientado al estudio de procesos politicos y sociales latinoamericanos, con seguimiento semanal de actividades y evaluaciones.",
    schedule: [
      { day: "Lunes", time: "08:00 - 09:20" },
      { day: "Miercoles", time: "10:00 - 11:20" }
    ],
    students: [
      { id: "s1", name: "Ana Suarez", email: "ana.suarez@escuela.edu" },
      { id: "s2", name: "Julian Perez", email: "julian.perez@escuela.edu" },
      { id: "s3", name: "Mora Diaz", email: "mora.diaz@escuela.edu" }
    ],
    attendance: [
      {
        date: "2026-03-30",
        presentCount: 2,
        absentCount: 1,
        records: [
          { student: "Ana Suarez", present: true },
          { student: "Julian Perez", present: false },
          { student: "Mora Diaz", present: true }
        ]
      }
    ],
    assignments: [
      {
        id: "a1",
        title: "Linea de tiempo de revoluciones",
        topic: "Revoluciones atlanticas y sus impactos",
        comment: "Priorizar relaciones entre causas economicas y cambios politicos.",
        dueDate: "2026-04-07",
        status: "pending_delivery"
      },
      {
        id: "a2",
        title: "Mapa conceptual",
        topic: "Procesos independentistas en America Latina",
        comment: "Se revisara claridad y uso de fuentes.",
        dueDate: "2026-03-28",
        status: "approved"
      }
    ]
  },
  {
    id: "matematica-2a",
    name: "Matematica - 2° A",
    school: "Instituto del Sur",
    description:
      "Espacio para algebra y funciones con seguimiento de practicas, asistencia y trabajo por comisiones.",
    schedule: [
      { day: "Martes", time: "07:30 - 08:50" },
      { day: "Jueves", time: "07:30 - 08:50" }
    ],
    students: [
      { id: "s4", name: "Lara Gomez", email: "lara.gomez@colegio.edu" },
      { id: "s5", name: "Tomas Ruiz", email: "tomas.ruiz@colegio.edu" },
      { id: "s6", name: "Valen Ortiz", email: "valen.ortiz@colegio.edu" }
    ],
    attendance: [
      {
        date: "2026-03-31",
        presentCount: 3,
        absentCount: 0,
        records: [
          { student: "Lara Gomez", present: true },
          { student: "Tomas Ruiz", present: true },
          { student: "Valen Ortiz", present: true }
        ]
      }
    ],
    assignments: [
      {
        id: "a3",
        title: "Guia de ecuaciones",
        topic: "Ecuaciones lineales con una incognita",
        comment: "Resolver ejercicios 1 al 10 y justificar procedimiento.",
        dueDate: "2026-04-05",
        status: "in_progress"
      },
      {
        id: "a4",
        title: "Trabajo practico",
        topic: "Representacion grafica de funciones",
        comment: "Puede entregarse en parejas.",
        dueDate: "2026-04-10",
        status: "pending_delivery"
      }
    ]
  },
  {
    id: "literatura-5c",
    name: "Literatura - 5° C",
    school: "Colegio del Centro",
    description:
      "Lectura, debate y escritura critica con evaluaciones, calendario de entregas y reuniones de seguimiento.",
    schedule: [
      { day: "Lunes", time: "13:00 - 14:20" },
      { day: "Viernes", time: "11:00 - 12:20" }
    ],
    students: [
      { id: "s7", name: "Camila Rojas", email: "camila.rojas@centro.edu" },
      { id: "s8", name: "Nicolas Soto", email: "nicolas.soto@centro.edu" },
      { id: "s9", name: "Zoe Medina", email: "zoe.medina@centro.edu" }
    ],
    attendance: [
      {
        date: "2026-03-28",
        presentCount: 2,
        absentCount: 1,
        records: [
          { student: "Camila Rojas", present: true },
          { student: "Nicolas Soto", present: true },
          { student: "Zoe Medina", present: false }
        ]
      }
    ],
    assignments: [
      {
        id: "a5",
        title: "Resena critica",
        topic: "Narrativa latinoamericana contemporanea",
        comment: "Se espera una postura argumentada con citas breves.",
        dueDate: "2026-04-11",
        status: "pending_delivery"
      },
      {
        id: "a6",
        title: "Foro de lectura",
        topic: "Analisis de voz narrativa",
        comment: "Registrar participacion y comentar al menos dos intervenciones.",
        dueDate: "2026-04-02",
        status: "in_progress"
      }
    ]
  }
];

export const courseById = Object.fromEntries(courses.map((course) => [course.id, course])) as Record<
  string,
  Course
>;

export const calendarEvents: CalendarEvent[] = [
  {
    id: "e1",
    title: "Entrega de guia de ecuaciones",
    description: "Cierre de recepcion y devolucion inicial.",
    date: "2026-04-05",
    type: "Entrega",
    courseName: "Matematica - 2° A"
  },
  {
    id: "e2",
    title: "Evaluacion parcial",
    description: "Instancia escrita sobre revoluciones e independencia.",
    date: "2026-04-08",
    type: "Evaluacion",
    courseName: "Historia - 3° B"
  },
  {
    id: "e3",
    title: "Reunion con familias",
    description: "Encuentro institucional para seguimiento pedagogico.",
    date: "2026-04-09",
    type: "Reunion"
  },
  {
    id: "e4",
    title: "Entrega de resena critica",
    description: "Ultimo dia para subir archivo o registrar entrega manual.",
    date: "2026-04-11",
    type: "Entrega",
    courseName: "Literatura - 5° C"
  },
  {
    id: "e5",
    title: "Feriado nacional",
    description: "Dia no laborable con suspension de clases.",
    date: "2026-04-17",
    type: "Feriado"
  }
];

export const integrationNotes = [
  {
    title: "OAuth 2.0 obligatorio",
    body:
      "La integracion con Google Classroom necesita consentimiento explicito y manejo seguro de tokens por docente o institucion."
  },
  {
    title: "Empezar con sync unidireccional",
    body:
      "Conviene iniciar importando cursos y luego exportar tareas, evitando conflictos bidireccionales en la primera version."
  },
  {
    title: "Permisos y alcance",
    body:
      "No todas las escuelas tendran la misma configuracion de Google Workspace, por lo que la app debe soportar operar tambien sin esa integracion."
  }
];

export const integrationMilestones = [
  {
    phase: "Fase 1",
    title: "Conexion institucional",
    body:
      "Configurar credenciales, OAuth y vinculacion de cuentas para docentes administradores."
  },
  {
    phase: "Fase 2",
    title: "Importacion de cursos",
    body:
      "Traer cursos, docentes y metadata basica para evitar doble carga administrativa."
  },
  {
    phase: "Fase 3",
    title: "Publicacion de tareas",
    body:
      "Enviar tareas y fechas relevantes desde la agenda docente hacia Classroom."
  },
  {
    phase: "Fase 4",
    title: "Sincronizacion incremental",
    body:
      "Definir reglas de conflicto, auditoria y reintentos para mantener consistencia entre sistemas."
  }
];
