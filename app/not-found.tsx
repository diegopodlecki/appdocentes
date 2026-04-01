import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-stack">
      <section className="panel">
        <span className="eyebrow">404</span>
        <h1>Curso no encontrado</h1>
        <p className="section-copy">
          La ruta solicitada no coincide con ninguno de los cursos de ejemplo.
        </p>
        <Link href="/" className="text-link">
          Volver al inicio
        </Link>
      </section>
    </div>
  );
}
