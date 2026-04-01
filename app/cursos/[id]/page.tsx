import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AssignmentStatus,
  courseById,
  courseStatusLabel,
  courseStatusTone
} from "@/data/mock-data";

type CoursePageProps = {
  params: Promise<{
    id: string;
  }>;
};

const tabLabels = ["Novedades", "Asistencia", "Tareas", "Calendario", "Alumnos"];

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courseById[id];

  if (!course) {
    notFound();
  }

  const latestAttendance = course.attendance[0];
  const assignmentsByStatus = (
    ["pending_delivery", "in_progress", "approved"] as AssignmentStatus[]
  ).map((status) => ({
    status,
    label: courseStatusLabel[status],
    tone: courseStatusTone[status],
    items: course.assignments.filter((assignment) => assignment.status === status)
  }));

  return (
    <div className="page-stack">
      <div className="back-link">
        <Link href="/">Volver al panel</Link>
      </div>

      <section className="hero course-hero">
        <div>
          <span className="eyebrow">{course.school}</span>
          <h1>{course.name}</h1>
          <p className="hero-copy">{course.description}</p>
          <div className="pill-row">
            {course.schedule.map((slot) => (
              <span key={slot.day + slot.time} className="schedule-pill">
                {slot.day} · {slot.time}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <p>Vista del curso</p>
          <div className="tab-strip">
            {tabLabels.map((tab) => (
              <span key={tab} className="tab-chip">
                {tab}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="three-column">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">Asistencia</span>
              <h2>Ultimo registro</h2>
            </div>
          </div>

          <div className="attendance-summary">
            <strong>{latestAttendance.date}</strong>
            <p>{latestAttendance.presentCount} presentes</p>
            <p>{latestAttendance.absentCount} ausentes</p>
          </div>

          <div className="attendance-grid">
            {latestAttendance.records.map((student) => (
              <div key={student.student} className="attendance-row">
                <span>{student.student}</span>
                <small className={student.present ? "badge badge-success" : "badge badge-muted"}>
                  {student.present ? "Presente" : "Ausente"}
                </small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">Tareas</span>
              <h2>Seguimiento docente</h2>
            </div>
          </div>

          <div className="assignment-groups">
            {assignmentsByStatus.map((group) => (
              <section key={group.status} className="assignment-group">
                <div className="assignment-heading">
                  <span className={`badge ${group.tone}`}>{group.label}</span>
                </div>

                {group.items.map((assignment) => (
                  <article key={assignment.id} className="assignment-card">
                    <strong>{assignment.title}</strong>
                    <p>{assignment.topic}</p>
                    <small>Entrega: {assignment.dueDate}</small>
                    <small>Comentario: {assignment.comment}</small>
                  </article>
                ))}
              </section>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">Alumnos</span>
              <h2>Comision</h2>
            </div>
          </div>

          <div className="student-list">
            {course.students.map((student) => (
              <div key={student.id} className="student-row">
                <strong>{student.name}</strong>
                <small>{student.email}</small>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
