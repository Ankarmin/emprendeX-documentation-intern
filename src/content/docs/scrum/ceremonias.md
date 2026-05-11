---
title: Ceremonias y Artefactos Scrum
description: Guía de las ceremonias y artefactos Scrum utilizados en el desarrollo del proyecto EmprendeX.
---

import { Aside, Card, CardGrid } from '@astrojs/starlight/components';

Las ceremonias Scrum son los eventos estructurados que permiten al equipo inspeccionar y adaptar su trabajo. Aquí se documenta cómo las aplicamos en EmprendeX.

---

## Artefactos Scrum

<CardGrid>
  <Card title="Product Backlog" icon="list-format">
    Lista priorizada de todo el trabajo pendiente del proyecto. Es dinámico y evoluciona con el proyecto. Mantenido por el Product Owner.
  </Card>
  <Card title="Sprint Backlog" icon="document">
    Subconjunto del Product Backlog seleccionado para el Sprint actual. Incluye el plan para lograr el Sprint Goal.
  </Card>
  <Card title="Incremento" icon="rocket">
    El producto entregable al final de cada Sprint. Debe cumplir la Definición de Hecho y ser potencialmente shippeable.
  </Card>
</CardGrid>

---

## Ceremonias

### 1. Sprint Planning

**¿Cuándo?** Al inicio de cada Sprint.  
**¿Cuánto dura?** (X horas) para un Sprint de 2 semanas.  
**¿Quiénes participan?** Todo el equipo Scrum.

**Agenda:**
1. El PO presenta las historias prioritarias del backlog.
2. El equipo discute y estima el esfuerzo (Story Points).
3. Se define el **Sprint Goal** (objetivo del Sprint).
4. El equipo se compromete con las historias del Sprint Backlog.

**Output:** Sprint Backlog definido y Sprint Goal acordado.

---

### 2. Daily Scrum

**¿Cuándo?** Todos los días durante el Sprint.  
**¿Cuánto dura?** Máximo 15 minutos.  
**¿Quiénes participan?** El equipo de desarrollo (el SM facilita).

Cada miembro responde:
- ✅ **¿Qué hice desde el último Daily?**
- 📋 **¿Qué planeo hacer hoy?**
- 🚧 **¿Tengo algún impedimento?**

<Aside type="note" title="Registro">
  Los impedimentos detectados en el Daily se registran en el Sprint actual (ver documentación de Sprints) y el Scrum Master es responsable de resolverlos.
</Aside>

---

### 3. Sprint Review

**¿Cuándo?** Al final de cada Sprint.  
**¿Cuánto dura?** (X horas) para un Sprint de 2 semanas.  
**¿Quiénes participan?** Todo el equipo Scrum + stakeholders/profesor.

**Agenda:**
1. El equipo demuestra el incremento desarrollado.
2. El PO valida qué historias cumplen la Definición de Hecho.
3. Los stakeholders dan feedback.
4. Se actualiza el Product Backlog si es necesario.

**Output:** Incremento aceptado/rechazado e insights para el siguiente Sprint.

---

### 4. Retrospectiva

**¿Cuándo?** Después de la Sprint Review, al final del Sprint.  
**¿Cuánto dura?** (X hora/s).  
**¿Quiénes participan?** Todo el equipo Scrum.

**Formato usado (Start / Stop / Continue):**

| Categoría | Pregunta |
|-----------|----------|
| 🟢 **Start** | ¿Qué deberíamos empezar a hacer? |
| 🔴 **Stop** | ¿Qué deberíamos dejar de hacer? |
| 🔵 **Continue** | ¿Qué estamos haciendo bien y debemos continuar? |

**Output:** Lista de acciones de mejora para el próximo Sprint.

---

### 5. Refinamiento del Backlog

**¿Cuándo?** A mitad del Sprint (no es una ceremonia formal en Scrum, pero es una buena práctica).  
**¿Cuánto dura?** Máximo 10% del tiempo del Sprint.

**Propósito:**
- Clarificar historias para el próximo Sprint.
- Dividir épicas grandes en historias más pequeñas.
- Re-estimar historias si es necesario.
