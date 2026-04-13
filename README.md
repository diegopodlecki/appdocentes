# Agenda Docente

Version estatica de una aplicacion web para docentes orientada a organizar cursos, asistencia, tareas y calendario institucional.

## Como probarla

1. Abri [`index.html`](./index.html) directamente en tu navegador.
2. Si preferis levantar un servidor local simple, podes usar `npx serve .` o cualquier extension de Live Server.

## Archivos principales

- `index.html`: estructura de la interfaz
- `styles.css`: estilos globales
- `script.js`: datos mock y renderizado dinamico
- `google-classroom.js`: OAuth 2.0 e importacion de cursos desde Google Classroom
- `docs/plan-desarrollo.md`: roadmap para evolucionar a una app completa con backend

## Incluye

- Dashboard principal con cursos estilo Classroom.
- Detalle de curso con horarios, asistencia, tareas y alumnos.
- Calendario global con eventos academicos.
- Seccion de integraciones con roadmap para Google Classroom.

## Google Classroom

- Reemplaza `TU_CLIENT_ID_AQUI.apps.googleusercontent.com` dentro de `google-classroom.js`.
- La app guarda el `accessToken` en `localStorage`.
- Si el token expira o la API falla, se muestran los cursos de ejemplo y aparece opcion de reconexion.

## Roadmap

1. Conectar autenticacion y persistencia con Supabase o una API propia.
2. Reemplazar los datos mock de `script.js` por consultas reales.
3. Agregar formularios CRUD y control por roles.
4. Incorporar pruebas y despliegue.

Mas detalle en [`docs/plan-desarrollo.md`](./docs/plan-desarrollo.md).
