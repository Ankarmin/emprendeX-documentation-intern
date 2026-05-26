# Plan de Exposicion - Examen Parcial N1

> **Proyecto:** EmprendeX
> **Curso:** Gestion de la Configuracion y Mantenimiento de Software
> **Docente:** Dra. Marlene Reyes
> **Tiempo maximo:** 20 minutos
> **Equipo:** 8 integrantes
> **Rubrica:** 20 puntos (10 Documentacion SCM + 10 Desarrollo del Sistema)

---

## Ponderacion de la Rubrica

### Seccion I: Documentacion SCM (10 pts)

| Criterio | Descripcion | Pts |
|----------|-------------|-----|
| C1 | Plan de Gestion de Configuracion (SCMP) | 2 |
| C2 | Linea Base del Proyecto | 2 |
| C3 | Seguimiento y Trazabilidad | 2 |
| C4 | Gestion de Versiones y Notas de Version | 2 |
| C5 | Informe Parcial de SCM | 2 |

### Seccion II: Desarrollo del Sistema (10 pts)

| Criterio | Descripcion | Pts |
|----------|-------------|-----|
| S1 | Ambiente Controlado y Repositorio | 2 |
| S2 | Control de Cambios Aplicado al Sistema | 2 |
| S3 | Avance Funcional del Sistema (50%) | 4 |
| S4 | Sustentacion Tecnica del Proyecto | 2 |

> **Consideraciones clave de la rubrica:**
> - El sistema debe evidenciar uso de herramientas SCM (GitHub).
> - El sistema debe encontrarse implementado al menos al **50% funcional**.
> - Se evalua: gestion de configuracion, control de cambios, trazabilidad, versionamiento y funcionamiento.
> - **La sustentacion tecnica es obligatoria para todos los integrantes.**

---

## Estructura General

| # | Bloque | Criterio | Pts | Tiempo | Acum | Expositor(es) |
|---|--------|----------|-----|--------|------|---------------|
| 1 | Intro + S1: Ambiente Controlado y Repositorio | S1 | 2 | 2:00 | 2:00 | Jim |
| 2 | C1: Plan de Gestion de Configuracion (SCMP) | C1 | 2 | 2:00 | 4:00 | Jim |
| 3 | C2: Linea Base del Proyecto | C2 | 2 | 1:30 | 5:30 | David |
| 4 | C3: Seguimiento y Trazabilidad | C3 | 2 | 1:30 | 7:00 | Yessly |
| 5 | C4: Gestion de Versiones y Release Notes | C4 | 2 | 1:30 | 8:30 | Joshua |
| 6 | S2: Control de Cambios | S2 | 2 | 2:00 | 10:30 | Diego Espinoza |
| 7 | C5: Informe Parcial de SCM | C5 | 2 | 1:00 | 11:30 | Jim |
| 8 | **S3: DEMO — Avance Funcional (50%)** | S3 | **4** | 3:30 | 15:00 | Joshua + David |
| 9 | S4: Sustentacion Tecnica (TODOS) | S4 | 2 | 4:00 | 19:00 | Los 8 integrantes |
| 10 | Cierre | — | — | 0:30 | 19:30 | Jim |
| — | Buffer / Preguntas | — | — | 0:30 | 20:00 | — |

---

## Bloque 1: Introduccion y S1 — Ambiente Controlado y Repositorio (2 pts)

- **Expositor:** Jim Bryan Jordan Segovia Valencia *(Lider de Proyecto)*
- **Tiempo:** 2:00 min

| Punto a cubrir | Detalle |
|----------------|---------|
| Que es EmprendeX | Plataforma modular de gestion para microemprendedores que venden por Instagram, WhatsApp y ferias. |
| Problema y solucion | Desorganizacion cronica → Centro operativo accesible con modulos activables. |
| Modelo de negocio | Freemium: plan base gratuito + modulos premium por suscripcion. |
| **S1: Ambiente controlado** | Dos ambientes definidos: **Desarrollo** (commits frecuentes, ramas feature/fix) y **Baseline academica** (`main` al cierre del Sprint 1). |
| **S1: Repositorios** | `Ankarmin/emprendeX-web` (NestJS), `JimSegovia/emprendeX-mobile` (React Native + Expo), sitio de documentacion (Starlight). |
| Artefactos bajo configuracion | Codigo backend, codigo mobile, documentacion, disenos Figma, workflows CI/CD. |
| Herramientas | Git + GitHub, Jira (gestion Scrum), Figma (diseno), Railway (despliegue), Google Drive (recursos). |

**Material de apoyo sugerido:**
- `src/content/docs/proyecto/sobre-emprendex.mdx`
- `src/content/docs/proyecto/equipo.mdx`
- `src/content/docs/scm/index.mdx` (Tab: Entorno y Planificacion)
- `src/content/docs/guias/entorno.md`

---

## Bloque 2: C1 — Plan de Gestion de Configuracion (SCMP) (2 pts)

- **Expositor:** Jim Bryan Jordan Segovia Valencia *(Gestor de la Configuracion)*
- **Tiempo:** 2:00 min

| Componente del SCMP | Evidencia en EmprendeX |
|---------------------|------------------------|
| **Politicas** | `main` protegida (no push directo), PR obligatorio con revision, Squash and Merge. |
| **Responsables** | **CCB** (Comite de Control de Cambios): Jim, Joshua, David, Diego E. — **Bibliotecario**: Christian, Diego A., Sebastian, Yessly. — **Gestor SCM**: Jim, David. |
| **Herramientas** | Git + GitHub para versionado, Jira para seguimiento, Figma como fuente de diseno, Railway para despliegue. |
| **Procedimientos** | Convencion de commits (Conventional Commits en espanol), flujo de PRs (24h para revision), estrategia de ramas (GitHub Flow simplificado: `main`, `feature/`, `fix/`, `docs/`). |
| **Convencion de commits** | `feat(scope): descripcion` / `fix(scope): descripcion` / `chore(scope): descripcion` / `docs(scope): descripcion` |

**Material de apoyo sugerido:**
- `src/content/docs/guias/git.md`
- `src/content/docs/proyecto/equipo.mdx` (seccion Roles SCM)
- `src/content/docs/scm/index.mdx`

---

## Bloque 3: C2 — Linea Base del Proyecto (2 pts)

- **Expositor:** David Sebastian Pinarreta Rojas *(Desarrollador Backend / Gestor SCM)*
- **Tiempo:** 1:30 min

| Punto a cubrir | Detalle |
|----------------|---------|
| Definicion | **Linea Base V2**: estado consolidado de `main` al cierre del Sprint 1 (~17-18 mayo 2026). Alcance: backend + mobile + documentacion. |
| Items de configuracion | Backend: commit `7e51627` (fix onboarding, modulos por defecto). Mobile: commit `156bc2e` (fix navegacion retroceso). Documentacion: sitio Starlight actualizado. Disenos: Figma del proyecto. |
| Criterio de linea base | Corte explicito al finalizar el Sprint 1, con trazabilidad por commit/PR hacia cada funcionalidad. |
| Proposito | Proveer un punto de referencia estable y demostrable para evaluacion academica. |

**Mostrar en vivo:**
- Commits de referencia en GitHub (backend y mobile)
- Estado de `main` en ambos repositorios

**Material de apoyo sugerido:**
- `src/content/docs/scm/index.mdx` (Tab: Lineas Base)
- `src/content/docs/scm/trazabilidad/index.mdx`

---

## Bloque 4: C3 — Seguimiento y Trazabilidad (2 pts)

- **Expositor:** Yessly Poma de la Cruz *(Calidad y Documentacion)*
- **Tiempo:** 1:30 min

| Punto a cubrir | Detalle |
|----------------|---------|
| Historial de cambios | Registro continuo de commits en ambos repositorios con mensajes estandarizados. Cada cambio trazable por fecha, autor y proposito. |
| Matriz de trazabilidad | 15 funcionalidades (F01-F15) mapeadas a sus commits reales en GitHub con URL, estado y notas. |
| Cobertura | Desde fundacion del proyecto (F01) hasta mejoras UX (F15), cubriendo auth, onboarding, catalogo, clientes, planes, calendario, cotizaciones, ventas, reportes, finanzas, BD y DevOps. |
| Mecanismo de seguimiento | Revision del equipo sobre artefactos criticos + actualizacion documental cuando un cambio afecta la referencia vigente. |

**Mostrar en vivo:**
- Matriz de trazabilidad en `src/content/docs/scm/trazabilidad/index.mdx`
- Navegar por algunos items F01-F15 mostrando los commits referenciados

**Material de apoyo sugerido:**
- `src/content/docs/scm/trazabilidad/index.mdx`
- `src/content/docs/scm/index.mdx` (Tab: Lineas Base)

---

## Bloque 5: C4 — Gestion de Versiones y Release Notes (2 pts)

- **Expositor:** Chavez Cerna Joshua Nicolas *(Desarrollador Frontend)*
- **Tiempo:** 1:30 min

| Punto a cubrir | Detalle |
|----------------|---------|
| Version actual | **Version 2** — Release academico basado en `main` al cierre del Sprint 1. Dos repos: backend + mobile con documentacion consolidada. |
| Release Notes: funcionalidades | 47+ commits backend + 47+ mobile. Auth JWT, onboarding (registro negocio + seleccion modulos), catalogo CRUD completo (productos, servicios, unidades, categorias), clientes, planes/suscripciones, calendario, cotizaciones, ventas, reportes, finanzas. |
| Release Notes: mejoras | 30+ mejoras de UX: paleta de colores, tipografia, navegacion, transiciones, validaciones, proteccion de rutas, manejo de errores, textos en espanol. |
| Release Notes: ajustes tecnicos | Inicializacion NestJS y Expo, pipelines CI/CD en ambos repos, migraciones de BD, configuracion de entorno. |
| Versionamiento | Control por commits en `main`. Limitacion conocida: no se usaron GitHub Releases ni tags versionados (release academico). |

**Mostrar en vivo:**
- Tab "Versiones y Release Notes" en `src/content/docs/scm/index.mdx`
- Listado de funcionalidades con links a commits

**Material de apoyo sugerido:**
- `src/content/docs/scm/index.mdx` (Tab: Versiones y Release Notes)
- `src/content/docs/scm/trazabilidad/index.mdx`

---

## Bloque 6: S2 — Control de Cambios Aplicado al Sistema (2 pts)

- **Expositor:** Espinoza Picon Diego Steven Martin *(Ingeniero DevOps / Despliegue)*
- **Tiempo:** 2:00 min

| Punto a cubrir | Detalle |
|----------------|---------|
| Flujo de control de cambios | 5 etapas: **Deteccion** → **Discusion** → **Implementacion** → **Integracion** → **Actualizacion**. |
| Implementacion | Commits controlados con mensajes estandarizados. Ramas especificas cuando corresponde (`feature/`, `fix/`). |
| Integracion | Merge a `main` por PR o secuencia controlada. Evidencia en mobile: PR #1 (`feat/pnpm-migration`), PR #2 (`Config_pipeline CI/CD`). |
| CI/CD | Pipeline en backend (NestJS) y mobile (Expo): build, test y despliegue automatizado en Railway. |
| Infraestructura | Railway para backend + PostgreSQL. Variables de entorno y secrets gestionados. |
| Rastreo | Commits con mensajes estandarizados, PRs con revision de pares, documentacion actualizada al cierre de cada cambio. |

**Mostrar en vivo:**
- PRs en GitHub (`JimSegovia/emprendeX-mobile/pull/1`, `pull/2`)
- Commits recientes en ambos repositorios
- Grafico de red de contribuciones

**Material de apoyo sugerido:**
- `src/content/docs/scm/index.mdx` (Tab: Control de Cambios)
- `src/content/docs/scm/trazabilidad/index.mdx` (F14 - Infraestructura y DevOps)
- `src/content/docs/arquitectura/backend/api.md`

---

## Bloque 7: C5 — Informe Parcial de SCM (2 pts)

- **Expositor:** Jim Bryan Jordan Segovia Valencia *(Lider de Proyecto)*
- **Tiempo:** 1:00 min

| Punto a cubrir | Detalle |
|----------------|---------|
| Informe parcial | La documentacion viva del sitio Starlight funciona como **Informe Parcial de SCM**. Consolida: planificacion (C1), linea base (C2), trazabilidad (C3), versiones y release notes (C4). |
| Estado actual | Sprint 1 completado (MVP funcional). Sprint 2 planificado (ciclo comercial + login Google). |
| Metricas | Sprint 0: 8/8 tareas completadas. Sprint 1: 10 HU comprometidas, ~70% de tareas completadas. |
| Proxima iteracion | Sprint 2 enfocado en: conversion cotizacion→pedido, estados de pedido, adelantos/saldos, login con Google. |

**Material de apoyo sugerido:**
- `src/content/docs/scm/index.mdx` (todas las tabs)
- `src/content/docs/scrum/index.md` (metricas y avance)

---

## Bloque 8: S3 — DEMO: Avance Funcional del Sistema (50%) (4 pts)

> **Este es el criterio de mayor peso (4 pts).** Se debe demostrar que el sistema funciona al 50% o mas.

- **Expositores:** Chavez Cerna Joshua Nicolas *(Frontend)* y David Sebastian Pinarreta Rojas *(Backend)*
- **Tiempo:** 3:30 min

### Guion sugerido para la demo

| Paso | Pantalla | Quien | Tiempo |
|------|----------|-------|--------|
| 1 | **Inicio de la app** — Splash y pantalla de login | Joshua | 0:20 |
| 2 | **Registro** — Crear cuenta con email y contrasena | Joshua | 0:30 |
| 3 | **Onboarding** — Datos del negocio (nombre, rubro, moneda) + seleccion de modulos | Joshua | 0:40 |
| 4 | **Dashboard** — Modulos configurados, accesos rapidos, resumen de pendientes | Joshua | 0:30 |
| 5 | **Catalogo** — Listado de productos, crear producto con imagen, mostrar CRUD | Joshua | 0:40 |
| 6 | **Clientes** — Listado de clientes registrados | Joshua | 0:10 |
| 7 | **Cotizaciones** — Crear cotizacion (seleccionar cliente + items del catalogo + total) | Joshua | 0:25 |
| 8 | **Backend (rapido)** — Mencionar APIs, autenticacion JWT, Railway | David | 0:15 |

### Modulos funcionales a destacar

| Modulo | Estado | Evidencia |
|--------|--------|-----------|
| Autenticacion (login/registro) | Completo | JWT, sesion, proteccion de rutas |
| Onboarding (configuracion negocio) | Completo | Datos guardados en backend, seleccion de modulos |
| Dashboard | Funcional | Accesos rapidos, resumen |
| Catalogo (productos/servicios) | Completo | CRUD, unidades, categorias, imagenes, busqueda |
| Clientes | Completo | Listado, integracion con backend |
| Planes y suscripciones | Funcional | Plan activo, paywall premium |
| Cotizaciones | Funcional | Seleccion cliente + items + calculo total |
| Finanzas | Parcial | Dashboard financiero, registro de pagos |
| Calendario, Ventas, Reportes | Basico | Vistas integradas |

> **El sistema supera el 50% funcional.** Diez modulos con distintos grados de completitud, con el nucleo del negocio (catalogo, clientes, cotizaciones) plenamente operativo.

**Material de apoyo sugerido:**
- App corriendo en Expo Go (dispositivo o emulador)
- `src/content/docs/arquitectura/frontend/vistas.mdx`
- `src/content/docs/arquitectura/frontend/navegacion.md`

---

## Bloque 9: S4 — Sustentacion Tecnica del Proyecto (2 pts)

> **Obligatorio para todos los integrantes.** Cada uno expone ~30 segundos su contribucion tecnica especifica.

- **Tiempo total:** 4:00 min (~30 seg por persona)

| Orden | Integrante | Rol | Que sustentar |
|-------|------------|-----|---------------|
| 1 | **Jim Segovia** | Lider / Gestor SCM | Arquitectura modular del sistema, separacion de capas, plan SCM, coordinacion del equipo. |
| 2 | **David Pinarreta** | Backend | APIs REST con NestJS, autenticacion JWT, despliegue en Railway, modulos del backend. |
| 3 | **Joshua Chavez** | Frontend | React Native + Expo Router, navegacion condicional (auth/drawer/tabs), componentes reutilizables, integracion con APIs. |
| 4 | **Diego Espinoza** | DevOps | Pipeline CI/CD en backend y mobile, configuracion de Railway, gestion de secretos y variables de entorno. |
| 5 | **Sebastian Chicata** | Admin BD | Modelo de datos (PostgreSQL + TypeORM), 22+ tablas, migraciones, seeds, constraints UNIQUE y CHECK. |
| 6 | **Christian Arancivia** | Disenador UI | Sistema de diseno en Figma, paleta de colores, tipografia, componentes de interfaz, consistencia visual. |
| 7 | **Diego Arevalo** | Disenador UX | Arquitectura de informacion, flujos de navegacion, mapa de pantallas, usabilidad centrada en el emprendedor. |
| 8 | **Yessly Poma** | QA / Documentacion | Matriz de trazabilidad (15 funcionalidades → commits), plan de pruebas del sprint, documentacion tecnica. |

**Material de apoyo sugerido:**
- Cada integrante prepara su propia diapositiva o pantalla de respaldo con evidencias de su trabajo.
- `src/content/docs/proyecto/equipo.mdx`
- `src/content/docs/arquitectura/overview.md`

---

## Bloque 10: Cierre

- **Expositor:** Jim Segovia
- **Tiempo:** 0:30 min

| Punto | Detalle |
|-------|---------|
| Resumen | Criterios cubiertos: C1-C5 (Documentacion SCM) + S1-S4 (Desarrollo del Sistema). |
| Nivel esperado | **Excelente (18-20):** documentacion completa, SCM adecuado, sistema funcional al 50% o mas. |
| Agradecimiento y apertura a preguntas | |

---

## Resumen de Participacion por Integrante

| Integrante | Rol | Bloques | Tiempo |
|------------|-----|---------|--------|
| **Jim Segovia** | Lider / Gestor SCM | 1, 2, 7, 9, 10 | ~6:00 |
| **David Pinarreta** | Backend / Gestor SCM | 3, 8, 9 | ~3:00 |
| **Joshua Chavez** | Frontend | 5, 8, 9 | ~3:00 |
| **Diego Espinoza** | DevOps / Despliegue | 6, 9 | ~2:30 |
| **Yessly Poma** | QA / Documentacion | 4, 9 | ~2:00 |
| **Sebastian Chicata** | Admin BD | 9 | ~0:30 |
| **Christian Arancivia** | Disenador UI | 9 | ~0:30 |
| **Diego Arevalo** | Disenador UX | 9 | ~0:30 |

---

## Checklist de Preparacion

### Para todos los integrantes
- [ ] Preparar su intervencion de ~30 segundos para el Bloque 9 (S4). Ensayarla.
- [ ] Tener abierta la documentacion Starlight (`pnpm dev`) para respaldar visualmente.
- [ ] Conocer el flujo general de la exposicion y saber cuando le toca intervenir.

### Para Jim (moderador)
- [ ] Cronometrar cada bloque. Si alguien se excede, intervenir sutilmente.
- [ ] Preparar transiciones entre bloques ("ahora David explicara la linea base...").
- [ ] Tener abiertos los repos en GitHub y el sitio de documentacion.

### Para Joshua y David (demo S3)
- [ ] Preparar datos de prueba: cuenta pre-creada con negocio configurado, productos y clientes cargados.
- [ ] Ensayar el recorrido de la demo minimo 3 veces. Tener un plan B si falla la conexion (grabar un video de respaldo).
- [ ] Verificar que el backend en Railway este funcionando antes de la exposicion.

### Preparacion tecnica
- [ ] Verificar que `pnpm dev` funcione (sitio de documentacion).
- [ ] Tener la app mobile corriendo en Expo Go (dispositivo o emulador).
- [ ] Verificar conectividad con el backend desplegado en Railway.
- [ ] Tener GitHub abierto con los commits y PRs relevantes.

---

## Preguntas Frecuentes para Preparar

| Pregunta probable | Respuesta preparada |
|-------------------|---------------------|
| "Por que no usaron GitHub Releases o tags?" | Es un release academico; la linea base se define por commits en `main` al cierre del sprint. Los tags se adoptaran en futuras iteraciones. |
| "Como aseguran que no haya conflictos al trabajar en paralelo?" | Estrategia de ramas por funcionalidad + PRs obligatorios + revision de pares antes del merge. |
| "Que pasa si un cambio urgente rompe la linea base?" | Se aplica el flujo de control de cambios: deteccion → discusion → fix en rama → PR → merge a `main` → actualizacion documental. Si es necesario, revert. |
| "El sistema realmente esta al 50%?" | Si. Diez modulos funcionales con distinto grado de completitud. El nucleo del negocio (catalogo, clientes, cotizaciones) esta operativo y conectado al backend. |
| "Que herramientas SCM usaron ademas de Git?" | GitHub para repositorios y PRs, Jira para gestion de tareas y sprints, documentacion Starlight como repositorio documental versionado. |

---

*Documento generado para la exposicion del Examen Parcial N1 — Mayo 2026*
