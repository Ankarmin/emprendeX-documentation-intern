---
title: Flujo de Trabajo con Git
description: Convenciones y proceso de trabajo con Git y GitHub para el equipo de EmprendeX.
---

import { Aside, Steps } from '@astrojs/starlight/components';

Este documento establece las reglas y el flujo de trabajo con Git que sigue el equipo de EmprendeX. Seguirlas garantiza un historial de commits limpio y un proceso de revisión de código ordenado.

---

## Estrategia de Ramas (Branching Strategy)

Usamos una versión simplificada de **GitHub Flow**:

```
main
  └── feature/US-01-autenticacion
  └── feature/US-02-login
  └── fix/error-en-dashboard
  └── docs/actualizar-readme
```

| Rama | Propósito |
|------|-----------|
| `main` | Código estable y listo para producción. Nadie hace push directo aquí. |
| `feature/US-XX-nombre` | Desarrollo de una historia de usuario específica. |
| `fix/nombre` | Corrección de un bug encontrado. |
| `docs/nombre` | Cambios exclusivamente de documentación. |

---

## Convención de Commits (Conventional Commits)

Todos los commits deben seguir este formato:

```
<tipo>(<scope>): <descripción corta en español>
```

### Tipos de Commit

| Tipo | Cuándo Usarlo |
|------|---------------|
| `feat` | Nueva funcionalidad (historia de usuario) |
| `fix` | Corrección de un bug |
| `docs` | Cambios en documentación |
| `style` | Cambios de formato/estilo (sin lógica) |
| `refactor` | Refactorización de código sin nueva funcionalidad |
| `chore` | Tareas de mantenimiento (dependencias, configs) |

### Ejemplos

```bash
feat(auth): agregar pantalla de registro con email y contraseña
fix(dashboard): corregir error al cargar datos del usuario
docs(readme): actualizar instrucciones de instalación
chore(deps): actualizar expo a la versión 54.0.33
```

---

## Proceso de Pull Request (PR)

<Steps>
1. **Crear la rama** a partir de `main`:
   ```bash
   git checkout -b feature/US-01-registro
   ```

2. **Desarrollar y commitear** con la convención de commits.

3. **Hacer push** de la rama al repositorio remoto:
   ```bash
   git push origin feature/US-01-registro
   ```

4. **Abrir un Pull Request en GitHub** apuntando a `main`. El título del PR debe seguir el mismo formato que el commit principal.

5. **Asignar a un revisor** del equipo. El revisor tiene **24 horas** para revisar.

6. **Resolver los comentarios** del revisor si los hay.

7. **Merge** una vez aprobado. Usar **Squash and Merge** para mantener el historial limpio.
</Steps>

<Aside type="tip" title="Protección de la rama main">
  Se recomienda configurar una **Branch Protection Rule** en GitHub para que nadie pueda hacer push directo a `main` y se requiera al menos 1 aprobación en los PRs.
</Aside>

---

## Comandos Útiles

```bash
# Ver el estado actual de tu rama
git status

# Actualizar tu rama con los últimos cambios de main
git pull origin main

# Ver el historial de commits de forma compacta
git log --oneline --graph

# Deshacer el último commit (sin perder los cambios)
git reset --soft HEAD~1

# Guardar cambios temporalmente sin commitear
git stash
git stash pop
```
