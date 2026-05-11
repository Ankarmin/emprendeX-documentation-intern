---
title: Definición de Hecho (DoD)
description: Criterios que debe cumplir una historia de usuario para considerarse completada en el proyecto EmprendeX.
---

import { Aside } from '@astrojs/starlight/components';

La **Definición de Hecho (Definition of Done)** es el acuerdo del equipo sobre los criterios mínimos que debe cumplir cualquier pieza de trabajo para considerarse **terminada**. Es la garantía de calidad del equipo.

<Aside type="caution" title="Importante">
  Si una historia no cumple todos los criterios de la DoD, **no puede ser aceptada** en la Sprint Review y vuelve al backlog.
</Aside>

---

## Criterios de Aceptación (Historia de Usuario)

Para que una historia de usuario sea considerada **terminada**, debe cumplir:

### ✅ Código
- [ ] El código fue escrito y sube al repositorio en una rama propia (`feature/US-XX`).
- [ ] Se realizó un **Pull Request** y fue aprobado por al menos 1 miembro del equipo.
- [ ] El código sigue las convenciones de estilo del proyecto.
- [ ] No hay errores ni warnings en la consola de desarrollo.

### ✅ Pruebas
- [ ] La funcionalidad fue probada manualmente en dispositivo o emulador (Android/iOS).
- [ ] Los casos de borde fueron considerados y probados.
- [ ] No se introdujeron regresiones (funcionalidades anteriores siguen funcionando).

### ✅ UX / Diseño
- [ ] La pantalla o componente es responsive y se ve correctamente en diferentes tamaños de pantalla.
- [ ] Se respetan los colores, tipografías y estilos definidos en el sistema de diseño.

### ✅ Integración
- [ ] El código fue mergeado a la rama principal (`main` o `develop`).
- [ ] El build de la aplicación no falla después del merge.

### ✅ Documentación
- [ ] Si se agregó un endpoint de API, fue documentado.
- [ ] Si se tomó una decisión técnica relevante, fue registrada en la documentación de Arquitectura.

### ✅ Validación
- [ ] El Product Owner revisó y **aceptó** la historia en la Sprint Review.

---

## Criterios para el Incremento (Sprint Completo)

Para que el Sprint sea exitoso:

- [ ] Todas las historias comprometidas cumplen la DoD individual.
- [ ] El incremento fue demostrado en la Sprint Review.
- [ ] Se realizó la Retrospectiva y se documentaron las acciones de mejora.
- [ ] El Sprint está documentado en esta página de Docs.

---

## Historial de Cambios en la DoD

| Versión | Sprint | Cambio Realizado |
|---------|--------|------------------|
| v1.0 | Sprint 1 | Definición inicial de la DoD |
