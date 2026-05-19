---
title: Sprint Backlog
description: Backlog del Sprint 1 - Construcción del MVP del proyecto EmprendeX.
---

## Sprint 1: Construcción del MVP

> Este backlog fue actualizado con base en el CSV más reciente de Jira. Refleja responsables y estados actuales de las subtareas comprometidas en el Sprint 1.

### Alcance del MVP

La primera fase del proyecto se concentró en demostrar valor real de forma rápida y técnicamente alcanzable:

**Incluyó el MVP:**

- Perfil básico del negocio en el dispositivo.
- Selección y ordenamiento de módulos en el dashboard y menú principal.
- Gestión de clientes.
- Gestión de productos o servicios.
- Creación básica de cotizaciones y base del flujo de pedido.
- Resumen de pendientes y próximas acciones en el tablero principal.
- Visualización de módulos premium bloqueados mediante reglas de plan.

**Quedó fuera del MVP del Sprint 1:**

- Backend centralizado y autenticación remota completa.
- Pagos de suscripción reales con pasarela externa.
- Sincronización multiusuario o entre múltiples dispositivos en tiempo real.
- Respaldo automático a Google Drive.
- Alquileres, suscripciones recurrentes, analítica avanzada y portal del cliente.
- Mensajería integrada con WhatsApp, correo o notificaciones push en producción.

### Sprint Backlog

#### Historia: HU-01 — Registro de datos básicos del negocio

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar las pantallas de onboarding para el registro de nombre y rubro en Figma. | Diego Steven Martin Espinoza Picón | ✅ Done |
| Construir el formulario de onboarding y capturar los datos del negocio. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Definir la estructura de la entidad BusinessProfile y preparar la persistencia en la nube. | Sebastián Chicata Serrato | ✅ Done |
| Validar que el nombre, rubro y moneda se guarden y persistan correctamente en la interfaz. | Jim Segovia Valencia | ✅ Done |
| Crear la entidad `Business` con `business_name`, `industry` y relación con `user_id`. | David Sebastián Piñarreta Rojas | ✅ Done |
| Implementar servicio para registrar y validar los datos básicos del negocio. | David Sebastián Piñarreta Rojas | ✅ Done |

#### Historia: HU-03 — Selección de módulos visibles en el dashboard

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el catálogo de módulos y los selectores (toggles) de activación en Figma. | Diego Steven Martin Espinoza Picón | ✅ Done |
| Desarrollar la vista de configuración y enlazarla con la entidad `ModuleConfig` para reflejar qué módulos están visibles o activos. | Jim Segovia Valencia | ✅ Done |

#### Historia: HU-04 — Ordenamiento de módulos del menú principal

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Implementar una interacción de arrastrar y soltar (Drag & Drop) para modificar el orden de los módulos y asegurar que la preferencia se guarde al reiniciar la app. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Supervisar la integración de esta vista con el menú de navegación general. | Jim Segovia Valencia | ✅ Done |

#### Historia: HU-05 — Registro de clientes

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el formulario de alta para la entidad `Client`. | Diego Steven Martin Espinoza Picón | ✅ Done |
| Maquetar el formulario con campos obligatorios y conectar la creación de nuevos registros. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Probar la creación de clientes asegurando que los datos mínimos (nombre, contacto, origen) se registren exitosamente. | Yessly Poma de la Cruz | ✅ Done |
| Crear entidad `Customer` relacionada con `business_id`. | David Sebastián Piñarreta Rojas | ✅ Done |
| Implementar servicio para registrar clientes validando datos mínimos. | David Sebastián Piñarreta Rojas | ✅ Done |

#### Historia: HU-07 — Registro de productos o servicios

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la pantalla principal del catálogo. | Christian Gabriel Arancivia Salas | ✅ Done |
| Diseñar el modal de creación de productos o servicios. | Diego Arevalo Mauricio | ✅ Done |
| Definir los campos visibles del formulario: nombre, precio base y categoría. | Diego Steven Martin Espinoza Picón | ✅ Done |
| Crear la entidad `CatalogItem` con nombre, precio base y categoría. | David Sebastián Piñarreta Rojas | ✅ Done |
| Implementar el guardado de productos o servicios en backend. | David Sebastián Piñarreta Rojas | ✅ Done |
| Implementar el listado de productos o servicios en frontend. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Validar que el formulario no permita campos vacíos ni precio inválido. | Sebastián Chicata Serrato | ✅ Done |

#### Historia: HU-08 — Distinguir productos simples y personalizados

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Agregar en base de datos el campo para diferenciar el tipo de producto. | Sebastián Chicata Serrato | ✅ Done |
| Definir los valores permitidos para el tipo de ítem: simple o personalizado. | Sebastián Chicata Serrato | ✅ Done |
| Adaptar el formulario del catálogo para seleccionar el tipo de ítem. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Mostrar visualmente el tipo de ítem seleccionado en el formulario. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Mostrar el tipo de producto en el listado del catálogo. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Validar que todo producto registrado tenga un tipo asignado. | David Sebastián Piñarreta Rojas | ✅ Done |
| Verificar que el modelo lógico soporte el uso del tipo de producto en futuras cotizaciones. | Sebastián Chicata Serrato | ✅ Done |

#### Historia: HU-09 — Crear cotización básica

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el flujo de selección de clientes. | Christian Gabriel Arancivia Salas | ✅ Done |
| Diseñar el flujo para agregar ítems del catálogo a la cotización. | Diego Arevalo Mauricio | ✅ Done |
| Diseñar la sección de notas y resumen del total. | Diego Steven Martin Espinoza Picón | ✅ Done |
| Crear la vista principal de la entidad `Quote`. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Implementar la selección de cliente e ítems en la cotización. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Implementar el cálculo automático del total en frontend. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Crear la lógica backend para integrar cliente, catálogo e ítems en una cotización. | David Sebastián Piñarreta Rojas | 📋 To Do |
| Validar desde backend que la cotización tenga cliente, al menos un ítem y total correcto. | Sebastián Chicata Serrato | 🔄 In Progress |

#### Historia: HU-13 — Resumen de pendientes en el tablero principal

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la estructura visual del dashboard principal. | Christian Gabriel Arancivia Salas | ✅ Done |
| Definir los accesos rápidos del tablero. | Diego Arevalo Mauricio | ✅ Done |
| Diseñar la visualización de indicadores y actividad básica. | Diego Steven Martin Espinoza Picón | ✅ Done |
| Crear la pantalla principal del dashboard en frontend. | Jim Segovia Valencia | ✅ Done |
| Implementar accesos rápidos en la pantalla de inicio. | Jim Segovia Valencia | ✅ Done |
| Preparar la información básica que alimentará los indicadores del dashboard. | Sebastián Chicata Serrato | ✅ Done |
| Desplegar el dashboard en el entorno de pruebas. | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Verificar que el dashboard esté disponible para revisión del equipo. | Yessly Poma de la Cruz | 👁️ In Review |
| Crear servicio para obtener indicadores básicos desde `customers`, `items`, `products` y `services`. | David Sebastián Piñarreta Rojas | ✅ Done |
| Implementar respuesta estructurada con totales y pendientes del negocio. | David Sebastián Piñarreta Rojas | ✅ Done |

#### Historia: HU-14 — Visualizar módulos premium bloqueados

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el aspecto visual de los módulos bloqueados. | Christian Gabriel Arancivia Salas | 📋 To Do |
| Diseñar el estilo visual del paywall. | Diego Arevalo Mauricio | 📋 To Do |
| Definir la diferencia visual entre módulos activos, inactivos y premium. | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Definir la estructura de datos para identificar módulos activos, inactivos y premium. | Sebastián Chicata Serrato | ✅ Done |
| Implementar la lógica condicional según el plan del negocio. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Mostrar el bloqueo visual o paywall al intentar acceder a un módulo premium. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Validar que los módulos premium no permitan acciones internas si están bloqueados. | David Sebastián Piñarreta Rojas | ✅ Done |
| Probar que al acceder a un módulo premium se muestre el bloqueo visual y no un error. | Yessly Poma de la Cruz | 🔄 In Progress |

#### Historia: HU-15 — Ingreso mediante correo personal

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| UI: Diseñar V01 - Inicio Sesión (HU-15). | Diego Steven Martin Espinoza Picón | ✅ Done |
| Diseñar la lógica de inicio de sesión. | David Sebastián Piñarreta Rojas | ✅ Done |
| Codificar la funcionalidad de inicio de sesión. | David Sebastián Piñarreta Rojas | ✅ Done |
| Redactar documentación del código. | David Sebastián Piñarreta Rojas | ✅ Done |
| Redactar el informe final de las pruebas realizadas. | Yessly Poma de la Cruz | ✅ Done |
