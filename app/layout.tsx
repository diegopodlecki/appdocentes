import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agenda Docente",
  description: "Starter de agenda digital para docentes con cursos, asistencia y tareas."
};

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/calendario", label: "Calendario" },
  { href: "/integraciones", label: "Integraciones" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="shell">
          <aside className="sidebar">
            <div className="brand">
              <span className="brand-mark">AD</span>
              <div>
                <p>Agenda Docente</p>
                <span>Panel inspirado en Classroom</span>
              </div>
            </div>

            <nav className="nav">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>

            <section className="sidebar-card">
              <p>Proximo paso</p>
              <strong>Conectar Supabase</strong>
              <span>
                El starter ya separa cursos, asistencia, tareas y calendario para
                facilitar el backend real.
              </span>
            </section>
          </aside>

          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
