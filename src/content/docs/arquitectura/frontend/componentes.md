---
title: Componentes UI
description: Sistema de componentes reutilizables de la interfaz de usuario de EmprendeX.
---

## Filosofía de Componentes

Los componentes de EmprendeX siguen el principio de **composición sobre herencia**. Están divididos en tres categorías:

| Categoría | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Primitivos** | Bloques básicos de UI sin lógica de negocio | `Button`, `Text`, `Input` |
| **Compuestos** | Combinación de primitivos con algo de lógica | `CourseCard`, `UserAvatar` |
| **Pantallas** | Vistas completas, combinan compuestos | `DashboardScreen` |

---

## Ubicación de Componentes

```
components/
├── ui/              # Componentes primitivos genéricos
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Text.tsx
└── features/        # Componentes específicos del dominio
    ├── CourseCard.tsx
    └── UserProfile.tsx
```

---

## Sistema de Estilos

Usamos **NativeWind** (TailwindCSS para React Native) para estilos. Las clases se aplican con la prop `className`:

```tsx
// Ejemplo de un componente Button
export function Button({ label, onPress }: ButtonProps) {
  return (
    <Pressable
      className="bg-purple-600 px-6 py-3 rounded-xl active:opacity-80"
      onPress={onPress}
    >
      <Text className="text-white font-semibold text-center">{label}</Text>
    </Pressable>
  );
}
```

---

## Convenciones

- Los componentes se nombran en **PascalCase**: `CourseCard.tsx`.
- Cada componente exporta sus **tipos/interfaces** con el sufijo `Props`: `CourseCardProps`.
- Los componentes deben ser **agnósticos al estado global** — reciben datos por props.
