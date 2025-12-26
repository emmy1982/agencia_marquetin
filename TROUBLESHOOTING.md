# 🔧 Solución de Problemas - GitHub Pages

## ✅ Checklist de Verificación

### 1. Verificar que GitHub Actions se está ejecutando

1. Ve a tu repositorio en GitHub: https://github.com/emmy1982/agencia_marquetin
2. Click en la pestaña **"Actions"** (arriba)
3. Deberías ver un workflow llamado **"Deploy to GitHub Pages"**
4. El workflow debe tener un ✅ verde (exitoso) o 🔴 rojo (error)

**Si ves 🔴 (error):**
- Click en el workflow fallido
- Lee el error en los logs
- Los errores comunes son:
  - `npm install` falló → Verifica que `package.json` esté en el repo
  - `npm run build` falló → Verifica que Vite esté instalado
  - Permisos → Verifica la configuración de Pages (paso 2)

### 2. Configurar GitHub Pages correctamente

1. Ve a **Settings** → **Pages**
2. En **"Source"**, debe estar seleccionado **"GitHub Actions"**
3. **NO** debe estar en "Deploy from a branch"

**Si está en "Deploy from a branch":**
- Cambia a **"GitHub Actions"**
- Guarda los cambios
- Espera a que se ejecute el workflow nuevamente

### 3. Verificar la URL de tu sitio

Tu sitio debería estar en:
```
https://emmy1982.github.io/agencia_marquetin/
```

**Si ves un 404:**
- Espera 2-3 minutos después del deploy
- Refresca la página con Ctrl + F5
- Verifica que el workflow haya terminado exitosamente

### 4. Verificar el archivo vite.config.js

El archivo debe tener:
```javascript
base: '/agencia_marquetin/',
```

**NO debe ser:**
- `base: './',` ❌
- `base: '/',` ❌

### 5. Verificar que los archivos estén en el repositorio

Los archivos necesarios son:
- ✅ `.github/workflows/deploy.yml`
- ✅ `vite.config.js`
- ✅ `package.json`
- ✅ `index.html`
- ✅ `js/main.js`
- ✅ `css/style.css`

## 🐛 Problemas Comunes

### Problema: "El sitio carga pero sin estilos ni JavaScript"

**Causa:** Base path incorrecto en `vite.config.js`

**Solución:**
1. Abre `vite.config.js`
2. Cambia `base: './',` a `base: '/agencia_marquetin/',`
3. Haz commit y push:
```bash
git add .
git commit -m "Fix base path"
git push
```

### Problema: "GitHub Actions no se ejecuta"

**Causa:** El archivo workflow no está en la ubicación correcta

**Solución:**
1. Verifica que exista: `.github/workflows/deploy.yml`
2. Si no existe, créalo con el contenido correcto
3. Haz commit y push

### Problema: "npm install falla en GitHub Actions"

**Causa:** `package.json` o `package-lock.json` no están en el repo

**Solución:**
1. Verifica que ambos archivos estén en el repositorio
2. Si no están:
```bash
git add package.json package-lock.json
git commit -m "Add package files"
git push
```

### Problema: "Las animaciones no funcionan"

**Causa:** El build no se hizo correctamente o las rutas son incorrectas

**Solución:**
1. Verifica que el workflow terminó exitosamente
2. Verifica la consola del navegador (F12) para ver errores
3. Los errores comunes son:
   - `404` en archivos JS → Base path incorrecto
   - `Module not found` → Build no se hizo correctamente

### Problema: "404 en las páginas de equipo y portfolio"

**Causa:** Las rutas no están configuradas correctamente

**Solución:**
1. En GitHub Pages, las rutas deben ser:
   - `https://emmy1982.github.io/agencia_marquetin/views/equipo.html`
   - `https://emmy1982.github.io/agencia_marquetin/views/portfolio.html`
2. Verifica que los enlaces en `index.html` sean relativos:
   - `./views/equipo.html` ✅
   - `/views/equipo.html` ❌

## 🔍 Cómo Ver los Logs de GitHub Actions

1. Ve a tu repositorio
2. Click en **"Actions"**
3. Click en el workflow más reciente
4. Click en **"build"** o **"deploy"**
5. Expande cada paso para ver los detalles

## 📞 Comandos Útiles para Debugging

### Probar el build localmente
```bash
npm install
npm run build
npm run preview
```

Si funciona localmente en `http://localhost:4173`, debería funcionar en GitHub Pages.

### Ver el estado de Git
```bash
git status
git log --oneline -5
```

### Forzar un nuevo deploy
```bash
git commit --allow-empty -m "Trigger deploy"
git push
```

## ✅ Lista de Verificación Final

Antes de pedir ayuda, verifica:

- [ ] GitHub Actions está habilitado en tu repo
- [ ] El workflow se ejecutó exitosamente (✅ verde)
- [ ] GitHub Pages está configurado en "GitHub Actions"
- [ ] `vite.config.js` tiene `base: '/agencia_marquetin/',`
- [ ] Esperaste 2-3 minutos después del deploy
- [ ] Refrescaste la página con Ctrl + F5
- [ ] Revisaste la consola del navegador (F12) para errores

## 🎯 URL de tu Sitio

Tu sitio web está en:
```
https://emmy1982.github.io/agencia_marquetin/
```

Si todo está configurado correctamente, deberías ver tu sitio funcionando completamente en esta URL.

---

## 💡 Tip: Verificación Rápida

Abre la consola del navegador (F12) y busca estos errores:

- ❌ `404 Not Found` → Rutas incorrectas
- ❌ `Failed to load module` → Build no se hizo
- ❌ `CORS error` → Problema de configuración del servidor
- ✅ Sin errores → ¡Todo funciona! 🎉

