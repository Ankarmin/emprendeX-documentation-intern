---
title: Estructura de la API
description: Documentación de los endpoints y la arquitectura del backend de EmprendeX.
---

import { Aside } from '@astrojs/starlight/components';

## Visión General

El backend de EmprendeX expone una **API REST** que la aplicación móvil consume para todas las operaciones de datos.

| Campo | Detalle |
|-------|---------|
| **Protocolo** | REST / HTTPS |
| **Autenticación** | JWT (Bearer Token) |
| **Formato de respuesta** | JSON |
| **URL Base** | `https://api.emprendex.com/v1` (o la que defina el equipo) |

<Aside type="caution" title="En desarrollo">
  Esta sección se irá completando a medida que el backend sea implementado en los sprints correspondientes.
</Aside>

---

## Convenciones de la API

### Estructura de Respuesta Exitosa

```json
{
  "success": true,
  "data": { ... },
  "message": "Operación exitosa"
}
```

### Estructura de Respuesta de Error

```json
{
  "success": false,
  "error": {
    "code": "AUTH_001",
    "message": "Credenciales inválidas"
  }
}
```

---

## Endpoints Definidos

### Autenticación

| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/auth/register` | Registro de nuevo usuario |
| `POST` | `/auth/login` | Inicio de sesión |
| `POST` | `/auth/logout` | Cierre de sesión |
| `GET` | `/auth/me` | Obtener perfil del usuario autenticado |

### Cursos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/courses` | Listar todos los cursos |
| `GET` | `/courses/:id` | Obtener detalle de un curso |

---

## Manejo de Errores HTTP

| Código | Significado |
|--------|-------------|
| `200` | Éxito |
| `201` | Recurso creado |
| `400` | Error en la solicitud (datos inválidos) |
| `401` | No autenticado |
| `403` | Sin permisos |
| `404` | Recurso no encontrado |
| `500` | Error interno del servidor |
