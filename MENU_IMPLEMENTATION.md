# Implementación del Menú

## Objetivo
Integrar la sección de menú en el sitio web, mostrando todos los items configurados con sus variantes y opciones.

## Archivos ya creados
- `src/data/menu.ts` - Estructura de datos del menú
- `src/components/Menu.tsx` - Componente contenedor principal
- `src/components/MenuSection.tsx` - Componente de sección
- `src/components/MenuItem.tsx` - Componente de item individual

## Tareas

### 1. Verificar integración en página principal
- El componente `<Menu />` ya está importado en `src/pages/Index.tsx`
- Verificar que se muestre correctamente después de `<ProductCatalog />`

### 2. Agregar navegación al menú
- En `src/components/Header.tsx`, agregar un link que apunte a `#menu`
- El link debe hacer scroll suave a la sección del menú

### 3. Personalizar datos del menú
- Editar `src/data/menu.ts` con los items reales del restaurante
- Todos los items usan `actionText: "Hacé tu pedido"` (sin precios fijos)
- Mantener la estructura de secciones, variantes y grupos

### 4. Agregar imágenes (opcional)
- Importar imágenes en `src/data/menu.ts`
- Asignar a la propiedad `image` de cada `MenuItem`

### 5. Estilos finales
- Verificar que el diseño sea responsive
- Ajustar espaciado y tipografía si es necesario
- Los botones de WhatsApp deben ser consistentes

## Estructura de datos

```typescript
MenuSection {
  id, name, description?, order
  items: MenuItem[]
}

MenuItem {
  id, name, description?, category, image?
  variants?: MenuVariant[]  // Si tiene variantes (ej: Carne/Pollo)
  prices?: MenuPrice[]      // Si no tiene variantes
  groupName?: string        // Para agrupar items relacionados
  order?: number
}

MenuPrice {
  label?: string           // "Sin papas", "Con papas", etc.
  actionText?: string      // "Hacé tu pedido" (por defecto)
}
```

## Notas importantes
- Todos los items requieren consulta por WhatsApp (no hay precios fijos)
- Los labels son opcionales (solo cuando hay múltiples opciones)
- El componente maneja automáticamente variantes, grupos y múltiples precios

