---
title: Gestión de Estado
description: Estrategia y herramientas utilizadas para gestionar el estado global de la aplicación EmprendeX.
---

import { Aside } from '@astrojs/starlight/components';

## Estrategia de Estado

En EmprendeX usamos una combinación de estrategias según el alcance del estado:

| Tipo de Estado | Herramienta | Ejemplo |
|----------------|-------------|---------|
| **Local (un componente)** | `useState` de React | Visibilidad de un modal |
| **Compartido (varias pantallas)** | `useContext` + `useReducer` | Datos del usuario autenticado |
| **Servidor / API** | `fetch` + `useEffect` | Lista de cursos disponibles |
| **Persistente (entre sesiones)** | `expo-secure-store` | Token de autenticación |

---

## Estado de Autenticación

El estado de autenticación se gestiona con un **Context** global que envuelve toda la aplicación.

```typescript
// hooks/useAuth.ts (ejemplo simplificado)
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};
```

<Aside type="note" title="Token de sesión">
  El token JWT se almacena usando `expo-secure-store`, que usa el keychain nativo (iOS Keychain / Android Keystore).
</Aside>

---

## Reglas del Equipo

1. **Mínimo estado posible:** No guardes lo que puedas derivar de otro estado.
2. **Estado lo más local posible:** Si solo un componente lo usa, que sea `useState`.
3. **Estado global solo para lo global:** Context solo para autenticación, tema o idioma.
