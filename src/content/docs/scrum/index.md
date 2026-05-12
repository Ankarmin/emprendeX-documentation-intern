---
title: Gestión de Sprints (Scrum)
description: Documentación centralizada de la metodología Scrum aplicada en el proyecto EmprendeX, incluyendo información general, roles, backlog y detalles de cada sprint.
---

Esta sección documenta la aplicación de la metodología **Scrum** en el proyecto EmprendeX. Aquí se centraliza toda la información relacionada con la planificación, ejecución y seguimiento de los Sprints.

---

## 📌 Información General de Scrum

### 📎 Registro de Enlaces

| Recurso | Enlace | Descripción |
|---------|--------|-------------|
| **Jira** | [Tablero EmprendeX](https://emprendex.atlassian.net) | Gestión de historias, tareas y seguimiento de sprints. |
| **Figma** | [Prototipos EmprendeX](https://figma.com) | Diseño de interfaces, mockups y flujos de navegación. |
| **GitHub** | [Repositorio Móvil](https://github.com/JimSegovia/emprendeX-mobile.git) | Código fuente de la aplicación React Native + Expo. |
| **Documento de Arquitectura** | [Ver en Drive](https://drive.google.com) | Especificación técnica, requisitos y decisiones de diseño. |

---

### 👥 Roles del Equipo

El equipo sigue los roles definidos por el marco de trabajo Scrum, adaptados a la estructura del proyecto universitario:

| Rol | Asignado | Responsabilidad Principal |
|-----|----------|---------------------------|
| **🎯 Product Owner** | Jim Segovia Valencia | Maximizar el valor del producto, gestionar el Product Backlog y representar la visión del negocio. |
| **🛡️ Scrum Master** | Jim Segovia Valencia | Facilitar el proceso Scrum, eliminar impedimentos y asegurar que el equipo cumpla con las prácticas ágiles. |
| **💻 Dev Team** | Todo el equipo | Entregar incrementos funcionales del producto al final de cada Sprint. |

**Miembros del Dev Team:**
- Christian Gabriel Arancivia Salas *(Diseñador UI)*
- Arevalo Mauricio Diego Martin *(Diseñador UX)*
- Chavez Cerna Joshua Nicolas *(Desarrollador Frontend)*
- David Sebastián Piñarreta Rojas *(Desarrollador Backend)*
- Chicata Serrato Sebastián Joaquin *(Administrador de BD)*
- Espinoza Picón Diego Steven Martin *(Ingeniero DevOps)*
- Yessly Poma de la Cruz *(Calidad y Documentación)*

---

### 📋 Product Backlog Global

A continuación se presenta el inventario completo de historias de usuario priorizadas para los Sprints actuales del MVP:

| ID | Historia de Usuario | Prioridad | Estado |
|----|---------------------|-----------|--------|
| **HU-01** | Como emprendedor quiero registrar los datos básicos de mi negocio para personalizar la aplicación. | Alta | En Progreso |
| **HU-02** | Como emprendedor quiero acceder a mi espacio local para usar la app sin depender de un servidor externo. | Alta | En Progreso |
| **HU-03** | Como emprendedor quiero elegir qué módulos estarán visibles en mi dashboard. | Alta | En Progreso |
| **HU-04** | Como emprendedor quiero visualizar y ordenar los módulos del menú principal. | Alta | En Progreso |
| **HU-05** | Como emprendedor quiero registrar clientes para mantener organizada mi base de contactos. | Media | En Progreso |
| **HU-06** | Como emprendedor quiero ver la ficha básica de un cliente. | Media | Por Hacer |
| **HU-07** | Como emprendedor quiero registrar productos o servicios. | Media | En Progreso |
| **HU-08** | Como emprendedor quiero distinguir productos simples y personalizados. | Media | En Progreso |
| **HU-09** | Como emprendedor quiero crear una cotización básica. | Media | En Progreso |
| **HU-10** | Como emprendedor quiero convertir una cotización aprobada en un pedido. | Media | Por Hacer |
| **HU-11** | Como emprendedor quiero actualizar el estado de un pedido. | Media | Por Hacer |
| **HU-12** | Como emprendedor quiero registrar adelantos y saldos pendientes. | Media | Por Hacer |
| **HU-13** | Como emprendedor quiero ver un resumen de pendientes en el tablero principal. | Media | En Progreso |
| **HU-14** | Como emprendedor quiero visualizar módulos premium bloqueados. | Media | En Progreso |
| **HU-15** | Como emprendedor quiero poder ingresar a la aplicación mediante un correo personal. | Media | En Progreso |

---

## 🗂️ Bloques de Sprints

A continuación se detalla la información de cada Sprint ejecutado en el proyecto. Cada bloque es desplegable para facilitar la navegación.

---

<details>
<summary><h3>🟢 Sprint 0: Fase de Cimientos y Prototipado</h3></summary>

**Duración:** 1 semana  
**Estado:** Terminado  
**Objetivo:** Establecer los cimientos del proyecto: definir la arquitectura técnica y funcional, configurar las herramientas de gestión del equipo, diseñar los prototipos iniciales de la interfaz y preparar el entorno de desarrollo base para el inicio del MVP.

---

#### 📁 1. Sprint Planning

**Sprint Goal:**  
> Preparar todas las bases técnicas, documentales y de gestión necesarias para iniciar el desarrollo del MVP en el Sprint 1.

**Historias y Tareas Seleccionadas:**

Dado que el Sprint 0 fue una fase de preparación, no se comprometieron historias de usuario funcionales. En su lugar, el equipo ejecutó las siguientes tareas técnicas y de gestión:

| ID | Tarea | Tipo |
|----|-------|------|
| T-01 | Creación del entorno Jira | Gestión |
| T-02 | Redacción de la primera versión del Documento de Arquitectura | Documentación |
| T-03 | Extracción de requisitos y análisis de negocios | Análisis |
| T-04 | Abstracción del proyecto para modelado lógico de la base de datos | Diseño técnico |
| T-05 | Inicialización del proyecto backend utilizando Next.js | Desarrollo técnico |
| T-06 | Configuración de los pipelines de CI/CD | DevOps |
| T-07 | Diseño en Figma de prototipos mockups iniciales | Diseño |
| T-08 | Inicialización y maquetación base del frontend | Desarrollo técnico |

---

#### 📄 2. Sprint Backlog

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Creación del entorno Jira | Jim Segovia Valencia | ✅ Done |
| Redacción de la primera versión del Documento de Arquitectura | Jim Segovia Valencia | ✅ Done |
| Extracción de requisitos y análisis de negocios | Yessly Poma de la Cruz | ✅ Done |
| Abstracción del proyecto para modelado lógico de la base de datos | Sebastián Chicata Serrato | ✅ Done |
| Inicialización del proyecto backend utilizando Next.js | David Sebastián Piñarreta Rojas | ✅ Done |
| Configuración de los pipelines de CI/CD | David Sebastián Piñarreta Rojas | ✅ Done |
| Diseño en Figma de prototipos mockups iniciales | Christian Gabriel Arancivia Salas | ✅ Done |
| Inicialización y maquetación base del frontend | Joshua Nicolás Chávez Cerna | ✅ Done |

---

#### 📄 3. Sprint Review

> [Pendiente: Se llenará tras la revisión del prototipo y bases de arquitectura con el profesor]

---

#### 📄 4. Sprint Retrospective

> [Pendiente: Se documentará la organización inicial]

</details>

---

<details>
<summary><h3>🚀 Sprint 1: Construcción del MVP</h3></summary>

**Duración:** 1 semana  
**Estado:** En Progreso  
**Objetivo:** Construir una primera versión navegable de la aplicación con configuración del negocio, acceso local, dashboard modular, gestión base de clientes y catálogo, cotización simple, resumen inicial del tablero y visibilidad de módulos premium bloqueados.

---

#### 📁 1. Sprint Planning

**Sprint Goal:**  
> Entregar un MVP funcional que demuestre la propuesta de valor central del producto: un centro operativo local para microemprendedores con arquitectura modular y visibilidad del modelo freemium.

**Historias Comprometidas:**

| ID | Historia de Usuario | Épica |
|----|---------------------|-------|
| **HU-01** | Como emprendedor quiero registrar los datos básicos de mi negocio para personalizar la aplicación. | EP-01 |
| **HU-02** | Como emprendedor quiero acceder a mi espacio local en el dispositivo para usar la app sin depender de un servidor externo. | EP-01 |
| **HU-03** | Como emprendedor quiero elegir qué módulos estarán visibles en mi dashboard para trabajar solo con lo que necesito. | EP-02 |
| **HU-04** | Como emprendedor quiero visualizar y ordenar los módulos del menú principal para priorizar mi flujo de trabajo. | EP-02 |
| **HU-05** | Como emprendedor quiero registrar clientes para mantener organizada mi base de contactos. | EP-03 |
| **HU-07** | Como emprendedor quiero registrar productos o servicios para reutilizarlos en cotizaciones y pedidos. | EP-04 |
| **HU-08** | Como emprendedor quiero distinguir productos simples y personalizados para representar mejor mi negocio. | EP-04 |
| **HU-09** | Como emprendedor quiero crear una cotización básica para responder pedidos recibidos por chat. | EP-05 |
| **HU-13** | Como emprendedor quiero ver un resumen de pendientes y próximos compromisos en el tablero principal para organizar mi jornada. | EP-06 |
| **HU-14** | Como emprendedor quiero visualizar módulos premium bloqueados para entender qué funciones adicionales podría activar con una suscripción. | EP-07 |
| **HU-15** | Como emprendedor quiero poder ingresar a la aplicación mediante un correo personal. | EP-01 |

---

#### 📄 2. Sprint Backlog

##### Historia: HU-01 — Registro de datos básicos del negocio

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar las pantallas de onboarding para el registro de nombre, rubro y moneda en Figma | Diego Steven Martin Espinoza Picón | ✅ Done |
| Construir el formulario de onboarding y capturar los datos del negocio | Joshua Nicolás Chávez Cerna | ✅ Done |
| Definir la estructura de la entidad BusinessProfile y preparar la persistencia local | Sebastián Chicata Serrato | 🔄 In Progress |
| Validar que el nombre, rubro y moneda se guarden y persistan correctamente en la interfaz | Yessly Poma de la Cruz | 📋 To Do |

##### Historia: HU-02 — Acceso local sin servidor externo

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Implementar la lógica para que la aplicación recupere el perfil creado y conserve la información almacenada al iniciar sesión | Jim Segovia Valencia | 📋 To Do |
| Simular cierres y aperturas de la app para asegurar que no se dependa de un servidor externo y los datos se mantengan | Yessly Poma de la Cruz | 📋 To Do |

##### Historia: HU-03 — Selección de módulos visibles en el dashboard

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el catálogo de módulos y los selectores (toggles) de activación en Figma | Diego Steven Martin Espinoza Picón | ✅ Done |
| Desarrollar la vista de configuración y enlazarla con la entidad ModuleConfig para reflejar qué módulos están visibles o activos | Jim Segovia Valencia | 🔄 In Progress |

##### Historia: HU-04 — Ordenamiento de módulos del menú principal

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Implementar una interacción de arrastrar y soltar (Drag & Drop) para modificar el orden de los módulos y asegurar que la preferencia se guarde al reiniciar la app | Joshua Nicolás Chávez Cerna | ✅ Done |
| Supervisar la integración de esta vista con el menú de navegación general | Jim Segovia Valencia | ✅ Done |

##### Historia: HU-05 — Registro de clientes

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el formulario de alta para la entidad Client | Diego Steven Martin Espinoza Picón | 👁️ In Review |
| Maquetar el formulario con campos obligatorios y conectar la creación de nuevos registros | Joshua Nicolás Chávez Cerna | ✅ Done |
| Probar la creación de clientes asegurando que los datos mínimos se registren exitosamente | Yessly Poma de la Cruz | 📋 To Do |

##### Historia: HU-07 — Registro de productos o servicios

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la pantalla principal del catálogo | Christian Gabriel Arancivia Salas | ✅ Done |
| Diseñar el modal de creación de productos o servicios | Diego Arevalo Mauricio | ✅ Done |
| Definir los campos visibles del formulario: nombre, precio base y categoría | Diego Steven Martin Espinoza Picón | ✅ Done |
| Crear la entidad CatalogItem con nombre, precio base y categoría | David Sebastián Piñarreta Rojas | 📋 To Do |
| Implementar el guardado de productos o servicios en backend | David Sebastián Piñarreta Rojas | 📋 To Do |
| Implementar el listado de productos o servicios en frontend | Joshua Nicolás Chávez Cerna | ✅ Done |
| Validar que el formulario no permita campos vacíos ni precio inválido | Sebastián Chicata Serrato | 🔄 In Progress |

##### Historia: HU-08 — Distinguir productos simples y personalizados

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Agregar en base de datos el campo para diferenciar el tipo de producto | Sebastián Chicata Serrato | ✅ Done |
| Definir los valores permitidos para el tipo de ítem: simple o personalizado | Sebastián Chicata Serrato | ✅ Done |
| Adaptar el formulario del catálogo para seleccionar el tipo de ítem | Joshua Nicolás Chávez Cerna | ✅ Done |
| Mostrar visualmente el tipo de ítem seleccionado en el formulario | Joshua Nicolás Chávez Cerna | ✅ Done |
| Mostrar el tipo de producto en el listado del catálogo | Joshua Nicolás Chávez Cerna | ✅ Done |
| Validar que todo producto registrado tenga un tipo asignado | David Sebastián Piñarreta Rojas | 📋 To Do |
| Verificar que el modelo lógico soporte el uso del tipo de producto en futuras cotizaciones | Sebastián Chicata Serrato | ✅ Done |

##### Historia: HU-09 — Crear cotización básica

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el flujo de selección de clientes | Christian Gabriel Arancivia Salas | ✅ Done |
| Diseñar el flujo para agregar ítems del catálogo a la cotización | Diego Arevalo Mauricio | ✅ Done |
| Diseñar la sección de notas y resumen del total | Diego Steven Martin Espinoza Picón | ✅ Done |
| Crear la vista principal de la entidad Quote | Joshua Nicolás Chávez Cerna | ✅ Done |
| Implementar la selección de cliente e ítems en la cotización | Joshua Nicolás Chávez Cerna | ✅ Done |
| Implementar el cálculo automático del total en frontend | Joshua Nicolás Chávez Cerna | ✅ Done |
| Crear la lógica backend para integrar cliente, catálogo e ítems en una cotización | David Sebastián Piñarreta Rojas | 📋 To Do |
| Validar desde backend que la cotización tenga cliente, al menos un ítem y total correcto | Sebastián Chicata Serrato | 🔄 In Progress |

##### Historia: HU-13 — Resumen de pendientes en el tablero principal

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la estructura visual del dashboard principal | Christian Gabriel Arancivia Salas | ✅ Done |
| Definir los accesos rápidos del tablero | Diego Arevalo Mauricio | ✅ Done |
| Diseñar la visualización de indicadores y actividad básica | Diego Steven Martin Espinoza Picón | ✅ Done |
| Crear la pantalla principal del dashboard en frontend | Jim Segovia Valencia | ✅ Done |
| Implementar accesos rápidos en la pantalla de inicio | Jim Segovia Valencia | ✅ Done |
| Preparar la información básica que alimentará los indicadores del dashboard | Sebastián Chicata Serrato | ✅ Done |
| Desplegar el dashboard en el entorno de pruebas | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Verificar que el dashboard esté disponible para revisión del equipo | Yessly Poma de la Cruz | 📋 To Do |

##### Historia: HU-14 — Visualizar módulos premium bloqueados

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el aspecto visual de los módulos bloqueados | Christian Gabriel Arancivia Salas | 📋 To Do |
| Diseñar el estilo visual del paywall | Diego Arevalo Mauricio | 📋 To Do |
| Definir la diferencia visual entre módulos activos, inactivos y premium | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Definir la estructura de datos para identificar módulos activos, inactivos y premium | Sebastián Chicata Serrato | ✅ Done |
| Implementar la lógica condicional según el plan del negocio | Joshua Nicolás Chávez Cerna | 🔄 In Progress |
| Mostrar el bloqueo visual o paywall al intentar acceder a un módulo premium | Joshua Nicolás Chávez Cerna | ✅ Done |
| Validar que los módulos premium no permitan acciones internas si están bloqueados | David Sebastián Piñarreta Rojas | 📋 To Do |
| Probar que al acceder a un módulo premium se muestre el bloqueo visual y no un error | Yessly Poma de la Cruz | 📋 To Do |

##### Historia: HU-15 — Ingreso mediante correo personal

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| UI: Diseñar V01 - Inicio Sesion | Diego Steven Martin Espinoza Picón | ✅ Done |
| Diseñar la lógica de inicio de sesión | David Sebastián Piñarreta Rojas | 📋 To Do |
| Codificar la funcionalidad de inicio de sesión | David Sebastián Piñarreta Rojas | 📋 To Do |
| Redactar documentación del código | David Sebastián Piñarreta Rojas | 📋 To Do |
| Redactar el informe final de las pruebas realizadas | Yessly Poma de la Cruz | 🔄 In Progress |

---

#### 📄 3. Sprint Review

> [Pendiente: Se completará tras la demostración del MVP]

---

#### 📄 4. Sprint Retrospective

> [Pendiente: Evaluación del equipo en el desarrollo]

</details>

---

## 📊 Métricas y Avance

| Métrica | Sprint 0 | Sprint 1 |
|---------|----------|----------|
| **Historias comprometidas** | 0 (tareas de preparación) | 11 |
| **Tareas completadas** | 8 / 8 | En progreso |
| **Estado general** | ✅ Terminado | 🔄 En Progreso |

---

*Última actualización: Mayo 2026*
