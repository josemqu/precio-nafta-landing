# 📸 Configuración de Screenshots - Precio Nafta Landing

## ✅ Sistema Implementado

He creado un sistema inteligente para gestionar las capturas de pantalla de tu app Precio Nafta en la landing page.

### 🗂️ **Estructura de Carpetas Creada**

```
public/images/screenshots/
├── mobile/
│   ├── README.md (instrucciones detalladas)
│   ├── mapa-estaciones.png (pendiente)
│   ├── lista-precios.png (pendiente)
│   └── perfil-estadisticas.png (pendiente)
└── web/
    ├── README.md (instrucciones detalladas)
    ├── dashboard-principal.png (pendiente)
    └── analisis-detallado.png (pendiente)
```

### 🔧 **Componentes Implementados**

1. **SmartImage Component**: Detecta automáticamente si las imágenes locales están disponibles
2. **Sistema de Fallback**: Si no encuentra las imágenes reales, usa las de Unsplash como respaldo
3. **Optimización automática**: Next.js optimiza las imágenes automáticamente

### 📱 **Imágenes Requeridas - MÓVIL**

Coloca estas imágenes en `public/images/screenshots/mobile/`:

- **`mapa-estaciones.png`**: Vista del mapa con estaciones y precios
- **`lista-precios.png`**: Lista de estaciones con precios de combustibles  
- **`perfil-estadisticas.png`**: Pantalla de perfil con estadísticas de ahorro

**Dimensiones recomendadas**: 375x812px (iPhone 13 Pro)

### 💻 **Imágenes Requeridas - WEB**

Coloca estas imágenes en `public/images/screenshots/web/`:

- **`dashboard-principal.png`**: Vista principal del dashboard web
- **`analisis-detallado.png`**: Pantalla de análisis con gráficos

**Dimensiones recomendadas**: 1920x1080px o 1440x900px

## 🚀 **Cómo Usar**

1. **Toma las capturas** de tu app real (móvil y web)
2. **Renómbralas** exactamente como se indica arriba
3. **Colócalas** en las carpetas correspondientes
4. **¡Listo!** Se mostrarán automáticamente en la landing page

## ⚡ **Estado Actual**

- ✅ Sistema implementado y funcionando
- ✅ Build exitoso sin errores
- ✅ Fallbacks funcionando (muestra imágenes de Unsplash mientras tanto)
- ⏳ Esperando imágenes reales de la app

## 📝 **Notas Importantes**

- Las imágenes se optimizan automáticamente por Next.js
- Soporta formatos PNG y JPG
- Si cambias el nombre de alguna imagen, actualiza las rutas en `Screenshots.tsx`
- Los README en cada carpeta tienen instrucciones detalladas

---

**¡El sistema está listo para recibir tus screenshots reales!** 🎉
