---
title: Base de Datos
description: Modelo de datos y tecnología de base de datos utilizada en el backend de EmprendeX.
---

import { Aside } from '@astrojs/starlight/components';

<Aside type="note" title="Alcance actual">
  La infraestructura principal ya fue definida: EmprendeX utilizará PostgreSQL como motor de base de datos y Railway como plataforma de despliegue. El modelado específico de entidades del negocio se documentará en una iteración posterior.
</Aside>

## Tecnología Seleccionada

| Campo | Detalle |
|-------|---------|
| **Motor** | PostgreSQL |
| **ORM / ODM** | Por definir |
| **Hosting** | Railway |

---

## Modelo de Datos (Borrador)

<Aside type="caution" title="Modelo pendiente de ajuste">
  El detalle de entidades mostrado en esta sección es referencial y será reemplazado por el modelo específico de EmprendeX en una próxima actualización de la documentación.
</Aside>

### Entidad: `User`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID | Identificador único |
| `email` | String | Email del usuario (único) |
| `password_hash` | String | Contraseña encriptada (bcrypt) |
| `name` | String | Nombre del usuario |
| `created_at` | DateTime | Fecha de creación |

### Entidad: `Course`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID | Identificador único |
| `title` | String | Título del curso |
| `description` | String | Descripción del curso |
| `instructor_id` | UUID | FK a `User` |
| `created_at` | DateTime | Fecha de creación |

---

## Decisiones de Diseño

- Las contraseñas se almacenan **siempre hasheadas** con `bcrypt`. Nunca en texto plano.
- Se usan **UUIDs** como identificadores en lugar de enteros secuenciales por seguridad.
- Las fechas se almacenan en **UTC** y se convierten en el cliente según la zona horaria.
