# 🚀 Guía de Despliegue - AURA Agency

## 📋 Requisitos Previos

- Node.js instalado (versión 18 o superior)
- Git instalado
- Cuenta de GitHub

## 🌐 Opción 1: Despliegue en GitHub Pages (Recomendado)

### Paso 1: Preparar el repositorio

1. **Inicializar Git** (si no lo has hecho):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Crear repositorio en GitHub**:
   - Ve a https://github.com/new
   - Crea un nuevo repositorio (ejemplo: `aura-agency`)
   - NO inicialices con README

3. **Conectar y subir**:
```bash
git remote add origin https://github.com/TU-USUARIO/aura-agency.git
git branch -M main
git push -u origin main
```

### Paso 2: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. ¡Listo! El archivo `.github/workflows/deploy.yml` se encargará del resto

### Paso 3: Actualizar cambios

Cada vez que hagas cambios:
```bash
git add .
git commit -m "Descripción de cambios"
git push
```

La web se actualizará automáticamente en unos minutos.

---

## 🌟 Opción 2: Despliegue en Netlify (Alternativa)

### Método A: Desde GitHub

1. **Sube tu código a GitHub** (pasos anteriores)
2. Ve a https://app.netlify.com/
3. Click en **"Add new site"** → **"Import an existing project"**
4. Selecciona tu repositorio
5. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click en **"Deploy"**

### Método B: Deploy Manual (Drag & Drop)

1. **Construir el proyecto localmente**:
```bash
npm install
npm run build
```

2. Ve a https://app.netlify.com/drop
3. Arrastra la carpeta `dist` a la página
4. ¡Listo!

---

## 🔧 Comandos Útiles

### Desarrollo Local
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

### Solución de Problemas

#### ❌ Las animaciones no funcionan
- **Causa**: No se hizo el build con Vite
- **Solución**: Asegúrate de hacer `npm run build` y subir la carpeta `dist`

#### ❌ Error "Cannot find module"
- **Causa**: No se instalaron las dependencias
- **Solución**: Ejecuta `npm install`

#### ❌ Las rutas no funcionan en GitHub Pages
- **Causa**: Rutas relativas incorrectas
- **Solución**: El proyecto ya está configurado correctamente con rutas relativas

---

## 📦 Estructura del Proyecto

```
agencia_marquetin/
├── css/                  # Archivos CSS
│   ├── style.css         # Estilos globales
│   ├── equipo.css        # Estilos página equipo
│   └── portfolio.css     # Estilos página portfolio
├── js/                   # JavaScript
│   └── main.js           # Funcionalidad principal
├── views/                # Páginas adicionales
│   ├── equipo.html       # Página equipo
│   └── portfolio.html    # Página portfolio
├── index.html            # Página principal
├── package.json          # Dependencias npm
├── vite.config.js        # Configuración Vite (si existe)
├── netlify.toml          # Configuración Netlify
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions para deploy
└── .gitignore            # Archivos a ignorar en Git
```

---

## 🎯 URLs de tu Web

Después del despliegue, tu web estará disponible en:

- **GitHub Pages**: `https://TU-USUARIO.github.io/NOMBRE-REPO/`
- **Netlify**: `https://NOMBRE-ALEATORIO.netlify.app/` (personalizable)

---

## 💡 Recomendaciones

1. ✅ Usa **GitHub Pages con Actions** para deploy automático
2. ✅ Haz commits frecuentes con mensajes descriptivos
3. ✅ Prueba localmente con `npm run build` y `npm run preview` antes de subir
4. ✅ No subas la carpeta `node_modules` a Git (ya está en .gitignore)
5. ✅ Mantén actualizado el archivo README.md con información del proyecto

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que Node.js esté instalado: `node --version`
2. Verifica que las dependencias estén instaladas: `npm install`
3. Revisa los logs de GitHub Actions en la pestaña "Actions" de tu repositorio
4. Asegúrate de que la configuración de GitHub Pages esté correcta

---

¡Tu agencia AURA está lista para brillar en la web! ✨


