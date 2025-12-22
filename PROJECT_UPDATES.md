# Actualizaciones del Proyecto Base

## Resumen
Este documento lista todas las mejoras y actualizaciones implementadas en el proyecto para aplicar en el sitio base.

---

## 1. Sistema de Menú Completo

### Archivos nuevos
- `src/data/menu.ts` - Estructura de datos del menú con soporte para variantes, grupos y múltiples opciones
- `src/components/Menu.tsx` - Componente contenedor del menú
- `src/components/MenuSection.tsx` - Componente de sección del menú
- `src/components/MenuItem.tsx` - Componente de item individual con soporte para variantes

### Características
- Múltiples opciones por producto (ej: "Sin papas"/"Con papas")
- Variantes (ej: Carne/Pollo, Frita/Horno)
- Agrupación de productos relacionados
- Todos los items requieren consulta por WhatsApp (sin precios fijos)
- Diseño tipo menú de restaurante (lista vertical, no cards)

### Integración
- Agregar `<Menu />` en la página principal después de `<ProductCatalog />`
- Agregar link en Header que apunte a `#menu`

---

## 2. Limpieza de Dependencias

### Eliminadas (no se usaban)
- `react-day-picker`
- `recharts`
- `vaul`
- `cmdk`
- `input-otp`
- `react-resizable-panels`
- `embla-carousel-react`
- `date-fns`
- `@hookform/resolvers`

### Actualizadas
- `next-themes`: `^0.3.0` → `^0.4.4` (compatibilidad React 19)
- `vite`: `^5.4.19` → `^7.3.0` (corrección de vulnerabilidades)

### Resultado
- Sin conflictos de peer dependencies
- Build más rápido
- Menos vulnerabilidades

---

## 3. GitHub Actions - Deploy FTP

### Archivo
- `.github/workflows/deploy-ftp.yml`

### Características
- Deploy automático por rama (main → production, develop → staging)
- Deploy manual con inputs personalizados
- Soporte para múltiples subdominios
- Normalización automática de rutas (siempre termina con `/`)
- Generación de archivo `version.json` para tracking

### Configuración requerida (Secrets en GitHub)
```
FTP_SERVER
FTP_USERNAME
FTP_PASSWORD
SUBDOMAIN_PRODUCTION
FTP_SERVER_DIR_PRODUCTION
SUBDOMAIN_STAGING (opcional)
FTP_SERVER_DIR_STAGING (opcional)
```

---

## 4. Invalidación de Caché

### Archivos modificados
- `index.html` - Meta tags para evitar caché del HTML
- `vite.config.ts` - Configuración de build con hashes
- `public/.htaccess` - Headers de caché para Apache
- `.github/workflows/deploy-ftp.yml` - Generación de `version.json`

### Estrategias implementadas
- HTML: no se cachea (siempre se descarga la versión más reciente)
- Assets: se cachean por 1 año (los nombres cambian en cada build)
- `version.json`: no se cachea (para verificar actualizaciones)

---

## 5. Mejoras en ProductCard

### Cambios
- `attribute` ahora es `string[]` en lugar de `string`
- Los atributos se muestran como badges/chips
- Mejor visualización cuando hay muchos atributos

### Archivo modificado
- `src/components/ProductCard.tsx`
- `src/data/products.ts` - Todos los atributos convertidos a arrays

---

## 6. Ordenamiento de Productos

### Cambio
- Los productos se ordenan automáticamente por categoría y luego por nombre

### Archivo modificado
- `src/components/ProductCatalog.tsx`

---

## 7. Configuración de WhatsApp

### Cambio
- Agregado método `custom` para mensajes personalizados

### Archivo modificado
- `src/config/whatsapp.ts`

---

## Checklist de Implementación

- [x] Copiar archivos del sistema de menú
- [x] Actualizar `package.json` (eliminar dependencias, actualizar versiones)
- [x] Ejecutar `npm install`
- [x] Copiar workflow de GitHub Actions
- [ ] Configurar secrets en GitHub (requiere acción manual)
- [x] Copiar `.htaccess` a `public/`
- [x] Actualizar `vite.config.ts` con configuración de build
- [x] Agregar meta tags en `index.html`
- [x] Actualizar `ProductCard` con arrays de atributos
- [x] Actualizar `whatsapp.ts` con método `custom`
- [x] Integrar `<Menu />` en página principal
- [x] Agregar navegación al menú en Header
- [x] Verificar que todo compile sin errores
- [ ] Probar deploy en staging (requiere configuración de secrets)

---

## Notas Importantes

1. **Estructura de datos**: El menú usa una estructura diferente a productos (más compleja, soporta variantes y grupos)

2. **Sin precios fijos**: Todos los items del menú usan `actionText: "Hacé tu pedido"` en lugar de precios

3. **Workflow FTP**: Asegurarse de que `server-dir` siempre termine con `/` (se normaliza automáticamente)

4. **Caché**: El `.htaccess` solo funciona en servidores Apache. Para otros servidores, configurar headers manualmente.

5. **Vite 7**: Es una versión mayor, verificar compatibilidad con plugins antes de actualizar.

