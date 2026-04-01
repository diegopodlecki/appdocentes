# Plan de desarrollo, pruebas y despliegue

## 1. Arquitectura objetivo

- Frontend: Next.js con App Router para dashboard, cursos, calendario e integraciones.
- Backend inicial recomendado: Supabase por velocidad de arranque, Postgres, auth y storage.
- Alternativa enterprise: API separada con NestJS y Postgres si se requiere logica mas compleja.
- Diseño de permisos: docentes administran cursos, asistencia y estados de tareas.

## 2. Fases de desarrollo

### Fase 0. Base del producto

- Definir entidades y relaciones.
- Crear design system minimo inspirado en Google Classroom sin copiarlo literalmente.
- Implementar mocks y rutas navegables.

### Fase 1. Fundaciones

- Autenticacion por email o proveedor institucional.
- Tablas y migraciones.
- Perfil docente y seleccion de escuela.

### Fase 2. Gestion academica

- CRUD de cursos.
- Horarios por curso.
- Gestion de alumnos e inscripciones.

### Fase 3. Asistencia

- Creacion de sesiones por fecha.
- Marcacion de presentes y ausentes.
- Reportes por alumno y curso.

### Fase 4. Tareas

- Alta y edicion de tareas con temario y comentarios.
- Estados controlados por docente: `Pendiente de entrega`, `En proceso`, `Aprobado`.
- Historial de cambios y auditoria.

### Fase 5. Calendario

- Eventos globales e internos por curso.
- Entregas, evaluaciones, reuniones, feriados y dias no laborables.
- Filtros por curso y tipo de evento.

### Fase 6. Integraciones

- Spike de Google Classroom con OAuth 2.0.
- Importacion de cursos.
- Publicacion de tareas y eventos seleccionados.

## 3. Estrategia de pruebas

- Unitarias: validacion de reglas de negocio y adaptadores de datos.
- Integracion: API routes, permisos y consultas a base de datos.
- E2E: flujos completos de crear curso, tomar asistencia, asignar tarea y ver calendario.
- Accesibilidad: contraste, foco, navegacion por teclado y etiquetas semanticas.

## 4. Despliegue

- Entorno recomendado: Vercel para frontend y Supabase como plataforma de datos.
- Variables de entorno por ambiente.
- Preview deployments por branch.
- Backups y politicas de retencion para datos academicos.
- Observabilidad con logs de errores, metricas y auditoria de acciones docentes.

## 5. Escalabilidad y mantenimiento

- Separar dominio, UI y acceso a datos desde el inicio.
- Centralizar tipos y estados de negocio.
- Versionar migraciones y seeds.
- Mantener feature flags para integraciones externas.
- Documentar permisos, decisiones arquitectonicas y contratos de API.
