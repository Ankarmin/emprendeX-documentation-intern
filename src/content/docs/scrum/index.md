---
title: Gestión de Sprints (Scrum)
description: Documentación centralizada de la metodología Scrum aplicada en el proyecto EmprendeX, incluyendo información general, roles, backlog y detalles de cada sprint.
---

Esta sección documenta la aplicación de la metodología **Scrum** en el proyecto EmprendeX. Aquí se centraliza toda la información relacionada con la planificación, ejecución y seguimiento de los Sprints.

> Nota histórica: los artefactos de esta sección reflejan decisiones y alcances definidos en cada sprint. La arquitectura vigente del producto evolucionó posteriormente hacia un backend en la nube sobre Railway y PostgreSQL.

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
| **HU-02** | Como emprendedor quiero poder usar la aplicación sin conexión a internet para continuar operando cuando no tenga acceso a red. | Media | Pendiente |
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
| **HU-16** | Como emprendedor quiero iniciar sesión con mi cuenta de Google para tener practicidad en el inicio de sesión. | Media | Por Hacer |

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
| T-05 | Inicialización del proyecto backend utilizando NestJS | Desarrollo técnico |
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
| Inicialización del proyecto backend utilizando NestJS | David Sebastián Piñarreta Rojas | ✅ Done |
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
**Objetivo:** Construir una primera versión navegable de la aplicación con configuración del negocio, dashboard modular, gestión base de clientes y catálogo, cotización simple, resumen inicial del tablero y visibilidad de módulos premium bloqueados.

---

#### 📁 1. Sprint Planning

**Sprint Goal:**  
> Entregar un MVP funcional que demuestre la propuesta de valor central del producto: un centro operativo para microemprendedores con arquitectura modular y visibilidad del modelo freemium.

**Historias Comprometidas:**

| ID | Historia de Usuario | Épica |
|----|---------------------|-------|
| **HU-01** | Como emprendedor quiero registrar los datos básicos de mi negocio para personalizar la aplicación. | EP-01 |
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
| Definir la estructura de la entidad BusinessProfile y preparar la persistencia en la nube | Sebastián Chicata Serrato | 🔄 In Progress |
| Validar que el nombre, rubro y moneda se guarden y persistan correctamente en la interfaz | Yessly Poma de la Cruz | 📋 To Do |

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

<details>
<summary><h3>📋 Sprint 2: Ciclo Comercial y Login Social</h3></summary>

**Duración:** 1 semana  
**Estado:** Por Iniciar  
**Objetivo:** Completar el ciclo comercial del negocio: convertir cotizaciones en pedidos, gestionar el estado de los pedidos, registrar adelantos y saldos, visualizar la ficha detallada del cliente, e integrar el inicio de sesión con Google para facilitar el acceso.

---

#### 📁 1. Sprint Planning

**Sprint Goal:**  
> Permitir al emprendedor gestionar el ciclo completo desde la cotización hasta el cobro, con trazabilidad de pedidos y acceso simplificado mediante Google.

**Historias Comprometidas:**

| ID | Historia de Usuario | Épica |
|----|---------------------|-------|
| **HU-06** | Como emprendedor quiero ver la ficha básica de un cliente para recordar su información y su relación comercial. | EP-03 |
| **HU-10** | Como emprendedor quiero convertir una cotización aprobada en un pedido para evitar reprocesar información. | EP-05 |
| **HU-11** | Como emprendedor quiero actualizar el estado de un pedido para saber si está pendiente, en proceso o entregado. | EP-06 |
| **HU-12** | Como emprendedor quiero registrar adelantos y saldos pendientes para tener control de cobro. | EP-06 |
| **HU-16** | Como emprendedor quiero iniciar sesión con mi cuenta de Google para tener practicidad en el inicio de sesión. | EP-01 |

---

#### 📄 2. Sprint Backlog

##### Historia: HU-06 — Ver ficha básica de un cliente

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la pantalla de ficha/detalle de cliente en Figma (V14) | Christian Gabriel Arancivia Salas | 📋 To Do |
| Diseñar la visualización de historial resumido del cliente, pedidos y saldo (V14) | Diego Arevalo Mauricio | 📋 To Do |
| Crear la vista de detalle de cliente en frontend | Joshua Nicolás Chávez Cerna | 📋 To Do |
| Implementar el endpoint para obtener los datos completos del cliente | David Sebastián Piñarreta Rojas | 📋 To Do |
| Validar que la ficha muestre datos, historial de pedidos y saldo pendiente | Yessly Poma de la Cruz | 📋 To Do |

##### Historia: HU-10 — Convertir cotización aprobada en pedido

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el flujo de conversión cotización → pedido en Figma (V15) | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Diseñar la confirmación visual de conversión exitosa (V15) | Christian Gabriel Arancivia Salas | 📋 To Do |
| Implementar el botón y la lógica de conversión en frontend | Joshua Nicolás Chávez Cerna | 📋 To Do |
| Crear la entidad Order a partir de una Quote en backend | David Sebastián Piñarreta Rojas | 📋 To Do |
| Definir la migración de datos de cotización a pedido en la base de datos | Sebastián Chicata Serrato | 📋 To Do |
| Validar que la conversión preserve todos los datos y no duplique registros | Sebastián Chicata Serrato | 📋 To Do |

##### Historia: HU-11 — Actualizar el estado de un pedido

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar los estados visuales del pedido: pendiente, en proceso, entregado (V16) | Diego Arevalo Mauricio | 📋 To Do |
| Diseñar el selector de cambio de estado en Figma (V16) | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Implementar el componente de cambio de estado en frontend | Jim Segovia Valencia | 📋 To Do |
| Implementar la lógica de transición de estados en backend | David Sebastián Piñarreta Rojas | 📋 To Do |
| Agregar validación de transiciones permitidas entre estados | Sebastián Chicata Serrato | 📋 To Do |
| Probar cada transición de estado y verificar la actualización en la UI | Yessly Poma de la Cruz | 📋 To Do |

##### Historia: HU-12 — Registrar adelantos y saldos pendientes

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la sección de pagos dentro de la ficha del pedido (V17) | Christian Gabriel Arancivia Salas | 📋 To Do |
| Diseñar el formulario de registro de adelanto y visualización de saldo (V17) | Diego Arevalo Mauricio | 📋 To Do |
| Implementar el formulario de registro de pago en frontend | Joshua Nicolás Chávez Cerna | 📋 To Do |
| Crear la entidad Payment y su relación con Order en backend | David Sebastián Piñarreta Rojas | 📋 To Do |
| Definir el cálculo automático del saldo pendiente | Sebastián Chicata Serrato | 📋 To Do |
| Validar que el saldo se actualice correctamente tras cada adelanto | Yessly Poma de la Cruz | 📋 To Do |

##### Historia: HU-16 — Iniciar sesión con Google

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la pantalla de login con opción Google en Figma (V01) | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Diseñar el flujo visual de autorización OAuth2 con Google (V01) | Diego Arevalo Mauricio | 📋 To Do |
| Implementar el botón "Iniciar sesión con Google" en frontend | Jim Segovia Valencia | 📋 To Do |
| Configurar OAuth2 con Google en backend | David Sebastián Piñarreta Rojas | 📋 To Do |
| Definir la estructura para asociar cuenta de Google con el perfil existente | Sebastián Chicata Serrato | 📋 To Do |
| Probar el flujo completo de autenticación con Google | Yessly Poma de la Cruz | 📋 To Do |
| Redactar documentación del flujo de autenticación con Google | Yessly Poma de la Cruz | 📋 To Do |

##### Tareas Transversales

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Mejorar la estructura del sidebar y navegación de la web de documentación | Jim Segovia Valencia | 📋 To Do |
| Implementar componentes interactivos en la documentación (carrusel de vistas) | Jim Segovia Valencia | 📋 To Do |
| Redactar documentación de arquitectura del frontend móvil | Jim Segovia Valencia | 📋 To Do |
| Proveer plantillas para documentación en Word | Jim Segovia Valencia | 📋 To Do |
| Agregar anexos a la web de documentación | Jim Segovia Valencia | 📋 To Do |
| Gestionar y actualizar el tablero de Jira con el progreso del sprint | Jim Segovia Valencia | 📋 To Do |
| Coordinar y facilitar las ceremonias Scrum del sprint | Jim Segovia Valencia | 📋 To Do |
| Revisar y hacer seguimiento a los pull requests del equipo | Jim Segovia Valencia | 📋 To Do |
| Mantener la consistencia visual entre las pantallas del sprint (V14, V15, V16, V17, V01) | Diego Arevalo Mauricio | 📋 To Do |
| Crear y actualizar la guía de estilos (design system) en Figma | Diego Arevalo Mauricio | 📋 To Do |
| Documentar los flujos de usuario de las nuevas funcionalidades (V14, V15, V16, V17) | Christian Gabriel Arancivia Salas | 📋 To Do |
| Mantener actualizado el mapa de navegación completo de la app | Christian Gabriel Arancivia Salas | 📋 To Do |
| Realizar code review de los pull requests del frontend | Joshua Nicolás Chávez Cerna | 📋 To Do |
| Configurar y mantener el linter y formatter del proyecto frontend | Joshua Nicolás Chávez Cerna | 📋 To Do |
| Documentar los nuevos endpoints de la API con ejemplos de uso | David Sebastián Piñarreta Rojas | 📋 To Do |
| Realizar code review de los pull requests del backend | David Sebastián Piñarreta Rojas | 📋 To Do |
| Mantener actualizado el diagrama entidad-relación con las nuevas entidades | Sebastián Chicata Serrato | 📋 To Do |
| Crear seeds de datos de prueba para desarrollo y testing | Sebastián Chicata Serrato | 📋 To Do |
| Monitorear el pipeline de CI/CD y resolver fallos | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Gestionar variables de entorno y secretos del proyecto | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Diseñar y ejecutar el plan de pruebas del sprint | Yessly Poma de la Cruz | 📋 To Do |
| Mantener actualizada la matriz de trazabilidad requisitos ↔ pruebas | Yessly Poma de la Cruz | 📋 To Do |

---

#### 📄 3. Sprint Review

> [Pendiente: Se completará tras la demostración del ciclo comercial y login social]

---

#### 📄 4. Sprint Retrospective

> [Pendiente: Se documentará tras la finalización del sprint]

</details>

---

## 📊 Métricas y Avance

| Métrica | Sprint 0 | Sprint 1 | Sprint 2 |
|---------|----------|----------|----------|
| **Historias comprometidas** | 0 (tareas de preparación) | 10 | 5 |
| **Tareas completadas** | 8 / 8 | En progreso | 0 / 52 |
| **Estado general** | ✅ Terminado | 🔄 En Progreso | 📋 Por Iniciar |

---

*Última actualización: Mayo 2026*
