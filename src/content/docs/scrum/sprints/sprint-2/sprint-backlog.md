---
title: Sprint Backlog
description: Backlog del Sprint 2 - Ciclo Comercial y Login Social del proyecto EmprendeX.
---

## Sprint 2: Ciclo Comercial y Login Social

> Este backlog fue actualizado con base en el CSV más reciente de Jira. También se corrigieron las referencias de vistas que estaban con código equivocado en varias tareas de diseño.

### Sprint Backlog

#### Historia: HU-06 — Ver ficha básica de un cliente

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la pantalla de ficha/detalle de cliente en Figma (**V10**). | Christian Gabriel Arancivia Salas | 📋 To Do |
| Diseñar la visualización de historial resumido del cliente, pedidos y saldo (**V10**). | Diego Arevalo Mauricio | 📋 To Do |
| Crear la vista de detalle de cliente en frontend. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Implementar el endpoint para obtener los datos completos del cliente. | David Sebastián Piñarreta Rojas | 📋 To Do |
| Validar que la ficha muestre datos, historial de pedidos y saldo pendiente. | Yessly Poma de la Cruz | 📋 To Do |

#### Historia: HU-10 — Convertir cotización aprobada en pedido

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar el flujo de conversión cotización → pedido en Figma (**V14**). | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Diseñar la confirmación visual de conversión exitosa (**V14**). | Christian Gabriel Arancivia Salas | 📋 To Do |
| Implementar el botón y la lógica de conversión en frontend. | Joshua Nicolás Chávez Cerna | 📋 To Do |
| Crear la entidad `Order` a partir de una `Quote` en backend. | David Sebastián Piñarreta Rojas | 📋 To Do |
| Definir la migración de datos de cotización a pedido en la base de datos. | Sebastián Chicata Serrato | 🔄 In Progress |
| Validar que la conversión preserve todos los datos y no duplique registros. | Sebastián Chicata Serrato | ✅ Done |

#### Historia: HU-11 — Actualizar el estado de un pedido

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar los estados visuales del pedido: pendiente, en proceso, entregado (**V06**). | Diego Arevalo Mauricio | 📋 To Do |
| Diseñar el selector de cambio de estado en Figma (**V06**). | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Implementar el componente de cambio de estado en frontend. | Jim Segovia Valencia | 📋 To Do |
| Implementar la lógica de transición de estados en backend. | David Sebastián Piñarreta Rojas | 📋 To Do |
| Agregar validación de transiciones permitidas entre estados. | Sebastián Chicata Serrato | 🔄 In Progress |
| Probar cada transición de estado y verificar la actualización en la UI. | Yessly Poma de la Cruz | 📋 To Do |

#### Historia: HU-12 — Registrar adelantos y saldos pendientes

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la sección de pagos dentro de la ficha del pedido (**V17**). | Christian Gabriel Arancivia Salas | 📋 To Do |
| Diseñar el formulario de registro de adelanto y visualización de saldo (**V17**). | Diego Arevalo Mauricio | 📋 To Do |
| Implementar el formulario de registro de pago en frontend. | Joshua Nicolás Chávez Cerna | ✅ Done |
| Crear la entidad `Payment` y su relación con `Order` en backend. | David Sebastián Piñarreta Rojas | 📋 To Do |
| Definir el cálculo automático del saldo pendiente. | Sebastián Chicata Serrato | 🔄 In Progress |
| Validar que el saldo se actualice correctamente tras cada adelanto. | Yessly Poma de la Cruz | 📋 To Do |

#### Historia: HU-16 — Iniciar sesión con Google

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Diseñar la pantalla de login con opción Google en Figma (**V01**). | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Diseñar el flujo visual de autorización OAuth2 con Google (**V01**). | Diego Arevalo Mauricio | 📋 To Do |
| Implementar el botón “Iniciar sesión con Google” en frontend. | Jim Segovia Valencia | 📋 To Do |
| Configurar OAuth2 con Google en backend. | David Sebastián Piñarreta Rojas | 📋 To Do |
| Definir la estructura para asociar cuenta de Google con el perfil existente. | Sebastián Chicata Serrato | ✅ Done |
| Probar el flujo completo de autenticación con Google. | Yessly Poma de la Cruz | 📋 To Do |
| Redactar documentación del flujo de autenticación con Google. | Yessly Poma de la Cruz | 📋 To Do |

#### Tareas Transversales

| Tarea | Responsable | Estado |
|-------|-------------|--------|
| Mejorar la estructura del sidebar y navegación de la web de documentación. | Jim Segovia Valencia | 📋 To Do |
| Implementar componentes interactivos en la documentación (carrusel de vistas). | Jim Segovia Valencia | ✅ Done |
| Redactar documentación de arquitectura del frontend móvil. | Jim Segovia Valencia | ✅ Done |
| Proveer plantillas para documentación en Word. | Jim Segovia Valencia | 📋 To Do |
| Agregar anexos a la web de documentación. | Jim Segovia Valencia | 📋 To Do |
| Gestionar y actualizar el tablero de Jira con el progreso del sprint. | Jim Segovia Valencia | ✅ Done |
| Coordinar y facilitar las ceremonias Scrum del sprint. | Jim Segovia Valencia | ✅ Done |
| Revisar y hacer seguimiento a los pull requests del equipo. | Jim Segovia Valencia | ✅ Done |
| Mantener la consistencia visual entre las pantallas del sprint (**V10, V14, V06, V17, V01**). | Diego Arevalo Mauricio | 📋 To Do |
| Crear y actualizar la guía de estilos (design system) en Figma. | Diego Arevalo Mauricio | 📋 To Do |
| Documentar los flujos de usuario de las nuevas funcionalidades (**V10, V14, V06, V17**). | Christian Gabriel Arancivia Salas | 📋 To Do |
| Mantener actualizado el mapa de navegación completo de la app. | Christian Gabriel Arancivia Salas | 📋 To Do |
| Realizar code review de los pull requests del frontend. | Joshua Nicolás Chávez Cerna | 🔄 In Progress |
| Configurar y mantener el linter y formatter del proyecto frontend. | Joshua Nicolás Chávez Cerna | 👁️ In Review |
| Documentar los nuevos endpoints de la API con ejemplos de uso. | David Sebastián Piñarreta Rojas | 📋 To Do |
| Realizar code review de los pull requests del backend. | David Sebastián Piñarreta Rojas | 📋 To Do |
| Mantener actualizado el diagrama entidad-relación con las nuevas entidades. | Sebastián Chicata Serrato | ✅ Done |
| Crear seeds de datos de prueba para desarrollo y testing. | Sebastián Chicata Serrato | 🔄 In Progress |
| Monitorear el pipeline de CI/CD y resolver fallos. | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Gestionar variables de entorno y secretos del proyecto. | Diego Steven Martin Espinoza Picón | 📋 To Do |
| Diseñar y ejecutar el plan de pruebas del sprint. | Yessly Poma de la Cruz | 📋 To Do |
| Mantener actualizada la matriz de trazabilidad requisitos ↔ pruebas. | Yessly Poma de la Cruz | 📋 To Do |
