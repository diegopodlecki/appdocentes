import { calendarEvents } from "@/data/mock-data";

export default function CalendarPage() {
  return (
    <div className="page-stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">Calendario</span>
          <h1>Fechas importantes</h1>
          <p className="section-copy">
            Vista base para vencimientos, evaluaciones, reuniones institucionales
            y feriados o dias no laborables.
          </p>
        </div>
      </section>

      <section className="panel">
        <div className="event-list">
          {calendarEvents.map((event) => (
            <article key={event.id} className="event-row">
              <div>
                <strong>{event.title}</strong>
                <p>{event.description}</p>
              </div>
              <div className="event-meta">
                <span>{event.date}</span>
                <small>{event.courseName ?? event.type}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
