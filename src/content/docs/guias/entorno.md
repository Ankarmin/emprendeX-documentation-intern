---
title: Entorno de Desarrollo
description: Guía paso a paso para configurar el entorno de desarrollo local del proyecto EmprendeX.
---

import { Aside, Steps, Tabs, TabItem } from '@astrojs/starlight/components';

Esta guía te ayuda a tener el proyecto EmprendeX corriendo en tu máquina local desde cero.

---

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

| Herramienta | Versión Mínima | Verificar con |
|-------------|----------------|---------------|
| **Node.js** | ≥ 22.12.0 | `node --version` |
| **npm** | ≥ 9.6.5 | `npm --version` |
| **Git** | Cualquier versión reciente | `git --version` |
| **Expo Go** (app móvil) | Última versión | App Store / Play Store |

<Aside type="tip" title="Gestión de versiones de Node">
  Se recomienda usar **nvm** (Node Version Manager) para manejar múltiples versiones de Node.js. Instalación: [nvm.sh](https://github.com/nvm-sh/nvm)
  ```bash
  nvm install 23
  nvm use 23
  ```
</Aside>

---

## Instalación del Proyecto

<Steps>
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/emprendex.git
   cd emprendex
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npx expo start
   ```

4. **Ver la app en tu dispositivo:**
   - **Físico:** Escanea el código QR con la app **Expo Go**.
   - **Emulador Android:** Presiona `a` en la terminal.
   - **Emulador iOS:** Presiona `i` en la terminal (requiere macOS).
</Steps>

---

## Variables de Entorno

Si el proyecto requiere variables de entorno (API keys, URLs), crea un archivo `.env` en la raíz:

```bash
# Copia el archivo de ejemplo
cp .env.example .env
```

Luego rellena los valores necesarios. **Nunca subas el archivo `.env` al repositorio.**

| Variable | Descripción |
|----------|-------------|
| `EXPO_PUBLIC_API_URL` | URL base de la API del backend |
| (agregar más según el proyecto) | |

---

## Estructura del Proyecto

```
EmprendeX/
├── app/                 # Rutas (Expo Router)
├── components/          # Componentes reutilizables
├── constants/           # Colores, temas, etc.
├── hooks/               # Custom hooks
├── assets/              # Imágenes, fuentes
├── app.json             # Configuración de Expo
└── package.json         # Dependencias
```

---

## Solución de Problemas Comunes

### El metro bundler se cuelga o da errores de caché

```bash
npx expo start --clear
```

### Error de dependencias incompatibles

```bash
npx expo install --fix
```

### La app no se actualiza en el dispositivo

Agita el dispositivo para abrir el menú de desarrollo y presiona **"Reload"**.
