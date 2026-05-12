---
title: Arquitectura del Sistema
description: Stack tecnológico, diseño modular y organización del repositorio del proyecto EmprendeX.
---

## Stack Tecnológico

La selección tecnológica prioriza la velocidad de implementación, una curva de aprendizaje razonable y compatibilidad multiplataforma (móvil y web). La aplicación funciona como una solución de cliente enriquecido con almacenamiento local en esta primera fase.

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| **Interfaz principal** | React Native + Expo + React Native Web | Permite una base común para móvil y web sin duplicar código. |
| **Lenguaje y estilos** | TypeScript + TailwindCSS (NativeWind) | Mejora la legibilidad, el tipado estático y la mantenibilidad del proyecto. |
| **Persistencia local** | SQLite / Almacenamiento local abstraído por repositorios | Asegura el funcionamiento del MVP sin servidor central, permitiendo operar offline. |
| **Diseño visual y prototipos** | Figma + Canva | Figma para mockups interactivos y flujos de alta fidelidad; Canva para assets visuales y materiales de presentación. |
| **Control de versiones** | Git + GitHub | Flujo colaborativo con ramas, pull requests y revisión de código en equipo. |
| **Gestión del trabajo** | Jira | Planificación de historias, tareas, sprints y seguimiento del avance bajo metodología Scrum. |
| **Backend (fase inicial)** | Next.js | Inicialización del proyecto backend para futura evolución de la plataforma. |

---

## Diseño Modular

La arquitectura responde a tres principios fundamentales: **modularidad**, **local-first** y **crecimiento por capacidades**.

### Principios Arquitectónicos

1. **Modularidad:** La aplicación no presenta un conjunto fijo de pantallas, sino un catálogo de módulos con estados de disponibilidad, visibilidad y orden. Cada emprendedor configura su tablero y su menú principal eligiendo los módulos que realmente necesita.

2. **Local-first:** La persistencia se realiza de forma local en el dispositivo durante el MVP. Una capa de abstracción de datos permitirá migrar posteriormente hacia respaldo en Google Drive o sincronización con nube sin reescribir la lógica de presentación.

3. **Crecimiento por capacidades:** El núcleo del MVP puede ampliarse en futuras iteraciones sin rehacer el producto. La monetización se modela desde el inicio mediante estados de módulo: libre, visible bloqueado y premium activo.

### Separación de Capas

| Capa | Responsabilidad |
|------|----------------|
| **Presentación** | Pantallas móviles y web, navegación principal, formularios, tarjetas del dashboard y menús modulares. |
| **Gestor de módulos** | Controla qué módulos están visibles, activos, bloqueados o reordenados en el tablero del negocio. |
| **Casos de uso / servicios** | Implementa reglas como registrar cliente, crear catálogo, generar cotización o actualizar estados. |
| **Dominio del negocio** | Define entidades como negocio, módulo, cliente, producto, cotización, pedido y pago. |
| **Persistencia local** | Guarda la información del negocio en almacenamiento local del dispositivo con repositorios desacoplados. |
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

Esta estructura evidencia una construcción técnica pensada para escalar: la separación entre presentación, lógica de negocio y persistencia facilita que el equipo trabaje en paralelo y que futuras integraciones (backend remoto, sincronización, pasarelas de pago) se incorporen sin refactorizaciones profundas.
