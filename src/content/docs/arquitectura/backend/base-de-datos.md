---
title: Base de Datos
description: Modelo de datos y tecnología de base de datos utilizada en el backend de EmprendeX.
---

import { Aside } from '@astrojs/starlight/components';

<Aside type="caution" title="En definición">
  La tecnología y el modelo de datos de la base de datos se están definiendo. Esta sección se completará durante el Sprint correspondiente.
</Aside>

## Tecnología Seleccionada

| Campo | Detalle |
|-------|---------|
| **Motor** | (PostgreSQL / MySQL / MongoDB — definir) |
| **ORM / ODM** | (Prisma / Sequelize / Mongoose — definir) |
| **Hosting** | (Railway / Supabase / PlanetScale — definir) |

---

## Modelo de Datos (Borrador)

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
