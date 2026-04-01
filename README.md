# Agenda Docente

Starter de una aplicacion web para docentes orientada a organizar cursos, asistencia, tareas y calendario institucional.

## Incluye

- Dashboard principal con cursos estilo Classroom.
- Vista de curso con horarios, asistencia, tareas y alumnos.
- Calendario global con eventos academicos.
- Seccion de integraciones con roadmap para Google Classroom.
- Datos mock tipados para acelerar la futura conexion a backend real.

## Stack propuesto

- Next.js App Router
- TypeScript
- CSS global con componentes simples
- Futuro backend recomendado: Supabase/Postgres

## Puesta en marcha

1. Instalar dependencias con `npm install`
2. Ejecutar `npm run dev`
3. Abrir `http://localhost:3000`

## Modelo de dominio sugerido

- `users`
- `teacher_profiles`
- `schools`
- `courses`
- `course_schedules`
- `students`
- `enrollments`
- `attendance_sessions`
- `attendance_records`
- `assignments`
- `assignment_comments`
- `calendar_events`
- `integration_accounts`
- `audit_logs`

## Roadmap

1. Conectar autenticacion y persistencia con Supabase.
2. Reemplazar `data/mock-data.ts` por consultas reales.
3. Agregar formularios CRUD y control por roles.
4. Incorporar pruebas unitarias, integracion y E2E.
5. Desplegar en Vercel con base de datos gestionada.

Mas detalle en [`docs/plan-desarrollo.md`](./docs/plan-desarrollo.md).
