---
title: Arquitectura del Sistema
description: Stack tecnológico, diseño modular y organización del repositorio del proyecto EmprendeX.
---

## Stack Tecnológico

La selección tecnológica prioriza la velocidad de implementación, una curva de aprendizaje razonable y compatibilidad multiplataforma (móvil y web). La aplicación se construye sobre una arquitectura con cliente enriquecido y backend en la nube para centralizar la operación del negocio desde sus primeras etapas.

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| **Interfaz principal** | React Native + Expo + React Native Web | Permite una base común para móvil y web sin duplicar código. |
| **Lenguaje y estilos** | TypeScript + TailwindCSS (NativeWind) | Mejora la legibilidad, el tipado estático y la mantenibilidad del proyecto. |
| **Persistencia y datos** | PostgreSQL en Railway | Centraliza la información del negocio en la nube y prepara la base para el crecimiento del producto. |
| **Diseño visual y prototipos** | Figma + Canva | Figma para mockups interactivos y flujos de alta fidelidad; Canva para assets visuales y materiales de presentación. |
| **Control de versiones** | Git + GitHub | Flujo colaborativo con ramas, pull requests y revisión de código en equipo. |
| **Gestión del trabajo** | Jira | Planificación de historias, tareas, sprints y seguimiento del avance bajo metodología Scrum. |
| **Backend** | NestJS desplegado en Railway | Provee la capa de APIs y servicios remotos para la aplicación móvil y futura versión web. |

---

## Diseño Modular

La arquitectura responde a tres principios fundamentales: **modularidad**, **escalabilidad cloud** y **crecimiento por capacidades**.

### Principios Arquitectónicos

1. **Modularidad:** La aplicación no presenta un conjunto fijo de pantallas, sino un catálogo de módulos con estados de disponibilidad, visibilidad y orden. Cada emprendedor configura su tablero y su menú principal eligiendo los módulos que realmente necesita.

2. **Escalabilidad cloud:** La persistencia principal se apoya en un backend en la nube con Railway y PostgreSQL. La separación por capas permite evolucionar la aplicación sin reescribir la lógica de presentación.

3. **Crecimiento por capacidades:** El núcleo del MVP puede ampliarse en futuras iteraciones sin rehacer el producto. La monetización se modela desde el inicio mediante estados de módulo: libre, visible bloqueado y premium activo.

### Separación de Capas

| Capa | Responsabilidad |
|------|----------------|
| **Presentación** | Pantallas móviles y web, navegación principal, formularios, tarjetas del dashboard y menús modulares. |
| **Gestor de módulos** | Controla qué módulos están visibles, activos, bloqueados o reordenados en el tablero del negocio. |
| **Casos de uso / servicios** | Implementa reglas como registrar cliente, crear catálogo, generar cotización o actualizar estados. |
| **Dominio del negocio** | Define entidades como negocio, módulo, cliente, producto, cotización, pedido y pago. |
| **Persistencia y acceso a datos** | Gestiona el acceso a la información del negocio a través de servicios remotos y repositorios desacoplados del resto de la aplicación. |
| **Gestor de plan y paywalls** | Evalúa qué funciones están libres, cuáles quedan bloqueadas y cómo se representan en la UI. |

---

## Estructura del Repositorio

El desarrollo se distribuye en repositorios separados para mantener claridad entre el cliente móvil y los futuros servicios web.

| Repositorio | Enlace | Descripción |
|-------------|--------|-------------|
| **App Móvil** | [github.com/JimSegovia/emprendeX-mobile.git](https://github.com/JimSegovia/emprendeX-mobile.git) | Código fuente de la aplicación React Native + Expo. |
| **Versión Web** | *Por crear* | Repositorio destinado a la futura versión web de la plataforma. |

### Organización del Código (App Móvil)

La estructura del proyecto sigue las convenciones de **Expo Router**, utilizando file-based routing para simplificar la navegación:

```
emprendeX-mobile/
├── app/                          # Rutas principales de Expo Router
│   ├── (drawer)/                 # Layout con Drawer navigation
│   │   └── (tabs)/               # Tabs dentro del Drawer
│   │       ├── _layout.tsx       # Configuración de los Tabs
│   │       └── index.tsx         # Pantalla principal (Dashboard)
│   ├── _layout.tsx               # Root layout global
│   └── ...                       # Pantallas adicionales por módulo
├── components/                   # Componentes reutilizables de UI
├── hooks/                        # Custom hooks (lógica de estado, formularios)
├── constants/                    # Constantes globales (colores, configuraciones)
├── assets/                       # Imágenes, fuentes, íconos y recursos estáticos
└── package.json
```

### Mapeo de Navegación

```
App
└── RootLayout (_layout.tsx)
    ├── AuthStack (sin autenticar)
    │   ├── Splash / Onboarding
    │   └── Login (HU-15)
    └── DrawerLayout (autenticado)
        ├── Tab: Dashboard (HU-13)
        ├── Tab: Clientes (HU-05)
        ├── Tab: Catálogo (HU-07)
        ├── Tab: Cotizaciones (HU-09)
        └── Drawer: Menú lateral con configuración de módulos (HU-03, HU-04)
```

Esta estructura evidencia una construcción técnica pensada para escalar: la separación entre presentación, lógica de negocio y acceso a datos facilita que el equipo trabaje en paralelo y que futuras integraciones, incluidas pasarelas de pago, se incorporen sin refactorizaciones profundas.
