import { integrationMilestones, integrationNotes } from "@/data/mock-data";

export default function IntegrationsPage() {
  return (
    <div className="page-stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">Integraciones</span>
          <h1>Google Classroom</h1>
          <p className="section-copy">
            La integracion es viable y conviene encararla por fases para reducir
            complejidad, permisos sensibles y conflictos de sincronizacion.
          </p>
        </div>
      </section>

      <section className="two-column">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">Hallazgos</span>
              <h2>Resumen tecnico</h2>
            </div>
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

        <div className="panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">Roadmap</span>
              <h2>Fases sugeridas</h2>
            </div>
          </div>
          <div className="milestone-list">
            {integrationMilestones.map((item) => (
              <article key={item.phase} className="milestone-card">
                <span>{item.phase}</span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
