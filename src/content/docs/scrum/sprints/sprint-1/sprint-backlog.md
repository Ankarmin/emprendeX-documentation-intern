---
title: Sprint Backlog
description: Backlog del Sprint 1 - Construcción del MVP del proyecto EmprendeX, extraído del Jira.csv.
---

## 🚀 Sprint 1: Construcción del MVP

> Nota histórica: este backlog refleja el alcance definido durante el Sprint 1. La dirección actual del producto evolucionó posteriormente hacia una arquitectura con backend en la nube sobre Railway y PostgreSQL.

### Alcance del MVP

La primera fase del proyecto se concentró en demostrar valor real de forma rápida y técnicamente alcanzable:

**Incluyó el MVP:**

- Perfil básico del negocio y acceso local en el dispositivo.
- Selección y ordenamiento de módulos en el dashboard y menú principal.
- Gestión de clientes.
- Gestión de productos o servicios.
- Creación básica de cotizaciones y base del flujo de pedido.
- Resumen de pendientes y próximas acciones en el tablero principal.
- Visualización de módulos premium bloqueados mediante reglas locales de plan.

**Quedó fuera del MVP del Sprint 1:**

- Backend centralizado y autenticación remota.
- Pagos de suscripción reales con pasarela externa.
- Sincronización multiusuario o entre múltiples dispositivos en tiempo real.
- Respaldo automático a Google Drive.
- Alquileres, suscripciones recurrentes, analítica avanzada y portal del cliente.
- Mensajería integrada con WhatsApp, correo o notificaciones push en producción.

### Sprint Backlog

#### Historia: HU-01 — Registro de datos básicos del negocio

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar las pantallas de onboarding para el registro de nombre, rubro y moneda en Figma | Diego Steven Martin Espinoza Picón | ✅ Done |
| Construir el formulario de onboarding y capturar los datos del negocio | Joshua Nicolás Chávez Cerna | ✅ Done |
| Definir la estructura de la entidad BusinessProfile y preparar la persistencia local | Sebastián Chicata Serrato | 🔄 In Progress |
| Validar que el nombre, rubro y moneda se guarden y persistan correctamente en la interfaz | Yessly Poma de la Cruz | 📋 To Do |

#### Historia: HU-02 — Acceso local sin servidor externo

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Implementar la lógica para que la aplicación recupere el perfil creado y conserve la información almacenada al iniciar sesión | Jim Segovia Valencia | 📋 To Do |
| Simular cierres y aperturas de la app para asegurar que no se dependa de un servidor externo y los datos se mantengan | Yessly Poma de la Cruz | 📋 To Do |

#### Historia: HU-03 — Selección de módulos visibles en el dashboard

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el catálogo de módulos y los selectores (toggles) de activación en Figma | Diego Steven Martin Espinoza Picón | ✅ Done |
| Desarrollar la vista de configuración y enlazarla con la entidad ModuleConfig para reflejar qué módulos están visibles o activos | Jim Segovia Valencia | 🔄 In Progress |

#### Historia: HU-04 — Ordenamiento de módulos del menú principal

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Implementar una interacción de arrastrar y soltar (Drag & Drop) para modificar el orden de los módulos y asegurar que la preferencia se guarde al reiniciar la app | Joshua Nicolás Chávez Cerna | ✅ Done |
| Supervisar la integración de esta vista con el menú de navegación general | Jim Segovia Valencia | ✅ Done |

#### Historia: HU-05 — Registro de clientes

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el formulario de alta para la entidad Client | Diego Steven Martin Espinoza Picón | 👁️ In Review |
| Maquetar el formulario con campos obligatorios y conectar la creación de nuevos registros | Joshua Nicolás Chávez Cerna | ✅ Done |
| Probar la creación de clientes asegurando que los datos mínimos se registren exitosamente | Yessly Poma de la Cruz | 📋 To Do |

#### Historia: HU-07 — Registro de productos o servicios

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la pantalla principal del catálogo | Christian Gabriel Arancivia Salas | ✅ Done |
| Diseñar el modal de creación de productos o servicios | Diego Arevalo Mauricio | ✅ Done |
| Definir los campos visibles del formulario: nombre, precio base y categoría | Diego Steven Martin Espinoza Picón | ✅ Done |
| Crear la entidad CatalogItem con nombre, precio base y categoría | David Sebastián Piñarreta Rojas | 📋 To Do |
| Implementar el guardado de productos o servicios en backend | David Sebastián Piñarreta Rojas | 📋 To Do |
| Implementar el listado de productos o servicios en frontend | Joshua Nicolás Chávez Cerna | ✅ Done |
| Validar que el formulario no permita campos vacíos ni precio inválido | Sebastián Chicata Serrato | 🔄 In Progress |

#### Historia: HU-08 — Distinguir productos simples y personalizados

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Agregar en base de datos el campo para diferenciar el tipo de producto | Sebastián Chicata Serrato | ✅ Done |
| Definir los valores permitidos para el tipo de ítem: simple o personalizado | Sebastián Chicata Serrato | ✅ Done |
| Adaptar el formulario del catálogo para seleccionar el tipo de ítem | Joshua Nicolás Chávez Cerna | ✅ Done |
| Mostrar visualmente el tipo de ítem seleccionado en el formulario | Joshua Nicolás Chávez Cerna | ✅ Done |
| Mostrar el tipo de producto en el listado del catálogo | Joshua Nicolás Chávez Cerna | ✅ Done |
| Validar que todo producto registrado tenga un tipo asignado | David Sebastián Piñarreta Rojas | 📋 To Do |
| Verificar que el modelo lógico soporte el uso del tipo de producto en futuras cotizaciones | Sebastián Chicata Serrato | ✅ Done |

#### Historia: HU-09 — Crear cotización básica

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

#### Historia: HU-13 — Resumen de pendientes en el tablero principal

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

#### Historia: HU-14 — Visualizar módulos premium bloqueados

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

#### Historia: HU-15 — Ingreso mediante correo personal

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| UI: Diseñar V01 - Inicio Sesion | Diego Steven Martin Espinoza Picón | ✅ Done |
| Diseñar la lógica de inicio de sesión | David Sebastián Piñarreta Rojas | 📋 To Do |
| Codificar la funcionalidad de inicio de sesión | David Sebastián Piñarreta Rojas | 📋 To Do |
| Redactar documentación del código | David Sebastián Piñarreta Rojas | 📋 To Do |
| Redactar el informe final de las pruebas realizadas | Yessly Poma de la Cruz | 🔄 In Progress |
