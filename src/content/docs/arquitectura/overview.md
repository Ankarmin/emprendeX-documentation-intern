---
title: Arquitectura del Sistema
description: Visión general de la arquitectura técnica del proyecto EmprendeX, incluyendo el stack tecnológico y las decisiones de diseño.
---

import { Aside, Card, CardGrid } from '@astrojs/starlight/components';

## Visión General

EmprendeX es una aplicación móvil multiplataforma (Android e iOS) desarrollada con **React Native** a través de **Expo**, con navegación basada en **Expo Router** (file-based routing).

---

## Stack Tecnológico

<CardGrid>
  <Card title="Frontend / App Móvil" icon="laptop">
    - **React Native** con **Expo** (~54.x)
    - **Expo Router** para navegación (file-based)
    - **NativeWind** (TailwindCSS para React Native)
    - **React Native Reanimated** para animaciones
  </Card>
  <Card title="Backend" icon="server">
    - (Definir tecnología de backend)
    - API REST / GraphQL
    - Autenticación con JWT / OAuth
  </Card>
  <Card title="Base de Datos" icon="random">
    - (Definir motor de base de datos)
  </Card>
  <Card title="DevOps / CI-CD" icon="setting">
    - Git + GitHub para control de versiones
    - (Definir pipelines de CI/CD)
  </Card>
</CardGrid>

---

## Estructura del Proyecto (App Móvil)

```
EmprendeX/
├── app/                     # Rutas de Expo Router
│   ├── (drawer)/            # Layout con Drawer navigation
│   │   └── (tabs)/          # Tabs dentro del Drawer
│   │       ├── _layout.tsx  # Configuración de los Tabs
│   │       └── index.tsx    # Pantalla principal (Dashboard)
│   └── _layout.tsx          # Root layout
├── components/              # Componentes reutilizables
├── constants/               # Constantes globales (colores, etc.)
├── hooks/                   # Custom hooks
└── assets/                  # Imágenes, fuentes, íconos
```

---

## Decisiones de Arquitectura

### Navegación

Se optó por **Expo Router** con file-based routing porque:
- Simplifica la estructura del proyecto al mapear archivos a rutas.
- Permite usar un **Drawer** combinado con **Bottom Tabs** de forma nativa.
- Compatible con web en un futuro si el proyecto lo requiere.

### Estilos

Se usa **NativeWind** (TailwindCSS para React Native) para:
- Mantener consistencia con la sintaxis de TailwindCSS.
- Acelerar el desarrollo de UI.
- Fácil manejo de temas dark/light.

<Aside type="caution" title="Componentes Nativos">
  Algunos componentes de React Native no son compatibles con NativeWind directamente. En esos casos se usan `StyleSheet.create()` de React Native de forma puntual.
</Aside>

---

## Diagrama de Flujo de Navegación

```
App
└── RootLayout (_layout.tsx)
    ├── AuthStack (sin autenticar)
    │   ├── Splash / Onboarding
    │   ├── Login
    │   └── Register
    └── DrawerLayout (autenticado)
        ├── Tab: Dashboard
        ├── Tab: Explorar
        ├── Tab: Mi Perfil
        └── Drawer: Menú lateral
```
