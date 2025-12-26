# 🎨 AURA - Agencia de Marketing Estratégico

Una landing page minimalista y editorial para una agencia de marketing digital. Diseño elegante con animaciones suaves y experiencia de usuario excepcional.

## ✨ Características

- 🎭 **Diseño Editorial Minimalista** - Tipografía elegante con Cormorant Garamond y Manrope
- 🌊 **Smooth Scroll** - Navegación suave con Lenis
- ✨ **Animaciones GSAP** - Transiciones y efectos profesionales
- 📱 **Totalmente Responsive** - Optimizado para todos los dispositivos
- 🎯 **Múltiples Páginas** - Portfolio, Equipo, y más
- 🖱️ **Cursor Personalizado** - Interacción única (desktop)
- 🎬 **Parallax Effects** - Efectos visuales inmersivos

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/aura-agency.git

# Navegar al directorio
cd aura-agency

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La web estará disponible en `http://localhost:3000`

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar build de producción
```

## 🌐 Despliegue

Para instrucciones detalladas de despliegue, consulta [DEPLOY.md](./DEPLOY.md)

### Despliegue Rápido en Netlify

```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### Despliegue en GitHub Pages

1. Push a GitHub
2. Activa GitHub Pages en Settings → Pages
3. Selecciona "GitHub Actions" como source
4. El deploy se hará automáticamente

## 📁 Estructura del Proyecto

```
agencia_marquetin/
├── css/
│   ├── style.css        # Estilos globales
│   ├── equipo.css       # Estilos página equipo
│   └── portfolio.css    # Estilos página portfolio
├── js/
│   └── main.js          # JavaScript principal (GSAP, Lenis, etc.)
├── views/
│   ├── equipo.html      # Página del equipo
│   └── portfolio.html   # Página del portfolio
├── index.html           # Landing page principal
├── package.json         # Dependencias
├── vite.config.js       # Configuración Vite
└── README.md            # Este archivo
```

## 🛠️ Tecnologías

- **Vite** - Build tool y dev server
- **GSAP** - Animaciones profesionales
- **Lenis** - Smooth scroll
- **SplitType** - Animaciones de texto
- **Vanilla JS** - JavaScript puro

## 🎨 Características de Diseño

- **Variables CSS** para fácil personalización de colores
- **Tipografía editorial** con Google Fonts
- **Grid layout** responsive
- **Animaciones fluidas** con cubic-bezier
- **Efectos hover** sutiles y elegantes
- **Imágenes optimizadas** de Unsplash

## 📱 Páginas

1. **Inicio** (`/`) - Landing page con hero, filosofía, proyectos destacados y servicios
2. **Portfolio** (`/views/portfolio.html`) - Galería completa de 8 proyectos
3. **Equipo** (`/views/equipo.html`) - Presentación del equipo de 6 personas

## 🎯 Secciones

### Página Principal
- ✅ Hero con imagen animada
- ✅ Sección de Filosofía
- ✅ Proyectos Selectos (4 proyectos)
- ✅ Lista de Servicios
- ✅ Footer con contacto

### Portfolio
- ✅ 8 proyectos detallados
- ✅ Filtros por categoría
- ✅ Layout alternante
- ✅ Tags y descripciones

### Equipo
- ✅ 6 miembros del equipo
- ✅ Biografías interactivas
- ✅ Enlaces sociales
- ✅ Estadísticas de la agencia

## 🎨 Paleta de Colores

```css
--bg-color: #0a0a0a         /* Fondo principal */
--text-color: #f0f0f0       /* Texto principal */
--accent-color: #ffffff     /* Acentos */
--subtle-color: #888888     /* Texto secundario */
--border-color: rgba(255, 255, 255, 0.1)
```

## 🔧 Personalización

### Cambiar Colores

Edita las variables CSS en `css/style.css`:

```css
:root {
  --bg-color: #tuColor;
  --text-color: #tuColor;
  /* ... */
}
```

### Añadir Nuevas Páginas

1. Crea el archivo HTML en `/views/`
2. Añádelo a `vite.config.js` en la sección `input`
3. Crea el CSS correspondiente en `/css/` si es necesario

## 🐛 Solución de Problemas

### Las animaciones no funcionan
Asegúrate de haber ejecutado `npm install` y `npm run build`

### Rutas rotas en producción
Verifica que `base` en `vite.config.js` sea correcto para tu hosting

### Node modules error
Ejecuta `npm install` nuevamente

## 📄 Licencia

Este proyecto es de uso libre para portafolios y proyectos personales.

## 👤 Autor

**AURA Agency**
- Email: hola@aura.agency
- Ubicación: Madrid, España

---

Hecho con ❤️ y mucho ☕
