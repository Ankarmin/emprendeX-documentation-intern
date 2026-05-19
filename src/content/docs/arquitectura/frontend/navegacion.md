---
title: Navegación (Expo Router)
description: Documentación del sistema de navegación de EmprendeX basado en Expo Router con file-based routing.
---

import { Aside } from '@astrojs/starlight/components';

## ¿Qué es Expo Router?

**Expo Router** es el sistema de navegación de EmprendeX. Funciona con **file-based routing**, lo que significa que la estructura de archivos dentro de la carpeta `app/` define directamente las rutas de la aplicación.

<Aside type="tip" title="File-Based Routing">
  Crear un archivo `app/perfil.tsx` automáticamente crea la ruta `/perfil` en la aplicación. No hay que registrar rutas manualmente.
</Aside>

---

## Estructura de Navegación

```
app/
├── _layout.tsx              # Root Layout (providers globales)
├── (auth)/                  # Grupo de rutas de autenticación
│   ├── _layout.tsx          # Layout del Stack de auth
│   ├── login.tsx            # /login
│   └── register.tsx         # /register
└── (drawer)/                # Grupo de rutas autenticadas
    ├── _layout.tsx          # Layout del Drawer
    └── (tabs)/              # Tabs dentro del Drawer
        ├── _layout.tsx      # Configuración de los Tabs
        ├── index.tsx        # /dashboard (Tab principal)
        ├── explorar.tsx     # /explorar
        └── perfil.tsx       # /perfil
```

---

## Tipos de Navegación Usados

### Stack Navigator
Usado en el flujo de autenticación. Permite la navegación "push" entre pantallas con la animación de deslizamiento estándar.

### Drawer Navigator
El menú lateral deslizante. Es el layout principal de la aplicación una vez autenticado el usuario.

### Bottom Tabs Navigator
Las pestañas del fondo de pantalla, anidadas dentro del Drawer.

---

## Navegación Programática

Para navegar entre pantallas en el código:

```typescript
import { router } from 'expo-router';

// Ir a una pantalla
router.push('/perfil');

// Reemplazar la pantalla actual (sin poder volver atrás)
router.replace('/(auth)/login');

// Volver a la pantalla anterior
router.back();
```

---

## Protección de Rutas

Las rutas privadas (accesibles solo para usuarios autenticados) se protegen en el Root Layout (`app/_layout.tsx`) usando un hook de autenticación:

```typescript
// Ejemplo simplificado
const { isAuthenticated } = useAuth();

useEffect(() => {
  if (!isAuthenticated) {
    router.replace('/(auth)/login');
  }
}, [isAuthenticated]);
```
