---
title: Product Backlog
description: Lista priorizada de todas las historias de usuario del proyecto EmprendeX, incluyendo las deducidas del Sprint 0 y las extraídas del Jira.csv para el Sprint 1.
---

El **Product Backlog** es el inventario centralizado de todo el trabajo funcional del proyecto. Es mantenido y priorizado por el Líder de Proyecto y constituye la única fuente de verdad sobre qué se va a desarrollar.

Las historias de usuario están organizadas por épicas y priorizadas según su importancia para el MVP.

---

## Historias de Usuario del Product Backlog

| ID | Historia de Usuario | Prioridad | Estado General |
|----|---------------------|-----------|----------------|
| **HU-01** | Como emprendedor quiero registrar los datos básicos de mi negocio para personalizar la aplicación desde el primer uso. | Alta | En Progreso |
| **HU-02** | Como emprendedor quiero acceder a mi espacio local en el dispositivo para usar la app sin depender de un servidor externo. | Alta | En Progreso |
| **HU-03** | Como emprendedor quiero elegir qué módulos estarán visibles en mi dashboard para trabajar solo con lo que necesito. | Alta | En Progreso |
| **HU-04** | Como emprendedor quiero visualizar y ordenar los módulos del menú principal para priorizar mi flujo de trabajo. | Alta | En Progreso |
| **HU-05** | Como emprendedor quiero registrar clientes para mantener organizada mi base de contactos. | Media | En Progreso |
| **HU-06** | Como emprendedor quiero ver la ficha básica de un cliente para recordar su información y su relación comercial. | Media | Por Hacer |
| **HU-07** | Como emprendedor quiero registrar productos o servicios para reutilizarlos en cotizaciones y pedidos. | Media | En Progreso |
| **HU-08** | Como emprendedor quiero distinguir productos simples y personalizados para representar mejor mi negocio. | Media | En Progreso |
| **HU-09** | Como emprendedor quiero crear una cotización básica para responder pedidos recibidos por chat. | Media | En Progreso |
| **HU-10** | Como emprendedor quiero convertir una cotización aprobada en un pedido para evitar reprocesar información. | Media | Por Hacer |
| **HU-11** | Como emprendedor quiero actualizar el estado de un pedido para saber si está pendiente, en proceso o entregado. | Media | Por Hacer |
| **HU-12** | Como emprendedor quiero registrar adelantos y saldos pendientes para tener control de cobro. | Media | Por Hacer |
| **HU-13** | Como emprendedor quiero ver un resumen de pendientes y próximos compromisos en el tablero principal para organizar mi jornada. | Media | En Progreso |
| **HU-14** | Como emprendedor quiero visualizar módulos premium bloqueados para entender qué funciones adicionales podría activar con una suscripción. | Media | En Progreso |
| **HU-15** | Como emprendedor quiero poder ingresar a la aplicación mediante un correo personal. | Media | En Progreso |
| **HU-16** | Como emprendedor quiero iniciar sesión con mi cuenta de Google para tener practicidad en el inicio de sesión. | Media | Por Hacer |

---

## Épicas Asociadas

| ID | Épica | Historias Incluidas |
|----|-------|---------------------|
| **EP-01** | Inicio y configuración base del negocio | HU-01, HU-02, HU-15, HU-16 |
| **EP-02** | Dashboard modular y navegación personalizada | HU-03, HU-04 |
| **EP-03** | Gestión de clientes | HU-05, HU-06 |
| **EP-04** | Gestión de catálogo | HU-07, HU-08 |
| **EP-05** | Cotizaciones y pedidos | HU-09, HU-10 |
| **EP-06** | Pagos, seguimiento y agenda | HU-11, HU-12, HU-13 |
| **EP-07** | Freemium y visibilidad de módulos premium | HU-14 |

---

## Contexto de los Sprints Iniciales

Las historias fueron introducidas al backlog de la siguiente manera:

- **Sprint 0 (Fase de Cimientos):** Se definieron las bases del proyecto: idea del negocio, arquitectura técnica, prototipos iniciales y configuración de herramientas. No se desarrollaron historias de usuario funcionales en este sprint; su propósito fue preparar el terreno para el desarrollo del MVP.

- **Sprint 1 (MVP):** Se comprometieron las historias prioritarias para construir la primera versión navegable del producto. Según la planificación del Documento de Arquitectura, las historias seleccionadas fueron: **HU-01, HU-02, HU-03, HU-04, HU-05, HU-07, HU-08, HU-09, HU-13, HU-14**. Adicionalmente, el equipo incorporó la historia **HU-15** (ingreso mediante correo personal) para cerrar el flujo de autenticación del MVP.

Las historias **HU-06, HU-10, HU-11 y HU-12** quedaron previstas para la siguiente iteración, una vez estabilizados el dashboard, la configuración modular, el registro de clientes y el catálogo inicial.

- **Sprint 2 (Ciclo Comercial y Login Social):** Se comprometieron las historias pendientes de iteraciones anteriores junto con la nueva historia de inicio de sesión con Google: **HU-06, HU-10, HU-11, HU-12, HU-16**. El objetivo es completar el ciclo comercial (cotización → pedido → estado → cobro) y facilitar el acceso mediante autenticación social.
