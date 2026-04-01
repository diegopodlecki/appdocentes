import Link from "next/link";
import type { Course } from "@/data/mock-data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className="course-banner">
        <span className="eyebrow">{course.school}</span>
        <h3>{course.name}</h3>
      </div>

      <div className="course-body">
        <p>{course.description}</p>

        <div className="course-meta">
          {course.schedule.map((slot) => (
            <span key={slot.day + slot.time} className="schedule-pill">
              {slot.day} · {slot.time}
            </span>
          ))}
        </div>

        <Link href={`/cursos/${course.id}`} className="course-link">
          Abrir curso
        </Link>
      </div>
    </article>
  );
}
