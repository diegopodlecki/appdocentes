import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { StatCard } from "@/components/stat-card";
import { calendarEvents, courses, integrationNotes } from "@/data/mock-data";

const nextEvents = calendarEvents.slice(0, 4);

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero">
        <div>
          <span className="eyebrow">Agenda academica centralizada</span>
          <h1>Una base lista para organizar cursos, asistencia, tareas y fechas clave.</h1>
          <p className="hero-copy">
            Este starter propone una experiencia cercana a Google Classroom, pero
            enfocada en el trabajo diario del docente y preparada para crecer con
            autenticacion, base de datos e integraciones.
          </p>
        </div>

        <div className="hero-panel">
          <p>Estado del starter</p>
          <ul className="plain-list">
            <li>3 cursos de ejemplo con horarios y resumen</li>
            <li>Asistencia por fecha con presentes y ausentes</li>
            <li>Tareas con temario, comentarios y estados</li>
            <li>Calendario global con vencimientos y feriados</li>
          </ul>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard label="Cursos activos" value={String(courses.length)} hint="Materias con vista detallada" />
        <StatCard label="Eventos proximos" value={String(nextEvents.length)} hint="Entrega, reunion y feriado" />
        <StatCard label="Integracion prioritaria" value="Google Classroom" hint="Viable por OAuth 2.0 y API oficial" />
      </section>

      <section className="section-heading">
        <div>
          <span className="eyebrow">Cursos</span>
          <h2>Panel principal del docente</h2>
        </div>
      </section>

      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>

      <section className="two-column">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">Agenda inmediata</span>
              <h3>Proximos eventos</h3>
            </div>
            <Link href="/calendario" className="text-link">
              Ver calendario completo
            </Link>
          </div>

          <div className="event-list">
            {nextEvents.map((event) => (
              <article key={event.id} className="event-row">
                <div>
                  <strong>{event.title}</strong>
                  <p>{event.courseName ?? "General"}</p>
                </div>
                <div className="event-meta">
                  <span>{event.date}</span>
                  <small>{event.type}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">Integraciones</span>
              <h3>Viabilidad con Google Classroom</h3>
            </div>
            <Link href="/integraciones" className="text-link">
              Ver analisis
            </Link>
          </div>

          <div className="note-list">
            {integrationNotes.map((note) => (
              <article key={note.title} className="note-card">
                <strong>{note.title}</strong>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
