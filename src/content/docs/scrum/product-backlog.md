---
title: Product Backlog
description: Lista priorizada de todas las historias de usuario y épicas del proyecto EmprendeX.
---

El **Product Backlog** es el inventario centralizado de todo el trabajo pendiente del proyecto. Es mantenido y priorizado por el **Product Owner** y es la única fuente de verdad sobre qué se va a desarrollar.

## Épicas

Las épicas son conjuntos grandes de funcionalidades que se descomponen en historias de usuario más pequeñas.

| ID | Épica | Estado |
|----|-------|--------|
| EP-01 | Autenticación y Gestión de Usuarios | ✅ Completada |
| EP-02 | Dashboard Principal | 🔄 En progreso |
| EP-03 | Módulo de Cursos | 📋 Pendiente |
| EP-04 | Notificaciones | 📋 Pendiente |

---

## Historias de Usuario

Las historias están priorizadas usando la técnica **MoSCoW** (Must have, Should have, Could have, Won't have).

### 🔴 Must Have (Imprescindibles)

| ID | Historia de Usuario | Puntos | Sprint |
|----|---------------------|--------|--------|
| US-01 | Como usuario, quiero registrarme con email y contraseña | 3 | Sprint 1 |
| US-02 | Como usuario, quiero iniciar sesión de forma segura | 2 | Sprint 1 |
| US-03 | Como usuario, quiero ver mi dashboard al ingresar | 5 | Sprint 1 |

### 🟡 Should Have (Importantes)

| ID | Historia de Usuario | Puntos | Sprint |
|----|---------------------|--------|--------|
| US-04 | Como usuario, quiero editar mi perfil | 3 | Sprint 2 |
| US-05 | Como usuario, quiero recibir notificaciones push | 5 | Sprint 2 |

### 🟢 Could Have (Deseables)

| ID | Historia de Usuario | Puntos | Sprint |
|----|---------------------|--------|--------|
| US-06 | Como usuario, quiero modo oscuro | 2 | Sprint 3 |
| US-07 | Como usuario, quiero exportar mi progreso en PDF | 4 | Sprint 3 |

---

## Criterios de Definición de Hecho (DoD)

Una historia de usuario se considera **terminada** cuando:

- ✅ El código fue revisado por al menos un miembro del equipo (Code Review).
- ✅ Las pruebas unitarias están escritas y pasan correctamente.
- ✅ La funcionalidad fue probada en dispositivo real (Android/iOS).
- ✅ La documentación fue actualizada si aplica.
- ✅ El Product Owner aprobó la historia en la Sprint Review.
